import requester from "@/api/requester";
import { BaseApi } from '@/api/baseApi'
import { IApi } from '@/api'

export class AxiosApi extends BaseApi implements IApi {
  async fetch (url: string): Promise<any> {
    const { data } = await requester.get(`${this.baseUrl}${url}`)
    return data
  }
}
