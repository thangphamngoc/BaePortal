<template>
  <div>
    <!-- <Navbar/> -->
    <Menu/>
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar';
import Menu from '../components/Menu.vue';

export default {
  components: {
    Navbar,
    Menu
  },
};
</script>
