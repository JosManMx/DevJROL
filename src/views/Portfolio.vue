<template>
  <section class="section">
    <h2 class="section-title">{{title}}</h2>
    <div class="section-content">
      <div class="portfolios">
        <div v-for="(portfolio, key) in portfolios" :key="key" class="portfolio">
          <a :href="portfolio.url" target="_blank">
            <span class="portfolio-description">{{portfolio.description}}</span>
            <div class="portfolio-image">
              <img :src="portfolios" :alt="portfolio.description">
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "introduction",
  data() {
    return {
      title: "Portafolio",
      portfolios: [
        {
          description: "En Behance",
          url: "https://www.behance.net/jostechs",
          // FIXME no carga las imagenes como debería
          image: "../assets/avatar-j-rafael-otero.jpg"
        },
        {
          description: "En JosTechS",
          url: "https://jostech.com.ve/portafolio",
          image: "/assets/portfolio/jostech-isotipo.svg"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.portfolio {
  &s {
    display: flex;
    justify-content: space-between;
  }
  & {
    text-align: center;
    a {
      color: var(--brown);
    }
  }
  &-image {
    margin-top: 10px;
    width: 350px;
    border-radius: 4px;
    padding: 0.25em;
    border: 1px solid var(--brown-light);
    img {
      width: 100%;
    }
  }
}
</style>
