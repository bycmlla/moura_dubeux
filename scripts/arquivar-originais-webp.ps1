$ErrorActionPreference = 'Stop'
$workspaceRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$workspacePrefix = $workspaceRoot.TrimEnd('\') + '\'
$manifestPath = Join-Path $workspaceRoot 'relatorios\conversao-webp-2026-10-23.json'
$manifest = Get-Content -LiteralPath $manifestPath -Encoding UTF8 -Raw | ConvertFrom-Json
if ($manifest.workspace -ne $workspaceRoot) { throw 'O manifesto pertence a outro projeto.' }
if ($manifest.status -notin @('references-updated', 'originals-backed-up')) { throw 'Atualize as referencias antes de arquivar os originais.' }

$expectedBackupRoot = [System.IO.Path]::GetFullPath((Join-Path (Split-Path -Parent $workspaceRoot) 'dione-md-originais-webp-2026-10-23'))
if ([System.IO.Path]::GetFullPath($manifest.backupRoot) -ne $expectedBackupRoot) { throw 'Destino de backup inesperado.' }
$originalsRoot = Join-Path $expectedBackupRoot 'originais'
$backupPrefix = $originalsRoot.TrimEnd('\') + '\'
$jobs = @()

# Conferir todos os caminhos e conteudos antes de mover o primeiro arquivo.
foreach ($entry in ($manifest.files | Where-Object { $_.status -eq 'converted' })) {
    $sourcePath = [System.IO.Path]::GetFullPath((Join-Path $workspaceRoot $entry.source))
    $webpPath = [System.IO.Path]::GetFullPath((Join-Path $workspaceRoot $entry.target))
    $backupPath = [System.IO.Path]::GetFullPath((Join-Path $originalsRoot $entry.source))
    if (-not $sourcePath.StartsWith($workspacePrefix, [System.StringComparison]::OrdinalIgnoreCase)) { throw "Original fora do projeto: $sourcePath" }
    if (-not $webpPath.StartsWith($workspacePrefix, [System.StringComparison]::OrdinalIgnoreCase)) { throw "WebP fora do projeto: $webpPath" }
    if (-not $backupPath.StartsWith($backupPrefix, [System.StringComparison]::OrdinalIgnoreCase)) { throw "Backup fora do destino: $backupPath" }
    if ([System.IO.Path]::GetExtension($webpPath) -ne '.webp') { throw "Saida nao e WebP: $webpPath" }
    if ((Get-FileHash -LiteralPath $webpPath -Algorithm SHA256).Hash.ToLowerInvariant() -ne $entry.webpSha256) { throw "WebP mudou: $webpPath" }
    $alreadyMoved = -not (Test-Path -LiteralPath $sourcePath)
    $currentOriginal = if ($alreadyMoved) { $backupPath } else { $sourcePath }
    $item = Get-Item -LiteralPath $currentOriginal -Force
    if ($item.PSIsContainer -or ($item.Attributes -band [System.IO.FileAttributes]::ReparsePoint)) { throw "Original nao e arquivo regular: $currentOriginal" }
    if ((Get-FileHash -LiteralPath $currentOriginal -Algorithm SHA256).Hash.ToLowerInvariant() -ne $entry.originalSha256) { throw "Original mudou: $currentOriginal" }
    if (-not $alreadyMoved -and (Test-Path -LiteralPath $backupPath)) { throw "Backup ja existe: $backupPath" }
    $jobs += [PSCustomObject]@{Source=$sourcePath; Backup=$backupPath; Bytes=[long]$entry.originalBytes; AlreadyMoved=$alreadyMoved}
}

foreach ($job in $jobs) {
    if ($job.AlreadyMoved) { continue }
    [System.IO.Directory]::CreateDirectory((Split-Path -Parent $job.Backup)) | Out-Null
    Move-Item -LiteralPath $job.Source -Destination $job.Backup
}

$manifest.status = 'originals-backed-up'
$manifest | Add-Member -NotePropertyName backedUpFiles -NotePropertyValue $jobs.Count -Force
$manifest | Add-Member -NotePropertyName backedUpBytes -NotePropertyValue ([long](($jobs | Measure-Object -Property Bytes -Sum).Sum)) -Force
[System.IO.File]::WriteAllText($manifestPath, ($manifest | ConvertTo-Json -Depth 20) + [Environment]::NewLine, (New-Object System.Text.UTF8Encoding($false)))
[PSCustomObject]@{BackedUpFiles=$jobs.Count; Bytes=$manifest.backedUpBytes; Backup=$expectedBackupRoot} | ConvertTo-Json
