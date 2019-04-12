<template>
  <section class="section">
    <h2 class="section-title">{{title}}</h2>
    <div class="section-content">
      <div class="languages">
        <div v-for="language in languages" :key="language.key" class="language">
          <p class="language-label">{{language.label}}</p>
          <progress-bar
            class="language-chart"
            :options="chartsStyles"
            :value="language.percentage"
          />
          <p class="language-percentage">{{language.percentage}}%</p>
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
      title: "Idiomas",
      chartsStyles: {
        text: {
          color: "var(--brown)",
          shadowEnable: false,
          shadowColor: "transparent",
          fontSize: 14,
          fontFamily: "Lato",
          dynamicPosition: false,
          hideText: false
        },
        progress: {
          color: "var(--brown)",
          backgroundColor: "#ffffff"
        },
        layout: {
          height: 25,
          width: 843,
          verticalTextAlign: 150,
          horizontalTextAlign: 48.5,
          zeroOffset: 0,
          strokeWidth: 25,
          progressPadding: 0,
          type: "line"
        }
      },
      languages: [
        {
          label: "Español",
          percentage: 95
        },
        {
          label: "Inglés",
          percentage: 80
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.language {
  margin-bottom: 30px;
  &-label {
    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 18px;
    letter-spacing: normal;
    text-align: left;
    color: var(--brown);
    margin: 0 0 14px 0;
  }
  &-chart {
    border: 1px solid var(--brown);
    height: 25px;
  }
  &-percentage {
    margin: 0;
    text-align: right;
    font-size: 16px;
    font-weight: bold;
    line-height: 16px;
  }
}
</style>
