<template>
  <div class="header">

    <div 
        class="header__desktop d-lg-block" 
        v-show="show">
      <div class="header__top order-2">
        <div class="container">
          <div class="row flex-nowrap justify-content-between">
            <app-header-logo></app-header-logo>
            <app-header-contacts></app-header-contacts>
          </div>
        </div>
      </div><!-- header__top -->

      <div class="header__bottom order-1">
        <div class="container">
          <div class="row flex-nowrap">
            <app-header-nav></app-header-nav>
            <app-header-user></app-header-user>
          </div>
        </div>
      </div><!-- header__bottom -->
    </div>

    <div class="header__mobile d-lg-none">
      <div class="container">
        <div class="row flex-nowrap justify-content-between">
          <button 
              class="burger" 
              type="button" 
              @click="show = !show">
            <i 
                v-if="!show" 
                class="burger__open">
              burger
            </i>
            <i 
                v-else 
                class="burger__close">
              close
            </i>
          </button>
          <app-header-logo></app-header-logo>
          <app-header-user></app-header-user>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import HeaderLogo from './HeaderLogo.vue';
  import HeaderContacts from './HeaderContacts.vue';
  import HeaderNav from './HeaderNav.vue';
  import HeaderUser from './HeaderUser.vue';

  export default {
    data: function () {
      return {
        show: false
      }
    },
    components: {
      'app-header-logo': HeaderLogo,
      'app-header-contacts': HeaderContacts,
      'app-header-nav': HeaderNav,
      'app-header-user': HeaderUser
    }
  }
</script>

<style lang="sass" scoped>
  .header__bottom
    margin-top: 20px
    border-top: 1px solid rgb(242, 242, 242)

  @media(max-width: 991px)
    .header__desktop
      .logo,
      .user
        display: none
  
</style>