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
            </div><!-- /.col -->
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active">Realtime</li>
              </ol>
            </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.container-fluid -->
      </div>
      <section class="content">
        <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h2 class="card-title">Data Sensor</h2>

                            <div class="card-tools">
                              <div class="input-group input-group-sm" style="width: 150px;">
                                <input type="text" name="table_search" class="form-control float-right" placeholder="Search">
                                  
                                  <div class="input-group-append">
                                    <button type="submit" class="btn btn-default">
                                        <i class="fas fa-search"></i>
                                    </button>
                                  </div>
                              </div>
                            </div>
                        </div> <br/>
                        <div class="col-12">  
                          <div class="alert alert-info" role="alert">
                            <b>Info:</b> Menampilkan laporan data kondisi BTS.
                          </div>
                        </div>
                        <div class="col-12">
                          <button
                          type="submit"
                          class="btn btn-success float-right"
                          data-toggle="modal" data-target="#exampleModal">
                          Add New
                          </button>
                        </div>
                        <!-- card body -->
                        <div class="card-body">
                          <table class="table table-bordered table-striped">
                            <thead>
                              <tr>
                                <th>No</th>
                                <th>TegAC</th>
                                <th>ArusAC</th>
                                <th>TegDC1</th>
                                <th>ArusDC1</th>
                                <th>TegDC2</th>
                                <th>ArusDC2</th>
                                <th>TegDC3</th>
                                <th>ArusDC3</th>
                                <th>TegDC4</th>
                                <th>ArusDC4</th>
                                <th>Date</th>
                                <th class="text-center">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(user, index) in users" :key="user.id_sensor">
                                <td>{{ index + 1}}</td>
                                <td>{{ user.tegangan_ac }}</td>
                                <td>{{ user.arus_ac }}</td>
                                <td>{{ user.tegangan_dc1 }}</td>
                                <td>{{ user.arus_dc1 }}</td>
                                <td>{{ user.tegangan_dc2 }}</td>
                                <td>{{ user.arus_dc2 }}</td>
                                <td>{{ user.tegangan_dc3 }}</td>
                                <td>{{ user.arus_dc3 }}</td>
                                <td>{{ user.tegangan_dc4 }}</td>
                                <td>{{ user.arus_dc4 }}</td>
                                <td>{{ user.createdAt}}</td>
                                <td class="text-center">
                                  <router-link :to="{ name: 'Edit', params: { id: user.id_sensor } }"
                                  class="btn btn-info btn-sm selected">Edit</router-link>
                                  <button @click.prevent="PostDelete(post.id)" class="btn btn-sm btn-danger">Delete</button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                    </div>
                </div>
              <!-- /.card-header -->
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
    </div>
        <!-- /.container-fluid -->
                <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Add New Data Sensor
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form>
              <div class="modal-body">
                <div class="form-group">
                  <label for="">Tegangan AC</label>
                  <input
                    type="text"
                    class="form-control"/> <br/>

                  <label for="">Arus AC</label>
                  <input
                    type="text"
                    class="form-control"/> <br/>

                  <label for="">Tegangan DC 1</label>
                    <input
                    type="text"
                    class="form-control"/> <br/>

                  <label for="">Arus DC 1</label>
                  <input
                    type="text"
                    class="form-control"/> <br/>

                  <label for="">Tegangan DC 2</label>
                  <input
                    type="text"
                    class="form-control"/> <br/>

                  <label for="">Arus DC 2</label>
                  <input
                    type="text"
                    class="form-control"/> <br/>

                  <label for="">Tegangan DC 3</label>
                  <input
                    type="text"
                    class="form-control"/> <br/>

                  <label for="">Arus DC 3</label>
                  <input
                    type="text"
                    class="form-control"/> <br/>

                  <label for="">Tegangan DC 4</label>
                  <input
                    type="text"
                    class="form-control"/> <br/>

                  <label for="">Arus DC 4</label>
                  <input
                    type="text"
                    class="form-control"/> <br/>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal">Close
                </button>
                <button
                  type="submit"
                  class="btn btn-primary">Save
                </button>
              </div>
            </form>
        </div>
    </div>
  </div>
      </section>
    </div>
    <foot-bar></foot-bar>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>
import NavBar from '../layout/Navbar.vue'
import SideBar from '../layout/Sidebar.vue'
import FootBar from '../layout/Footbar.vue'

export default {
  components: {
    NavBar,
    SideBar,
    FootBar
    },
}
new Vue ({
  el: "#app",
  data: {
    users: []
  },
  methods: {
    getUser() {
      axios
      .get("https://apibts.herokuapp.com/api/sensor")
      .then(res=> {
        this.users = res.data.data;
      })
    }
  },
  mounted() {
    this.getUser();
  }
})
</script>