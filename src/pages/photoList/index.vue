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
  </div>
</template>

<script>
     import mui from "@/mui/js/mui.js"



export default {
  data() {
    return {
      category:[]
    };
  },

  created(){
    this.getimgCategory();
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
    }
  }
};
</script>

<style>
*{
  touch-action: pan-y;
}
</style>

