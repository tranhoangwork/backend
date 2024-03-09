<template>
    <div>
      <v-row class="elevation-10 full-width pt-2 mb-8 justify-space-between align-center">
        <v-col cols="2" class="ml-5">
          <v-sheet>
            <router-link to="/">
            </router-link>
          </v-sheet>
        </v-col>
        <v-col cols="5">
          <v-btn size="large" flat v-for="item in menuItems" :key="item.title" :to="item.path">
            {{ item.title }}
          </v-btn>
        </v-col>
        <v-col cols="1">
          <v-tooltip text="Đăng xuất">
            <template v-slot:activator="{ props }">
              <span class="material-icons" v-bind="props" style="font-size: 30px;cursor: pointer;" @click="logout()" >logout</span>
            </template>
          </v-tooltip>
        </v-col>
      </v-row>
    </div>
  </template>
    
  <script>

  import store from '@/store';
  export default {
    name: "NavigationLayout",
    data() {
      return {
        sidebar: false,
        menuItems: [
          { title: 'Product', path: '/admin/product' },
          { title: 'Category', path: '/admin/category' },
          { title: 'Order', path: '/admin/order'},
          { title: 'User', path: '/admin/user'},
          { title: 'Promotion', path: '/admin/promotion'},
          { title: 'Customer', path: '/admin/customer'}

        ],
        dialogContent: "",
      }
    },
    methods:{
      logout()
      {
       
        store.dispatch('statusModules/createMessage', 'Đăng xuất thành công!');
        this.$router.push('/login');
      }
    }
  };
  </script>
  <style></style>
  