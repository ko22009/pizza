import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

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
      return await request
    } catch (e) {

      if (e.response) {
        console.log(e.response)
      }

      throw e
    }
  }
}

export default new Requester
