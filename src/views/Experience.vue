<template>
  <section class="section">
    <h2 class="section-title">{{title}}</h2>
    <div class="section-content">
      <div class="experience" v-for="experience in experiences" :key="experience.key">
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
          <img src="https://fakeimg.pl/400x200" alt>
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
            "HTML, CSS, JavaScript, Jquery, PHP, PHP-Symfony, Prestashop, Git, MySQL"
        },
        {
          company: "JosTechS - Soluciones Tecnológicas",
          position: "CEO / Founder",
          duration: "Febrero 2014 - actualidad (5 años y 3 meses)",
          technologies:
            "HTML, CSS, JavaScript, Jquery, PHP, PHP-Symfony, Prestashop, Git, MySQL"
        },
        {
          company: "Oteroweb",
          position: "Desarrollador web Front-End",
          duration: "Junio 2016 - Noviembre 2017 (1 año 6 meses)",
          technologies:
            "HTML, CSS, JavaScript, Jquery, PHP, PHP-Symfony, Prestashop, Git, MySQL"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.experience {
  display: flex;
  padding-bottom: 13px;
  border-bottom: 1px solid var(--brown-light);
  margin-bottom: 13px;
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
  &-tech {
    margin-top: 2rem;
  }
}
</style>
