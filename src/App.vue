<template>
  <main class="main" id="app">
    <navigation class="navigation"></navigation>
    <header-app></header-app>
    <div class="view">
      <introduction></introduction>
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
.navigation {
  position: fixed;
  top: 0;
  min-height: 100vh;
  background: var(--brown);
  z-index: 2;
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
    border-bottom: 1px solid var(--brown);
    margin-top: 0;
    margin-bottom: 40px;
    padding-bottom: 3px;
  }
}
</style>
