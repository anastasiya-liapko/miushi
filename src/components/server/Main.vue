<template>
  <div class="main">
    <swiper class="swiper-container_main" ref="awesomeSwiperMain" :options="swiperOptionMain">
      <swiper-slide class="swiper-slide_main" v-for="(mainItem, i) in main" :key="'slide_main-' + i" :style="{backgroundImage: 'url(dist/' + mainItem.img + ')'}">
        <div class="container">
          <div class="row align-items-center">
          <div class="swiper-slide__wrapper_main row">
            <h1 class="swiper-slide__title_main">{{ mainItem.title }}</h1>
            <div class="row justify-content-center">
              <p class="swiper-slide__descr_main row align-items-center">
                <span>{{ mainItem.descr }}</span>
              </p>
            </div>
            <p class="swiper-slide__subtitle_main">{{ mainItem.subtitle }}</p>
            <div class="swiper-slide__btn_main order-4 col-12">
              <app-btn class="btn btn_border btn_red col-12">{{ 'Подробнее' }}</app-btn>
            </div>
          </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

    <div class="slider sets">
      <div class="container">
        <app-title>{{ 'Сеты' }}</app-title>
        <app-slider :slides="products"></app-slider>
      </div>
    </div>

    <div class="slider rolls">
      <div class="container">
        <app-title>{{ 'Роллы' }}</app-title>
        <app-slider :slides="products"></app-slider>
      </div>
    </div>

    <div id="callback" class="callback"></div>

  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import Slider from '../global/Slider.vue';
  import Title from '../global/Title.vue';
  import Btn from '../global/Btn.vue';

  import { mapGetters } from 'vuex';


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
        swiperOptionMain: {
          loop: true,
          speed: 1000,
          // autoplay: {
          //   delay: 15000,
          // },
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
      },
      ...mapGetters([
        'products'
      ])
    },
    components: {
      'app-slider': Slider,
      'app-title': Title,
      'app-btn': Btn
    }
  }
</script>

<style lang="sass" scoped>
  .main
    background-color: rgb(235, 235, 235)

  .swiper-container_main,
  .swiper-slide_main
    width: 1920px
    height: 675px

  .swiper-slide_main
    background-position: center
    background-size: cover
    background-repeat: no-repeat
    .container,
    .container>div
      height: 100%

  .swiper-slide__title_main
    width: 580px
    font-family: 'Marck Script', cursive
    font-size: 110px
    line-height: 100px
    font-weight: 400
    color: rgb(132, 198, 4)

  .swiper-slide__subtitle_main
    width: 100%
    margin-top: 20px
    margin-bottom: 50px
    font-style: italic
    font-size: 26px
    line-height: normal
    font-weight: 400
    color: rgb(255, 255, 255)

  .swiper-slide__descr_main
    width: 140px
    height: 140px
    font-size: 30px
    line-height: normal
    font-weight: 400
    text-align: center
    color: rgb(255, 255, 255)
    border-radius: 50%
    background-image: -moz-linear-gradient( 90deg, rgb(183,31,36) 0%, rgb(223,32,36) 100%)
    background-image: -webkit-linear-gradient( 90deg, rgb(183,31,36) 0%, rgb(223,32,36) 100%)
    background-image: -ms-linear-gradient( 90deg, rgb(183,31,36) 0%, rgb(223,32,36) 100%)

  .callback
    width: 100%
    height: 200px
    background-color: purple


  @media(max-width: 1919px)
    .swiper-container_main,
    .swiper-slide_main
      width: 100%


  @media(max-width: 991px)
    .swiper-container_main,
    .swiper-slide_main
      height: 420px

    .swiper-slide__title_main
      width: 380px
      font-size: 72px
      line-height: 72px

    .swiper-slide__subtitle_main
      margin-bottom: 25px
      font-size: 18px

    .swiper-slide__descr_main
      width: 95px
      height: 95px
      font-size: 18px


  @media(max-width: 767px)
    .swiper-container_main
      height: 290px
      .swiper-button-next,
      .swiper-button-prev
        display: none

    .swiper-slide_main
      position: relative
      height: 240px

    .swiper-slide__title_main
      width: 250px
      font-size: 49px
      line-height: 49px

    .swiper-slide__subtitle_main
      margin-bottom: 25px
      font-size: 12px

    .swiper-slide__descr_main
      position: absolute
      top: 50%
      left: 50%
      width: 65px
      height: 65px
      margin-top: -32px
      font-size: 14px

    .swiper-slide__btn_main
      display: none

    .slider
      .container  
        max-width: 100%
        padding: 0
  

    @media(max-width: 575px)
      .swiper-slide__descr_main
        left: 230px


</style>




