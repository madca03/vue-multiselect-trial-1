<template>
  <div>
    <multiselect v-model="value" :options="options" />
  </div>
</template>

<script>
import MultiSelect from "vue-multiselect";

export default {
  components: { multiselect: MultiSelect },
  data() {
    return {
      value: null,
      options: ["list", "of", "options"]
    };
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
</style>