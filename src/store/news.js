import { defineStore } from 'pinia'

// 這邊 defineStore 會自動動態註冊模組，回傳值為 hook function
export const useNewsStore = defineStore('News', {
  state: () => {
    return {
      nowNews: {},
    };
  },

  actions: {
    updateNews(newsObj) {
      this.nowNews = newsObj
    },
  },
})