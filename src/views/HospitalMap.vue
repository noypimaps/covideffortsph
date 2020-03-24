<template>
  <div class="columns">
    <div class="columns is-multiline is-mobile">
      <div class="column is-half" style="margin-left: 4%;">
        <div class="level" style="display:block;padding:1%;" id="hospitalCards">
          <hospital-needs-item></hospital-needs-item>
          <hospital-needs-item></hospital-needs-item>
          <hospital-needs-item></hospital-needs-item>
          <hospital-needs-item></hospital-needs-item>
          <hospital-needs-item></hospital-needs-item>
          <hospital-needs-item></hospital-needs-item>
          <hospital-needs-item></hospital-needs-item>
          <hospital-needs-item></hospital-needs-item>
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
import HospitalNeedsItem from "@/components/Hospital-Needs-Item.vue";
import MapComp from "@/components/MapComp.vue";

export default {
  name: "HospitalMap",
  components: {
    "hospital-needs-item": HospitalNeedsItem,
    "map-comp": MapComp
  }
};
</script>
<style lang="less" scoped>
#hospitalCards {
  height: 540px;
  overflow-y: scroll;
}
</style>
