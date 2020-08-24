import { IApi } from '@/api'

export class BaseApi implements IApi {
  protected baseUrl = process.env.VUE_APP_BASE_URL ?? '/'
  async fetch (url: string): Promise<any> {}
}
