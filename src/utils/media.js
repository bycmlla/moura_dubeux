const MEDIA_BASE_URL = process.env.REACT_APP_MEDIA_BASE_URL
  || 'https://raw.githubusercontent.com/bycmlla/moura_dubeux/main/src/assets/';

export function getMediaUrl(assetPath) {
  return `${MEDIA_BASE_URL}${assetPath.split('/').map(encodeURIComponent).join('/')}`;
}
