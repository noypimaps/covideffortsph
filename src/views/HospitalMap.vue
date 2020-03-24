<template>
  <div class="columns">
    <div class="columns is-multiline is-mobile">
      <div class="column is-half" style="margin-left: 4%;">
        <div class="level" style="display:block;padding:1%;" id="hospitalCards">
          <hospital-needs-item
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
          ></hospital-needs-item>
        </div>
      </div>
      <div class="column is-half" style="width: 46%;">
        <map-comp></map-comp>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HospitalNeedsItem from "@/components/Effort-Item.vue";
import MapComp from "@/components/MapComp.vue";

export default {
  name: "HospitalMap",
  components: {
    "hospital-needs-item": HospitalNeedsItem,
    "map-comp": MapComp
  },
  props: {
    efforts: Array
  }
};
</script>
<style lang="less" scoped>
#hospitalCards {
  height: 625px;
  overflow-y: scroll;
}
</style>
