<template>
  <swiper class="swiper-container_items" ref="awesomeSwiper" :options="swiperOption">
    <swiper-slide class="swiper-slide_items" v-for="slide in slides" :key="slide.id">
      <!-- <router-link :to="{name: 'Item', params: { id: slide.id }}"> -->
      <!-- <router-link :to="'product/' + slide.id" tag="div"> -->
        <app-item class="item_main" :item="slide"></app-item>
      <!-- </router-link> -->
    </swiper-slide>
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
  import Item from './Item.vue';

  export default {
    data: function() {
      return {
        swiperOption: {
          loop: true,
          speed: 500,
          spaceBetween: 18,
          slidesPerView: 4,
          breakpoints: {
            576: {
              slidesPerView: 'auto',
              centeredSlides: true,
              spaceBetween: 15
            },
            767: {
              slidesPerView: 'auto',
              centeredSlides: true,
              spaceBetween: 30
            },
            991: {
              slidesPerView: 2,
              // centeredSlides: true,
              spaceBetween: 160
            },
            1199: {
              slidesPerView: 3,
              spaceBetween: 70
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
      'app-item': Item
      // swiperSet: swiper,
      // swiperSetSlide: swiperSlide
    }
  }
</script>

<style lang="sass">
  .swiper-container_items
    width: 100%
    height: 550px
    .swiper-button-prev,
    .swiper-button-next
      top: auto
      bottom: 20px
    .swiper-button-prev
      left: auto
      right: 50%
      margin-right: 100px
    .swiper-button-next
      left: 50%
      right: auto
      margin-left: 100px

  .swiper-container-horizontal > .swiper-pagination-bullets
    bottom: 30px

  .swiper-slide_items
    width: 263px
    height: 460px


  @media(max-width: 767px)
    .swiper-container_items
      height: 500px
      .swiper-button-prev,
      .swiper-button-next,
      .swiper-pagination-bullets
        display: none

    .swiper-slide_items
      opacity: 0.5

    .swiper-slide_items.swiper-slide-active
      opacity: 1


</style>





