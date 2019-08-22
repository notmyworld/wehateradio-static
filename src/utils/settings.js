import path from 'path';

export const NETLIFY_PATH = path.resolve(__dirname, '..', '..', 'netlify');
export const IS_PRODUCTION = process.env.RELEASE_STAGE === 'production';
export const DEFAULT_PAGINATION_PAGE_SIZE = 10;
export const SITE_ROOT = IS_PRODUCTION ? 'http://wehateradio.net' : '';
