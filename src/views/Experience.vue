<template>
  <section class="section">
    <h2 class="section-title">{{title}}</h2>
    <div class="section-content">
      <div class="experience" v-for="(experience, key) in experiences" :key="key">
        <div class="experience-info">
          <p class="experience-company">
            <b>Empresa/Organización:</b>
            {{experience.company}}
          </p>
          <p class="experience-position">
            <b>Cargo:</b>
            {{experience.position}}
          </p>
          <p class="experience-time">
            <b>Duración:</b>
            {{experience.duration}}
          </p>

          <div class="experience-tech">
            <p>
              <b>Tecnologías:</b>
            </p>
            <p>{{experience.technologies}}</p>
          </div>
        </div>
        <div class="experience-logo">
          <img class="img" :src="experience.image" :alt="experience.company">
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
      title: "Experiencia",
      experiences: [
        {
          company: "Línea Gráfica ECE SL",
          position: "Desarrollador web",
          duration: "Octubre 2018 - Abril 2019 (7 meses)",
          technologies:
            "HTML, CSS, JavaScript, Jquery, PHP, PHP-Symfony, Prestashop, Git, MySQL",
          image: "/src/assets/experiences/lineagrafica.jpg"
        },
        {
          company: "JosTechS - Soluciones Tecnológicas",
          position: "CEO / Founder",
          duration: "Febrero 2014 - actualidad (5 años y 3 meses)",
          technologies:
            "HTML, CSS, JavaScript, Jquery, PHP, PHP-Symfony, Prestashop, Git, MySQL",
          image: "/src/assets/experiences/jostech.png"
        },
        {
          company: "Oteroweb",
          position: "Desarrollador web Front-End",
          duration: "Junio 2016 - Noviembre 2017 (1 año 6 meses)",
          technologies:
            "HTML, CSS, JavaScript, Jquery, PHP, PHP-Symfony, Prestashop, Git, MySQL",
          image: "/src/assets/experiences/oteroweb.png"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../sass/abstracts/variables";
@import "../sass/abstracts/mixins";
.experience {
  display: flex;
  padding-bottom: 13px;
  border-bottom: 1px solid var(--brown-light);
  margin-bottom: 13px;
  flex-direction: column-reverse;
  &-info {
    margin-right: 15px;
  }

  &-company,
  &-position,
  &-time,
  &-tech p {
    margin: 0 0 10px 0;

    font-size: 16px;
    line-height: 1.19;
    letter-spacing: normal;
    color: var(--brown);
  }
  &-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    margin-bottom: 30px;
    .img {
      max-width: 100%;
    }
  }
  @include bp-up($xs) {
    flex-direction: row;
    &-logo {
      margin: auto;
    }
    &-tech {
      margin-top: 2rem;
    }
  }
}
</style>
