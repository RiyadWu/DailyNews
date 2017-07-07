<template>
  <div class='weui-tab'>
    <h1>query</h1>
    <video id="videoElement" controls width="100%" height="350">
      Your browser is too old which doesn't support HTML5 video.
    </video>
  </div>
</template>

<script>
import u from '@/assets/js/Lib';

import '@/assets/js/flv.js';

export default {
  data () {
      return {
        msg: 'template Vue',
        name: 'Reborn',
        url:'./static/video/001.mp4',
      }
    },
  components: {

  },
  created(){
  },
  mounted() {
    this.init();

  },
  methods:{
    foo() {
      console.log('foo')
    },
    init(){
      var _self = this;
      console.log('isSupported: ' + flvjs.isSupported());
      if (flvjs.isSupported()) {
        var videoElement = document.getElementById('videoElement');
        var flvPlayer = flvjs.createPlayer({
            type: 'mp4',
            url: _self.url
        });
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        // flvPlayer.play();
      }
    }
  }
}
</script>

<style scoped>

</style>
