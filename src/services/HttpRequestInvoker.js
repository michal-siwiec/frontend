import { HEADERS } from '../constants/API';
import { isString } from 'lodash';

const requestDemandsBody = method => {
  const httpMethodsWithBody = ['POST', 'PATCH', 'PUT'];

  return httpMethodsWithBody.includes(method);
}

const invokeRequest = async (url, requestProperties) => {
  try {
    const resp = await fetch(url, requestProperties)
    if(!resp.ok) throw new Error(`HTTP error: ${resp.statusText} HTTP status: ${resp.status}`)

    return resp.json();
  } catch (err) {
    console.error(err)
  }
}

export default ({ method = 'GET', headers = HEADERS, data = {}, url } = {}) => {
  if (!isString(url)) throw new Error('URL has to be defined!')

  const requestProperties = {
    method,
    headers,
    ...(requestDemandsBody(method) && { body: JSON.stringify(data) })
  }

  return invokeRequest(url, requestProperties)
}
