<template lang="pug">
    b-navbar.bg-blue(toggleable="lg", type="dark")
      b-navbar-brand.navflex(href="#")
        img.logo(src="../src/assets/img/rennibologo1.png", height="70px")
      b-navbar-toggle(target="nav-collapse")
      b-collapse#nav-collapse(is-nav)
        b-navbar-nav
          b-nav-item(href="#") 真人娛樂
          b-nav-item(href="#") 體育博彩
          b-nav-item(href="#") 電子遊戲
          b-nav-item(href="#") 賓果遊戲
          b-nav-item(href="#") 棋牌遊戲
          b-nav-item(href="#") 捕魚王
          b-nav-item(href="#") 賽事影城
          b-nav-item(href="#") 優惠活動
          b-nav-item(href="#", disabled) Disabled
        b-navbar-nav.ml-auto
          b-nav-item.phone(href="#", right)
            img.logo(src="../src/assets/img/_24-service.png", height="50px")
    b-sidebar#sidebar-border(sidebar-class='border-right border-danger').px-3.py-2
      b-navbar-nav.ml-auto
      b-nav-item(to='/product') 賣場商品
      b-nav-item(to='/size') 尺寸指南
      b-nav-item(to='/cart') 購物車
      b-nav-item(to='/login') 會員登入
      b-nav-item-dropdown to='/back' text="後台管理")
        b-dropdown-item(to="/back-user") 會員管理
        b-dropdown-item(to="/back-product") 商品管理
        b-dropdown-item(to="/back-cart") 購物車管理
</template>

<script>
import { Slide } from 'vue-burger-menu'
export default {
  data () {
    return {
      fullWidth: 0,
      fullHeight: 0
    }
  },
  mounted () {
    const vm = this
    vm.fullWidth = window.innerWidth
    vm.fullHeight = window.innerHeight
    window.onresize = () => {
      vm.fullWidth = window.innerWidth
      vm.fullHeight = window.innerHeight
    }
  },
  components: {
    Slide
  }
}

</script>
