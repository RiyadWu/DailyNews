<template>
  <div class="find_nav" style="margin-top:50px;">
    <div class="find_nav_left">
      <div class="find_nav_list">
          <ul>
              <li @click='tabClick(item)' v-for='(item,index) in navtab' :class="{'find_nav_cur':tabName == item}"><a href="javascript:void(0)">{{item}}</a></li>
          </ul>
      </div>
    </div>
    <div class='find_nav_add'>
      <span>+</span>
    </div>
  </div>
</template>

<script>

import u from '@/assets/js/Lib'

export default {
  data () {
      return {
        msg: 'template Vue',
        name: 'Reborn',
        navtab:['推荐','热点','上海','视频','社会','娱乐','科技','问答','汽车'],
        tabName:'推荐'
      }
    },
  components: {

  },
  created(){
  },
  mounted() {

  },
  methods:{
    foo() {
      console.log('foo')
    },
    tabClick(item){
      this.tabName = item;

    }
  }
}
</script>

<style scoped>
.find_nav {
    width: 100%;
    height: 40px;
    background-color: #f9f9f9;
    position: fixed;
    top: 0;
    z-index: 99;
    border-bottom: 1px solid #ddd;
    display: -moz-box;
    display: -webkit-box;
    display: box;
}
.find_nav_left {
    height: 40px;
    position: relative;
    overflow: hidden;
    -moz-box-flex: 1;
    -webkit-box-flex: 1;
    box-flex: 1;
}
.find_nav_list {
    position: absolute;
    left: 0;
}
.find_nav_list ul {
    position: relative;
    white-space: nowrap;
    font-size: 0;
}
.find_nav_list ul li {
    display: inline-block;
    padding: 0 13px;
}
.find_nav_list ul li a {
    display: block;
    width: 100%;
    height: 100%;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    color: #666;
}
.find_nav_cur a {
    color: #E64340 !important;
    font-size: 18px !important;
}
.sideline {
    display: block;
    position: absolute;
    border: 0;
    height: 2px;
    background-color: #48a5f4;
    left: 0;
    top: 43px;
    pointer-events: none;
}
.search_logo {
    display: block;
    width: 44px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
    color: #48a5f4;
}
.find_nav_add{
  height: 100%;
  width: 50px;
  line-height: 40px;
  position: absolute;
  top: 0;
  text-align: center;
  font-size: 32px;
  background-color: rgba(250,250,250,0.95);
  right: 0;
}
.find_nav_add:after{
  content: '';
  position: absolute;
  left: 0;
  top: 5px;
  bottom: 5px;
  width: 1px;
  border-left: 1px solid #ccc;
  color: #ccc;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleX(0.5);
  transform: scaleX(0.5);
  z-index: 2;
  box-shadow: 0px 0px 5px #ccc;

}
</style>
