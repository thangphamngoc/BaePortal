<template>
  <div class="container-fluid nav-menu-top">
    <nav class="navbar navbar-expand-lg">
      <div class="logo-new">
        <a href=""><img src="~/assets/images/home/top_uoc_logo.png"/></a>
      </div>
      <div class="menu-navbar">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a href="#" class="nav-link"><span>about</span></a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link"><span>project</span></a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link"><span>articles</span></a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link"><span>schedule</span></a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link"><span>join</span></a>
            </li>
          </ul>
        </div>
        <div class="change-lg">
            <i class="fa fa-globe"></i>
        </div>
        <div class="social-top">
            <div class="social-top__fb">
                <i class="fa fa-facebook-f"></i>
            </div>
            <div class="social-top__twitter">
                <i class="fa fa-twitter"></i>
            </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },

  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
};
</script>

