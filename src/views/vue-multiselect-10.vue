<template>
  <div>
    <h1>Option groups</h1>
    <div>
      <a href="https://vue-multiselect.js.org/#sub-option-groups">Refer to this Link</a>
    </div>

    <label class="typo__label">Groups</label>
    <multiselect
      :value="value"
      :options="options"
      :multiple="true"
      group-values="libs"
      group-label="language"
      :group-select="false"
      placeholder="Type to search"
      track-by="name"
      label="name"
      @input="updateValueArrayAction"
    >
      <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
    </multiselect>
    <pre class="language-json"><code>{{ value  }}</code></pre>
  </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import Multiselect from "vue-multiselect";

const { mapActions, mapState } = Vuex;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    value: [],
    options: [
      {
        language: "Javascript",
        libs: [
          { name: "Vue.js", category: "Front-end" },
          { name: "Adonis", category: "Backend" }
        ]
      },
      {
        language: "Ruby",
        libs: [
          { name: "Rails", category: "Backend" },
          { name: "Sinatra", category: "Backend" }
        ]
      },
      {
        language: "Other",
        libs: [
          { name: "Laravel", category: "Backend" },
          { name: "Phoenix", category: "Backend" }
        ]
      }
    ]
  },
  mutations: {
    updateValueArray(state, value) {
      console.log(value);
      state.value = value;
    }
  },
  actions: {
    updateValueArrayAction({ commit }, value) {
      commit("updateValueArray", value);
    }
  }
});

export default {
  store,
  components: {
    Multiselect
  },
  computed: {
    ...mapState(["value", "options"])
  },
  methods: {
    ...mapActions(["updateValueArrayAction"])
  }
};
</script>

<style lang="scss" scoped>
</style>