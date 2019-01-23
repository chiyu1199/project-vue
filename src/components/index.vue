<template>
  <div>
    <header class="header">
      <div class="fix_nav">
        <div
          style="max-width:768px;margin:0 auto;height: 44px;position: relative;background:#000000;"
        >
          <form action="/m_search/list" method="get" id="searchform" name="searchform">
            <div class="navbar-search left-search">
              <input
                type="text"
                id="keyword"
                name="keyword"
                value
                placeholder="搜索商品"
                class="form-control"
              >
            </div>
            <div class="nav-right">
              <input
                type="button"
                value="搜索"
                onclick="searchproduct();"
                class="img-responsive"
                style="text-align:center;background:#ccc;border-radius: 5px;border:none;height:34px;vertical-align:middle;clear:both;padding:0px;width:42px;"
              >
            </div>
          </form>
        </div>
      </div>
    </header>

    <banner></banner>
    
    <div class="container">

      
      <div class="row category">
        <a href="/m_search/list?param.hot='Y'" class="col-xs-3">
          <img class="img-responsive" src="../assets/img/icon_rm.png">
          <h4>热门</h4>
        </a>
        <a href="/m_search/list?param.commend='Y'" class="col-xs-3">
          <img class="img-responsive" src="../assets/img/icon_tm.png">
          <h4>精品</h4>
        </a>
        <a href="/theme/allThemes" class="col-xs-3">
          <img class="img-responsive" src="../assets/img/theme.png">
          <h4>专题列表</h4>
        </a>
        <a href="/brand" class="col-xs-3">
          <img class="img-responsive" src="../assets/img/icon_pp.png">
          <h4>品牌</h4>
        </a>
      </div>

      <div class="row">
        <!--产品块-->
        <div class="tb_box">
          <h2 class="tab_tit">
            <a class="more" href="http://m.legendshop.cn/m_search/list?categoryId=36">更多</a>
            礼品箱包
          </h2>

          <div class="tb_type tb_type_even clearfix">
            <router-link class="tb_floor" to="./detail">
              <img src="../assets/img/c2abb958-aca8-42f2-be52-ee1c072caec0.jpg" style="width:100%;">
            </router-link>
            <router-link class="th_link" to="./detail">
              <img
                class="tb_pic"
                src="../assets/img/e71099af-8a08-45f5-af16-4e8edf2f1bff.jpg"
                style="width:100%;"
              >
            </router-link>
            <router-link class="th_link tb_last" to="./detail">
              <img
                class="tb_pic"
                src="../assets/img/33c256a8-7bff-4c6b-8686-f209bbad1301.jpg"
                style="width:100%;"
              >
            </router-link>
          </div>
        </div>
        <!--产品块-->
        <div class="tb_box">
          <h2 class="tab_tit">
            <a class="more" href="http://m.legendshop.cn/m_search/list?categoryId=38">更多</a>
            服饰鞋帽
          </h2>

          <div class="tb_type clearfix">
            <router-link class="tb_floor" to="./detail">
              <img src="../assets/img/0bbbb6bf-0d00-45c0-92f7-347377f2edb5.jpg" style="width:100%;">
            </router-link>
            <router-link class="th_link" to="./detail">
              <img
                class="tb_pic"
                src="../assets/img/0d86960d-20b5-4dd3-afee-8453b5ea5e95.jpg"
                style="width:100%;"
              >
            </router-link>
            <router-link class="th_link tb_last" to="./detail">
              <img
                class="tb_pic"
                src="../assets/img/1e13498f-419d-4ebd-a3b2-d0ad95ceaa39.jpg"
                style="width:100%;"
              >
            </router-link>
          </div>
        </div>
        <!--产品块-->
        <div class="tb_box">
          <h2 class="tab_tit">
            <a class="more" href="http://m.legendshop.cn/m_search/list?categoryId=35">更多</a>
            数码办公
          </h2>

          <div class="tb_type tb_type_even clearfix">
            <router-link class="tb_floor" to="./detail">
              <img src="../assets/img/bd6771d9-f220-454d-83b2-d58d2046d23a.jpg" style="width:100%;">
            </router-link>
            <router-link class="th_link" to="./detail">
              <img
                class="tb_pic"
                src="../assets/img/04ef50d9-97f0-4fea-8359-ee21376df392.jpg"
                style="width:100%;"
              >
            </router-link>
            <router-link class="th_link tb_last" to="./detail">
              <img
                class="tb_pic"
                src="../assets/img/d07a93ef-cdff-4b21-a12b-d817890aa6d6.jpg"
                style="width:100%;"
              >
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "./banner";

export default {
  components:{banner} 
}
</script>


<style>
/* .category{padding:10px 0; text-align:center; background:#fff; border-bottom:1px solid #e5e5e5;margin-bottom: 10px;}
.category .col-xs-3{width:25%;float: left;}
.category img{width:75%;}
.category h4{margin:5px 0 0 0; font-size:12px;}
@media screen and (min-width: 767px){	
	.category h4{margin:5px 0 10px 0; font-size:16px;}
	.category img{width:50%;}
}
.category img{margin:0 auto;}
.tb_box{background:#fff; border-top:1px solid #e5e5e5; border-bottom:1px solid #e5e5e5; margin-bottom:10px;}
.tb_box .tab_tit{margin:0; padding:10px; font-size:20px; font-weight: normal; color:#333;}
.tb_box .tab_tit .more{float:right; font-size:14px; margin-top:3px; color:#6a91ee; position:relative; padding-right:13px;}
.tb_box .tab_tit .more:after{content:"";width:10px;height:10px;border-right:1px solid #6a91ee; border-bottom:1px solid #6a91ee;top:50%; right:5px;margin-top:-5px;position:absolute;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg); -ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);}
.tb_box .tb_type{border-top:1px solid #e5e5e5; overflow:hidden;}
.tb_type .tb_pic{width:100%; display:block;}
.tb_type .th_link{border-bottom: 1px solid #dadada;border-width: 0 0 1px;float: right; width: 50%;}
.tb_floor{width:50%;float:left;border-right: 1px solid #dadada; margin-left:-1px;} 
.tb_type .tb_last{border-bottom:none;}
.tb_type_even .tb_floor{float:right; border-left: 1px solid #dadada; border-right:none;}
.tb_type_even .th_link{float:left;}

.nav_inner{max-width:768px;margin:0 auto;background:#000000; position: relative;}
.navbar-search{height: 100%; top:0; position: absolute; width: auto !important;}
.left-search{padding-right: 0;left:5px;right: 55px;}
.right-search{padding-right: 0;right:5px;left: 55px;}
.left-search .form-control{background:#fff url(../assets/images/search.jpg) no-repeat 5px center; background-size: 25px;padding-left: 30px;margin-top:5px;}
.right-search .form-control{background:#fff url(../assets/images/search.jpg) no-repeat right center; background-size: 25px; margin-top:5px;}
.nav-left,.nav-right{width:42px; height:34px; position:absolute; top:5px; display:block; overflow:hidden; text-indent:-999px;border-radius: 5px;}
.nav-left{left:5px;}
.nav-right{right:5px;text-align: center;}  */

</style>
