module.exports = {
  // type 類型（定義之後，可通過上下鍵選擇）
  types: [
    { value: 'feat', name: 'feat:     新增功能' },
    { value: 'fix', name: 'fix:      修覆 bug' },
    { value: 'docs', name: 'docs:     文檔變更' },
    {
      value: 'style',
      name: 'style:    代碼格式（不影響功能，例如空格、分號等格式修正）'
    },
    {
      value: 'refactor',
      name: 'refactor: 代碼重構（不包括 bug 修覆、功能新增）'
    },
    { value: 'perf', name: 'perf:     性能優化' },
    { value: 'chore', name: 'chore:     其他修改, 比如構建流程, 依賴管理、版本好修正.' }
  ],

  // scope 類型（定義之後，可通過上下鍵選擇）
  scopes: [
    ['components', '組件相關'],
    ['hooks', 'hook 相關'],
    ['utils', 'utils 相關'],
    ['element-ui', '對 element-ui 的調整'],
    ['styles', '樣式相關'],
    ['deps', '項目依賴'],
    ['auth', '對 auth 修改'],
    ['other', '其他修改'],
    // 如果選擇 custom，後面會讓你再輸入一個自定義的 scope。也可以不設置此項，把後面的 allowCustomScopes 設置為 true
    ['custom', '以上都不是？我要自定義']
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    }
  }),

  // 是否允許自定義填寫 scope，在 scope 選擇的時候，會有 empty 和 custom 可以選擇。
  // allowCustomScopes: true,

  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberPrefix: 'TICKET-',
  // ticketNumberRegExp: '\\d{1,5}',

  // 針對每一個 type 去定義對應的 scopes，例如 fix
  /*
    scopeOverrides: {
      fix: [
        { name: 'merge' },
        { name: 'style' },
        { name: 'e2eTest' },
        { name: 'unitTest' }
      ]
    },
    */

  // 交互提示信息
  messages: {
    type: '確保本次提交遵循：盛陽前端代碼規範！\n選擇你要提交的類型：',
    scope: '\n選擇一個 scope（可選）：',
    // 選擇 scope: custom 時會出下面的提示
    customScope: '請輸入自定義的 scope：',
    subject: '填寫簡短精煉的變更描述：\n',
    body: '填寫更加詳細的變更描述（可選）。使用 "|" 換行：\n',
    breaking: '列舉非兼容性重大的變更（可選）：\n',
    footer: '列舉出所有變更的 ISSUES CLOSED（可選）。 例如: #31, #34：\n',
    confirmCommit: '確認提交？'
  },

  // 設置只有 type 選擇了 feat 或 fix，才詢問 breaking message
  allowBreakingChanges: ['feat', 'fix'],

  // 跳過要詢問的步驟
  skipQuestions: ['scope', 'body', 'breaking', 'footer'],

  subjectLimit: 100, // subject 限制長度
  breaklineChar: '|' // 換行符，支持 body 和 footer
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true,
}