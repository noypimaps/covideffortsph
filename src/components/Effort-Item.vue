<template>
  <div class="card">
    <div class="card-content">
      <p>
        <span
          v-if="orgType != ''"
          class="tag is-success is-medium"
          :class="{
            'is-success': orgType == 'Organization',
            'is-danger': orgType == 'Hospital',
            'is-warning': orgType == 'Supplier'
          }"
          style="float:right;"
          >{{ orgType }}</span
        >
      </p>
      <p id="effort-item-title" class="title is-3">{{ organization }}</p>
      <p class="subtitle is-6" style="text-align:left;margin-bottom:2px;">
        {{ subtitle }}
      </p>
      <p
        v-if="linkInfo != 'No Info'"
        id="effort-item-link"
        class="subtitle"
        style="width:80%;"
      >
        <a
          :href="linkInfo"
          v-for="link in linkInfo"
          :key="link.key"
          target="_blank"
          style="font-size:15px;"
          >{{ link }}</a
        >
      </p>
      <br v-else />
      <div class="content" style="text-align:left;">
        <h6 v-if="orgType!='Supplier'" class="subtitle is-6 attr_label">Needs</h6>
        <h6 v-else class="subtitle is-6 attr_label">Provides</h6>
        <div class="tags are-medium">
          <span
            v-for="need in needsArray"
            :key="need.key"
            class="tag is-primary"
            >{{ need }}</span
          >
        </div>
        <h6 class="subtitle is-6 attr_label">Contact Details</h6>
        <p>
          <span v-html="parsedContactDetails"></span>
        </p>
        <!-- <h6 class="subtitle is-6 attr_label">Urgency</h6>
            <p>{{ severityUrgency }}</p> -->
        <!-- <div class="columns">
          <div class="column is-half">
            <h6 class="subtitle is-6 attr_label">Status</h6>
            <p>{{ status }}</p>
          </div>
          <div class="column is-half">
            <h6 class="subtitle is-6 attr_label">Type</h6>
            <p>{{ type }}</p>
          </div>
        </div> -->
        <div class="columns">
          <div class="column is-half">
            <h6 class="subtitle is-6 attr_label">What they do</h6>
            <p>{{ whatTheyDo }}</p>
          </div>
          <div class="column is-half">
            <h6 class="subtitle is-6 attr_label">Who they help</h6>
            <p>{{ whoTheyHelp }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Effort-Item",
  props: {
    contactDetails: String,
    linkInfo: Array,
    needs: String,
    organization: String,
    severityUrgency: String,
    status: String,
    type: String,
    whatTheyDo: String,
    whoTheyHelp: String,
    orgType: String,
    subtitle: String
  },
  data() {
    return {
      needsArray: []
    };
  },
  computed: {
    parsedContactDetails: function() {
      // `this` points to the vm instance
      // console.log(this.contactDetails);
      return this.contactDetails.replace(/(?:\r\n|\r|\n)/g, "<br />");
    }
  },
  methods: {
    needstoArray: function() {
      const needsArr = this.needs.split(",");
      this.needsArray = needsArr;
    }
  },
  filters: {
    newLinesParse: function(value) {
      return value.replace(/(?:\r\n|\r|\n)/g, "<br />");
    }
  },
  mounted() {
    this.needstoArray();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.card {
  margin-bottom: 20px;
}
#effort-item-title {
  text-align: left;
  width: 500px;
  font-size: 25px;
}
#effort-item-link {
  text-align: left;
}
.attr_label {
  margin-bottom: 7px !important;
}
</style>
