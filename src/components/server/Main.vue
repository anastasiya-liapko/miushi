<template>
  <div class="main">
    <swiper class="swiper-container_main" ref="awesomeSwiperMain" :options="swiperOptionMain">
      <swiper-slide class="swiper-slide_main" v-for="i in 3">I'm Slide {{ i }}</swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

    <br>

    <div class="sets">
      <div class="container">
        <app-title>{{ 'Сеты' }}</app-title>
        <app-slider :slides="sets"></app-slider>
      </div>
    </div>

    <div class="rolls">
      <div class="container">
        <app-title>{{ 'Роллы' }}</app-title>
        <app-slider :slides="sets"></app-slider>
      </div>
    </div>

  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import Slider from '../global/Slider.vue';
  import Title from '../global/Title.vue';


  export default {
    data() {
      return {
        main: [
          {

          }
        ],
        sets: [
          {
            img: '',
            quantity: 72,
            weight: 1560,
            kkal: 1700,
            price: 2050
          },
          {
            quantity: 24,
            weight: 960,
            kkal: 1800,
            price: 1590
          },
          {
            quantity: 14,
            weight: 450,
            kkal: 400,
            price: 510
          },
          {
            quantity: 16,
            weight: 460,
            kkal: 490,
            price: 400
          }
        ],
        swiperOptionMain: {
          loop: true,
          speed: 2000,
          autoplay: {
            delay: 15000,
          },
          slidesPerView: 1,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.awesomeSwiper.swiper
      }
    },
    components: {
      'app-slider': Slider,
      'app-title': Title
    }
  }
</script>

<style lang="sass" scoped>
  .swiper-container_main
    width: 1920px
    height: 675px
    background-color: yellow
    

  @media(max-width: 1919px)
    .swiper-container_main
      width: 100%

  

</style>




