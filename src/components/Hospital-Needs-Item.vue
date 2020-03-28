<template>
  <div
    class="card"
    :class="{ card_highlight: highlightFlag }"
    :id="String(elementID) + '_' + type"
    @mouseover="
      highlightFlag = true;
      $emit('onEffortCardClick', { elementID, type, latLng });
    "
    @mouseout="highlightFlag = false"
  >
    <div class="card-content">
      <b-taglist attached style="float:right;">
        <b-tag
          v-if="orgType != ''"
          class="tag is-success is-medium"
          :class="{
            'is-success': orgType == 'Organization',
            'is-danger': orgType == 'Hospital',
            'is-warning': orgType == 'Supplier'
          }"
        >{{ orgType }}</b-tag>
        <b-tag type="is-info is-medium">{{ type }}</b-tag>
      </b-taglist>
      <p id="effort-item-title" class="title is-3">{{ organization }}</p>
      <p class="subtitle is-6" style="text-align:left;margin-bottom:2px;">{{ subtitle }}</p>
      <p
        v-if="linkInfo != 'No Info' || linkInfo != ''"
        id="effort-item-link"
        class="subtitle"
        style="width:80%;"
      >
        <a
          v-for="link in linkInfo"
          :href="link"
          :key="link.key"
          target="_blank"
          style="font-size:12px;max-width:80%;"
          class="buttons"
        >
          {{ link }}
          
        </a>
      </p>
      <br v-else />
      <div class="content" style="text-align:left;">
        <h6 v-if="orgType != 'Supplier'" class="subtitle is-6 attr_label"></h6>
        <h6 v-else class="subtitle is-6 attr_label">Provides</h6>
        <div class="tags are-medium">
          <span v-for="need in needsArray" :key="need.key" class="tag is-primary">{{ need }}</span>
        </div>
        <h6 class="subtitle is-6 attr_label">Contact</h6>
        <p>
          <span v-html="parsedContactDetails"></span>
        </p>
        <!-- <h6 class="subtitle is-6 attr_label">Urgency</h6>
        <p>{{ severityUrgency }}</p>-->
        <div v-if="orgType == 'Supplier'" class="columns">
          <div class="column is-half">
            <h6 class="subtitle is-6 attr_label">Pricing</h6>
            <p>{{ status }}</p>
          </div>
          <!-- <div class="column is-half">
            <h6 class="subtitle is-6 attr_label">Type</h6>
            <p>{{ type }}</p>
          </div>-->
        </div>
        <div class="columns">
          <div class="column is-full">
            <h6 class="subtitle is-6 attr_label">Remarks/Notes</h6>
            <p>{{ whatTheyDo }}</p>
          </div>
        </div>
        <div class="columns">
          <div class="column is-full">
            <h6 class="subtitle is-6 attr_label">Itemized Needs</h6>
            <p style="font-size=12px;margin-bottom:2px;"><i>PPE Sets</i></p>           
            <b-progress type="is-success" :value="75" size="is-medium" show-value>75 / 100</b-progress>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HospitalNeedsItemQuantity from "@/components/Hospital-Needs-Item-Quantity.vue";
export default {
  name: "Effort-Item",
  props: {
    elementID: Number,
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
    subtitle: String,
    latLng: Array
  },
  data() {
    return {
      needsArray: [],
      highlightFlag: false
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
    // onEffortCardClick: function(event,indentifierObj) {
    //   console.log(event);
    //   console.log(indentifierObj);
    // }
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
  cursor: pointer;
}
.card_highlight {
  box-shadow: 0 2px 3px rgba(121, 87, 213, 0.8),
    0 0 0 1px rgba(121, 87, 213, 0.25);
}
#effort-item-title {
  text-align: left;
  width: 80%;
  font-size: 25px;
}
#effort-item-link {
  text-align: left;
}
.attr_label {
  margin-bottom: 7px !important;
}
</style>
