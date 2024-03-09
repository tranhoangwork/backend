<template>
  <v-content>
    <router-view></router-view>
  </v-content>
  
</template>

<script>

export default {
  name: "App",
  components: {

},
  data() {
    return {
      show: true
    };
  },
  watch: {
    $route(to) {
      if (to.path.startsWith("/admin")) {
        this.show = false;
      }
      else
      {
        this.show = true;
      }
    }
  }
};
</script>
<style></style>
