import { defineStore } from 'pinia'

// 這邊 defineStore 會自動動態註冊模組，回傳值為 hook function
export const useAppStore = defineStore('Main', {
  state: () => {
    return {
      isProd: import.meta.env.PROD,
      count: 100,
      quantity: 10,

      //timer
      stopCounting: false,
      endDate: new Date(new Date().getFullYear() + 0, 11, 31) //年月日(月份是0~11)
    };
  },

  getters: {
    countTotal: (state) => state.count * state.quantity,

    //timer
    stopCount: (state) => {
      const now = new Date().getTime()
      const end = state.endDate.getTime()
      return end > now ? state.stopCounting = false : state.stopCounting = true
    }
  },

  actions: {
    countChange: (val) => {
      console.log(val, 'action中的參數');
      this.count ++
      this.quantity ++
      //or
      // this.$patch({})
      // this.$patch(state => {})
    },

    //timer
    updateCounting(bool) {
      this.stopCounting = bool;
    },
  },
})