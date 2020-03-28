<template>
  <div class="columns">
    <div class="columns is-multiline is-mobile">
      <div class="column is-half" style="margin-left: 4%;">
        <div class="level" style="display:block;padding:1%;" id="hospitalCards">
          <hospital-needs-item
            v-for="(item, index) in efforts"
            :key="item.key"
            :elementID="index"
            :refs="item.key"
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
            :latLng="item.LAT_LNG"
            v-on:onEffortCardClick="onEffortCardClick"
          ></hospital-needs-item>
        </div>
      </div>
      <div class="column is-half" style="width: 46%;">
        <map-comp
          refs="hospitalMap"
          :hospitalNeeds="efforts"
          :highlightCoords="highlightCoords"
          :zoom="highlightZoom"
          :center="centerCoords"
          :highlightMarkerVisibility="highlightMarkerVisibility"
        >
        </map-comp>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HospitalNeedsItem from "@/components/Hospital-Needs-Item.vue";
import MapComp from "@/components/MapComp.vue";

export default {
  name: "HospitalMap",
  components: {
    "hospital-needs-item": HospitalNeedsItem,
    "map-comp": MapComp
  },
  data() {
    return {
      highlightCoords: [14, 121],
      highlightZoom: 6,
      highlightMarkerVisibility: false,
      centerCoords:[14,121]
    };
  },
  props: {
    efforts: Array
  },
  methods: {
    onEffortCardClick: function($event) {
      // console.log($event);
      if ($event.latLng != undefined) {
        // console.log("not undefined");
        this.highlightCoords = $event.latLng;
        this.centerCoords =  $event.latLng;
        this.highlightZoom = 10;
        this.highlightMarkerVisibility = true;
      } else {
        // console.log("undefined");
        this.highlightCoords = [14, 121];
        this.centerCoords = [14, 121]; 
        this.highlightZoom = 6;
        this.highlightMarkerVisibility = false;
        // console.log(this.highlightCoords);
      }

      // console.log($event);
      // console.log("here in hospital map vue");
    }
  },
  mounted(){
    // console.log((this.efforts[0]).LAT_LNG);
    this.highlightCoords=(this.efforts[0]).LAT_LNG;
    this.centerCoords=(this.efforts[0]).LAT_LNG;
  }
};
</script>
<style lang="less" scoped>
#hospitalCards {
  height: 625px;
  overflow-y: scroll;
}
</style>
