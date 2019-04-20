<template>
  <section class="section">
    <h2 class="section-title">{{title}}</h2>
    <div class="section-content">
      <div class="adwards">
        <div class="adward">
          <div class="adward-cover">
            <img
              class="img"
              src="/src/assets/adwards/startupweekendmaracay/certificado.jpg"
              @click="index = 0"
              alt
            >
          </div>
          <p class="adward-title">1er Lugar en StartupWeekend Maracay 2018</p>
          <div class="adward-data">
            <dl class="adward-definitions">
              <dt class="adward-term">Fecha:</dt>
              <dd class="adward-date">Agosto 2018</dd>
              <dt class="adward-term">Lugar:</dt>
              <dd class="adward-place">Maracay, Venezuela</dd>
              <dt class="adward-term">Descripción:</dt>
              <dd
                class="adward-description"
              >StartupWeekend es un programa internacional con sede en muchos paises donde se exponen ideas de emprendimiento las cuales se desarrollan en 54 horas continuas, para posteriormente ser evaluadas por un panel de jurados especialistas que determinan la viabilidad de los emprendimientos en un campo empresarial real.</dd>
            </dl>
          </div>
          <div class="adward-gallery">
            <gallery
              :images="images"
              :index="index"
              :options="{youTubeVideoIdProperty: 'youtube', youTubePlayerVars: undefined, youTubeClickToPlay: true}"
              @close="index = null"
            ></gallery>
            <carousel
              :perPage="4"
              :scrollPerPage="false"
              :navigationEnabled="true"
              :paginationEnabled="false"
              :centerMode="true"
              :loop="true"
            >
              <slide
                v-for="(image, imageIndex) in images"
                :key="imageIndex"
                class="gallery-thumbnail"
              >
                <div
                  @click="index = imageIndex"
                  class="image"
                  :style="{ backgroundImage: 'url(' + image.poster + ')' }"
                ></div>
              </slide>
            </carousel>
            <!-- <div
              v-for="(image, imageIndex) in images"
              @click="index = imageIndex"
              :style="{ backgroundImage: 'url(' + image.poster + ')', width: '300px', height: '200px' }"
              :key="imageIndex"
            ></div>-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueGallery from "vue-gallery";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "introduction",
  components: {
    gallery: VueGallery,
    Carousel,
    Slide
  },
  data() {
    return {
      title: "Reconocimientos",
      images: [
        {
          title: "Video: 1er lugar - Mocing StartupWeekend Maracay - Venezuela",
          href: "https://youtu.be/gUYa7sWYWKs",
          type: "text/html",
          youtube: "gUYa7sWYWKs",
          poster: "/src/assets/adwards/startupweekendmaracay/certificado.jpg"
        },
        {
          title: "Banner del evento",
          href: "/src/assets/adwards/startupweekendmaracay/SWM-photo-1.jpg",
          type: "image/jpeg",
          poster: "/src/assets/adwards/startupweekendmaracay/SWM-photo-1.jpg"
        },
        {
          title: "Parte del grupo del estado Lara",
          href: "/src/assets/adwards/startupweekendmaracay/SWM-photo-2.jpg",
          type: "image/jpeg",
          poster: "/src/assets/adwards/startupweekendmaracay/SWM-photo-2.jpg"
        },
        {
          title: "Equipo del 2do Lugar; Passaje",
          href: "/src/assets/adwards/startupweekendmaracay/SWM-photo-3.jpg",
          type: "image/jpeg",
          poster: "/src/assets/adwards/startupweekendmaracay/SWM-photo-3.jpg"
        },
        {
          title: "Equipo del 1er Lugar; Mocing",
          href: "/src/assets/adwards/startupweekendmaracay/SWM-photo-4.jpg",
          type: "image/jpeg",
          poster: "/src/assets/adwards/startupweekendmaracay/SWM-photo-4.jpg"
        },
        {
          title: "Equipo de Mención Honorífica; Bluear",
          href: "/src/assets/adwards/startupweekendmaracay/SWM-photo-5.jpg",
          type: "image/jpeg",
          poster: "/src/assets/adwards/startupweekendmaracay/SWM-photo-5.jpg"
        },
        {
          title: "Equipo de Mención Honorífica; Bluear 2",
          href: "/src/assets/adwards/startupweekendmaracay/SWM-photo-6.jpg",
          type: "image/jpeg",
          poster: "/src/assets/adwards/startupweekendmaracay/SWM-photo-6.jpg"
        },
        {
          title: "Rafael Otero y Jose L. Otero",
          href: "/src/assets/adwards/startupweekendmaracay/SWM-photo-7.jpg",
          type: "image/jpeg",
          poster: "/src/assets/adwards/startupweekendmaracay/SWM-photo-7.jpg"
        }
      ],
      index: null
    };
  }
};
</script>

<style lang="scss">
.adward {
  display: grid;
  grid-template-areas:
    "image title"
    "image data"
    "gallery gallery";
  grid-template-rows: minmax(max-content, max-content);
  grid-column-gap: 30px;
  align-content: start;

  &-cover {
    grid-area: image;
    margin-bottom: 30px;
    .img {
      width: 100%;
      max-width: 450px;
    }
  }
  &-title {
    grid-area: title;

    margin-top: 0;
    margin-bottom: 12px;
    padding-bottom: 4px;
    border-bottom: 1px solid var(--brown);

    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    line-height: 1.1;
    color: var(--brown);
  }
  &-data {
    grid-area: data;
  }
  &-gallery {
    grid-area: gallery;
    margin-bottom: 50px;
    padding: 0 20px;
    .gallery-thumbnail {
      margin-right: 30px;
    }
    .gallery-thumbnail,
    .image {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      height: 130px;
      max-width: 165px;
    }
  }
  &-definitions {
    margin: 0;
  }
  &-term {
    font-size: 16px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.13;
    letter-spacing: normal;
    text-align: left;
    color: var(--brown);
    width: 49%;
    display: inline-block;
    margin-bottom: 10px;
  }
  &-date,
  &-place {
    margin: 0;
    width: 50%;
    display: inline-block;
    color: var(--brown);
  }
  &-description {
    margin-left: 0;
    font-size: 16px;
    line-height: 1.13;
    letter-spacing: normal;
    text-align: left;
    color: var(--brown);
  }
}
</style>
