<template>
  <div class='weui-navbar'>
    <div class="search-bar" id="searchBar">
      <div class='userImg'>
        <img src="../assets/img/Mario.png" alt="userImg">
      </div>
      <div class='search-bar_item' @click='toSearch'>
          <i class="weui-icon-search"></i>
          <span v-for='(item,index) in searchInfo'>{{item}} <i v-if='index!=2'>|</i></span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    searchInfo:{
      type:Array
    }
  },
  data () {
      return {
        msg: 'template Vue',
        name: 'Reborn',
      }
    },
  components: {

  },
  created(){

  },
  mounted() {

  },
  methods:{
    toSearch() {
      console.log('跳转搜索栏');
      this.$router.push({path:'/query/'})
    },
  }
}
</script>

<style scoped>

.search-bar{
  background-color: #E64340;
  height: 50px;
  width: 100%;
  padding:5px 10px;
}
.search-bar_item{
  margin-left: 50px;
  height:30px;
  line-height: 30px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  top:50%;
  transform: translateY(-50%);
  padding:0 5px;
  z-index: 2;
}
.search-bar_item span{
  color: #999;
  margin-left: 5px;
}
.userImg{
  position: relative;
  z-index: 2;
  float: left;
  top:50%;
  transform: translateY(-50%);
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #fff;
}
.userImg img {
  width: 100%;
}
</style>
