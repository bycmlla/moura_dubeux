const UF_TO_STATE = {
  AC: 'Acre',
  AL: 'Alagoas',
  AP: 'Amapá',
  AM: 'Amazonas',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Distrito Federal',
  ES: 'Espírito Santo',
  GO: 'Goiás',
  MA: 'Maranhão',
  MT: 'Mato Grosso',
  MS: 'Mato Grosso do Sul',
  MG: 'Minas Gerais',
  PA: 'Pará',
  PB: 'Paraíba',
  PR: 'Paraná',
  PE: 'Pernambuco',
  PI: 'Piauí',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RS: 'Rio Grande do Sul',
  RO: 'Rondônia',
  RR: 'Roraima',
  SC: 'Santa Catarina',
  SP: 'São Paulo',
  SE: 'Sergipe',
  TO: 'Tocantins',
};

export function getStateNameFromUf(uf) {
  if (!uf) return null;

  return UF_TO_STATE[String(uf).trim().toUpperCase()] || null;
}

export function getStateNameFromLocation(location) {
  if (!location) return null;

  const match = String(location).match(/(?:,|\/|-)\s*([A-Za-z]{2})\s*$/);
  return getStateNameFromUf(match?.[1]);
}

export function getUfFromLocation(location) {
  if (!location) return null;

  const match = String(location).match(/(?:,|\/|-)\s*([A-Za-z]{2})\s*$/);
  const uf = String(match?.[1] || '').trim().toUpperCase();
  return UF_TO_STATE[uf] ? uf : null;
}

export { UF_TO_STATE };
