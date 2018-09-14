<template>
  <div id="app" class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Techno Tower</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent toolbar-title" md-elevation="0">YOU | Festival</md-toolbar>

        <md-list>
          <md-list-item to="/" @click="menuVisible = !menuVisible">
            <md-icon>money</md-icon>
            <span class="md-list-item-text">Tickets</span>
          </md-list-item>

          <md-list-item to="/stats" @click="menuVisible = !menuVisible">
            <md-icon>bar_chart</md-icon>
            <span class="md-list-item-text">Stats</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
  @import "~vue-material/dist/theme/engine"; // Import the theme engine

  @include md-register-theme("default", (
      primary: #fd8570, // The primary color of your brand
      accent: #f84181 // The secondary color of your brand
  ));

  @import "~vue-material/dist/theme/all"; // Apply the theme

  .md-app {
    min-height: 100vh;
    /*max-height: 400px;*/
    border: 1px solid rgba(#000, .12);
  }

  .md-app-toolbar {
    background: linear-gradient(to right, #fd8570, #f84181);
  }

  .md-toolbar {
    padding: 0 20px;
  }
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-content {
    background-image: url(./assets/back.png);
    background-size: cover;
    background-position-y: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
</style>

<script>
  import Vue from 'vue'
  import VueMaterial from 'vue-material'
  import 'vue-material/dist/vue-material.min.css'

  Vue.use(VueMaterial)
  export default {
    name: 'Reveal',
    data: () => ({
      menuVisible: false
    })
  }
</script>