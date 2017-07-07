<template>
  <div class='weui-tab'>
    <div class='weui-navbar'>
      <r-search :searchInfo='search_info'></r-search>
      <r-navtab></r-navtab>
    </div>
    <div class='weui-tab__panel' style="padding-top:90px;">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill='false'>
        <!-- top -->
        <div v-show='!isEmptyObject(top)' class="weui-panel noborder" style="margin-bottom:10px;">
            <div class="weui-panel__bd">
                <div class="weui-media-box weui-media-box_text">
                    <p class="weui-media-box__desc">{{top.title}}</p>
                    <ul class="weui-media-box__info">
                        <li class="weui-media-box__info__meta"><span class='label la_Red'>置顶</span></li>
                        <li class="weui-media-box__info__meta">专题</li>
                        <li class="weui-media-box__info__meta">{{top.commentNum}} 评论</li>
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
                      <img v-for='(imgs,index) in item.img' v-lazy="imgs" alt="">
                    </div>
                    <ul class="weui-media-box__info">
                        <li class="weui-media-box__info__meta">{{item.author}}</li>
                        <li class="weui-media-box__info__meta">{{item.commentNum}} 评论</li>
                        <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">{{item.time<=1?'刚刚':item.time}} <span v-show='item.time>1'>分钟前</span>
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
      </mt-loadmore>
      
    </div>

  </div>
</template>

<script>
import u from '@/assets/js/Lib'
import search from '@/components/search';
import navtab from '@/components/navtab';
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
      }
    },
  components: {
    'r-search': search,
    'r-navtab':navtab,
    'mt-loadmore':Loadmore,
    "mt-popup":Popup
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
    //loadData
    getData(){
      this.$http.get('/news').then(res => {
          // success callback
          console.log('load data 第'+this.page+'页')
          let topinfo = res.data.data.top;
          let list = res.data.data.content;
          if(list.length == 0){
            this.allLoaded = true;
            this.nodata = true;
            return
          }
          this.top = topinfo;
          for (var i = 0; i <list.length; i++) {
            this.list.push(list[i])
          }
          this.page++
      }, res => {
          // error callback
          console.log(res)
      })
    },
    //pull down
    loadTop(){

      setTimeout(()=>{
        this.$refs.loadmore.onTopLoaded();
        this.initList();
        this.getData()
      },1500)
    },
    //pull up
    loadBottom(){
      // this.allLoaded = true;
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
    },
    //to content
    toContent(item){
      this.$router.push({ name: 'content', params: { id: item.id , author:item.author}})
    },
    //click pop
    pop(e,index){
      log('index==============>'+index);
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
    }
  }
}
</script>

<style scoped>
</style>
