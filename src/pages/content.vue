<template>
  <div class='weui-tab content'>
      <h1>content</h1>
      <p>params:{{params}}</p>
  </div>
</template>

<script>

export default {
  data () {
      return {
        msg: 'content Vue',
        name: 'Reborn',
        params:String
      }
    },
  components: {

  },
  //解决缓存
  beforeRouteEnter(to,from,next){
    next(vm =>{
      log(vm.$route.params)
      vm.params= vm.$route.params.id;
      vm.foo();
    })
  },
  created(){
  },
  mounted() {

  },
  methods:{
    foo() {
      console.log(Math.random().toFixed(2))
    },
  }
}
</script>

<style scoped>

</style>