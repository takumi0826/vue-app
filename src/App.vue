<template>
  <v-app>
    <Header></Header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>

.fade-enter {
  transform: translate(-50px, 0);
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all .5s 0s ease;
}
.fade-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.fade-leave-to {
  transform: translate(50px, 0);
  opacity: 0;
}
.fade-leave-active {
  transition: all .5s 0s ease;
}

</style>