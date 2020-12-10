<template lang="pug">
#app
  <div class="container-fluid d-none d-sm-block" style="background-color: #3fa9f5; min-height: 56px;overflow: hidden;">
    <div class="container">
      <div class="row float-right" style="padding-top: 10px;">
          <div class="col-7" style="padding: 0;">
              <form class="" action="#" method="POST">
                  <input class="mx-1 input-style" type="text" name="text" id="text" value="用戶名(ID)">
                  <input class="mx-1 input-style" type="password" name="password" id="password" value="密碼">
                  <input class="mx-1 button-login" type="button" value="登入">
                  <input class="mx-1 button-reg" type="button" value="註冊">
              </form>
          </div>
          <div class="col-5 fs-15" style="margin-top: 3px; padding: 0; ">
              <a class="text-light mx-1 size1" href="#">公告</a>
              <a class="text-light mx-1 size1" href="#">APP下載</a>
              <a class="text-light mx-1 size1" href="#">常見問題</a>
              <a class="text-light mx-1 size1" href="#">合作代理</a>
          </div>
      </div>
    </div>
  </div>
  b-sidebar#sidebar-1.px-3.py-2
    font-awesome-icon.size(:icon="['fas', 'user']")
    p.pText 123
    .line
    b-row
      b-col(cols=4)
        b-nav-item(to='/live')
          img(src="../src/assets/img/真人icon.png")
          .text
            span 真人娛樂
      b-col(cols=4)
        b-nav-item(href="#")
          b-img(src="../src/assets/img/體育icon.png")
          .text
            span 體育博彩
      b-col(cols=4)
        b-nav-item(href="#")
          b-img(src="../src/assets/img/電子icon.png")
          .text
            span 電子遊戲
      b-col(cols=4).mt-3
        b-nav-item(href="#")
          b-img(src="../src/assets/img/棋排icon.png")
          .text
            span 棋牌遊戲
      b-col(cols=4).mt-3
        b-nav-item(href="#")
          b-img(src="../src/assets/img/捕魚icon.png")
          .text
            span 捕魚王
      b-col(cols=4).mt-3
        b-nav-item(href="#")
          b-img(src="../src/assets/img/賓果icon.png")
          .text
            span 賓果遊戲
      b-col(cols=12).mt-3.p-0
        b-nav-item(href="#").pos
          b-img.img1(src="../src/assets/img/side1-1.png")
          span.text1 優惠活動
      b-col(cols=12).p-0
        b-nav-item(href="#").pos
          b-img.img1(src="../src/assets/img/side1-2.png")
          span.text1 公告
      b-col(cols=12).p-0
        b-nav-item(href="#").pos
          b-img.img1(src="../src/assets/img/side1-3.png")
          span.text1 常見問題
      b-col(cols=12).p-0
        b-nav-item(href="#").pos
          b-img.img1(src="../src/assets/img/side1-4.png")
          span.text1 維修時間
      b-col(cols=12).p-0
        b-nav-item(href="#").pos
          b-img.img1(src="../src/assets/img/side1-5.png")
          span.text1 APP下載
      .line1
      b-col(cols=12).p-0
        b-nav-item(href="#").pos
          b-img.img1(src="../src/assets/img/side2-1.png")
          span.text1 存取流程
      b-col(cols=12).p-0
        b-nav-item(href="#").pos
          b-img.img1(src="../src/assets/img/side2-2.png")
          span.text1 玩家評價
      b-col(cols=12).p-0
        b-nav-item(href="#").pos
          b-img.img1(src="../src/assets/img/side2-3.png")
          span.text1 品牌介紹
      b-col(cols=12).p-0
        b-nav-item(href="#").pos
          b-img.img1(src="../src/assets/img/side2-4.png")
          span.text1 推價好友
      b-col(cols=12).p-0
        b-nav-item(href="#").pos
          b-img.img1(src="../src/assets/img/side2-5.png")
          span.text1 合營代理
      b-col(cols=12).p-0
        b-nav-item(href="#").pos
          b-img.img1(src="../src/assets/img/side2-6.png")
          span.text1 關於任你搏
      .line1
      b-col(cols=12).p-0
        b-nav-item(href="#").pos
          b-img.img1(src="../src/assets/img/side3-1.png")
          span.text1 登出
  b-navbar.bg-blue(toggleable="lg", type="dark")
    b-container
      b-navbar-brand.navflex(to='/')
        img.logo(src="../src/assets/img/rennibologo1.png", height="70px")
      b-navbar-toggle(target="nav-collapse" v-b-toggle.sidebar-1='')
      b-collapse#nav-collapse(is-nav)
        b-navbar-nav
          b-nav-item(to='/live')
            .pic0
              img(src="../src/assets/img/真人icon.png")
            .text0
              span 真人娛樂
          b-nav-item(href="#")
            .pic
              img(src="../src/assets/img/體育icon.png")
            .text
              span 體育博彩
          b-nav-item(href="#")
            .pic
              img(src="../src/assets/img/電子icon.png")
            .text
              span 電子遊戲
          b-nav-item(href="#")
            .pic
              img(src="../src/assets/img/賓果icon.png")
            .text
              span 賓果遊戲
          b-nav-item(href="#")
            .pic
              img(src="../src/assets/img/棋排icon.png")
            .text
              span 棋牌遊戲
          b-nav-item(href="#")
            .pic
              img(src="../src/assets/img/捕魚icon.png")
            .text
              span 捕魚王
          b-nav-item(href="#")
            .pic
              img(src="../src/assets/img/影城icon.png")
            .text
              span 賽事影城
          b-nav-item(href="#")
            .pic
              img(src="../src/assets/img/優惠icon.png")
            .text
              span 優惠活動
        b-navbar-nav.ml-auto
    b-navbar-brand.phone(href="#", right)
      img.phone(src="../src/assets/img/_24-service.png", height="50px")
  router-view
  b-container(fluid)
    b-row.gocomputer
      b-col.p-2.mt-5(cols=3)
        a.atext(href="#") 娛樂城
      b-col.p-2.mt-5(cols=3)
        a(href="#") 百家樂
      b-col.p-2.mt-5(cols=3)
        a(href="#") 娛樂城優惠
      b-col.p-2.mt-5(cols=3)
        a(href="#") 百家樂技巧
      b-col.p-2.mt-2.mb-2(cols=12)
        a(href="#") 任你博娛樂城-線上賭場百家樂推薦
      b-col.mt-2.mb-6(cols=12)
        img(src="../public/img/前往電腦版.png")
  #footer.fixed-bottom
    b-row.mx-0.bg-blue.phonefooter
      b-col.mt-2.footericon
        img(src="../src/assets/img/小首頁.png")
        p.m-0(style="color:#fff;") 首頁
      b-col.mt-2.footericon
        img(src="../src/assets/img/小登入.png")
        p.m-0(style="color:#fff;") 登入
      b-col.mt-2.footericon
        img(src="../src/assets/img/小註冊.png")
        p.m-0(style="color:#fff;") 註冊
      b-col.mt-2.footericon
        img(src="../src/assets/img/小優惠.png")
        p.m-0(style="color:#fff;") 優惠活動
  #footer1
    b-row.mx-0.computerfooter
      b-col(cols=12).mt-3
        img.pic(src="../src/assets/img/footer-logo.png")
      b-col.d-flex.justify-content-center.align-items-center.mt-4
        a.mr-3(href="#" style="color: #1959b3;") 娛樂城
        a.mr-3(href="#" style="color: #1959b3;") |
        a.mr-3(href="#" style="color: #1959b3;") 百家樂
        a.mr-3(href="#" style="color: #1959b3;") |
        a.mr-3(href="#" style="color: #1959b3;") 球版現金版
        a.mr-3(href="#" style="color: #1959b3;") |
        a.mr-3(href="#" style="color: #1959b3;") 電子拉霸
        a.mr-3(href="#" style="color: #1959b3;") |
        a.mr-3(href="#" style="color: #1959b3;") 鑫城賓果
        a.mr-3(href="#" style="color: #1959b3;") |
        a.mr-3(href="#" style="color: #1959b3;") 百家樂技巧教學
        a.mr-3(href="#" style="color: #1959b3;") |
        a(href="#" style="color: #1959b3;") 關於任你博
      b-col(cols=12).mt-4
        p(style="color: #1959b3;") 【任你博】 所有版權未經本公司合法授權任意復制 版權必究
      .go_top_page
        a(href="#")
          img(src="../src/assets/img/至頂png.png")
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import { Slide } from 'vue-burger-menu'
export default {
  data () {
    return {
      fullWidth: 1024 + 'px',
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
