import { HEADERS } from '../constants/API';
import { isString } from 'lodash';

const requestDemandsBody = method => {
  const httpMethodsWithBody = ['POST', 'PATCH', 'PUT'];

  return httpMethodsWithBody.includes(method);
}

export default ({ method = 'GET', headers = HEADERS, data = {}, url } = {}) => {
  if (!isString(url)) throw new Error('URL has to be defined!')

  const requestProperties = {
    method,
    headers,
    ...(requestDemandsBody(method) && { body: JSON.stringify(data) })
  }

  return fetch(url, requestProperties)
         .then(resp => resp.json())
  //! catch
}
