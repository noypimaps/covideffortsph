<template>
  <div id="app">
    <b-navbar id="covid-nav" class="navbar is-fixed-top">
      <template slot="brand">
        <img
          id="covid-logo"
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
          style="height:45px;"
        />
      </template>
      <template slot="start">
        <div class="level-item">
          <div class="field has-addons">
            <p class="control">
              <input class="input" type="text" placeholder="Find a post" />
            </p>
            <p class="control">
              <button class="button">
                Search
              </button>
            </p>
          </div>
        </div>
      </template>
      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <!-- <router-link :to="{ name: 'Home' }"> -->
            <router-link :to="{ name: 'Home' }" class="button is-primary">
              <b-icon icon="hands-helping"></b-icon>

              <strong>Effort List</strong>
              <!-- </button> -->
            </router-link>
            <!-- <router-link :to="{ name: 'Hospital Map' }"> -->
            <router-link
              :to="{ name: 'HospitalMap' }"
              class="button is-primary"
            >
              <b-icon icon="medkit"></b-icon>

              <strong>Hospital Needs Map</strong>
              <!-- </button> -->
            </router-link>
            <!-- <a class="button is-light">Log in</a> -->
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="level">
      <router-view />
    </div>
  </div>
</template>

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
  margin-top: 10px;
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
</style>
