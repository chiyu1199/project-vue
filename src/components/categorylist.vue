<template>
  <div>
    <header class="header">
      <div class="fix_nav">
        <div class="nav_inner">
          <a class="nav-left back-icon" href="javascript:history.back();">返回</a>
          <div class="tit">产品列表</div>
        </div>
      </div>
    </header>

    <div class="container" id="container2">
      <div class="row">
        <ul class="mod-filter clearfix">
          <div class="white-bg_2 bb1">
            <li id="default" class="active">
              <a title="默认排序" href="javascript:void(0);">默认</a>
            </li>
            <li id="buys">
              <a title="点击按销量从高到低排序" href="javascript:void(0);">
                销量
                <i class="icon_sort"></i>
              </a>
            </li>
            <li id="comments">
              <a title="点击按评论数从高到低排序" href="javascript:void(0);">
                评论数
                <i class="icon_sort"></i>
              </a>
            </li>
            <li id="cash">
              <a title="点击按价格从高到低排序" href="javascript:void(0);">
                价格
                <i class="icon_sort"></i>
              </a>
            </li>
          </div>
        </ul>

        <div class="item-list" id="container" rel="2" status="0">
          <input type="hidden" id="ListTotal" value="1">
          <a href="views.html">
            <div class="hproduct clearfix" style="background:#fff;border-top:0px;">
              <div class="p-pic">
                <img
                  style="max-height:100px;margin:auto;"
                  class="img-responsive"
                  src="../assets/img/ffb9f5ad-27c7-44e0-8a48-634a71872dfb.png"
                >
              </div>
              <div class="p-info">
                <p class="p-title">好德</p>
                <p class="p-origin">
                  <em class="price">¥10.00</em>
                </p>
                <p class="mb0">
                  <del class="old-price">¥12.00</del>
                </p>
              </div>
            </div>
          </a>
          <a href="views.html">
            <div class="hproduct clearfix" style="background:#fff;border-top:0px;">
              <div class="p-pic">
                <img
                  style="max-height:100px;margin:auto;"
                  class="img-responsive"
                  src="../assets/img/83baf5bf-92df-4d85-b504-3dda879c84d7.png"
                >
              </div>
              <div class="p-info">
                <p class="p-title">臭东西</p>
                <p class="p-origin">
                  <em class="price">¥12.00</em>
                </p>
              </div>
            </div>
          </a>
          <a href="views.html">
            <div class="hproduct clearfix" style="background:#fff;border-top:0px;">
              <div class="p-pic">
                <img
                  style="max-height:100px;margin:auto;"
                  class="img-responsive"
                  src="../assets/img/f3e8ccfb-2827-43ad-80a4-b59d3a2d406d.jpg"
                >
              </div>
              <div class="p-info">
                <p class="p-title">四喜丸子</p>
                <p class="p-origin">
                  <em class="price">¥10.00</em>
                </p>
              </div>
            </div>
          </a>
          <a href="views.html">
            <div class="hproduct clearfix" style="background:#fff;border-top:0px;">
              <div class="p-pic">
                <img
                  style="max-height:100px;margin:auto;"
                  class="img-responsive"
                  src="../assets/img/ee3aac6b-26a0-41bb-8e24-897d522e8412.jpg"
                >
              </div>
              <div class="p-info">
                <p class="p-title">aza阿札2015秋冬新款潮流女包 个性嘴唇印花时尚短款女士钱包1515</p>
                <p class="p-origin">
                  <em class="price">¥138.00</em>
                </p>
                <p class="mb0">
                  <del class="old-price">¥238.00</del>
                </p>
              </div>
            </div>
          </a>
          <a href="views.html">
            <div class="hproduct clearfix" style="background:#fff;border-top:0px;">
              <div class="p-pic">
                <img
                  style="max-height:100px;margin:auto;"
                  class="img-responsive"
                  src="../assets/img/419da357-1a5e-4191-8652-fa9f73579824.jpg"
                >
              </div>
              <div class="p-info">
                <p class="p-title">奈思堡特价新款 包包时尚女包手包女牛皮小包女式手拿包斜跨包</p>
                <p class="p-origin">
                  <em class="price">¥119.00</em>
                </p>
                <p class="mb0">
                  <del class="old-price">¥339.00</del>
                </p>
              </div>
            </div>
          </a>
          <a href="views.html">
            <div class="hproduct clearfix" style="background:#fff;border-top:0px;">
              <div class="p-pic">
                <img
                  style="max-height:100px;margin:auto;"
                  class="img-responsive"
                  src="../assets/img/1787bd1d-9381-402b-b98e-97ceeddf7692.jpg"
                >
              </div>
              <div class="p-info">
                <p class="p-title">艾吉贝2015新款多层收纳真皮单肩斜挎包女包头层牛皮斜跨小包包女</p>
                <p class="p-origin">
                  <em class="price">¥179.00</em>
                </p>
                <p class="mb0">
                  <del class="old-price">¥358.00</del>
                </p>
              </div>
            </div>
          </a>
          <a href="views.html">
            <div class="hproduct clearfix" style="background:#fff;border-top:0px;">
              <div class="p-pic">
                <img
                  style="max-height:100px;margin:auto;"
                  class="img-responsive"
                  src="../assets/img/44cd1b3d-80e7-4e62-94db-ba53a273cfe4.jpg"
                >
              </div>
              <div class="p-info">
                <p class="p-title">帕迪欧单肩包休闲包男包真皮包男士手提包包横款牛皮商务包公文包</p>
                <p class="p-origin">
                  <em class="price">¥398.00</em>
                </p>
                <p class="mb0">
                  <del class="old-price">¥1588.00</del>
                </p>
              </div>
            </div>
          </a>
          <a href="views.html">
            <div class="hproduct clearfix" style="background:#fff;border-top:0px;">
              <div class="p-pic">
                <img
                  style="max-height:100px;margin:auto;"
                  class="img-responsive"
                  src="../assets/img/8a009458-f5df-407c-95ca-c2ee81bffbc2.jpg"
                >
              </div>
              <div class="p-info">
                <p class="p-title">2015新款七匹狼男包 男士手包真皮软皮手拿包男商务大容量手抓包</p>
                <p class="p-origin">
                  <em class="price">¥239.00</em>
                </p>
                <p class="mb0">
                  <del class="old-price">¥479.00</del>
                </p>
              </div>
            </div>
          </a>
          <a href="views.html">
            <div class="hproduct clearfix" style="background:#fff;border-top:0px;">
              <div class="p-pic">
                <img
                  style="max-height:100px;margin:auto;"
                  class="img-responsive"
                  src="../assets/img/3bec333d-f60a-48a3-999c-371c4fe67134.jpg"
                >
              </div>
              <div class="p-info">
                <p class="p-title">BOSSsunwen正品专柜手包男包钱包皮包卡包商务S15-230643A1T</p>
                <p class="p-origin">
                  <em class="price">¥550.00</em>
                </p>
                <p class="mb0">
                  <del class="old-price">¥1048.00</del>
                </p>
              </div>
            </div>
            <header class="header">
              <div class="fix_nav">
                <div class="nav_inner">
                  <a class="nav-left back-icon" href="javascript:history.back();">返回</a>
                  <div class="tit">产品列表</div>
                </div>
              </div>
            </header>

            <div class="container" id="container2">
              <div class="row">
                <ul class="mod-filter clearfix">
                  <div class="white-bg_2 bb1">
                    <li id="default" class="active">
                      <a title="默认排序" href="javascript:void(0);">默认</a>
                    </li>
                    <li id="buys">
                      <a title="点击按销量从高到低排序" href="javascript:void(0);">
                        销量
                        <i class="icon_sort"></i>
                      </a>
                    </li>
                    <li id="comments">
                      <a title="点击按评论数从高到低排序" href="javascript:void(0);">
                        评论数
                        <i class="icon_sort"></i>
                      </a>
                    </li>
                    <li id="cash">
                      <a title="点击按价格从高到低排序" href="javascript:void(0);">
                        价格
                        <i class="icon_sort"></i>
                      </a>
                    </li>
                  </div>
                </ul>

                <div class="item-list" id="container" rel="2" status="0">
                  <input type="hidden" id="ListTotal" value="1">
                  <a href="views.html">
                    <div class="hproduct clearfix" style="background:#fff;border-top:0px;">
                      <div class="p-pic">
                        <img
                          style="max-height:100px;margin:auto;"
                          class="img-responsive"
                          src="../assets/img/ffb9f5ad-27c7-44e0-8a48-634a71872dfb.png"
                        >
                      </div>
                      <div class="p-info">
                        <p class="p-title">好德</p>
                        <p class="p-origin">
                          <em class="price">¥10.00</em>
                        </p>
                        <p class="mb0">
                          <del class="old-price">¥12.00</del>
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="views.html">
                    <div class="hproduct clearfix" style="background:#fff;border-top:0px;">
                      <div class="p-pic">
                        <img
                          style="max-height:100px;margin:auto;"
                          class="img-responsive"
                          src="../assets/img/83baf5bf-92df-4d85-b504-3dda879c84d7.png"
                        >
                      </div>
                      <div class="p-info">
                        <p class="p-title">臭东西</p>
                        <p class="p-origin">
                          <em class="price">¥12.00</em>
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="views.html">
                    <div class="hproduct clearfix" style="background:#fff;border-top:0px;">
                      <div class="p-pic">
                        <img
                          style="max-height:100px;margin:auto;"
                          class="img-responsive"
                          src="../assets/img/f3e8ccfb-2827-43ad-80a4-b59d3a2d406d.jpg"
                        >
                      </div>
                      <div class="p-info">
                        <p class="p-title">四喜丸子</p>
                        <p class="p-origin">
                          <em class="price">¥10.00</em>
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="views.html">
                    <div class="hproduct clearfix" style="background:#fff;border-top:0px;">
                      <div class="p-pic">
                        <img
                          style="max-height:100px;margin:auto;"
                          class="img-responsive"
                          src="../assets/img/ee3aac6b-26a0-41bb-8e24-897d522e8412.jpg"
                        >
                      </div>
                      <div class="p-info">
                        <p class="p-title">aza阿札2015秋冬新款潮流女包 个性嘴唇印花时尚短款女士钱包1515</p>
                        <p class="p-origin">
                          <em class="price">¥138.00</em>
                        </p>
                        <p class="mb0">
                          <del class="old-price">¥238.00</del>
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="views.html">
                    <div class="hproduct clearfix" style="background:#fff;border-top:0px;">
                      <div class="p-pic">
                        <img
                          style="max-height:100px;margin:auto;"
                          class="img-responsive"
                          src="../assets/img/419da357-1a5e-4191-8652-fa9f73579824.jpg"
                        >
                      </div>
                      <div class="p-info">
                        <p class="p-title">奈思堡特价新款 包包时尚女包手包女牛皮小包女式手拿包斜跨包</p>
                        <p class="p-origin">
                          <em class="price">¥119.00</em>
                        </p>
                        <p class="mb0">
                          <del class="old-price">¥339.00</del>
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="views.html">
                    <div class="hproduct clearfix" style="background:#fff;border-top:0px;">
                      <div class="p-pic">
                        <img
                          style="max-height:100px;margin:auto;"
                          class="img-responsive"
                          src="../assets/img/1787bd1d-9381-402b-b98e-97ceeddf7692.jpg"
                        >
                      </div>
                      <div class="p-info">
                        <p class="p-title">艾吉贝2015新款多层收纳真皮单肩斜挎包女包头层牛皮斜跨小包包女</p>
                        <p class="p-origin">
                          <em class="price">¥179.00</em>
                        </p>
                        <p class="mb0">
                          <del class="old-price">¥358.00</del>
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="views.html">
                    <div class="hproduct clearfix" style="background:#fff;border-top:0px;">
                      <div class="p-pic">
                        <img
                          style="max-height:100px;margin:auto;"
                          class="img-responsive"
                          src="../assets/img/44cd1b3d-80e7-4e62-94db-ba53a273cfe4.jpg"
                        >
                      </div>
                      <div class="p-info">
                        <p class="p-title">帕迪欧单肩包休闲包男包真皮包男士手提包包横款牛皮商务包公文包</p>
                        <p class="p-origin">
                          <em class="price">¥398.00</em>
                        </p>
                        <p class="mb0">
                          <del class="old-price">¥1588.00</del>
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="views.html">
                    <div class="hproduct clearfix" style="background:#fff;border-top:0px;">
                      <div class="p-pic">
                        <img
                          style="max-height:100px;margin:auto;"
                          class="img-responsive"
                          src="../assets/img/8a009458-f5df-407c-95ca-c2ee81bffbc2.jpg"
                        >
                      </div>
                      <div class="p-info">
                        <p class="p-title">2015新款七匹狼男包 男士手包真皮软皮手拿包男商务大容量手抓包</p>
                        <p class="p-origin">
                          <em class="price">¥239.00</em>
                        </p>
                        <p class="mb0">
                          <del class="old-price">¥479.00</del>
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="views.html">
                    <div class="hproduct clearfix" style="background:#fff;border-top:0px;">
                      <div class="p-pic">
                        <img
                          style="max-height:100px;margin:auto;"
                          class="img-responsive"
                          src="../assets/img/3bec333d-f60a-48a3-999c-371c4fe67134.jpg"
                        >
                      </div>
                      <div class="p-info">
                        <p class="p-title">BOSSsunwen正品专柜手包男包钱包皮包卡包商务S15-230643A1T</p>
                        <p class="p-origin">
                          <em class="price">¥550.00</em>
                        </p>
                        <p class="mb0">
                          <del class="old-price">¥1048.00</del>
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="views.html">
                    <div class="hproduct clearfix" style="background:#fff;border-top:0px;">
                      <div class="p-pic">
                        <img
                          style="max-height:100px;margin:auto;"
                          class="img-responsive"
                          src="../assets/img/b0c64749-6129-4069-9965-4ab577d48d6a.jpg"
                        >
                      </div>
                      <div class="p-info">
                        <p class="p-title">丹希路真皮女包手提包中年女士包包牛皮时尚休闲单肩斜跨包大包女</p>
                        <p class="p-origin">
                          <em class="price">¥338.00</em>
                        </p>
                        <p class="mb0">
                          <del class="old-price">¥1058.00</del>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  id="ajax_loading"
                  style="display:none;width:300px;margin: 10px  auto 15px;text-align:center;"
                >
                  <img src="images/loading.gif">
                </div>
                <form action="/m_search/prodlist" method="post" id="list_form">
                  <input type="hidden" id="curPageNO" name="curPageNO" value>
                  <input type="hidden" id="categoryId" name="categoryId" value="36">
                  <input type="hidden" id="orders" name="orders" value>
                  <input type="hidden" id="hasProd" name="hasProd" value>
                  <input type="hidden" id="keyword" name="keyword" value>
                  <input type="hidden" id="prop" name="prop" value>
                </form>
              </div>
            </div>

            <div class="clear"></div>
          </a>
          <a href="views.html">
            <div class="hproduct clearfix" style="background:#fff;border-top:0px;">
              <div class="p-pic">
                <img
                  style="max-height:100px;margin:auto;"
                  class="img-responsive"
                  src="../assets/img/b0c64749-6129-4069-9965-4ab577d48d6a.jpg"
                >
              </div>
              <div class="p-info">
                <p class="p-title">丹希路真皮女包手提包中年女士包包牛皮时尚休闲单肩斜跨包大包女</p>
                <p class="p-origin">
                  <em class="price">¥338.00</em>
                </p>
                <p class="mb0">
                  <del class="old-price">¥1058.00</del>
                </p>
              </div>
            </div>
          </a>
        </div>

        <div
          id="ajax_loading"
          style="display:none;width:300px;margin: 10px  auto 15px;text-align:center;"
        >
          <img src="images/loading.gif">
        </div>
        <form action="/m_search/prodlist" method="post" id="list_form">
          <input type="hidden" id="curPageNO" name="curPageNO" value>
          <input type="hidden" id="categoryId" name="categoryId" value="36">
          <input type="hidden" id="orders" name="orders" value>
          <input type="hidden" id="hasProd" name="hasProd" value>
          <input type="hidden" id="keyword" name="keyword" value>
          <input type="hidden" id="prop" name="prop" value>
        </form>
      </div>
    </div>

    <div class="clear"></div>
  </div>
</template>
