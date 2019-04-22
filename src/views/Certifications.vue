<template>
  <section class="section">
    <h2 class="section-title">{{title}}</h2>
    <div class="section-content">
      <div class="certifications">
        <article
          v-for="(certification, key) in CERTIFICATIONS"
          :key="key"
          class="certification collapsed"
        >
          <header class="certification-header" @click="collapser($event)">
            <span class="certification-title">{{certification.title}}</span>
            <i class="collapse-arrow"></i>
          </header>
          <div class="certification-info">
            <a :href="certification.url" class="certification-link">Ver Certificado</a>
            <div class="certification-acreditator">
              <b>Emisor:</b>
              {{certification.acreditator}}
            </div>
            <div class="certification-date">
              <b>Fecha:</b>
              {{certification.date}}
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import { CERTIFICATIONS } from "../data/certifications.js";
export default {
  name: "introduction",
  data() {
    return {
      title: "Certificaciones",
      CERTIFICATIONS
    };
  },
  methods: {
    collapser(ev) {
      let target = ev.target.closest(".certification");
      if (target.className == "certification") {
        target.className = "certification collapsed";
      } else {
        target.className = "certification";
      }
    }
  }
};
</script>

<style lang="scss">
@import "../sass/abstracts/variables";
@import "../sass/abstracts/mixins";

.certification {
  margin-bottom: 20px;
  &-header {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background-color: var(--brown);
    cursor: pointer;
    // text
    font-size: 18px;
    color: var(--white);
    font-weight: bold;
    line-height: 22px;
    letter-spacing: normal;
    padding: 3px 15px;
    transition: border-radius 0.3s;
  }
  .collapse-arrow {
  }
  &-info {
    display: flex;
    flex-direction: column-reverse;
    padding: 20px;
    background: var(--brown-light);
    overflow: hidden;
    transition: height 0.3s, padding 0.3s;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    @include bp-up($xs) {
      display: block;
    }
  }
  &-link {
    // Container
    padding: 8px 35px;
    background: #fff;
    border: 1px solid var(--brown);
    margin-top: 1rem;
    // Text
    font-size: 18px;
    font-weight: normal;
    line-height: 1;
    text-align: center;
    color: var(--brown);
    text-decoration: none;
    // Position
    float: right;
  }
  &-date,
  &-acreditator {
    color: var(--brown);
  }
  &.collapsed {
    .certification-header {
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    .certification-info {
      height: 0px;
      padding: 0 20px;
    }
    .collapse-arrow {
    }
  }
}
</style>
