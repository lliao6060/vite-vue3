import VideoModal from './modals/video-modal.vue';
import IdentifyModal from './modals/identify-modal.vue'
import LightBox from './modals/light-box.vue';


export const modalList = {
  video: {
    component: VideoModal,
  },
  identify: {
    component: IdentifyModal,
  },
  lightbox: {
    component: LightBox,
  },
}