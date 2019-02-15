<template>
  <div class="photolist-container">
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a :class="['mui-control-item', item.id==0?'mui-active':'']" v-for="item in category" :key="item.id">{{item.title}}</a>
        </div>
      </div>
    </div>

    <!-- 图片列表区域 -->
    <ul class="photo-list">
       <router-link v-for="item in photoList" :key="item.id" :to="'/home/photoInfo'+item.id" tag="li">
          <img v-lazy="item.img_url">
          <div class="info">
            <h1 class="info-title">{{item.title}}</h1>
            <div class="info-body">{{item.zhaiyao}}</div>
          </div>
       </router-link>
    </ul>
  </div>
</template>

<script>
    import mui from "@/mui/js/mui.js"



export default {
  data() {
    return {
      category:[],
      photoList:[]
    };
  },

  created(){
    this.getimgCategory();
    this.getphotoList(0);
  },

  mounted() {
    mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
  },

  methods:{
    getimgCategory(){
      this.$http.get("api/getimgcategory").then(result=>{
        this.category=result.body.message;
        this.category.unshift({
          id:0,
          title:"全部" 
        })
      })
    },
    getphotoList(cateid){
      this.$http.get("api/getimages/"+cateid).then(result=>{
        this.photoList=result.body.message
      })
    }
  }
};
</script>

<style>
*{
  touch-action: pan-y;
}
</style>

