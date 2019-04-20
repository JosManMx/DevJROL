<template>
  <section class="section">
    <h2 class="section-title">{{title}}</h2>
    <dl class="definition-list">
      <dt class="definition-term">Nombre:</dt>
      <dd class="definition-description">José Rafael</dd>
      <dt class="definition-term">Apellido:</dt>
      <dd class="definition-description">Otero López</dd>
      <dt class="definition-term">Nacionalidad:</dt>
      <dd class="definition-description">Venezolano</dd>
      <dt class="definition-term">Estado Civil:</dt>
      <dd class="definition-description">Casado</dd>
      <dt class="definition-term">Edad</dt>
      <dd class="definition-description">28</dd>
      <dt class="definition-term">Fecha de Nacimiento</dt>
      <dd class="definition-description">21-08-1991</dd>
      <dt class="definition-term">Dirección:</dt>
      <dd class="definition-description">Quilpué, V Región Valparaiso</dd>
      <dt class="definition-term">Correo Electrónico:</dt>
      <dd class="definition-description">
        <a class="email" href="mailto:hola@jostech.com.ve">hola@jostech.com.ve</a>
      </dd>
    </dl>
  </section>
</template>

<script>
export default {
  name: "introduction",
  data() {
    return {
      title: "Datos Personales"
    };
  }
};
</script>

<style lang="scss" scoped>
.definition {
  &-list {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }
  &-term,
  &-description {
    background: var(--brown-light);
    flex-basis: calc(50% - 30px);
    margin-left: 0;
    padding: 5px 15px;
    // text
    font-size: 16px;
    line-height: 19px;
    letter-spacing: normal;
    text-align: left;
    color: var(--brown);
  }
  &-term {
    font-weight: bold;
  }
  &-term:nth-child(4n-1),
  &-description:nth-child(4n) {
    background: #fff;
  }
}
.email {
  color: var(--brown);
}
</style>
