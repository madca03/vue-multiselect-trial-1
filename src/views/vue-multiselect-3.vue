<template>
  <div>
    <h1>Single Select with Object Options</h1>
    <div>
      <a href="https://vue-multiselect.js.org/#sub-single-select-object">Refer to this Link</a>
    </div>

    <label class="typo__label">Single Select with Object Options</label>
    <multiselect
      v-model="value"
      deselect-label="Can't remove this value"
      track-by="name"
      label="name"
      placeholder="Select one"
      :options="options"
      :searchable="true"
      :allow-empty="true"
    >
      <template slot="singleLabel" slot-scope="{ option }">
        <strong>{{ option.name }}</strong> is written in
        <strong>{{ option.language }}</strong>
      </template>
    </multiselect>
    <pre class="language-json"><code>{{ value }}</code></pre>
  </div>
</template>

<script>
import MultiSelect from "vue-multiselect";

export default {
  components: { multiselect: MultiSelect },
  data() {
    return {
      value: null,
      options: [
        { name: "Vue.js", language: "JavaScript" },
        { name: "Rails", language: "Ruby" },
        { name: "Sinatra", language: "Ruby" },
        { name: "Laravel", language: "PHP", $isDisabled: true },
        { name: "Phoenix", language: "Elixir" }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
</style>