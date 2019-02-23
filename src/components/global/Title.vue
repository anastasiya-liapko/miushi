<template>
  <div class="title row flex-column align-items-center">
    <h2 class="title__text"><slot></slot></h2>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="sass">
  .title 
    padding: 0
    .title__text
      position: relative
      margin: 50px 0
      padding: 0 140px
      font-family: 'Marck Script', cursive
      font-size: 40px
      line-height: 1
      font-weight: 400
      text-align: center
      color: rgb(50, 80, 90)
      &::before,
      &::after
        content: ''
        position: absolute
        top: 50%
        width: 109px
        height: 40px
        margin-top: -20px
        background-repeat: no-repeat
        background-position: center
        background-size: cover
      &::before
        left: 0
        background-image: url('../../assets/img/title-left-pic.png')
      &::after
        right: 0
        background-image: url('../../assets/img/title-right-pic.png')


  @media(max-width: 767px)
    .title_without-pics
      .title__text
        padding: 0
        &::before,
        &::after
          display: none


  @media(max-width: 575px)
    .title
      .title__text
        padding: 0 90px
        &::before,
        &::after
          width: 77px
          height: 28px

    .title_without-pics
      .title__text
        padding: 0

</style>




