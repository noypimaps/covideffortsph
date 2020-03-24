<template>
  <div id="app">
    <div class="modal" :class="{'is-active':welcomeModal}">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Welcome to #BAYANIHAN</p>
      <button class="delete" aria-label="close" @click="welcomeModal=!welcomeModal"></button>
    </header>
    <section class="modal-card-body" style="text-align:left;">
      <p>You'll find different opportunities to help out during this period of national crisis in this page.</p>
      <br>
      <p>The aim of #BAYANIHAN is to collate the efforts/calls against #COVID19 that Filipino communities all over the countries have started.</p>
      <br>
      <p>There are different causes out there. You can donate cash and goods. You can volunteer your time, skills, bikes, cars et cetera</p>
      <br>
      <p>If you want to submit an event/effort in line with the #COVID19 fight, submit them <a href="">here</a>.</p>
      <br>
      <p><b>Mabuhay ka! Bayaning Pinoy!</b></p>
    </section>
    <footer class="modal-card-foot">
      <!-- <button class="button is-success">Save changes</button>
      <button class="button">Cancel</button> -->
    </footer>
  </div>
</div>
    <b-navbar id="covid-nav" class="navbar is-fixed-top">
      <template slot="brand">
        <img
          id="covid-logo"
          src="../src/assets/BAYANIHAN.png"
          style="height:40px;"
        />
      </template>
      <template slot="start">
        <div class="level-item">
          <div class="field has-addons">
            <p class="control" style="width:300px;">
              <input
                class="input"
                type="text"
                placeholder="Search ..."
                v-model="searchQuery"
                expanded="true"
                loading="false"
                @keydown.enter="onFilterList()"
              />
            </p>
            <p class="control">
              <button class="button" @click="onFilterList()">
                Search
              </button>
            </p>
          </div>
        </div>
      </template>
      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <router-link :to="{ name: 'Efforts' }" class="menu_buttons">
              <button class="button is-primary" @click="effortsView=true;hospitalMapView=false;">
              <b-icon icon="hands-helping"></b-icon>
              <strong>Effort List</strong>
              </button>
            </router-link>
            <router-link
              :to="{ name: 'HospitalMap' }"
              class="menu_buttons"
            >
            <button class="button is-primary" @click="effortsView=false;hospitalMapView=true;">
              <b-icon icon="medkit"></b-icon>
              <strong>Hospital Needs Map</strong>
            </button>
            </router-link>
            <button class="button is-primary menu_buttons"><strong>Submit Effort</strong></button>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="level" id="filter">
      <div class="columns" style="width:100%;">
        <div class="column is-one-quarter">
        <h4 class="title is-4">Filters</h4>
      </div>
       <div class="column is-four-fifths">
        
        <div class="field is-grouped is-grouped-multiline">
          <div v-for="filter in effortsFilter" :key="filter.key" class="control">
            <div class="tags has-addons">
              <a class="tag is-link">{{ filter }}</a>
              <a class="tag is-delete"></a>
            </div>
          </div>
        </div>
        
      </div>
      </div>
      
     
    </div>
    <div class="level">
      <!-- <router-view :query="searchQuery" /> -->
      <efforts-view v-if="effortsView" ref="efforts-view" :efforts="efforts"></efforts-view>
      <hospital-map v-if="hospitalMapView"></hospital-map>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Efforts from "@/views/Efforts.vue";
import HospitalMap from "@/views/HospitalMap.vue";

export default {
  data() {
    return {
      searchQuery: "",
      efforts: [],
      fullData: [],
      effortsFilter:["cash","ppe","voluteer","alcohol","transportation","mask","gown"],
      welcomeModal:true,
      effortsView:true,
      hospitalMapView:false,
    };
  },
  methods: {
    onFilterList: function() {
      const query = this.searchQuery;
      this.efforts = [];
      const effortsFiltered = [];
      // const result = this.fullData.filter(
      //   effort => {
      //     Object.values(effort).includes(query) == true
      //   }
      // );

      this.fullData.forEach(effort => {
        const effortString = Object.values(effort).toString();
        const effortIndex = effortString.indexOf(query);

        if (effortIndex != -1) {
          effortsFiltered.push(effort);
        }


        // console.log(effortString);
        // console.log(effortIndex);
        
      });

      this.efforts = effortsFiltered;
      
      // this.efforts = result;
      console.log(this.efforts);
    },
    fetchEfforts: function() {
      axios
        .get(`https://noypimaps-213109.firebaseio.com/.json?print=pretty`)
        .then(response => {
          console.log(response);
          this.fullData = response.data;
          this.efforts = this.fullData;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.fetchEfforts();
  },
  components: {
    "efforts-view": Efforts,
    "hospital-map": HospitalMap
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#covid-nav {
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 10px;
}

#covid-logo {
  margin-top: 5px;
  margin-right: 2px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#filter{
  padding-top:6%;
  padding-left: 6%;
  padding-right: 6%;

}

.modal-background {
  background-color: rgba(231, 231, 231, 0.86);
}

.menu_buttons{
  margin-right:8px;
}
</style>
