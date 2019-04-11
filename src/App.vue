<template>
  <main class="main" id="app">
    <navigation></navigation>
    <header-app></header-app>
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
  --left-column-width: 261px;
  --max-width-containers: 1024px;
}
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
}

h1 {
  font-family: "Nova Square", cursive;
}

hr {
  color: var(--brown);
  border-width: 2px;
  margin: 15px 0;
}
.main {
  max-width: var(--max-width-containers);
  margin: auto;
}

.view {
  margin-left: var(--left-column-width);
  margin-top: 340px;
}
.section {
  padding: 30px;
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
