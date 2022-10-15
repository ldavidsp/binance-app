import { http, signature, timestamp } from "../config/config";

/**
 * Get Losers Information.
 *
 * @type {Promise<AxiosResponse<any>>}
 */
export const getLosersInformation = http.get('/ticker/24hr').then((response: any) => {
  if (response.status === 200) {
    const data = response.data;
    const cryptos: any[] = [];
    if (data.length > 10) {
      data.forEach((value: any) => {
        if (value.priceChangePercent < 0 && cryptos.length < 10) {
          cryptos[cryptos.length] = value
        }
      });

      return cryptos;
    }
    return data;
  }
}).catch((reason: any) => {
  return reason;
});

/**
 * Get Account Information.
 *
 * @type {Promise<AxiosResponse<any>>}
 */
export const getAccountInformation = http.get(`/account?${timestamp}&signature=${signature}`).then((response: any) => {
  return response.data;
}).catch((reason: any) => {
  return reason;
});

/**
 * Get Loser Limit Information.
 *
 * @type {Promise<AxiosResponse<any>>}
 */
export const getLoserLimitInformation = http.get('/trades?symbol=BNBUSDT&limit=100').then((response: any) => {
  return response.data;
}).catch((reason: any) => {
  return reason;
});

export default {getLosersInformation, getAccountInformation, getLoserLimitInformation};
