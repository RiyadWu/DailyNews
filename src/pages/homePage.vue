<template>
  <div class='weui-tab'>
    <div class='weui-navbar'>
      <r-search :searchInfo='search_info'></r-search>
      <r-navtab></r-navtab>
    </div>
    <div class='weui-tab__panel' style="padding-top:90px;">
      <!-- top -->
      <div class="weui-panel noborder" style="margin-bottom:10px;">
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
                    <p class="weui-media-box__desc">{{item.title}}</p>
                    <div class='weui-media-box_img'>
                      <img v-for='(imgs,index) in item.img' :src="imgs" alt="">
                    </div>
                    <ul class="weui-media-box__info">
                        <li class="weui-media-box__info__meta">{{item.author}}</li>
                        <li class="weui-media-box__info__meta">{{item.commentNum}} 评论</li>
                        <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">{{item.time<=1?'刚刚':item.time}} <span v-show='item.time>1'>分钟前</span></li>
                        <span class='remove'>
                          <i class='fa fa-remove'></i>
                        </span>
                    </ul>
                </div>
            </div>
        </div>
        <!-- /list -->
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
        list:[],
        top:{

        }
      }
    },
  components: {
    'r-search': search,
    'r-navtab':navtab
  },
  created(){
    this.getData();
  },
  mounted() {

  },
  methods:{
    foo() {
      console.log('foo')
    },
    getData(){
      this.$http.get('/news').then(res => {
          // success callback
          // console.log(JSON.stringify(res.data))

          let topinfo = res.data.data.top;
          let list = res.data.data.content;
          this.top = topinfo;
          for (var i = 0; i <list.length; i++) {
            this.list.push(list[i])
          }
          console.log(this.top)
          console.log(this.list)
      }, res => {
          // error callback
          console.log(res)
      })
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
