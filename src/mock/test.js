import { mock } from 'remockjs';

export default {
  testData: mock({
    'data|15-20': [
      {
        'sex|1': ['male', 'female'],
        name: '@name("tw")',
        age: '@natural(18, 65)',
        birthday: '@date("yyyy-MM-dd")',
        address: '@zip() + " " + @city("tw", true) + @string("tw", 5, 10) + @natural(1, 99) + "號" + @natural(1, 50) + "樓"',
      }
    ]
  }),

  testData2: mock({
    'data|15-20': [
      {
        id: '@natural(1000, 9999)',
        'sex|1': ['male', 'female'],
        name: '@word("tw", 3, 5)',
        age: '@natural(18, 65)',
        birthday: '@date("yyyy-MM-dd")',
        address: '@zip() + " " + @city("tw", true) + @string("tw", 5, 10) + @natural(1, 99) + "號" + @natural(1, 50) + "樓"',
      }
    ]
  }),
}
