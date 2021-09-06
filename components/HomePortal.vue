<template>
  <div class="container-wrap">
    <div class="bg-wrap">
      <div class="container-inner">
        <div class="bg">
          <swiper class="swiper swiper-container" :options="swiperOption">
            <swiper-slide
              class="bg-swipper swiper-wrapper"
              v-for="(item, key) in listImage"
              :key="key"
              :style="{ 'background-image': 'url(' + item.image + ')' }"
              >{{ item.title }}</swiper-slide
            >
            <!-- <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div> -->
          </swiper>
        </div>
        <div class="logo">
          <img src="~/assets/images/home/top_uoc_logo.png" />
        </div>
        <div class="logo-text">
          <img
            src="~/assets/images/home/top_uoc_logo_text.png"
            alt="UNIVERSITY of CREATIVITY"
          />
        </div>
        <a href="/womenchangemakers/" target="_blank" class="bnr">
          <img src="~/assets/images/home/bnr_wcm.jpg" alt="womenchangemakers" />
        </a>
        <a href="/seminar/2020/" class="bnr is-2nd">
          <img
            src="~/assets/images/home/bnr_seminar.png"
            alt="ゼミはじめます 1期生募集"
          />
        </a>
        <div class="nav">
          <div class="nav-container">
            <a href="/now/" class="nav-link">
              <p class="nav-link-text">NOW</p>
            </a>
          </div>
          <div class="nav-container">
            <a href="/bodaiju/" class="nav-link">
              <p class="nav-link-text">BODAIJU</p>
            </a>
          </div>
          <div class="nav-container">
            <a href="/join/" class="nav-link">
              <p class="nav-link-text">JOIN</p>
            </a>
          </div>
          <div class="nav-container">
            <a href="/me/" class="nav-link">
              <p class="nav-link-text">ME</p>
            </a>
          </div>
          <div class="nav-container">
            <a href="/postcoronaprototype/" target="_blank" class="nav-link">
              <p class="nav-link-text">VOICE</p>
            </a>
          </div>
          <div class="nav-container">
            <a href="/about/" class="nav-link">
              <p class="nav-link-text">ABOUT</p>
            </a>
          </div>
          <div class="nav-container">
            <a href="/book/" class="nav-link">
              <p class="nav-link-text">BOOK</p>
            </a>
          </div>
          <div class="nav-container">
            <a href="/access/" class="nav-link">
              <p class="nav-link-text">ACCESS</p></a
            >
          </div>
          <div class="nav-btn-wrap">
            <div data-v-46476215="" class="toggle-user-btn">
              <a data-v-46476215="" href="/join/" class="btn">
                <p data-v-46476215="" class="btn-text">Sign up</p></a
              >
              <a data-v-46476215="" href="/signin/" class="btn">
                <p data-v-46476215="" class="btn-text">Sign in</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="top-news-wrap">
      <div class="news-wrap">
        <div
          class="news-label-bg"
          style="background-color: rgb(255, 255, 255)"
        ></div>
        <div data-v-119f334a="" class="news-label-text">
          <p data-v-119f334a="">
            Tokyoを食べられる森にしよう「Tokyo Urban Farming」始動
          </p>
        </div>
      </div>
    </div>
    <footer class="footer-nav-wrap">
      <div class="footer-nav-link-wrap">
        <div class="footer-nav-link">
          <a href="/terms/" class="">
            <p>利用規約</p>
          </a>
        </div>
        <div class="footer-nav-link">
          <a href="/privacy/" class="">
            <p>プライバシーポリシー</p>
          </a>
        </div>
        <div class="footer-nav-link">
          <a href="/faq/" class="">
            <p>FAQ</p>
          </a>
        </div>
        <div class="footer-nav-link">
          <a href="mailto:info@uoc.world" target="_blank">
            <p>お問い合わせ</p>
          </a>
        </div>
        <div class="footer-nav-link">
          <a href="https://www.hakuhodo.co.jp/" target="_blank">
            <p>運営会社</p>
          </a>
        </div>
      </div>
      <p class="footer-nav-copyright">
        © 2021 UNIVERSITY of CREATIVITY. All Rights Reserved.
      </p>
    </footer>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  // head () {
  //   return {
  //     link: [
  //       { rel: 'stylesheet', href: '../assets/' }
  //     ]
  //   }
  // },
  name: "swiper-example-autoplay",
  title: "Autoplay",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      listImage: [
        {
          image: "https://source.unsplash.com/random?sig=21",
          title: "ahiii",
        },
        {
          image: "https://source.unsplash.com/random?sig=33",
          title: "ahiii",
        },
        {
          image: "https://source.unsplash.com/random?sig=55",
          title: "ahiii",
        },
        {
          image: "https://source.unsplash.com/random?sig=66",
          title: "ahiii",
        },
      ],

      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>

