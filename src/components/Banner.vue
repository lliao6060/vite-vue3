<script setup name="Banner">
  // core version + navigation, pagination modules:
  import Swiper, {
    Navigation,
    Pagination,
    Autoplay,
    Lazy
  } from 'swiper';
  // import styles bundle
  import 'swiper/css/bundle';
  // configure Swiper to use modules
  Swiper.use([Navigation, Pagination, Autoplay, Lazy]);

  const emit = defineEmits(['onImageClick'])

  // init Swiper:
  function initSwiper() {
    var swiper = new Swiper(".mySwiper", {
      lazy: true,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }

  onMounted(() => {
    initSwiper()
  })
</script>


<template>
  <div class="swiper mySwiper w-100">
    <div class="swiper-wrapper w-100 h-100">
      <div
        class="swiper-slide" v-for="(_, i) in 2"
        :key="`swiper-image-${i}`"
      >
        <div
          class="swiper-lazy"
          :data-background="`https://swiperjs.com/demos/images/nature-${i+1}.jpg`"
          @click="emit('onImageClick', `https://swiperjs.com/demos/images/nature-${i+1}.jpg`)"
        ></div>
        <div class="swiper-lazy-preloader"></div>
      </div>
      <!-- <div class="swiper-slide">
        <img v-lazy="'https://swiperjs.com/demos/images/nature-2.jpg'" />
      </div> -->
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<style lang="scss" scoped>
  .mySwiper {
    height: 95%;

    .swiper-slide {
      text-align: center;
      background: #fff;
      @include flex;

      .swiper-lazy {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      top: 55%;

      @include min-width-RWD(1025) {
        &:hover {
          opacity: 0.8;

          &::after {
            display: block;
          }
        }
      }

      &::before {
        z-index: 2;
      }

      &::after {
        display: none;
        content: '';
        position: absolute;
        width: 180%;
        height: 100vh;
        background: rgba(0, 0, 0, .75);
      }
    }

    .swiper-button-prev {
      &::before {
        content: url('https://img.icons8.com/ios/50/EBEBEB/forward--v1.png');
        @include img-horizontal-flip;
      }

      &::after {
        left: -10px;
      }
    }

    .swiper-button-next {
      &::before {
        content: url('https://img.icons8.com/ios/50/EBEBEB/forward--v1.png')
      }

      &::after {
        right: -10px;
      }
    }
  }
</style>