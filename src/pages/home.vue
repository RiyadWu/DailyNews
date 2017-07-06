<template>
  <div class='weui-tab'>
    <!-- <r-search :searchInfo='search_info'></r-search>
    <r-navtab></r-navtab> -->
    <div class='weui-tab__panel' style="padding-bottom:53px;">
      <transition name='fade'>
        <keep-alive>
          <router-view></router-view> 
        </keep-alive>
      </transition>
    </div>
    <div class='weui-tabbar'>
      <r-foot></r-foot>
    </div>
  </div>
</template>

<script>
import u from '@/assets/js/Lib'
// import search from '@/components/search';
// import navtab from '@/components/navtab';
import foot from '@/components/foot';


export default {
  name: 'app',
  data () {
      return {
        msg: 'app Vue',
        name: 'Reborn',
        // search_info:['乐高积木','web前端','炉石传说']
      }
    },
  components: {
    // 'r-search': search,
    'r-foot':foot,
    // 'r-navtab':navtab
  },
  created(){
    this.foo()
  },
  mounted() {
  },
  methods:{
    foo(){
      this.$http.get('/api/testMock').then(res => {
          // success callback
          console.log(res.data)
      }, res => {
          // error callback
          console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>
