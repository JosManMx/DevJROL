<template>
  <header class="header">
    <div class="header-container">
      <div class="header-content">
        <div class="menu-toggle">
          <span @click="$emit('menu-toggle')" class="menu-button">MENU</span>
        </div>
        <h1 class="profile-name">{{profileName}}</h1>
        <p class="profile-profession">{{ profileProfession }}</p>
        <hr>
        <div class="social-icons">
          <div class="social-row">
            <div class="social-whatsapp">
              <a :href="getWhatsappUrl" class="social-icon socicon-whatsapp"></a>
              <a :href="getPhoneUrl" class="whatsapp-number">+56 9 54 471 723</a>
            </div>
          </div>
          <div class="social-row">
            <a
              href="https://facebook.com/j.rafaelotero"
              target="_blank"
              class="social-icon socicon-facebook"
            ></a>
            <a
              href="https://twitter.com/JosManMx"
              class="social-icon socicon-twitter"
              target="_blank"
            ></a>
            <a
              href="https://www.linkedin.com/in/rafael-otero/"
              class="social-icon socicon-linkedin"
              target="_blank"
            ></a>
            <a href="mailto:hola@jostech.com.ve" class="social-icon socicon-mail" target="_blank"></a>
            <a href="https://t.me/jostechs" class="social-icon socicon-telegram" target="_blank"></a>
            <a
              href="https://github.com/JosManMx"
              class="social-icon socicon-github"
              target="_blank"
            ></a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "header-app",
  data() {
    return {
      profileName: "José Rafael Otero López",
      profileShortName: "Rafael Otero",
      profileProfession: "Desarrollador Web",
      profilePhone: "56954471723"
    };
  },
  computed: {
    getPhoneUrl: function() {
      const PREFIX_URL = "tel:+";
      return PREFIX_URL + this.profilePhone;
    },
    getWhatsappUrl: function() {
      const API_BASE = "https://api.whatsapp.com/send?phone=";
      const MESSAGE = "Hola " + this.profileShortName + ", ";
      const TEXT = MESSAGE.replace(" ", "%20");
      return API_BASE + this.profilePhone + "&text=" + TEXT;
    }
  }
};
</script>

<style lang="scss">
@import "../sass/abstracts/variables";
@import "../sass/abstracts/_mixins.scss";

.header {
  background-color: var(--brown-light);
  top: 20px;
  left: 0;
  width: 100%;
  z-index: 1;
  margin-bottom: 20px;

  &-container {
    max-width: var(--max-width-containers);
    margin: auto;
  }
  &-content {
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
  }
  @include bp-up($xs) {
    position: fixed;
    &::before {
      content: "";
      background-color: #fff;
      position: fixed;
      top: 0;
      height: 20px;
      width: 100%;
    }
    &-content {
      padding: 20px 0;
      margin-left: var(--left-column-width);
    }
  }
}
.profile {
  &-name {
    margin: 0;
    font-size: 24px;
    font-family: "Nova Square";
    font-weight: normal;
    letter-spacing: normal;
    color: var(--brown);
  }
  &-profession {
    font-family: "Nova Square";
    font-size: 18px;
    font-weight: normal;
    line-height: 1.22;
    letter-spacing: normal;
    text-align: center;
    color: var(--brown);
    margin-top: 0;
    margin-bottom: 5px;
  }
  @include bp-up($xs) {
    &-name {
      font-size: 40px;
      margin-bottom: 10px;
    }
    &-profession {
      margin-bottom: 15px;
      font-size: 32px;
    }
  }
}
.social {
  &-icon {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: var(--brown);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    margin-right: 10px;
    transition: color 0.3s ease-out, background-color 0.3s ease-out;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      color: var(--brown);
      background-color: var(--brown-light);
    }
  }
  &-whatsapp {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    .whatsapp-number {
      font-family: "Lato";
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.25;
      letter-spacing: normal;
      text-align: left;
      color: var(--brown);
      text-decoration: none;
    }
    .socicon-whatsapp {
      margin-right: 5px;
    }
  }
  @include bp-up($xs) {
    &-icon {
      width: 36px;
      height: 36px;
      font-size: 24px;
      margin-right: 20px;
    }
    &-whatsapp {
      .whatsapp-number {
        font-size: 24px;
      }
    }
  }
}
.menu-toggle {
  display: flex;
  justify-content: flex-end;
}
</style>
