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
      if (screen.width < 768) {
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
  max-height: 700px;
  overflow: hidden;
}

.view {
  margin-left: var(--left-column-width);
  margin-top: 300px;
}
.section {
  &-title {
    font-family: "Nova Square";
    font-size: 24px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.21;
    letter-spacing: 28.8px;
    text-align: right;
    color: var(--brown);
    text-transform: uppercase;
    margin: 0 -28.8px 40px 0;
    padding-bottom: 3px;
    margin-right: -28.8px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: calc(100% - 28.8px);
      bottom: 0;
      left: 0;
      border-bottom: 1px solid var(--brown);
    }
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
