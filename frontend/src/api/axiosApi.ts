import axios from 'axios'
import { BaseApi } from '@/api/baseApi'
import { IApi } from '@/api'

export class AxiosApi extends BaseApi implements IApi {
  constructor() {
    super()
  }
  async fetch(url: string): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}${url}`)
    return data
  }
}
