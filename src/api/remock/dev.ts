import axios from 'axios'
import type { Response } from '../../common/types'
import useAPIs from '../../hooks/useApi'
const { useMockApi, apiFail } = useAPIs()

function api(url: string, method: string, data: any) {
  const keyName = method === 'get' ? 'params' : 'data';
  return (axios as any)[method](url, {
    [keyName]: data,
  }).then((res: any) => res.data);
}

export default {
  //test
  async getTestData(data?: any[]): Promise<Response & any> {
    const res = await useMockApi(api('/api/test-data', 'get', data))
    if(!res) {
      apiFail('api not find')
    } else {
      return res
    }
  },
  async getTestData2(data?: any[]): Promise<Response & any> {
    const res = await useMockApi(api('/api/test-data2', 'get', data))
    if(!res) {
      apiFail('api not find')
    } else {
      return res
    }
  },
}
