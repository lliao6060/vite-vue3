
import { checkIsMobile, hengshuping } from '@/utils'

export default {
  data () {
    return {
      
    }
  },
  mounted () {
    // console.log('from mixin mounted')
    //ios 10之後禁止縮放
    document.addEventListener('gesturestart', function (e) {
      e.preventDefault()
    })

    const mobile = checkIsMobile()
    if (mobile) {
      hengshuping()
    }
  },
  computed: {
    showFixWindow() {
      return checkIsMobile() ? true : false
    },
  },
  methods: {

  }
}