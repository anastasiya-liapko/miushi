<template>
  <swiper class="swiper-container_products" ref="awesomeSwiper" :options="swiperOption">
    <swiper-slide class="swiper-slide_products" v-for="slide in slides">I'm Slide {{ slide.price }}</swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>


  <!-- <swiper class="swiper-container swiper-container_main" ref="awesomeSwiperMain" :options="swiperOptionMain" @set-translate="onSetTranslate">
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
      <swiper-slide>I'm Slide 7</swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper> -->

  <!-- <swiper-set class="swiper-container swiper-container_set" ref="awesomeSwiperSet" :options="swiperOptionSet">
      <swiper-set-slide v-for="i in 3">I'm Slide {{ i }}</swiper-set-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper-set> -->
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';


  export default {
    data: function() {
      return {
        swiperOption: {
          loop: true,
          speed: 1000,
          slidesPerView: 4,
          breakpoints: {
            576: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 3
            }
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
        // swiperOptionMain: {
        //   loop: true,
        //   speed: 2000,
        //   autoplay: {
        //     delay: 15000,
        //   },
        //   slidesPerView: 1,
        //   pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true
        //   },
        //   navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev'
        //   }
        // },
        // swiperOptionSet: {
        //   speed: 1000,
        //   pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true
        //   }
        // }
      }
    },
    props: ['slides'],
    computed: {
      swiper() {
        return this.$refs.awesomeSwiper.swiper
      }
      // swiperMain() {
      //   return this.$refs.awesomeSwiperMain.swiper
      // },
      // swiperSet() {
      //   return this.$refs.awesomeSwiperSet.swiper
      // }
    },
    // mounted() {
    //   console.log('this is swiper main instance object', this.swiperMain, 'set instance', this.swiperSet)
    // },
    // methods: {
    //   onSetTranslate() {
    //     console.log('onSetTranslate')
    //   }
    // },
    components: {
      // swiperSet: swiper,
      // swiperSetSlide: swiperSlide
    }
  }
</script>

<style lang="sass">
  .swiper-container_products
    width: 100%
    height: 470px
    background-color: purple

  .swiper-slide_products
    height: 90%
    border: 1px solid black

</style>





