<template>
  <main class="main" id="app" :class="{'-menu-active': menuIsShow}">
    <navigation v-on:menu-toggle="menuToggle()"></navigation>
    <header-app v-on:menu-toggle="menuToggle()"></header-app>
    <div class="view">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </main>
</template>

<script>
import HeaderApp from "./components/Header";
import Navigation from "./components/Navigation";
import Introduction from "./views/Introduction";

export default {
  name: "app",
  components: {
    HeaderApp,
    Navigation,
    Introduction
  },
  data() {
    return {
      menuIsShow: false
    };
  },
  methods: {
    menuToggle: function() {
      if (screen.width < 801 || window.innerWidth < 801) {
        this.menuIsShow = !this.menuIsShow;
        let body = document.querySelector("body");
        if (body.className == "") {
          body.className = "-in-menu";
        } else {
          body.className = "";
        }
      }
    }
  }
};
</script>

<style lang="scss">
@import "sass/abstracts/variables";
@import "sass/abstracts/mixins";
// TODO concatenar luego
@import url("https://fonts.googleapis.com/css?family=Lato|Nova+Square");
// TODO Recfactorizar código CSS
:root {
  --white: #ffffff;
  --brown: #545454;
  --brown-light: #ededed;

  // Sizes
  --left-column-width: 291px;
  --max-width-containers: 1134px;
}
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
  font-family: "Lato", sans-serif;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 1rem;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px var(--brown-light);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--brown);
    outline: 1px solid var(--brown-light);
    border-radius: 5px;
  }
}

h1 {
  font-family: "Nova Square", cursive;
}

hr {
  color: var(--brown);
  border-width: 2px 0 0;
  margin: 15px 0;
}
.main {
  max-width: var(--max-width-containers);
  margin: auto;
  transition: transform 0.4s ease-out;
  &.-menu-active {
    transform: translateX(var(--left-column-width));
  }
  @include bp-up($xs) {
    &.-menu-active {
      transform: none;
    }
  }
}
.-in-menu {
  min-height: 100vh;
  max-height: 700px;
  overflow: hidden;
}

.view {
  margin-bottom: 50px;
  @include bp-up($xs) {
    margin: 300px 0 50px var(--left-column-width);
  }
}
.section {
  padding: 0 20px;
  &-title {
    font-family: "Nova Square";
    font-size: 18px;
    font-weight: normal;
    line-height: 1.21;
    text-align: right;
    color: var(--brown);
    text-transform: uppercase;
    padding-bottom: 3px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      border-bottom: 1px solid var(--brown);
    }
  }
  @include bp-up($xs) {
    &-title {
      font-size: 24px;
      letter-spacing: 28.8px;
      margin: 0 -28.8px 40px 0;
      &::after {
        width: calc(100% - 28.8px);
      }
    }
  }
}
.menu-button {
  svg {
    width: 20px;
    cursor: pointer;
    path {
      fill: var(--brown);
    }
  }
  &.close {
    margin: 1rem 1rem 0 0;
    svg path {
      fill: var(--white);
    }
  }
  @include bp-up($xs) {
    display: none;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
