<template>
  <div class="header__top">
    <div class="container">
      <div class="row flex-nowrap justify-content-between">
        <app-header-logo></app-header-logo>
        <app-header-contacts></app-header-contacts>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderLogo from './HeaderLogo.vue';
  import HeaderContacts from './HeaderContacts.vue';

  export default {
    components: {
      'app-header-logo': HeaderLogo,
      'app-header-contacts': HeaderContacts
    }
  }
</script>

<style lang="sass" scoped>

</style>