<template>
  <div class="main">
    <swiper class="swiper-main-container" ref="awesomeSwiperMain" :options="swiperOptionMain" @set-translate="onSetTranslate">
      <!-- slides -->
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
      <swiper-slide>I'm Slide 7</swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

    <br>

    <swiper-set class="swiper-set-container" ref="awesomeSwiperSet" :options="swiperOptionSet">
      <swiper-set-slide v-for="i in 3">I'm Slide {{ i }}</swiper-set-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper-set>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';


  export default {
    data: function() {
      return {
        swiperOptionMain: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperOptionSet: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        swiperOptionRoll: {

        },
        swiperOptionPizza: {

        },
        swiperOptionWok: {

        },
        swiperOptionNew: {

        },
        swiperOptionPromotion: {

        }
      }
    },
    computed: {
      swiperMain() {
        return this.$refs.awesomeSwiperMain.swiper
      },
      swiperSet() {
        return this.$refs.awesomeSwiperSet.swiper
      }
    },
    mounted() {
      console.log('this is swiper main instance object', this.swiperMain, 'set instance', this.swiperSet)
    },
    methods: {
      onSetTranslate() {
        console.log('onSetTranslate')
      }
    },
    components: {
      swiperSet: swiper,
      swiperSetSlide: swiperSlide
    }
  }
</script>

<style lang="sass" scoped>
  .main
    width: 100%
    height: 200px
    background-color: pink

  .swiper-main-container
    max-width: 1920px
    width: 100%
    height: 675px
    background-color: yellow

  .swiper-set-container
    width: 100%
    height: 470px
    background-color: purple

</style>




