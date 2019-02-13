<template>
    <div class="newsinfo-container">
        <!-- 大标题 -->
        <h3>{{newsInfo.title}}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间:{{newsInfo.add_time | dateFormat}}</span>
            <span>点击:{{newsInfo.click}}次</span>
        </p>

        <hr>

        <!-- 内容区域 -->
        <div class="content" v-html="newsInfo.content"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            newsInfo:{},
            id:this.$route.params.id //将url地址中传递过过来的id值,挂载到data上,方便以后调用
        }
    },
    created(){
        this.getNewsInfo();
    },
    methods: {
        getNewsInfo(){
            //获取新闻详情
            this.$http.get("api/getnew/"+this.id).then(result=>{
                this.newsInfo=result.body.message[0];
            })
        }
    },
}
</script>

<style lang="less">
//scoped的作用,是为了限制样式只在当前组件中生效,不会影响其他组件
//原理是给当前组件内所有的标签都加入了一个唯一的标识符属性 
//然后,在设置样式的时候利用属性选择器来设置
.newsinfo-container{
    padding:0 4px;
    .title{
        font-size:16px;
        text-align:center;
        margin:15px 0;
        color:red;
    }
    .subtitle{
        font-size:13px;
        color:#226aff;
        display:flex;
        justify-content: space-between;
    }
    .content{
        img{
            width:100%;
        }
    }
}


</style>

