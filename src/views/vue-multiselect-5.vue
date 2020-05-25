<template>
  <div>
    <h1>Multiple Select</h1>
    <div>
      <a href="https://vue-multiselect.js.org/#sub-multiple-select">Refer to this Link</a>
    </div>

    <label class="typo__label">Multiple Select</label>
    <multiselect
      v-model="value"
      :options="options"
      :multiple="true"
      :close-on-select="true"
      :clear-on-select="false"
      :preserve-search="true"
      placeholder="Pick some"
      label="name"
      track-by="name"
      :preselect-first="true"
    >
      <template slot="selection" slot-scope="{ values, search, isOpen }">
        <span
          class="multiselect__single"
          v-if="values.length &amp;&amp; !isOpen"
        >{{ displaySelectedValues(values) }} selected</span>
      </template>
    </multiselect>
    <pre class="language-json"><code>{{ value }}</code></pre>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect
  },
  data() {
    return {
      value: [],
      options: [
        { name: "Vue.js", language: "JavaScript" },
        { name: "Adonis", language: "JavaScript" },
        { name: "Rails", language: "Ruby" },
        { name: "Sinatra", language: "Ruby" },
        { name: "Laravel", language: "PHP" },
        { name: "Phoenix", language: "Elixir" }
      ]
    };
  },
  methods: {
    displaySelectedValues(values) {
      return values
        .slice(1)
        .reduce((s, x) => `${s}, ${x.name}`, values[0].name);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>