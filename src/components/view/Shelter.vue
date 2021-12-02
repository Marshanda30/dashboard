<template>
  <div>
    <nav-bar></nav-bar>
    <side-bar></side-bar>
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0"></h1>
            </div>
            <!-- /.col -->
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active">Shelter</li>
              </ol>
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h2 class="card-title">Kelola Shelter(BTS)</h2>

                  <div class="card-tools">
                    <div
                      class="input-group input-group-sm"
                      style="width: 150px;"
                    >
                      <input
                        type="text"
                        name="table_search"
                        class="form-control float-right"
                        placeholder="Cari Shelter"
                      />

                      <div class="input-group-append">
                        <button type="submit" class="btn btn-default">
                          <i class="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div class="col-12">
                  <div class="alert alert-info" role="alert">
                    <b>Info:</b> Menampilkan list data shelter BTS dalam sistem.
                  </div>
                </div>
                <div class="col-12">
                  <button
                    type="submit"
                    class="btn btn-success float-right"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Add New
                  </button>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Nama Shelter (BTS)</th>
                        <th>Regional (wilayah)</th>
                        <th>Koordinat</th>
                        <th class="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(user, index) in users" :key="user.id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ user.nama_shelter }}</td>
                        <td>{{ user.lokasi }}</td>
                        <td>{{ user.koordinat }}</td>
                        <td class="text-center">
                         <router-link :to="{ name: 'Edit', params: { id: user.id } }"
                                  class="btn btn-info btn-sm selected">Edit</router-link>
                          <button @click="deleteData(user.id)" class="btn btn-sm btn-danger">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- /.card-body -->
              </div>
            </div>
          </div>
          <!-- /.card -->
        </div>
      </div>
      <!-- modal create data shelter -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Add New Data Shelter
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form>
              <div class="modal-body">
                <div class="form-group">
                  <label for="">Nama Shelter (BTS)</label>
                  <input v-model="form.nama_shelter" type="text" class="form-control" /> <br />

                  <label for="">Regional (wilayah)</label>
                  <input v-model="form.lokasi" type="text" class="form-control" /> <br />

                  <label for="">Koordinat</label>
                  <input v-model="form.koordinat" type="text" class="form-control" /> <br />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button @click="saveProduct" type="submit" class="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
import NavBar from "../layout/Navbar.vue";
import SideBar from "../layout/Sidebar.vue";
import FootBar from "../layout/Footbar.vue";

import axios from "axios";
import Swal from 'sweetalert2';

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
  // https://btsapii.herokuapp.com/api/shelter
  mounted() {
    this.getUsers()
  },
  methods: {
    getUsers() {
      axios
      .get("https://btss.herokuapp.com/api/shelter")
      .then((res) => {
        this.users = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      })
    },
    saveProduct() {
      axios
      .post("https://btss.herokuapp.com/api/shelter/create", this.form)
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
            axios.delete('https://btss.herokuapp.com/api/shelter/delete/' + id)
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
};
</script>

<style>
h2 {
  font-family: "Bahnschrift SemiBold";
}
button {
  font-family: "Franklin Gothic Medium";
  margin-right: 15px;
}
.btn-info {
  font-family: "Franklin Gothic Medium";
}
.selected {
  margin-right: 10px;
}
.alert-info {
  font-family: "Times New Roman";
  margin-left: 15px;
  margin-right: 15px;
}
</style>
