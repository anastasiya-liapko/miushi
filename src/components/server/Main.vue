<template>
  <div class="main">
    <swiper class="swiper-container_main" ref="awesomeSwiperMain" :options="swiperOptionMain">
      <swiper-slide class="swiper-slide_main" v-for="mainItem in main" :style="{backgroundImage: 'url(dist/' + mainItem.img + ')'}">
        <div class="swiper-slide__wrapper_main" style="border: 1px solid yellow">
          <h1 class="swiper-slide__title_main">{{ mainItem.title }}</h1>
          <p class="swiper-slide__subtitle_main">{{ mainItem.subtitle }}</p>
          <app-btn class="btn btn_border btn_red">{{ 'Подробнее' }}</app-btn>
          <p class="swiper-slide__descr_main">{{ mainItem.descr }}</p>
        </div>
      </swiper-slide>
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
  import Btn from '../global/Btn.vue';


  export default {
    data() {
      return {
        main: [
          {
            'img': 'slider.png',
            'title': 'Счастливые часы',
            'subtitle': 'с 11:00 до 16:00 в будние дни',
            'descr': 'скидка 15%'
          },
          {
            'img': 'slider.png',
            'title': 'Счастливые часы',
            'subtitle': 'с 11:00 до 16:00 в будние дни',
            'descr': 'скидка 20%'
          },
          {
            'img': 'slider.png',
            'title': 'Счастливые часы',
            'subtitle': 'с 11:00 до 16:00 в будние дни',
            'descr': 'скидка 25%'
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
        return this.$refs.awesomeSwiper.swiper;
      }
    },
    components: {
      'app-slider': Slider,
      'app-title': Title,
      'app-btn': Btn
    }
  }
</script>

<style lang="sass" scoped>
  .swiper-container_main
    width: 1920px
    height: 675px
    background-color: yellow

  .swiper-slide_main
    width: 1920px
    height: 675px
    background-position: center
    background-size: cover
    background-repeat: no-repeat
    
  .swiper-slide__wrapper_main
    

  @media(max-width: 1919px)
    .swiper-container_main
      width: 100%

    .swiper-slide_main
      width: 100%
      height: 675px
  

</style>




