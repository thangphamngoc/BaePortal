<template>
  <div class="container-fluid">
    <HomePortal/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import HomePortal from '../components/HomePortal.vue';

export default {
  components: { HomePortal },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },

  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
};
</script>