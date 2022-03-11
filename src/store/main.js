import { defineStore } from 'pinia'

// 這邊 defineStore 會自動動態註冊模組，回傳值為 hook function
export const useDemoStore = defineStore('Main', {
  state: () => {
    return {
      count: 100,
      quantity: 10
    };
  },

  getters: {
    countTotal: (state) => state.count * state.quantity
  },

  actions: {
    countChange: (val) => {
      console.log(val, 'action中的參數');
      this.count ++
      this.quantity ++
      //or
      // this.$patch({})
      // this.$patch(state => {})
    }
  },
})