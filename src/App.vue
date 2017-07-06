<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view></router-view> 
      </keep-alive>
    </transition>
  </div>
</template>

<script>
// import { mapState,mapGetters,mapActions} from 'vuex'

export default {
  name: 'app',
  data () {
      return {
        msg: 'app Vue',
        name: 'Reborn',
        transitionName:'',
      }
    },
  components: {
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
    }
  },
  mounted() {
  },
  methods:{
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  height: 100%;
  background-color: #f8f8f8;
}
</style>
