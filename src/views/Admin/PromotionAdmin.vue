<template>
    <div class="mt-4">
  
      <div style="margin: 30px;">
        <v-data-table :headers="headers" :items-per-page="10" :items="getListData" item-value="id" class="elevation-10">
          <template v-slot:item="{ item }">
            <tr>
              <td class="border-right border-bot" style="width: 50px;"><p class="text-center">{{ getIndex(item) }}</p> </td>
              <td class="border-right border-bot" style="width: 25%;">{{ item.name }}</td>
              <td class="border-right border-bot" style="width:150px ;">{{ item.price }} VNĐ</td>
              <td class="border-right border-bot">{{ item.quantity }} </td>
              <td class="border-right border-bot">{{ item.note }}</td>
              <td class="border-right border-bot">
                <v-carousel cycle hide-delimiter-background show-arrows="hover" style="height: 200px;">
                  <v-carousel-item v-for="(image, i) in item.images" :key="i">
                    <v-sheet height="100%">
                      <div class="d-flex fill-height justify-center align-center" style="min-width: 200px;">
                        <v-img :src="linkServer + image.path" cover></v-img>
                      </div>
                    </v-sheet>
                  </v-carousel-item>
                </v-carousel>
              </td>
              <td class="border-right border-bot" style="width: 250px;">
                <v-btn color="yellow" small class="mr-4" @click="UpdatePromotion(item)">Update</v-btn>
                <v-btn color="red" small @click="DeletePromotion(item)">Delete</v-btn>
              </td>
            </tr>
          </template>
        </v-data-table>
      </div>
    </div>
  </template>
  
  <script>

import { VDataTable } from 'vuetify/lib/components/index.mjs';
  
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    components:
    {
      VDataTable,      
    },
    computed: {
      ...mapGetters('promotionModules', ['getListData']),
    },
    created() {
      this.fetchListData();
    }
    ,
    data() {
      return {
        headers: [
          { title: 'STT', key: 'id' },
          { title: 'Tên khuyến mại', key: 'name' },
          { title: 'Ngày bắt đầu', key: 'date' },
          { title: 'Ngày kết thúc', key:'date' },
          { title: 'Mô tả', key: 'note' },
          { title: 'Loại giảm giá', key: 'images' },
          { title: 'Action', key: '', sortable: false, },
        ],
        linkServer: "https://localhost:7202",
        dataDialog: {},
        dialogContent: "",
      };
    },
    methods: {
      CreatePromotion() {
        this.$refs.dialogRef.openDialog();
      },
      getIndex(item) {
        return this.getListData.indexOf(item) + 1;
      },
  
      UpdatePromotion(item) {
        this.$refs.dialogUpdateRef.setData(item);
        this.$refs.dialogUpdateRef.openDialog(false);
      },
      async DeletePromotion(item)
      {
        const isConfirmed = window.confirm("Bạn có chắc chắn muốn xóa không?");
              if (isConfirmed) {
                  var result  = await this.deleteObj(item);
                  console.log(result);
                  if(result==true)
                  {
                      this.dialogContent = "Xoá thành thành công!";
                      this.$refs.dialogNotiRef.openDialog();
                  }
                  else
                  {
                      this.dialogContent = "Xoá thất bại!";
                      this.$refs.dialogNotiRef.openDialog();
                  }
              }
      },
      ...mapActions('promotionModules', ['createObj', 'fetchListData', 'updateObj', 'deleteObj']),
  
    }
  }
  </script>
  
  <style scoped>
  .border-right {
      border-right: 1px solid #ccc;
      /* Màu của đường gạch dọc */
  }
  
  .border-bot {
      border-bottom: 1px solid #ccc;
      /* Màu của đường gạch dọc */
  }
  </style>
    