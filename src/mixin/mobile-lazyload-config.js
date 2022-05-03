import { reactive } from 'vue'
import { getImageUrl } from '@/utils'

export const mobilelazyOptions = reactive({
  src: getImageUrl('mobile/visual_bg_p.jpg'),
  loading: getImageUrl('loading_1920X765.jpg'),
  lifecycle: {
    loading: (el) => {
      console.log('image loading', el)
    },
    error: (el) => {
      console.log('image error', el)
    },
    loaded: (el) => {
      console.log('image loaded', el)
    }
  }
})