<template>
  <div>
    <l-map
      id="hospitalMap"
      :zoom="zoom"
      :center="center"
      style="height: 639px; width: 43%;position:fixed;"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <!-- <l-geo-json
        v-if="show"
        :geojson="geojson"
        :options="options"
        :options-style="styleFunction"
      /> -->
      <l-marker :lat-lng="marker" />
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { latLng } from "leaflet";
// import { LMap, LTileLayer, LMarker, LGeoJson } from "vue2-leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    // LGeoJson,
    LMarker
  },
  data() {
    return {
      loading: false,
      show: true,
      enableTooltip: true,
      zoom: 6,
      center: [14, 121],
      geojson: null,
      fillColor: "#e4ce7f",
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: latLng(47.41322, -1.219482)
    };
  },
  computed: {
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction
      };
    },
    styleFunction() {
      const fillColor = this.fillColor; // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 2,
          color: "#ECEFF1",
          opacity: 1,
          fillColor: fillColor,
          fillOpacity: 1
        };
      };
    },
    onEachFeatureFunction() {
      if (!this.enableTooltip) {
        return () => {
          console.log("tooltip");
        };
      }
      return (feature, layer) => {
        layer.bindTooltip(
          "<div>code:" +
            feature.properties.code +
            "</div><div>nom: " +
            feature.properties.nom +
            "</div>",
          { permanent: false, sticky: true }
        );
      };
    }
  },
  async created() {
    this.loading = true;
    const response = await fetch(
      "https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson"
    );
    const data = await response.json();
    this.geojson = data;
    this.loading = false;
  }
};
</script>
<style lang="less" scoped>
#hospitalMap {
  height: 612px;
  width: 98%;
  position: fixed;
  outline: none;
  margin-right: 14%;
}
</style>
