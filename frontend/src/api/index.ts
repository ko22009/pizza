import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import store from '@/store'

export class Api {

  protected instance = axios.create()
  protected baseUrl = process.env.VUE_APP_BASE_URL ?? '/'
  protected token = ''

  constructor() {
    this.instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
  }

  setHeader(token: string) {
    this.token = token
    localStorage.setItem('token', token)
    this.instance.defaults.headers.common['Authorization'] = 'Bearer ' + token
  }

  async handleRequest<T = any>(request: Promise<AxiosResponse<T>>) {
    try {
      return await request
    } catch (e) {

      if (e.response) {
        if (e.response.status === 401)
          store.commit('auth/logout')
      }

      throw e
    }
  }

  async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return await this.handleRequest(this.instance.post<T>(`${this.baseUrl}${url}`, data, config))
  }

  async get<T = any>(url: string, config?: AxiosRequestConfig) {
    return await this.handleRequest(this.instance.get<T>(`${this.baseUrl}${url}`, config))
  }

  async delete<T = any>(url: string, config?: AxiosRequestConfig) {
    return await this.handleRequest(this.instance.delete<T>(`${this.baseUrl}${url}`, config))
  }

  async patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return await this.handleRequest(this.instance.patch<T>(`${this.baseUrl}${url}`, data, config))
  }

}

const api = new Api
export default api
