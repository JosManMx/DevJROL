<template>
  <nav>
    <div class="profile-img">
      <img class="img" src="https://fakeimg.pl/221" alt>
    </div>
    <ul class="menu">
      <!-- <li v-for="item in menuItems"> -->
      <li class="menu-item" :key="item.key" v-for="item in items">
        <a class="menu-link" :href="item.url">{{ item.name }}</a>
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
          key: 1,
          name: "Introduction",
          url: "/"
        },
        {
          key: 2,
          name: "Datos Personales",
          url: "datos-personales"
        },
        {
          key: 3,
          name: "Experiencia",
          url: "experiencia"
        },
        {
          key: 4,
          name: "Idiomas",
          url: "idiomas"
        },
        {
          key: 5,
          name: "Portafolios",
          url: "portafolios"
        },
        {
          key: 6,
          name: "Certificaciones",
          url: "certificaciones"
        },
        {
          key: 7,
          name: "Reconocimientos",
          url: "reconocimientos"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.profile-img {
  padding: 0 20px;
  min-height: 340px;
  display: flex;
  align-items: center;
  .img {
    border-radius: 5px;
  }
}
.menu {
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-align: center;
  &-item {
    margin-bottom: 7px;
  }
  &-link {
    color: var(--brown-light);
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
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

