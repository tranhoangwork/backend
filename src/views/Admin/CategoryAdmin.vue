<template>
    <div>
        <v-btn class="ml-10" color="red" @click="Create()">Thêm mới</v-btn>
       
        <div style="margin: 30px;">
            <v-data-table :headers="headers" :items-per-page="10" :items="getListData" item-value="id" class="elevation-10">
                <template v-slot:item="{ item }">
                    <tr>
                        <td class="border-right border-bot" style="width: 50px;">{{ getIndex(item) }}</td>
                        <td class="border-right border-bot">{{ item.name }}</td>
                        <td class="border-right border-bot" style="width: 250px;">
                            <v-btn color="yellow" small class="mr-4" @click="Update(item)">Update</v-btn>
                            <v-btn color="red" small @click="Delete(item)">Delete</v-btn>
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
    components: {

        VDataTable,
    },
    computed: {
        ...mapGetters('categoryModules', ['getListData']),
    },
    created() {
        this.fetchListData();
    },
    data() {
        return {
            isDialogOpen: false,
            dialogData: {
                obj: {
                    id: "",
                    name: ""
                },
                label: {
                    id: "Id",
                    name: "Loại:",
                },
                type: {
                    id: "text",
                    name: "text",
                }
            },
            dialogContent: "",
            headers: [
                { title: 'STT', key: 'id' },
                { title: 'Loại', key: 'name' },
                { title: 'Action', key: '', sortable: false, },
            ],
        };
    },
    methods: {
        Create() {
            window.location.href="/admin/Addcategory";
        },
        Update(item) {
            for (var key in this.dialogData.obj) {
                this.dialogData.obj[key] = item[key];
            }
            this.$refs.dialogRef.openDialog(false);
        },
        async Delete(item) {
            const isConfirmed = window.confirm("Bạn có chắc chắn muốn xóa không?");
            if (isConfirmed) {
                var result  = await this.deleteObj(item);
                console.log(result);
                if(result==true)
                {
                    this.dialogContent = "Xoá thành công!";
                    this.$refs.dialogNotiRef.openDialog();
                }
                else
                {
                    this.dialogContent = "Xoá thất bại!";
                    this.$refs.dialogNotiRef.openDialog();
                }
            }
        },
        getIndex(item) {
            return this.getListData.indexOf(item) + 1;
        },
        async SaveData(obj) {
            if (obj.id == "" || obj.id == null) {
                obj.id = "";
                var  result  = await this.createObj(obj);
                if (result== true) {
                    this.dialogContent = "Tạo mới thành công!";
                    this.$refs.dialogNotiRef.openDialog();
                }
                else {
                    this.dialogContent = "Tạo mới thất bại!";
                    this.$refs.dialogNotiRef.openDialog();
                }

            }
            else {
                result  = await this.updateObj(obj);
                if (result == true) {
                    this.dialogContent = "Cập nhật thành công!";
                    this.$refs.dialogNotiRef.openDialog();
                }
                else {
                    this.dialogContent = "Cập nhật thất bại!";
                    this.$refs.dialogNotiRef.openDialog();
                }
            }

        },
        ...mapActions('categoryModules', ['createObj', 'fetchListData', 'updateObj','deleteObj']),
    }
};
</script>
<style scoped>
.border-right {
    border-right: 1px solid #ccc;
}

.border-bot {
    border-bottom: 1px solid #ccc;
}
</style>
  