<template>
  <div class="weui-tabbar">
      <a href="javascript:;" @click='tab_click(item,index)' class="weui-tabbar__item" :class='{"weui-bar__item_on":tabName == item.text}' v-for='(item,index) in tab'>
          <span style="display: inline-block;position: relative;">
              <i class="weui-tabbar__icon fa" :class='item.icon'></i>
              <span v-if='index == 0' class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
          </span>
          <!-- <i class="weui-tabbar__icon fa fa-lg" :class='item.icon'></i> -->
          <p class="weui-tabbar__label">{{item.text}}</p>
      </a>
  </div>
</template>

<script>

export default {
  data () {
      return {
        msg: 'template Vue',
        name: 'Reborn',
        tab:[
          {
            text:'首页',
            icon:'fa-home'
          },
          {
            text:'视频',
            icon:'fa-play'
          },
          {
            text:'微头条',
            icon:'fa-comment-o'
          },
          {
            text:'我的',
            icon:'fa-user'
          }
        ],
        tabName:'首页'
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
    tab_click(item,index){
      this.tabName = item.text;
      let arr = ['','video','headline','user'];
      this.$router.push({ path: '/'+arr[index]})   
    }
  }
}
</script>

<style scoped>

</style>
