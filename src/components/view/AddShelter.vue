<template>
    <div>
        <nav-bar></nav-bar>
        <side-bar></side-bar>
        <div class="content-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <form @submit.prevent="saveProduct">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">Nama Shelter</label>
                                    <input type="text" class="form-control" v-model="form.nama_shelter">
                                </div>
                                <div class="form-group">
                                    <label for="name">Regional (wilayah)</label>
                                    <input type="text" class="form-control" v-model="form.lokasi">
                                </div>
                                <div class="form-group">
                                    <label for="name">Koordinat</label>
                                    <input type="text" class="form-control" v-model="form.koordinat">
                                </div>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-success" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <foot-bar></foot-bar>
    </div>
</template>

<script>
    import NavBar from "../layout/Navbar.vue";
    import SideBar from "../layout/Sidebar.vue";
    import FootBar from "../layout/Footbar.vue";
    import Swal from 'sweetalert2';
    import axios from "axios";

    export default {
        components: {
            NavBar,
            SideBar,
            FootBar,
        },
        data() {
    return {
      form: {
        nama_shelter: "",
        lokasi: "",
        koordinat: ""
      },
      users: [],
    };
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    getUsers() {
      axios
      .get("https://btsapii.herokuapp.com/api/shelter")
      .then((res) => {
        this.users = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      })
    },
    saveProduct() {
      axios
      .post("https://btsapii.herokuapp.com/api/shelter/create", this.form)
      .then(res => {
        console.log(res)
        this.$router.push({
          name: "Shelter"
        })
      })
      .catch(err => {
        console.log(err)
      })
    },
    deleteData(id) {
        Swal.fire({
          title: "Anda Yakin Ingin Menghapus Shelter Ini ?",
          text: "Klik Batal untuk Membatalkan Penghapusan",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          cancelButtonText: "Batal",
          confirmButtonText: "Hapus"
        }).then(result => {
          if (result.value) {
            axios.delete('https://btsapii.herokuapp.com/api/shelter/delete/' + id)
              .then(res => {
                Swal.fire(
                  "Terhapus","Shelter Anda Sudah Terhapus","success");
                this.getUsers();
                console.log(res);
              })
              .catch((err) => {
                Swal.fire(
                  "Gagal","Shelter Anda Gagal Dihapus","warning");
                console.log(err)
              })
          } else {
            Swal.fire(
              "Gagal","Shelter Anda Gagal Dihapus","warning");
          }
        })
      }
  }
    }
</script>