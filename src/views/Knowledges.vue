<template>
  <div class="container">
    <vue-tabs>
      <v-tab title="Front-end" icon="icon icon-eye">First tab content</v-tab>

      <v-tab title="Back-end" icon="icon icon-database">Second tab content</v-tab>

      <v-tab title="Sys-Admin" icon="icon icon-server">Second tab content</v-tab>

      <v-tab title="CMS" icon="icon icon-chalkboard">CMS tab content</v-tab>

      <v-tab title="Otros" icon="icon icon-coffee">Other tab content</v-tab>
    </vue-tabs>
  </div>
</template>

<script>
import { VueTabs, VTab } from "vue-nav-tabs";

export default {
  name: "knowlegdes",
  components: {
    VueTabs,
    VTab
  }
};
</script>


<style lang="scss">
.icon {
  display: inline-block;
  height: 61px;
  width: 70px;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: var(--brown);
  &.icon-eye {
    -webkit-mask: url("../assets/icons/eye.svg") no-repeat 50% 50%;
    mask: url("../assets/icons/eye.svg") no-repeat 50% 50%;
  }
  &.icon-coffee {
    -webkit-mask: url("../assets/icons/coffee.svg") no-repeat 50% 50%;
    mask: url("../assets/icons/coffee.svg") no-repeat 50% 50%;
  }
  &.icon-chalkboard {
    -webkit-mask: url("../assets/icons/chalkboard-teacher.svg") no-repeat 50%
      50%;
    mask: url("../assets/icons/chalkboard-teacher.svg") no-repeat 50% 50%;
  }
  &.icon-database {
    -webkit-mask: url("../assets/icons/database.svg") no-repeat 50% 50%;
    mask: url("../assets/icons/database.svg") no-repeat 50% 50%;
  }
  &.icon-server {
    -webkit-mask: url("../assets/icons/server.svg") no-repeat 50% 50%;
    mask: url("../assets/icons/server.svg") no-repeat 50% 50%;
  }
}
.nav-tabs {
  display: flex;
  list-style: none;
  justify-content: space-around;
  padding: 0;
  margin-bottom: 30px;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.tab {
  border: 1px solid var(--brown);
  border-radius: 50%;
  width: 130px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.4s;
  &s {
    &__link {
      color: var(--brown);
      text-align: center;
      text-decoration: none;
      font-weight: 300;
    }
  }
  &.active {
    background-color: var(--brown);
    position: relative;
    .tabs {
      &__link {
        color: var(--white);
        .icon {
          background-color: var(--white);
        }
      }
    }
    &:after {
      content: "";
      width: 30px;
      height: 30px;
      border: 1px solid var(--brown);
      border-width: 1px 1px 0 0;
      background-color: var(--white);
      position: absolute;
      bottom: -47px;
      transform: rotate(-45deg);
      cursor: initial;
    }
  }
}
.tab-content {
  border: 1px solid var(--brown);
  height: 50vh;
  margin-bottom: 50px;
  padding: 20px;
}
</style>
