<template>
  <nav class="navigation">
    <div class="menu-toggle">
      <span @click="$emit('menu-toggle')" class="menu-button close">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="window-close"
          class="svg-inline--fa fa-window-close fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z"
          ></path>
        </svg>
      </span>
    </div>
    <div class="profile-img">
      <img class="img" src="../assets/avatar-j-rafael-otero2.jpg" alt>
    </div>
    <ul class="menu">
      <li class="menu-item" @click="$emit('menu-toggle')" :key="key" v-for="(item, key) in items">
        <router-link class="menu-link" active-class="active" :to="item.url" exact>{{ item.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      items: [
        {
          name: "Introducción",
          url: "/"
        },
        {
          name: "Datos Personales",
          url: "datos-personales"
        },
        {
          name: "Experiencia",
          url: "experiencia"
        },
        {
          name: "Conocimientos",
          url: "conocimientos"
        },
        {
          name: "Portafolio",
          url: "portafolio"
        },
        {
          name: "Idiomas",
          url: "idiomas"
        },
        {
          name: "Certificaciones",
          url: "certificaciones"
        },
        {
          name: "Reconocimientos",
          url: "reconocimientos"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../sass/abstracts/variables";
@import "../sass/abstracts/mixins";
.navigation {
  position: fixed;
  top: 0;
  right: 100%;
  min-height: 700px;
  min-width: var(--left-column-width);
  background: var(--brown);
  z-index: 2;
  padding: 0;
  @include bp-up($xs) {
    right: auto;
    min-height: 100vh;
  }
}
.profile-img {
  padding: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  .img {
    border-radius: 5px;
    max-width: 90%;
    margin: auto;
  }
  @include bp-up($xs) {
    padding: 20px 20px 0;
  }
}
.menu {
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-align: center;
  &-item {
    margin-bottom: 5px;
  }
  &-link {
    color: var(--brown-light);
    text-decoration: none;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.2;
    letter-spacing: normal;
    padding: 7px;
    display: block;
    position: relative;
    &:before {
      content: "";
      background: var(--brown-light);
      width: 0%;
      height: 100%;
      left: 50%;
      transform: translateX(-50%);
      top: 0;
      position: absolute;
      z-index: -1;
      transition: color 0.3s linear, width 0.3s linear;
    }
    &:hover,
    &.active {
      color: var(--brown);
      &:before {
        width: 100%;
      }
    }
  }
}
</style>

