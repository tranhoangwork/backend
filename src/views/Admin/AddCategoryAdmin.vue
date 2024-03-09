<template>
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Tạo mới</span>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent ref="formRef">
            <div>
              <div class="text-subtitle-1 text-medium-emphasis">Loại</div>
              <v-select :items="categoryListData" v-model="model.idCategory" item-title="name" item-value="id"
                density="compact" variant="outlined" clearable></v-select>
            </div>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Đóng
          </v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="CreateCategory">
            Tạo mới
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog></template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  components:
  {
   
  },
  data() {
    return {
      dialog: true,
      model: {
        name: "",
        price: 0,
        quantity: 0,
        note: "",
        detail: "",
        idCategory: "",
      },
      dialogContent: ""
    };
  },
  created() {
    this.fetchCategoryList();
  },
  computed: {
    ...mapGetters('categoryModules', {
      categoryListData: 'getListData',
    }),
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
    async CreateCategory() {
      console.log(this.model);
      const formData = new FormData();
      formData.append('id', "1");
      formData.append('idImage', "1");
      formData.append('name', this.model.name);
      formData.append('price', this.model.price);
      formData.append('quantity', this.model.quantity);
      formData.append('note', this.model.note);
      formData.append('detail', this.model.detail);
      formData.append('idCategory', this.model.idCategory);
      const files = this.$refs.fileInput.files;
      for (let i = 0; i < files.length; i++) {
        formData.append('listFile', files[i]);
      }
      var result = await this.createObj(formData);
      if (result == true) {
        this.dialogContent = "Tạo mới thành công!";
        this.$refs.dialogNotiRef.openDialog();
        this.$refs.formRef.reset();
      }
      else {
        this.dialogContent = "Tạo mới thất bại!";
        this.$refs.dialogNotiRef.openDialog();
      }
    },
    ...mapActions('productModules', ['createObj', 'fetchListData', 'updateObj', 'deleteObj']),
    ...mapActions('categoryModules', { fetchCategoryList: 'fetchListData', }),
  }
};
</script>
