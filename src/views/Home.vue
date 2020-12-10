<template lang="pug">
  #home
    div.carousel
      b-row.mx-0
        b-col.p-0
          b-carousel#carousel-1(:interval='4000' controls indicators style='text-shadow: 1px 1px 2px #333;')
            b-carousel-slide.w(img-src='../assets/img/banner1.png')
            b-carousel-slide.w(img-src='../assets/img/banner2.jpg')
            b-carousel-slide.w(img-src='../assets/img/banner3.jpg')
    div.announcement.bg
      b-row.mx-0.p-0
        b-col.p-0(cols=4 sm="3" lg="2")
          #dropdown.color.mx-0(@click="switchDropdownToggle()")
            .title
              font-awesome-icon.size(:icon="['fas', 'wrench']")
              span 維修時間
              font-awesome-icon.size(:icon="['fas', 'caret-down']")
            .content
              .dropItem(v-for="dropItem in dropDown")
                span(v-if="dropdownToggle") {{dropItem}}
        b-col(cols=8 sm="9" lg="10")
          marquee.mt-2(style="color: aliceblue;" scrollamount="10") 【存款公告】：親愛的會員您好，為了保障權益【存款公告】：親愛的會員您好，為了保障權益【存款公告】：親愛的會員您好，為了保障權益【存款公告】：親愛的會員您好，為了保障權益
    b-container
      b-row.game
        b-col(cols=12)
          router-link(to="/live")
          img.pic(src="../assets/img/遊戲聽.png")
        b-col(cols=12)
          img.pic2(src="../assets/img/遊戲廳電腦版.png")
      //- div.event-roulette
      //-   img.pic3(src="../assets/img/轉盤.png")
      //-   img.pic3(src="../assets/img/拉霸.png")
    b-container
      b-row.add
        img.addpic(src="../assets/img/加入頁面.png")
    b-container
      b-row.why
        b-col(cols=12)
          img.whypic(src="../assets/img/為何選擇我們手機板.png")
        b-col(cols=12)
          img.whypic2(src="../assets/img/為何選擇我們.png")
    b-container
      b-row.save
        b-col(cols=12 lg="6")
          img.savepic(src="../assets/img/安全.png")
        b-col(cols=12 lg="6").savemr
          span.savecolor.savestyle 任你博娛樂城(Rennibo Online Casino)
          span.savestyle 成立於2015年，是亞洲最新興的博彩娛樂集團，我們憑著數十位博彩專家的經驗與心血並結合網絡技術優勢，成功打造出一個以百家樂，運彩，賓果，電子遊戲為主的超級遊戲平台,全程擔保，會員資金安全。
    b-container(fluid).bgsky
      b-container
        b-row.gamecity
          b-col(cols=12)
            img.gamecitypic.mt-3(src="../assets/img/娛樂成文章手機板.png")
          b-col(cols=12)
            img.gamecitypic2.mt-3(src="../assets/img/娛樂成文章.png")
      b-container
        b-row.gamecitylist
          b-col(cols=12 md=6)
            b-card.mt-4.box(title="歐博app下載教學")
              b-card-text.text.pt-2 想用手機玩歐博百家樂但不知道如何下載歐博app嗎？本篇内容給您最詳盡的下載...
                a(href="#").pt-5.smalltext 2020/12/09
                a(href="#").pt-5.smalltext1 更多詳情>
          b-col(cols=12 md=6)
            b-card.mt-4.box(title="歐博app下載教學")
              b-card-text.text.pt-2 想用手機玩歐博百家樂但不知道如何下載歐博app嗎？本篇内容給您最詳盡的下載...
                a(href="#").pt-5.smalltext 2020/12/09
                a(href="#").pt-5.smalltext1 更多詳情>
          b-col(cols=12 md=6)
            b-card.mt-4.box(title="歐博app下載教學")
              b-card-text.text.pt-2 想用手機玩歐博百家樂但不知道如何下載歐博app嗎？本篇内容給您最詳盡的下載...
                a(href="#").pt-5.smalltext 2020/12/09
                a(href="#").pt-5.smalltext1 更多詳情>
          b-col(cols=12 md=6)
            b-card.mt-4.box.mb-5(title="歐博app下載教學")
              b-card-text.text.pt-2 想用手機玩歐博百家樂但不知道如何下載歐博app嗎？本篇内容給您最詳盡的下載...
                a(href="#").pt-5.smalltext 2020/12/09
                a(href="#").pt-5.smalltext1 更多詳情>
    //- b-container
    //-   b-row.gocomputer
    //-     b-col.p-2.mt-5(cols=3)
    //-       a(href="#") 娛樂城
    //-     b-col.p-2.mt-5(cols=3)
    //-       a(href="#") 百家樂
    //-     b-col.p-2.mt-5(cols=3)
    //-       a(href="#") 娛樂城優惠
    //-     b-col.p-2.mt-5(cols=3)
    //-       a(href="#") 百家樂技巧
    //-     b-col.p-2.mt-2.mb-2(cols=12)
    //-       a(href="#") 任你博娛樂城-線上賭場百家樂推薦
    //-     b-col.mt-2.mb-6(cols=12)
    //-       img(src="../assets/img/前往電腦版.png")
</template>

<script>
export default {
  data () {
    return {
      dropDown: ['維修公告1', '維修公告2', '維修公告3'],
      dropdownToggle: false
    }
  },
  methods: {
    switchDropdownToggle () {
      this.dropdownToggle = !this.dropdownToggle
    }
  }
}
</script>
