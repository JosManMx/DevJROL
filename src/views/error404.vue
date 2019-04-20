<template>
  <section class="section">
    <H3></H3>
    <p class="error-text">Wow... la sección que buscas no fué encontrada... :(</p>
  </section>
</template>

<script>
export default {
  name: "introduction"
};
</script>

<style lang="scss">
.error-text {
  font-size: 2rem;
  text-align: center;
  line-height: 2;
  color: var(--brown);
  padding: 3em;
}
</style>
