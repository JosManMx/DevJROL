<template>
  <header class="header">
    <div class="header-container">
      <div class="header-content">
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
            <a href="#" class="social-icon socicon-facebook"></a>
            <a href="#" class="social-icon socicon-twitter"></a>
            <a href="#" class="social-icon socicon-linkedin"></a>
            <a href="#" class="social-icon socicon-mail"></a>
            <a href="#" class="social-icon socicon-telegram"></a>
            <a href="#" class="social-icon socicon-github"></a>
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
.header {
  position: fixed;
  background-color: var(--brown-light);
  top: 20px;
  left: 0;
  width: 100%;
  z-index: 1;
  &::before {
    content: "";
    background-color: #fff;
    position: fixed;
    top: 0;
    height: 20px;
    width: 100%;
  }
  &-container {
    max-width: var(--max-width-containers);
    margin: auto;
  }
  &-content {
    text-align: center;
    margin-left: var(--left-column-width);
    padding: 50px 0;
    box-sizing: border-box;
  }
}
.profile {
  &-name {
    margin: 0;
    font-family: "Nova Square";
    font-size: 40px;
    font-weight: normal;
    letter-spacing: normal;
    color: var(--brown);
    margin-bottom: 10px;
  }
  &-profession {
    font-family: "Nova Square";
    font-size: 32px;
    font-weight: normal;
    line-height: 1.22;
    letter-spacing: normal;
    text-align: center;
    color: var(--brown);
    margin-top: 0;
    margin-bottom: 15px;
  }
}
.social {
  &-icon {
    width: 36px;
    height: 36px;
    border-radius: 5px;
    background-color: var(--brown);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-decoration: none;
    font-size: 24px;
    margin-right: 20px;
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
      font-size: 24px;
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
}
</style>
