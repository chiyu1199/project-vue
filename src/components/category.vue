<template>
  <div>
    <header class="header">
      <div class="fix_nav">
        <div class="nav_inner">
          <a class="nav-left back-icon" href="javascript:history.go(-1);">返回</a>
          <div class="tit">分类</div>
          <div class="sousuo" id="sousou">
            <img src="../assets/images/sou.png">
          </div>
        </div>
      </div>
    </header>
    <div style="overflow: hidden;position: fixed;width: 100%;z-index: 10000;top:0px;">
      <div class="order_top_count" style="display:none;">
        <div class="order_top">
          <div class="order_a_l">
            <div id="nav-left_ll">
              <img src="images/order_top_l.png">
            </div>
          </div>
          <div class="order_sou">
            <form action="/m_search/list" method="get" id="searchform" name="searchform">
              <input name="keyword" id="keyword" placeholder="搜索商品" type="text" value>
              <span class="pro_sou" style="cursor: pointer;" onclick="searchproduct();">
                <img src="images/Search.png">
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row" id="row_5">
        <div class="sort-arat" style="margin-top: 10px;">
          <ul>
            <li>
              <router-link to="categorylist">
                <img
                  alt="图片大小为100*100"
                  style="width:initial;height:100px;"
                  src="../assets/img/9cb5861c-5ff8-42b8-8c9b-0f6b4a53cde9.jpg"
                >
                <div
                  style="width:90%;white-space: nowrap;text-overflow: ellipsis;overflow:hidden;text-align:center;margin: auto;"
                >礼品箱包</div>
              </router-link>
            </li>
            <li>
              <router-link to="categorylist">
                <img
                  alt="图片大小为100*100"
                  style="width:initial;height:100px;"
                  src="../assets/img/65bd9fc8-7f5e-4dba-b083-0c05b1bc9b96.jpg"
                >
                <div
                  style="width:90%;white-space: nowrap;text-overflow: ellipsis;overflow:hidden;text-align:center;margin: auto;"
                >家居家装</div>
              </router-link>
            </li>
            <li>
              <router-link to="categorylist">
                <img
                  alt="图片大小为100*100"
                  style="width:initial;height:100px;"
                  src="../assets/img/2e7b0a93-2da2-437e-adde-ffba0cfbe218.jpg"
                >
                <div
                  style="width:90%;white-space: nowrap;text-overflow: ellipsis;overflow:hidden;text-align:center;margin: auto;"
                >数码办公</div>
              </router-link>
            </li>
            <li>
              <router-link to="categorylist">
                <img
                  alt="图片大小为100*100"
                  style="width:initial;height:100px;"
                  src="../assets/img/f91ac28f-b66c-45e0-9752-41bcfa0302c7.jpg"
                >
                <div
                  style="width:90%;white-space: nowrap;text-overflow: ellipsis;overflow:hidden;text-align:center;margin: auto;"
                >服饰鞋帽</div>
              </router-link>
            </li>
            <li>
              <router-link to="categorylist">
                <img
                  alt="图片大小为100*100"
                  style="width:initial;height:100px;"
                  src="../assets/img/ce94d818-bc17-4028-9c5f-cd22e6661d83.jpg"
                >
                <div
                  style="width:90%;white-space: nowrap;text-overflow: ellipsis;overflow:hidden;text-align:center;margin: auto;"
                >家用电器</div>
              </router-link>
            </li>
            <li>
              <router-link to="categorylist">
                <img
                  alt="图片大小为100*100"
                  style="width:initial;height:100px;"
                  src="../assets/img/977a1fc2-0ee7-4f73-a7f6-eea5b73f642b.jpg"
                >
                <div
                  style="width:90%;white-space: nowrap;text-overflow: ellipsis;overflow:hidden;text-align:center;margin: auto;"
                >个护化妆</div>
              </router-link>
            </li>
            <li>
              <router-link to="categorylist">
                <img
                  alt="图片大小为100*100"
                  style="width:initial;height:100px;"
                  src="../assets/img/8d502712-32ed-4301-a4e7-45b1ea4aaa77.jpg"
                >
                <div
                  style="width:90%;white-space: nowrap;text-overflow: ellipsis;overflow:hidden;text-align:center;margin: auto;"
                >厨房餐饮</div>
              </router-link>
            </li>
            <li>
              <router-link to="categorylist">
                <img
                  alt="图片大小为100*100"
                  style="width:initial;height:100px;"
                  src="../assets/img/2cf2f1f9-df47-47bc-be52-c5d70af53778.jpg"
                >
                <div
                  style="width:90%;white-space: nowrap;text-overflow: ellipsis;overflow:hidden;text-align:center;margin: auto;"
                >珠宝手表</div>
              </router-link>
            </li>
            <li>
              <router-link to="categorylist">
                <img
                  alt="图片大小为100*100"
                  style="width:initial;height:100px;"
                  src="../assets/img/1613e012-64fa-444a-b4de-83ebd804b0d6.jpg"
                >
                <div
                  style="width:90%;white-space: nowrap;text-overflow: ellipsis;overflow:hidden;text-align:center;margin: auto;"
                >运动健康</div>
              </router-link>
            </li>
          </ul>
        </div>

        <div class="mt10 white-bg">
          <h4 class="sort-tit">品牌分类</h4>
          <div class="sort-arat brand-areat">
            <ul>
              <li>
                <router-link to="categorylist">
                  <img
                    alt="图片大小为200*105"
                    src="../assets/img/886a68b6-f0aa-41cd-ad89-757c427a33c9.jpg"
                    style="height: 39px;"
                  >
                </router-link>
              </li>
              <li>
                <router-link to="categorylist">
                  <img
                    alt="图片大小为200*105"
                    src="../assets/img/899329e3-9ec3-466b-856f-15f2a91b72a4.jpg"
                    style="height: 39px;"
                  >
                </router-link>
              </li>
              <li>
                <router-link to="categorylist">
                  <img
                    alt="图片大小为200*105"
                    src="../assets/img/276aed28-5c4c-4ded-9070-59719e583ee5.jpg"
                    style="height: 39px;"
                  >
                </router-link>
              </li>
              <li>
                <router-link to="categorylist">
                  <img
                    alt="图片大小为200*105"
                    src="../assets/img/01d5dc75-9e5d-405f-bf93-5793fec72e24.jpg"
                    style="height: 39px;"
                  >
                </router-link>
              </li>
              <li>
                <router-link to="categorylist">
                  <img
                    alt="图片大小为200*105"
                    src="../assets/img/a5b3890a-7d78-4bac-be54-45febc984835.jpg"
                    style="height: 39px;"
                  >
                </router-link>
              </li>
              <li>
                <router-link to="categorylist">
                  <img
                    alt="图片大小为200*105"
                    src="../assets/img/e6657ca7-c4c5-43fc-9bd6-29999102fc61.jpg"
                    style="height: 39px;"
                  >
                </router-link>
              </li>
              <li>
                <router-link to="categorylist">
                  <img
                    alt="图片大小为200*105"
                    src="../assets/img/7865e470-0296-4f6b-98aa-30ab9824358d.jpg"
                    style="height: 39px;"
                  >
                </router-link>
              </li>
              <li>
                <router-link to="categorylist">
                  <img
                    alt="图片大小为200*105"
                    src="../assets/img/b5804b78-d14c-4e34-bd39-244183f92997.jpg"
                    style="height: 39px;"
                  >
                </router-link>
              </li>
              <li>
                <router-link to="categorylist">
                  <img
                    alt="图片大小为200*105"
                    src="../assets/img/ee767da6-119b-4463-a376-72eb0f495629.png"
                    style="height: 39px;"
                  >
                </router-link>
              </li>
              <li>
                <router-link to="categorylist">
                  <img
                    alt="图片大小为200*105"
                    src="../assets/img/917b4ded-1980-4602-8ad6-a5fa95a9b3b9.jpg"
                    style="height: 39px;"
                  >
                </router-link>
              </li>
              <li>
                <router-link to="categorylist">
                  <img
                    alt="图片大小为200*105"
                    src="../assets/img/ef8d9883-7711-4142-8533-5d7cf91082e4.png"
                    style="height: 39px;"
                  >
                </router-link>
              </li>
              <li>
                <router-link to="categorylist">
                  <img
                    alt="图片大小为200*105"
                    src="../assets/img/a265b462-4d22-4914-951b-4068d533be6b.png"
                    style="height: 39px;"
                  >
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
/* .header{height:44px;position: relative;}
.fix_nav{height:44px; line-height: 44px;top:0; left: 0; width: 100%; z-index:99;}

.order_sou{float:right;line-height:28px;width: 85%;padding-top: 6px;position: relative;}
.order_sou input{border-radius:7px;width: 96%;color:#999;font-size: 16px;padding-left: 10px;line-height:32px;height:32px;-webkit-appearance:none;}
.order_sou img{position: absolute;right:7%;top:11px;width: 20px;}
.sou_count{background:#eee;height:125px;padding-right: 4%;padding-left: 4%;display:none;margin-top: 44px;}
.sousuo{height: 44px;line-height: 44px; position: absolute;right: 10px;top: 0;color:#fff;font-size: 13px;cursor: pointer;}
.sousuo img{width: 25px;}

.sort-tit{border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5; padding:10px; color:#6a94e7; margin:0;background:#fff;}
.sort-arat{overflow:hidden; background:#fff; margin-top: 80px;}
.sort-arat li{float:left;width:33.33333%;display:table;}
.sort-arat li a{display:table-cell;width:100%; line-height: 1.8; vertical-align:middle;text-align:center;border-right:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5; height:100px;padding: 5% 0;}
.sort-arat li img{max-width:100px;width:100px; margin-bottom:5px;}
.brand-areat li a{width:auto; height:auto;}
.brand-areat li img{width:auto; margin:12% 0; max-width: 100px;width: 70%;} */
</style>
