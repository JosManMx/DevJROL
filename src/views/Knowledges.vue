<template>
  <section class="section">
    <h2 class="section-title">{{title}}</h2>
    <vue-tabs>
      <v-tab title="Front-end" icon="icon icon-eye">
        <div v-for="(knowledge, key) in KNOWLEDGES.frontend" :key="key" class="knowledge">
          <p class="knowledge-label">{{knowledge.name}}</p>
          <progress-bar class="knowledge-chart" :options="chartsStyles" :value="knowledge.level"/>
          <p class="knowledge-percentage">{{knowledge.level}}%</p>
        </div>
      </v-tab>

      <v-tab title="Back-end" icon="icon icon-database">
        <div v-for="(knowledge, key) in KNOWLEDGES.backend" :key="key" class="knowledge">
          <p class="knowledge-label">{{knowledge.name}}</p>
          <progress-bar class="knowledge-chart" :options="chartsStyles" :value="knowledge.level"/>
          <p class="knowledge-percentage">{{knowledge.level}}%</p>
        </div>
      </v-tab>

      <v-tab title="Sys-Admin" icon="icon icon-server">
        <div v-for="(knowledge, key) in KNOWLEDGES.sysadmin" :key="key" class="knowledge">
          <p class="knowledge-label">{{knowledge.name}}</p>
          <progress-bar class="knowledge-chart" :options="chartsStyles" :value="knowledge.level"/>
          <p class="knowledge-percentage">{{knowledge.level}}%</p>
        </div>
      </v-tab>

      <v-tab title="CMS" icon="icon icon-chalkboard">
        <div v-for="(knowledge, key) in KNOWLEDGES.cms" :key="key" class="knowledge">
          <p class="knowledge-label">{{knowledge.name}}</p>
          <progress-bar class="knowledge-chart" :options="chartsStyles" :value="knowledge.level"/>
          <p class="knowledge-percentage">{{knowledge.level}}%</p>
        </div>
      </v-tab>

      <v-tab title="Varios" icon="icon icon-coffee">
        <div v-for="(knowledge, key) in KNOWLEDGES.various" :key="key" class="knowledge">
          <p class="knowledge-label">{{knowledge.name}}</p>
          <progress-bar class="knowledge-chart" :options="chartsStyles" :value="knowledge.level"/>
          <p class="knowledge-percentage">{{knowledge.level}}%</p>
        </div>
      </v-tab>
    </vue-tabs>
  </section>
</template>

<script>
import { VueTabs, VTab } from "vue-nav-tabs";
import { KNOWLEDGES } from "../data/knowledges.js";

export default {
  name: "knowlegdes",
  components: {
    VueTabs,
    VTab
  },
  data() {
    return {
      title: "Conocimientos",
      chartsStyles: {
        text: {
          color: "var(--brown)",
          shadowEnable: false,
          shadowColor: "transparent",
          fontSize: 14,
          fontFamily: "Lato",
          dynamicPosition: false,
          hideText: false
        },
        progress: {
          color: "var(--brown)",
          backgroundColor: "var(--white)"
        },
        layout: {
          height: 25,
          width: 800,
          verticalTextAlign: 150,
          horizontalTextAlign: 48.5,
          zeroOffset: 0,
          strokeWidth: 25,
          progressPadding: 0,
          type: "line"
        }
      },
      KNOWLEDGES
    };
  }
};
</script>


<style lang="scss">
@import "../sass/abstracts/variables";
@import "../sass/abstracts/mixins";

.nav-tabs {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin-bottom: 0;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @include bp-up($xs) {
    margin-bottom: 30px;
  }
}
.tab {
  border: 1px solid var(--brown);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.4s;
  margin-bottom: 1rem;
  &s {
    &__link {
      font-size: 14px;
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
  }
  @include bp-up($xs) {
    width: 130px;
    height: 130px;
    margin-bottom: 0;
    &s {
      &__link {
        font-size: 16px;
      }
    }
    &.active {
      &:after {
        content: "";
        width: 30px;
        height: 30px;
        border: 1px solid var(--brown);
        border-width: 1px 1px 0 0;
        background-color: var(--white);
        background: linear-gradient(
          45deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0) 49%,
          rgba(255, 255, 255, 1) 50%,
          rgba(255, 255, 255, 1) 100%
        );
        position: absolute;
        bottom: -47px;
        transform: rotate(-45deg);
        cursor: initial;
      }
    }
  }
}
.icon {
  display: inline-block;
  height: 40px;
  width: 50px;
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
  @include bp-up($xs) {
    height: 61px;
    width: 70px;
  }
}
.tab-content {
  border: 1px solid var(--brown);
  height: 50vh;
  margin-bottom: 50px;
  padding: 20px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 11px;
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

.knowledge {
  margin-bottom: 30px;
  &-label {
    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 18px;
    letter-spacing: normal;
    text-align: left;
    color: var(--brown);
    margin: 0 0 14px 0;
  }
  &-chart {
    border: 1px solid var(--brown);
    height: 25px;
    // TODO implement a chart responsive
    &.progress-bar {
      display: none;
    }
    @include bp-up($xs) {
      display: inline-block;
    }
  }
  &-percentage {
    margin: 0;
    text-align: right;
    font-size: 16px;
    font-weight: bold;
    line-height: 16px;
  }
}
</style>
