<template>
  <div class='weui-tab container' style="overflow:auto">
      <h1>{{data.title}}</h1>
      <div class='info'>
        <div class='info_row'>
          <img v-lazy="data.author_img" alt="" class='fl' style="width:.7rem; margin-right:10px; margin-top:5px;">
          <p>{{data.author}}</p>
          <p>{{data.date}}</p>
        </div>
        <div class='abs_r'>
          <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_default">关注</a>
        </div>
        <div class='clear'></div>
      </div>
      <section v-html="isNull(data.content)">
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
        data:'',
      }
    },
  components: {

  },
  //解决缓存
  beforeRouteEnter(to,from,next){
    next(vm =>{
      vm.data = vm.$route.params.data
      log(JSON.stringify(vm.data,null,2))
      // vm.getData()
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

    }
  }
}
</script>

<style scoped>
.weui-btn_default {
    color: #fff;
    background-color: blue;
}
.info{
  position: relative;
  margin-bottom: 10px;
}
.abs_r{
  position: absolute;
  right: 10px;
  top: 5px;
}
</style>