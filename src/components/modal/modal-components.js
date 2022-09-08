import VideoModal from './modals/video-modal.vue';
import longContentModal from './modals/long-content-modal.vue'
import LightBox from './modals/light-box.vue';


export const modalList = {
  video: {
    component: VideoModal,
  },
  longContent: {
    component: longContentModal,
  },
  lightbox: {
    component: LightBox,
  },
}