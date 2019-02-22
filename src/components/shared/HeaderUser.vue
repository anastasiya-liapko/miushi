<template>
  <div class="user row flex-nowrap flex-lg-grow-1">
    <router-link to="/cabinet" tag="p" active-class="isActive" exact class="user__cabinet row col-lg-6 justify-content-center align-items-center">
    <!-- <router-link to="/cabinet/10" tag="p" active-class="isActive" exact class="user__cabinet row col-lg-6 justify-content-center align-items-center"> -->
      <!-- <span @click="switchPage('app-cabinet')">Кабинет</span> -->
      <span>Кабинет</span>
    </router-link>
    <router-link to="/cart" tag="p" active-class="isActive" exact class="user__cart row col-lg-6 justify-content-center align-items-center">
      <!-- <span @click="switchPage('app-cart')">Корзина</span> -->
      <span>Корзина</span>
    </router-link>
  </div>
</template>

<script>
  import { eventBus } from '../../main.js';


  export default {
    // data() {
    //   return {
    //     id: this.$route.params.id
    //   }
    // },
    // watch: {
    //   '$route'(to, from) {
    //     this.id = to.params.id;
    //   }
    // },
    // methods: {
    //   navigateToHome() {
    //     this.$route.push('/');
    //   },
    //   switchPage: function(page) {
    //     eventBus.switchPage(page);
    //   }
    // }
  }
</script>

<style lang="sass" scoped>
  .user__cabinet,
  .user__cart
    span
      position: relative
      padding-left: 40px
    span::before
      content: ""
      position: absolute
      top: 50%
      left: 0
      background-position: center
      background-size: cover
      background-repeat: no-repeat
    &:hover
      cursor: pointer
  .isActive
    background-color: red

  .user__cabinet
    span::before
      width: 22px
      height: 22px
      margin-top: -11px
      background-image: url(../../assets/img/user.png)

  .user__cart
    span::before
      width: 23px
      height: 21px
      margin-top: -10px
      background-image: url(../../assets/img/cart.png)


  @media(max-width: 991px)
    .user__cabinet,
    .user__cart
      width: 23px
      height: 22px
      span
        padding-left: 23px
        font-size: 0

    .user__cart
      margin-left: 30px


  @media(max-width: 575px)
    .user__cart
      margin-left: 20px

</style>