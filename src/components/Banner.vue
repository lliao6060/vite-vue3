<script setup>
  import { getImageUrl, mobileDevice } from '@/utils'
  // import Swiper core and required modules
  import {
    Navigation,
    Pagination,
    Autoplay,
    Lazy
  } from 'swiper';


  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import "../../node_modules/swiper/swiper-bundle.css"

  const mainImg = mobileDevice ? getImageUrl('maju.jpg') : getImageUrl('maju.jpg')
  const useModules = [Navigation, Pagination, Autoplay, Lazy ];

  const onSwiper = (swiper) => {
    console.log(swiper);
  };
  const onSlideChange = () => {
    console.log('slide change');
  };
</script>

<template>
  <swiper 
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
      delay: 3500,
      disableOnInteraction: false,
    }"
    :modules="useModules"
    :lazy="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <div
        :data-background="mainImg"
        class="swiper-lazy"
        v-lazy="mainImg"
      ></div>
      <div class="swiper-lazy-preloader"></div>
    </swiper-slide>
    <swiper-slide>
      <div
        :data-background="mainImg"
        class="swiper-lazy"
        v-lazy="mainImg"
      ></div>
      <div class="swiper-lazy-preloader"></div>
    </swiper-slide>
    <swiper-slide>
      <div
        :data-background="mainImg"
        class="swiper-lazy"
        v-lazy="mainImg"
      ></div>
      <div class="swiper-lazy-preloader"></div>
    </swiper-slide>
  </swiper>

  <!-- 五月上的第二版本 -->
  <!-- <swiper 
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="useModules"
    :autoplay="{
      delay: 3500,
      disableOnInteraction: false,
    }"
    @swiper="onSwiper" 
    @slideChange="onSlideChange"
    class="parent-swiper"
  >
    <swiper-slide>
      <img src="@images/index/top_banner.jpg">
      <swiper 
        :modules="useModules"
        @slideChange="onSlideChange"
        class="child-swiper"
      >
        <swiper-slide>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/cB7WsUhWmNg" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          ></iframe>        
        </swiper-slide>
      </swiper>
    </swiper-slide>
  </swiper> -->
</template>

<style lang="scss">
.swiper {
  position: relative;
  height: 100%;
  .swiper-lazy {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    @include min-width-RWD(1025) {
      // background-position: inherit;
      background-position: center;
      height: inherit;
    }
    @include RWD($lg) {
      background-position: center;
      height: inherit;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
    font-weight: bold;
    font-size: 4vw;
  }
  
  .swiper-button-prev {
    &::before {
      content: '<';
    }
  }
  .swiper-button-next {
    &::before {
      content: '>'
    }
  }

  .swiper-pagination {
    bottom: 15px;
    padding: 5px;
    background: rgb(206, 206, 206);
  }

  .swiper-wrapper {
    height: inherit;
    .swiper-slide {
      @include flex;
      > img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      // @include RWD($lg) {
      //   width: 100%;
      //   overflow: hidden;
      //   margin: 0;
      //   position: relative;
      //   > img {
      //     position:absolute;
      //     top: 50%;
      //     transform: translateY(-50%);
      //     max-width: 100%;
      //   }
      // }
    }
  }

  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: $dark;
    opacity: 1;
    background: rgba(0,0,0,0.2);
  }
  .swiper-pagination-bullet-active {
    color:#fff;
    background: rgb(255, 255, 255);
  }
  .child-swiper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(0, -50%);
    width: 40%;
    height: 55%;
    border: 8px solid;
    .swiper-wrapper {
      height: 100%;
      background: #fff;
    }
  }
}
</style>
