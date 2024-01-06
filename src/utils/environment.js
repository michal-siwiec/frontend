/* eslint-disable prefer-destructuring */

const API_GRAPHQL_ROOT = process.env.API_GRAPHQL_ROOT;
const API_ROOT = process.env.API_ROOT;
const API_WS_ROOT = process.env.API_WS_ROOT;

const AWS_REGION = process.env.AWS_REGION;
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;

const isProductionEnv = process.env.NODE_ENV === 'production';

export {
  API_GRAPHQL_ROOT,
  API_ROOT,
  API_WS_ROOT,
  AWS_REGION,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  isProductionEnv
};
