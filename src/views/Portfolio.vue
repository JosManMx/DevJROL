<template>
  <section class="section">
    <h2 class="section-title">{{title}}</h2>
    <div class="section-content">
      <div class="portfolios">
        <div v-for="(portfolio, key) in portfolios" :key="key" class="portfolio">
          <a :href="portfolio.url" target="_blank">
            <span class="portfolio-description">{{portfolio.description}}</span>
            <figure class="portfolio-image">
              <img :src="portfolio.image" :alt="portfolio.description">
              <figcaption>{{portfolio.caption}}</figcaption>
            </figure>
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
          image: "/src/assets/portfolio/behance-logo.png",
          caption: "Diseños realizados"
        },
        {
          description: "En JosTechS",
          url: "https://jostech.com.ve/portafolio",
          image: "/src/assets/portfolio/jostech-logotipo-isotipo.png",
          caption: "Webs, Apps, E-commerces..."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../sass/abstracts/variables";
@import "../sass/abstracts/mixins";

.portfolio {
  &s {
    @include bp-up($xs) {
      display: flex;
      justify-content: space-between;
    }
  }
  & {
    text-align: center;
    a {
      color: var(--brown);
    }
  }
  &-image {
    margin-top: 10px;
    border-radius: 4px;
    padding: 0.25em;
    border: 1px solid var(--brown-light);
    margin: 20px 0;
    img {
      width: 100%;
    }
  }
  @include bp-up($xs) {
    &-image {
      width: 350px;
      margin: 10px 40px;
    }
  }
}
</style>
