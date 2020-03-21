<template>
  <div class="container" style="padding-top:6%;">
    <div class="level" id="filter">
      <div class="field is-grouped is-grouped-multiline">
        <div class="control">
          <div class="tags has-addons">
            <a class="tag is-link">Technology</a>
            <a class="tag is-delete"></a>
          </div>
        </div>

        <div class="control">
          <div class="tags has-addons">
            <a class="tag is-link">CSS</a>
            <a class="tag is-delete"></a>
          </div>
        </div>

        <div class="control">
          <div class="tags has-addons">
            <a class="tag is-link">Flexbox</a>
            <a class="tag is-delete"></a>
          </div>
        </div>

        <div class="control">
          <div class="tags has-addons">
            <a class="tag is-link">Web Design</a>
            <a class="tag is-delete"></a>
          </div>
        </div>

        <div class="control">
          <div class="tags has-addons">
            <a class="tag is-link">Open Source</a>
            <a class="tag is-delete"></a>
          </div>
        </div>

        <div class="control">
          <div class="tags has-addons">
            <a class="tag is-link">Community</a>
            <a class="tag is-delete"></a>
          </div>
        </div>

        <div class="control">
          <div class="tags has-addons">
            <a class="tag is-link">Documentation</a>
            <a class="tag is-delete"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="level" id="efforts">
      <effort-item></effort-item>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EffortItem from "@/components/Effort-Item.vue";

export default {
  name: "Efforts",
  props: {
    msg: String
  },
  data() {
    return {};
  },
  methods: {},
  components: {
    "effort-item": EffortItem
  }
  // mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
