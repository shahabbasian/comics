import { useRuntimeConfig } from '#app'
import md5 from 'crypto-js/md5'

/**
 * @param { string } url url of you want to request without first of string ( / )
 * @param { object } params send params. EX: {offset: 0, limit: 8}
 *
 * @example <caption>Example usage.</caption>
 * api(characters(), { limit: 8 })
 * // return: response of api
 * // error: check console return a error log
 */

export const useApiRequest = async (url: string, params: object = {}) => {
  const config = useRuntimeConfig()

  const timestamp = Date.now();
  const hash = md5(`${timestamp}${config.public.apiSecret}${config.public.apiKey}`).toString()

  const res = await $fetch(url, {
    method: 'GET',
    baseURL: config.public.apiBase,
    query: {
      ts: timestamp,
      apikey: config.public.apiKey,
      hash,
      ...params
    }
  })

  return res
}
