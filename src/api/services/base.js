import axios from "axios";
import apiError, { unknowError } from "~/api/errors";
import { AuthInfoProvider } from '~/app/authInfoProvider';

export const request = (url, method, params) => {
  console.log(url + " params ==>" + JSON.stringify(params));
  let header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  auth = AuthInfoProvider.getAuth();
  if (auth != null) {
    header = {
      ...header,
      Authorization: `Bearer ${auth.authentication_token}`,
    }
  }

  const config = {
    headers: header,
    method: method,
    url: url
  }

  if (method.toLowerCase() == "get") {
    config.params = params
  } else {
    config.data = params ? params : undefined
  }

  console.log("Config: " + JSON.stringify(config))
  return new Promise((resolve, reject) => {
    try {
      axios(config).then(res => {
        console.log("Result of REQUEST:" + JSON.stringify(res))
        resolve({ data: res.data });
      }).catch((err) => {
        console.log('Error: ', err)
        if (err.response) {
          const { data } = err.response
          if (data && apiError(data.code)) {
            reject({
              error: {
                code: `${data.code}`,
                message: apiError(data.code) || data.msg
              }
            });
            return
          }
        }
        reject({ error: unknowError });
      })
    } catch (error) {
      reject(error);
    }
  });
}