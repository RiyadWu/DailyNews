<template>
  <div class='weui-tab'>
    <div class='weui-navbar'>
      <r-search :searchInfo='search_info'></r-search>
      <r-navtab></r-navtab>
    </div>
    <div class='weui-tab__panel' style="padding-top:90px;">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill='false' @top-status-change="handleTopChange">
        <!-- top -->
        <div class="weui-panel noborder" style="margin-bottom:10px;">
            <div class="weui-panel__bd">
                <div class="weui-media-box weui-media-box_text">
                    <p class="weui-media-box__desc">{{top.title || "今日头条新闻"}}</p>
                    <ul class="weui-media-box__info">
                        <li class="weui-media-box__info__meta"><span class='label la_Red'>置顶</span></li>
                        <li class="weui-media-box__info__meta">专题</li>
                        <li class="weui-media-box__info__meta">{{top.commentNum || 233}} 评论</li>
                        <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">{{top.time <= 1?'刚刚':''}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- /top -->
        <!-- list -->
        <div class="weui-panel" :class='{noborder:index == 0}' v-for='(item,index) in list'>
            <div class="weui-panel__bd">
                <div class="weui-media-box weui-media-box_text">
                    <p class="weui-media-box__desc" @click='toContent(item)'>{{item.title}}</p>
                    <div class='weui-media-box_img'>
                      <img v-for='(imgs,index) in item.image_list' v-lazy="imgs.url" alt="">
                    </div>
                    <ul class="weui-media-box__info">
                        <li class="weui-media-box__info__meta">{{item.media_name}}</li>
                        <li class="weui-media-box__info__meta">{{item.comment_count}} 评论</li>
                        <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">{{moment(item.publish_time)}}</span>
                        </li>
                        <span class='remove' @click.stop='pop($event,index)'>
                          <i class='fa fa-remove'></i>
                        </span>
                    </ul>
                </div>
            </div>
        </div>
        <!-- /list -->
        <div v-show = 'nodata' class="weui-loadmore weui-loadmore_line">
            <span class="weui-loadmore__tips">没有啦!</span>
        </div>

        <!-- top load -->
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'">↓</span>
          <r-pacman :load='topStatus == "loading"'></r-pacman>
        </div>
        <!-- /top load -->

      </mt-loadmore>
    </div>

  </div>
</template>

<script>
import u from '@/assets/js/Lib'
import search from '@/components/search';
import navtab from '@/components/navtab';
import pacman from '@/components/pacman';
import { Loadmore } from 'mint-ui';
import { Popup } from 'mint-ui';

export default {
  data () {
      return {
        msg: 'template Vue',
        name: 'Reborn',
        search_info:['乐高积木','web前端','炉石传说'],
        list:[],
        top:Object,
        nodata:false,
        allLoaded:false,
        page:1,
        showPop:false,
        index:Number,
        ban:false,
        topStatus:'',
      }
    },
  components: {
    'r-search': search,
    'r-navtab':navtab,
    'mt-loadmore':Loadmore,
    "mt-popup":Popup,
    'r-pacman':pacman
  },
  created(){
      this.getData()
  },
  mounted() {

  },
  methods:{
    foo() {
      console.log('foo')
    },
    handleTopChange(status){
      this.topStatus = status;
    },
    //loadData
    getData(){
      this.loading = true;
      this.$http.get('/api/news?page='+this.page).then(res => {
          // success callback
          // console.log(JSON.stringify(res.data,null,2))
          this.ban = false;
          this.loading = false;
          let list = res.data.data.content;
          if(list.length == 0){
            this.allLoaded = true;
            this.nodata = true;
            return
          }
          console.log('load data 第'+this.page+'页')
          for (var i = 0; i <list.length; i++) {
            this.list.push(list[i])
          }
          this.page++
      }, res => {
          // error callback
          this.ban = false;
          this.loading = false;
          console.log(res)
      })
    },
    //pull down
    loadTop(){
      this.ban = true;
      setTimeout(()=>{
        this.$refs.loadmore.onTopLoaded();
        this.initList();
        this.getData()
      },1500)
    },
    //pull up
    loadBottom(){
      this.ban = true;
      setTimeout(()=>{
        this.$refs.loadmore.onBottomLoaded();
        this.getData()
      },1500)
    },
    //init list
    initList(){
      this.page = 1;
      this.list = [];
      this.top = {};
      this.allLoaded = false;
      this.nodata = false;
    },
    //to content
    toContent(item){
      if(this.ban){
        return
      }
      this.$router.push({ name:'content', params: { id: item._id , url:item.url}})
    },
    //click pop
    pop(e,index){
      log('index=============>'+index);
      this.index = index;
      this.$parent.showPop = true;
      let H = $(window).height();
      let poph = $('.mint-popup').height();
      let top = e.screenY + e.offsetY+10;
      let oTop;
      if (H - top < poph) {
        this.$parent.isUP = false;
        oTop = top - poph;
      }else{
        this.$parent.isUP = true;
        oTop = top;
      }
      $('.mint-popup').css('top',oTop+'px')
    },
    unFollow(){
      this.$parent.showPop = false;
      u.delObj(this.list,this.index);
    },
    isEmptyObject(e) {
        var t;
        for (t in e) {
            return !1;
        }
        return !0
    },
    moment(str){
      let res;
      let t = str;
      let now = Date.parse(new Date())/1000;
      let time = ((now - t)/3600).toFixed(0);
      if(time>1&&time<24){
        res = time+'小时前'
      }else if(time >= 24){
        res = (time/24).toFixed(0)+"天前"
      }
      return res;
    }
  }
}
</script>

<style scoped>
</style>
