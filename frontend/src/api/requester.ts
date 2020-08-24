import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import store from '@/store'

export interface LaravelResponseInterface {
  response: ResponseData
}

export type ResponseData = {
  data: {
    errors?: object
    message?: string
    token?: string
    any?: any
  }
}

export function getValidationErrors(e: LaravelResponseInterface): object {
  const {errors} = e.response.data
  if (!errors) return {}
  return errors
}

export let instance = axios.create()

export class Requester {
  async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return await this.handleRequest(instance.post<T>(url, data, config))
  }

  async get<T = any>(url: string, config?: AxiosRequestConfig) {
    return await this.handleRequest(instance.get<T>(url, config))
  }

  async delete<T = any>(url: string, config?: AxiosRequestConfig) {
    return await this.handleRequest(instance.delete<T>(url, config))
  }

  async patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return await this.handleRequest(instance.patch<T>(url, data, config))
  }

  async handleRequest<T = any>(request: Promise<AxiosResponse<T>>) {
    try {
      await store.dispatch('session/checkToken')
      return await request
    } catch (e) {

      if (e.response) {
        //if (e.response.status === 401)
          //store.commit('session/logout')
        //else if (e.response.status === 404) {
          //EventBus.$emit('page-not-found', '404')
        //}
      }

      throw e
    }
  }
}

export default new Requester
