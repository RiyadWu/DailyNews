<template>
  <div class='weui-tab'>
    <!-- <r-search :searchInfo='search_info'></r-search>
    <r-navtab></r-navtab> -->
    <div class='weui-tab__panel' style="padding-bottom:53px;">
      <transition name='fade'>
        <keep-alive>
          <router-view ref="child"></router-view> 
        </keep-alive>
      </transition>
    </div>
    <div class='weui-tabbar'>
      <r-foot></r-foot>
    </div>

    <mt-popup 
      v-model="showPop"
      popup-transition="popup-fade">
      <div class='bubble_box' :class='[isUP?"arrows_up":"arrows_down"]'>
        <div class='bubble_box-row'>
          <h5 class='fl'>可选理由,精准屏蔽</h5>
          <a href="javascript:;" @click='unRecommend' class="weui-btn weui-btn_mini weui-btn_warn fr">不感兴趣</a>
          <div class='clear'></div>
        </div>
        <div class='bubble_box-row textl'>
          <a href="javascript:;" @click='unRecommend' class="weui-btn weui-btn_mini weui-btn_default">看过了</a>
          <a href="javascript:;" @click='unRecommend' class="weui-btn weui-btn_mini weui-btn_default">内容太水</a>
          <a href="javascript:;" @click='unRecommend' class="weui-btn weui-btn_mini weui-btn_default">不好看</a>
          <a href="javascript:;" @click='unRecommend' class="weui-btn weui-btn_mini weui-btn_default">不想看</a>
        </div>
      </div>
    </mt-popup>
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
        showPop:false,
        isUP:Boolean
      }
    },
  components: {
    'r-foot':foot,
  },
  created(){
    // this.foo();
  },
  mounted() {
  },
  methods:{
    foo(){
      this.$http.get('/api/news').then(res => {
          // success callback
          console.log(res.data)
      }, res => {
          // error callback
          console.log(res)
      })
    },
    unRecommend(){
      // this.showPop = false;
      this.$refs.child.unFollow();
    }
  }
}
</script>

<style scoped>
.mint-popup{
  background-color: transparent;
  width: 90%;
}
.arrows_up:before{
    display: inline-block;
    width: 0;
    height: 0;
    border: solid transparent;
    border-width: 10px;
    border-bottom-color: #fff;
    content: "";
    position: absolute;
    top: -18px;
    right: 8px;
}
.arrows_down:before{
    display: inline-block;
    width: 0;
    height: 0;
    border: solid transparent;
    border-width: 10px;
    border-top-color: #fff;
    content: "";
    position: absolute;
    bottom: -18px;
    right: 8px;
}
.bubble_box{
  padding:15px;
  text-align: center;
  border-radius: 10px;
  background-color: #f8f8f8;
}
</style>
