import axios, {AxiosRequestConfig} from 'axios'
import store from '@/store'

export class Api {

  protected instance = axios.create()
  protected baseUrl = process.env.VUE_APP_BASE_URL ?? '/'
  protected token = localStorage.getItem('token')

  constructor() {
    this.setToken(localStorage.getItem('token'))
    this.instance.interceptors.response.use((response) => {
      if (response.status === 401) {
        store.dispatch('logout')
      }
      return response;
    }, (error) => {
      if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error.message);
    });
  }

  setToken(token: string | null) {
    if (!token) return
    localStorage.setItem('token', token)
    this.instance.defaults.headers.common['Authorization'] = token
  }

  removeToken() {
    delete this.instance.defaults.headers.common['Authorization']
    localStorage.removeItem('token')
  }

  async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return await this.instance.post<T>(`${this.baseUrl}${url}`, data, config)
  }

  async get<T = any>(url: string, config?: AxiosRequestConfig) {
    return await this.instance.get<T>(`${this.baseUrl}${url}`, config)
  }

  async delete<T = any>(url: string, config?: AxiosRequestConfig) {
    return await this.instance.delete<T>(`${this.baseUrl}${url}`, config)
  }

  async patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return await this.instance.patch<T>(`${this.baseUrl}${url}`, data, config)
  }

}

export default new Api
