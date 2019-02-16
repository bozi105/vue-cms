<template>
  <div class="goodsList-container">
    <div class="goods-item" v-for="item in goodList" :key="item.id" @click="getDetail(id)"> 
      <img :src="item.img_url" alt>
      <h1>{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sale">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>

    <!-- 在网页中,有两种跳转方式 -->
    <!-- 方式1:使用a标签的形式 叫做标签跳转 -->
    <!-- 方式2:使用window.location.href的形式,叫做 编程式导航-->

    <!-- 加载更多按钮 -->
    <mt-button type="danger" size="large" @click="getMore" plain>加载更多</mt-button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            pagesize:1,
            goodList:[]
        }
    },
    created(){
        this.getgoodList()
    },
    methods: {
        //获取商品列表
        getgoodList(){
            this.$http.get('api/getgoods?pageindex='+this.pagesize).then(result=>{
                // this.goodList=result.body.message;
                this.goodList=this.goodList.concat(result.body.message)
            })
        },
        getMore(){
            this.pagesize++;
            this.getgoodList();
        },
        getDetail(id){
            //使用js的形式进行路由导航
            //注意:一定要区分this.$route 和 this.$router 这两个对象,
            //其中:this.$route 是路由[参数对象] ,所有路有中的参数,params,query都属于它
            //     this.$router 是一个路由[导航对象],用它可以方便的 使用 js 代码 ,实现路由的前进,后退
            //    跳转到新的url地址
            this.$router.push("./home/goodsInfo/"+id)
        }
    },
}
</script>

<style lang="less" scoped>
    .goodsList-container{
        display: flex;
        flex-wrap: wrap;
        padding:5px;
        justify-content:space-between;
        background-color: #fff;
        .goods-item{
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 2px;
            margin-bottom:5px;
            min-height: 268px;
            img{
                width: 100%;

            }
            h1{
                font-size:14px;
                font-weight: bold;
            }
            .info{
                background-color: #eee;
                p{
                    margin: 0;
                    padding: 5px;
                }
                .price{
                    .now{
                        font-size:16px;
                        color: red;
                        font-weight: bold;
                    }
                    .old{
                        font-size: 12px;
                        text-decoration: line-through;
                        margin-left: 10px;
                    }
                }
            }
            .sale{
                display: flex;
                justify-content:space-between;
            }
        }
    }
</style>

