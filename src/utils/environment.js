/* eslint-disable prefer-destructuring */

import { isEmpty } from 'lodash';

const API_URL = process.env.API_URL;
const AWS_REGION = process.env.AWS_REGION;
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const AWS_BUCKET = process.env.AWS_BUCKET;
const BASIC_AUTH_USER = process.env.BASIC_AUTH_USER;
const BASIC_AUTH_PASSWORD = process.env.BASIC_AUTH_PASSWORD;
const NODE_ENV = process.env.NODE_ENV || 'development';

const requiredVars = [
  { name: 'API_URL', value: API_URL },
  { name: 'AWS_REGION', value: AWS_REGION },
  { name: 'AWS_ACCESS_KEY_ID', value: AWS_ACCESS_KEY_ID },
  { name: 'AWS_SECRET_ACCESS_KEY', value: AWS_SECRET_ACCESS_KEY },
  { name: 'AWS_BUCKET', value: AWS_BUCKET },
  { name: 'NODE_ENV', value: NODE_ENV }
];

requiredVars.forEach(({ name, value }) => {
  if (isEmpty(value)) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
});

const isProductionEnv = NODE_ENV === 'production';

export {
  API_URL,
  AWS_REGION,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_BUCKET,
  BASIC_AUTH_USER,
  BASIC_AUTH_PASSWORD,
  isProductionEnv
};
