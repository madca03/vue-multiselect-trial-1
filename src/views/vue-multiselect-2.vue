<template>
  <div>
    <h1>Single Select with Array Options</h1>
    <div>
      <a href="https://vue-multiselect.js.org/#sub-single-select">Refer to this Link</a>
    </div>

    <div>
      <label class="typo__label">Single Select with Array Options</label>
      <multiselect
        v-model="value"
        :options="options"
        :searchable="true"
        :close-on-select="true"
        :show-labels="true"
        placeholder="Pick a value"
      ></multiselect>
      <pre class="language-json"><code>{{ value }}</code></pre>
    </div>
  </div>
</template>

<script>
import MultiSelect from "vue-multiselect";

export default {
  components: { multiselect: MultiSelect },
  data() {
    return {
      value: "",
      options: [
        "Select option",
        "options",
        "selected",
        "mulitple",
        "label",
        "searchable",
        "clearOnSelect",
        "hideSelected",
        "maxHeight",
        "allowEmpty",
        "showLabels",
        "onChange",
        "touched"
      ]
    };
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
</style>