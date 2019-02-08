<template>
  <div class="user row flex-nowrap flex-lg-grow-1">
    <p class="user__cabinet cabinet row col-lg-6 justify-content-center align-items-center">
      <span>Кабинет</span>
    </p>
    <p class="user__cart cart row col-lg-6 justify-content-center align-items-center">
      <span>Корзина</span>
    </p>
  </div>
</template>

<script>

</script>

<style lang="sass" scoped>
  div, p
    border: 1px solid red

  .cabinet,
  .cart
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
    span:hover
      cursor: pointer

  .cabinet
    span::before
      width: 22px
      height: 22px
      margin-top: -11px
      background-image: url(../../assets/img/user.png)

  .cart
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