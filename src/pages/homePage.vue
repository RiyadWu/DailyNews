<template>
  <div class='weui-tab'>
    <div class='weui-navbar'>
      <r-search :searchInfo='search_info'></r-search>
      <r-navtab></r-navtab>
    </div>
    <div class='weui-tab__panel' style="padding-top:90px;">
      <h1 class='center'>首页</h1>
      <ul class='r_list'>
        <li class='r_list-row' v-for='(item,index) in list'>{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import u from '@/assets/js/Lib'
import search from '@/components/search';
import navtab from '@/components/navtab';

export default {
  data () {
      return {
        msg: 'template Vue',
        name: 'Reborn',
        search_info:['乐高积木','web前端','炉石传说'],
        list:[]
      }
    },
  components: {
    'r-search': search,
    'r-navtab':navtab
  },
  created(){
    this.loadData();
  },
  mounted() {

  },
  methods:{
    foo() {
      console.log('foo')
    },
    loadData(){
      for (var i = 0; i < 20; i++) {
        var oTxt = 'Row'+i;
        this.list.push(oTxt);
      }
    }
  }
}
</script>

<style scoped>
.r_list > .r_list-row{
  padding:10px;
  text-align: center;
  background-color: #fff;
  position: relative;
}
.r_list > .r_list-row:not(:first-child):after{
  content: '';
  position: absolute;
  top: 0;
  right:0;
  height: 1px;
  border-top: 1px solid #ccc;
  color: #e5e5e5;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  left: 15px;
  z-index: 2;
}
</style>
