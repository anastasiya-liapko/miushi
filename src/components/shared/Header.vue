<template>
  <div class="header">

    <div class="header__desktop" @resize="handleResize($event)" v-if="show">
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

    <div class="header__mobile" v-if="display">
      <div class="container">
        <div class="row flex-nowrap justify-content-between">
          <button type="button" @click="show = !show">
            <i v-if="!show" class="burger-open">burger</i>
            <i v-else class="burger-close">close</i>
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
    data: function() {
      return {
        show: false,
        display: true
      }
    },
    created: function () {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    },
    beforeDestroy: function () {
      window.removeEventListener('resize', this.handleResize);
    },
    components: {
      'app-header-logo': HeaderLogo,
      'app-header-contacts': HeaderContacts,
      'app-header-nav': HeaderNav,
      'app-header-user': HeaderUser
    },
    methods: {
      handleResize (event) {
        var width = document.documentElement.clientWidth;
        width >= 992 ? this.show = true : this.show = false;
        width >= 992 ? this.display = false : this.display = true;
      }
    }
  }
</script>

<style lang="sass" scoped>
  .header__bottom
    margin-top: 20px
    border-top: 1px solid rgb(242, 242, 242)
  
</style>