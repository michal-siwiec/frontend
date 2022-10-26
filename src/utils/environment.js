/* eslint-disable prefer-destructuring */

const STORAGE_URL = process.env.STORAGE_URL;
const API_GRAPHQL_ROOT = process.env.API_GRAPHQL_ROOT;
const API_ROOT = process.env.API_ROOT;
const API_WS_ROOT = process.env.API_WS_ROOT;

const isProductionEnv = () => process.env.NODE_ENV === 'production';

export {
  STORAGE_URL,
  API_GRAPHQL_ROOT,
  API_ROOT,
  API_WS_ROOT,
  isProductionEnv
};
