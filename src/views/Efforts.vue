<template>
  <div ref="efforts" class="container">
    <div class="level" id="efforts">
      <effort-item
        v-for="item in efforts"
        :key="item.key"
        :contactDetails="item.CONTACT_DETAILS"
        :linkInfo="item.LINK_FOR_MORE_INFO"
        :needs="item.NEEDS"
        :organization="item.ORGANIZATION"
        :severityUrgency="item.SEVERITY_URGENCY"
        :status="item.STATUS"
        :type="item.TYPE"
        :whatTheyDo="item.WHAT_THEY_DO"
        :whoTheyHelp="item.WHO_THEY_HELP"
        :orgType="item.ORG_TYPE"
        :subtitle="item.SUBTITLE"
      ></effort-item>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// @ is an alias to /src
import EffortItem from "@/components/Effort-Item.vue";

export default {
  name: "Efforts",
  props: {
    query: String,
    efforts: Array
  },
  data() {
    return {
      // efforts: []
    };
  },
  methods: {},
  created() {
    // this.fetchEfforts();
  },
  // updated() {},
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
#efforts {
  display: block;
}
</style>
