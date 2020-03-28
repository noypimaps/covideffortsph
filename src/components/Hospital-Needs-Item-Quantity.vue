<template>
  <div>
    <p style="font-size=12px;margin-bottom:0px;text-align:right;margin-top:10px;">
      <i><strong>{{ (itemizedNeed[0]).toLowerCase() }} <span style="color:gray;font-size:12px;">({{ itemizedNeed[2] }} / {{ itemizedNeed[3] }})</span></strong></i>
    </p>
    <b-progress
      type="is-success"
      :value="itemizedNeed[2]"
      :max="itemizedNeed[3]"
      size="is-medium"
      show-value
      >{{ itemizedNeed[2] }} / {{ itemizedNeed[3] }}</b-progress
    >
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    itemizedNeed: Array
  }
//   mounted() {
//     // console.log(this.itemizedNeed);
//   },
};
</script>
