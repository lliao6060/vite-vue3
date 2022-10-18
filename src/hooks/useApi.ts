import { Response } from '../common/types'

export default function useAPIs() {
  interface ApiError {
    code: number;
    error: string;
  }

  const isApiError = (x: any): x is ApiError => {
    return typeof x.code === 'number';
  };


  //mock api用
  async function useMockApi(api: any): Promise<Response & any> {
    try {
      const res = await api
      if (res) {
        window.$message({
          message: 'api get success',
          type: 'success'
        })
        return res;
      } else {
        throw new Error(`errorType.${res.res}`)
      }
    } catch (err: unknown) {
      if (isApiError(err)) {
        apiFail(`${err.code} ${err.error}`)
      }
    }
  };

  async function useApi(api: any): Promise<Response & any> {
    try {
      const res = await api
      if (res.res === 0) {
        return res;
      } else {
        throw new Error(`errorType.${res.res}`)
      }
    } catch (err: unknown) {
      if (isApiError(err)) {
        apiFail(`${err.code} ${err.error}`)
      }
    }
  };

  //錯誤測試用
  function testErrorApi(): Promise<Response & any> {
    return new Promise((resolve, reject) => {
      reject({ code: 123, error: "Error!" });
    });
  }

  async function testApiFail() {
    try {
      return await testErrorApi();
    } catch (error: unknown) {
      if (isApiError(error)) {
        apiFail(`${error.code} ${error.error}`)
      }
    }
  }

  function apiFail(msg: string) {
    window.$message({
      message: msg,
      type: 'error'
    })
  }


  return {
    useMockApi,
    useApi,
    testApiFail,
    apiFail
  }
}
