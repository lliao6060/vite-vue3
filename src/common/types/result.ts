export enum Result {
  OK = 0,

  // 無法歸類的ERROR
  UNKNOWN = -1,
  // 查無資料
  NOT_FOUND = -2,
  // 超時
  TIMEOUT = -3,
  // DB 操作失敗
  DB_FAILED = -4,
  // 使用過期的session
  INVALID_SESSION = -5,
  // 資料不正確(request body資料不符server所需)
  INVALID_DATA = -6,
  // 不合法的請求(server 驗證後發現的非法請求)
  INVALID_REQUEST = -7,
  // 版本不正確
  INVALID_VERSION = -8,
  // 維護中
  MAINTENANCE = -9,
  // 新增資料重複
  DB_DUPLICATED = -10,
  // 權限不足
  PERMISSION_DENIED = -11,

  // 共用Result上限，特化Result請從101開始列舉
  MAX_COMMON_RESULT = -100,
}

export interface Response {
  [x: string]: any
  // [x: string]: number
  res: Result
  data?: any
}
