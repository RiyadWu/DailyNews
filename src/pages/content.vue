<template>
  <div class='weui-tab content'>
      <h1>content</h1>
      <section v-html="isNull(content)">
        
      </section>
  </div>
</template>

<script>

export default {
  data () {
      return {
        msg: 'content Vue',
        name: 'Reborn',
        params:String,
        content:'',
        url:'',
      }
    },
  components: {

  },
  //解决缓存
  beforeRouteEnter(to,from,next){
    next(vm =>{
      log(vm.$route.params)
      log(vm.$route.params.url)
      vm.url = vm.$route.params.url;
      vm.getData()
    })
  },
  created(){
    this.getData()
  },
  mounted() {

  },
  methods:{
    foo() {
      console.log(Math.random().toFixed(2))
    },
    isNull(arg){
      return arg?arg:'<h3 class="center">no data</h3>'
    },
    getData(){
      log('loading data');
      this.$http.get('/api/info')
      .then(res =>{
        log(res.data)
      }, err =>{
        log('err')
      })
    }
  }
}
</script>

<style scoped>

</style>