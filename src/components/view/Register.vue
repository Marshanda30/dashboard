<template>
    <div class="hold-transition register-page">
        <div class="register-box">

  <div class="card">
    <div class="card-header text-center">
      <img src="assets/img/gmedia.png" alt="Gmedia Logo" height="70" width="70"> <br>
      <a href="" class="h1"><b>Admin</b>GMEDIA</a>
    </div>
    <div class="card-body register-card-body">
      <p class="login-box-msg">Register a new membership</p>
      <div class="alert alert-danger" v-for="(error, index) in errors" :key="index">
        {{ error[0] }}
      </div>

      <form @submit.prevent="submit">
        <div class="input-group mb-3">
          <input v-model="form.username" type="text" class="form-control" placeholder="Username">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-user"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input v-model="form.email" type="email" class="form-control" placeholder="Email">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input v-model="form.password" type="password" class="form-control" placeholder="Password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input v-model="password" type="password" class="form-control" placeholder="Retype password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              
            </div>
          </div>
          <!-- /.col -->
          <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block">Register</button>
          </div>
          <!-- /.col -->
        </div>
      </form>
      <router-link :to="{name: 'login'}" class="text-center">I already have a membership</router-link>
    </div>
    <!-- /.form-box -->
  </div><!-- /.card -->
</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      form:{
        username: "",
        email: "",
        password: "",
      },
      errors: null
    };
  },
  methods: {
    register: function () {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("register", data)
        .then(response => {
          console.log(response)
          this.$router.push({
            name: 'Login'
          })
        }).catch(error => {
          this.errors = error.response.data.errors
        })
    }
  }
};
</script>