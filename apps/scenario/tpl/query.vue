<style type="text/css">

  .max-height-query{

    height:430px;
    overflow: auto;
  }

  .width-query{

    /*width:800px;*/
    font-size: 13px !important;
  }

  .row-select{

    max-height: 36px;
    overflow: hidden;
    padding: 5px 0px 5px 0px;
    border-bottom: 1px dotted #d5d5d5;
    position: relative;
  }

  .row-select .selected{

    background: #337AB7;
    color: #fff !important;
    border-radius: 4px;
  }

  .attrKey{
    float: left;
    color: #B0A59F;
    padding-top: 2px;
    width: 56px;
    text-align: right;
  }

  .attrValues{
    overflow: hidden;
    min-height: 100px;
  }

  .attrValues ul{
    list-style: none;
    margin-left: 10px;
    padding: 0;
    padding-right: 20px;
  }

  .input-text{

    list-style: none;
    margin-left: 17px;
    padding: 0;
    padding-right: 20px;
  }

  .attrValues li{
    float: left;
    margin: 0px 5px 8px 0;
    height: 24px;
    padding: 2px 7px 0px 7px;
    cursor: pointer;
    border: 1px solid #fff;
    color: #005aa0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .attrValues li:hover{

    border: 1px solid #337AB7;
    border-radius: 5px;
  }

  .more-value{
    position: absolute;
    color: #B0A59F;
    cursor: pointer;
    padding-top: 2px;
    padding-left: 1px;
    padding-right: 1px;
    border: 1px solid #FFFFFF;
    top: 5px;
    right: 0px;
  }

  .more-value:hover{
    border: 1px solid #B0A59F;
    border-radius: 5px;
  }

  .attr-width-lg li{
    width: 130px;
  }

  .attr-width-sm li{
    width: 70px;
  }

  .attrValues input[type='text']{

    width: 38px;
    padding: 0px;
  }

  .display-more{

    max-height:none !important;
  }

  .attr-initial{
    display: table;
  }

  .attr-initial>ul{

    list-style: none;
    margin-left: 10px;
    margin-bottom: 7px;
    padding: 0;
    padding-right: 20px;
  }

  .attr-initial>ul>li{

    display: inline-block;
    padding: 1px 7px 1px 7px;
    border: 1px solid #fff;
    color: #005aa0;
    overflow: hidden;
    cursor: default;
  }

  .nav-initial{

    display: none;
  }

  .hover-initial{

    border: 1px solid red !important;
    color: red !important;
  }
</style>

<template>

  <div class="modal fade width-query" tabindex="-1" role="dialog" aria-labelledby="queryViewModel">
    <div class="modal-dialog modal-lg" role="document" aria-hidden="true">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">搜索场景 <small> - 你可以通过首字母导航进行快速查找</small></h4>
        </div>

        <div class="modal-body max-height-query">
          
          <div class="row-select">

            <div class="attrKey">集场:</div>

            <div class="attrValues">
              
              <div class="input-text">
                <input type="text" v-model="tmpQuery.startSeriesNo">
                <em>-</em>
                <input type="text" v-model="tmpQuery.startViewNo">
                <span style="color: #B0A59F;">到</span>
                <input type="text" v-model="tmpQuery.endSeriesNo">
                <em>-</em>
                <input type="text" v-model="tmpQuery.endViewNo">
              </div>

            </div>
          </div>
          
          <div class="row-select row-block">

            <div class="attrKey">状态:</div>
            <div class="attrValues attr-width-sm">
              <ul>
                <li v-for="one in context.shootStates" track-by="id"
                    v-on:click="addtoQuery('shootStatus', one.id, one.name)"
                    v-bind:class="{ 'selected': (','+tmpQuery.shootStatus+',').indexOf(','+one.id+',') > -1}">
                  {{one.name}}
                </li>
              </ul>
            </div>
          </div>

          <div class="row-select">
            
            <!--title-->
            <div class="attrKey">主要演员:</div>
            
            <!--content-->
            <div class="attr-initial">

              <ul class="nav-initial">
                <li v-on:mouseover="displayInitial"
                    data-initial="ALL">
                  所有
                </li>
                <li v-for="one in initials.starsInitial | orderBy true"
                    v-on:mouseover="displayInitial"
                    data-initial="{{one}}">
                  {{one}}
                </li>
              </ul>

              <div class="attrValues attr-width-sm">
                <ul>
                  <li v-for="one in context.stars" track-by="id"
                      v-on:click="addtoQuery('roles', one.id, one.name)"
                      v-bind:class="{ 'selected': (','+tmpQuery.roles+',').indexOf(','+one.id+',') > -1}"
                      data-initial="{{one.initial}}">

                    {{one.name}} 
                  </li>
                </ul>
              </div>
            </div>
            
            <!--more-->
            <div class="more-value" v-show="context.stars.length > maxNum">
              <i class="glyphicon glyphicon-menu-down"></i>
            </div>
          </div>

          <div class="row-select row-block" v-show="selectedRoleLength > 0">

            <div class="attrKey"></div>
            <div class="attrValues attr-width-sm">
              <label class="radio-inline" v-show="selectedRoleLength > 0">
                <input type="radio" name="roleSearchMode" value="1" v-model="tmpQuery.searchMode">出现即可
              </label>
              <label class="radio-inline" v-show="selectedRoleLength > 0">
                <input type="radio" name="roleSearchMode" value="3" v-model="tmpQuery.searchMode">不出现
              </label>
              <label class="radio-inline" v-show="selectedRoleLength > 1">
                <input type="radio" name="roleSearchMode" value="0" v-model="tmpQuery.searchMode">同时出现
              </label>
              <label class="radio-inline" v-show="selectedRoleLength > 1">
                <input type="radio" name="roleSearchMode" value="2" v-model="tmpQuery.searchMode">不同时即可
              </label>
            </div>
          </div>

          <div class="row-select">

            <div class="attrKey">特约:</div>
            <div class="attr-initial">

              <ul class="nav-initial">
                <li v-on:mouseover="displayInitial"
                    data-initial="ALL">
                  所有
                </li>
                <li v-for="one in initials.guestActorsInitial | orderBy true"
                    v-on:mouseover="displayInitial"
                    data-initial="{{one}}">

                  {{one}}
                </li>
              </ul>

              <div class="attrValues attr-width-sm">
                <ul>
                  <li v-for="one in context.guestActors" track-by="id"
                      v-on:click="addtoQuery('guest', one.id, one.name)"
                      v-bind:class="{ 'selected': (','+tmpQuery.guest+',').indexOf(','+one.id+',') > -1}"
                      data-initial="{{one.initial}}">

                    {{one.name}} 
                  </li>
                </ul> 
              </div>
            </div>

            <div class="more-value" v-show="context.guestActors.length > maxNum">
              <i class="glyphicon glyphicon-menu-down"></i>
            </div>
          </div>

          <div class="row-select row-block">

            <div class="attrKey">群众:</div>
            
            <div class="attr-initial">

              <ul class="nav-initial">
                <li v-on:mouseover="displayInitial"
                    data-initial="ALL">
                  所有
                </li>
                <li v-for="one in initials.figurantsInitial | orderBy true"
                    v-on:mouseover="displayInitial"
                    data-initial="{{one}}">
                  {{one}}
                </li>
              </ul>

              <div class="attrValues attr-width-sm">
                <ul>
                  <li title="{{one.name}}" v-for="one in context.figurants" track-by="id"
                      v-on:click="addtoQuery('mass', one.id, one.name)"
                      v-bind:class="{ 'selected': (','+tmpQuery.mass+',').indexOf(','+one.id+',') > -1}"
                      data-initial="{{one.initial}}">

                    {{one.name}}
                  </li>
                </ul>
              </div>
            </div>

            <div class="more-value" v-show="context.figurants.length > maxNum">
              <i class="glyphicon glyphicon-menu-down"></i>
            </div>
          </div>

          <div class="row-select">

            <div class="attrKey">拍摄地:</div>

            <div class="attr-initial">

              <ul class="nav-initial">
                <li v-on:mouseover="displayInitial"
                    data-initial="ALL">
                  所有
                </li>
                <li v-for="one in initials.shootLocationsInitial"
                    v-on:mouseover="displayInitial"
                    data-initial="{{one}}">
                  {{one}}
                </li>
              </ul>

              <div class="attrValues attr-width-lg">
                <ul>
                  <li v-for="one in context.shootLocations" track-by="id"
                      v-on:click="addtoQuery('shootLocation', one.name)"
                      v-bind:class="{ 'selected': (','+tmpQuery.shootLocation+',').indexOf(','+one.name+',') > -1}"
                      data-initial="{{one.initial}}">
                    {{one.name}} 
                  </li>
                </ul>
              </div>
            </div>

            <div class="more-value" v-show="context.shootLocations.length > minNum">
              <i class="glyphicon glyphicon-menu-down"></i>
            </div>
          </div>

          <div class="row-select">

            <div class="attrKey">主场景:</div>

            <div class="attr-initial">

              <ul class="nav-initial">
                <li v-on:mouseover="displayInitial"
                    data-initial="ALL">
                  所有
                </li>
                <li v-for="one in initials.psInitial"
                    v-on:mouseover="displayInitial"
                    data-initial="{{one}}">
                  {{one}}
                </li>
              </ul>

              <div class="attrValues attr-width-lg">
                <ul>
                  <li title="{{one.name}}" v-for="one in context.primaryScenarios" track-by="id"
                      v-on:click="addtoQuery('major', one.id, one.name)"
                      v-bind:class="{ 'selected': (','+tmpQuery.major+',').indexOf(','+one.id+',') > -1}"
                      data-initial="{{one.initial}}">

                    {{one.name}} 
                  </li>
                </ul>
              </div>
            </div>

            <div class="more-value" v-show="context.primaryScenarios.length > minNum">
              <i class="glyphicon glyphicon-menu-down"></i>
            </div>
          </div>

          <div class="row-select row-block">

            <div class="attrKey">次场景:</div>

            <div class="attr-initial">

              <ul class="nav-initial">
                <li v-on:mouseover="displayInitial"
                    data-initial="ALL">
                  所有
                </li>
                <li v-for="one in initials.ssInitial"
                    v-on:mouseover="displayInitial"
                    data-initial="{{one}}">
                  {{one}}
                </li>
              </ul>
              <div class="attrValues attr-width-lg">
                <ul>
                  <li title="{{one.name}}" v-for="one in context.secondaryScenarios" track-by="id"
                      v-on:click="addtoQuery('minor', one.id, one.name)"
                      v-bind:class="{ 'selected': (','+tmpQuery.minor+',').indexOf(','+one.id+',') > -1}"
                      data-initial="{{one.initial}}">

                    {{one.name}} 
                  </li>
                </ul>
                
              </div>
            </div>

            <div class="more-value" v-show="context.secondaryScenarios.length > minNum">
              <i class="glyphicon glyphicon-menu-down"></i>
            </div>
          </div>

          <div class="row-select">

            <div class="attrKey">季节:</div>
            
            <div class="attrValues attr-width-sm">
              <ul>
                <li v-for="one in context.seasons" track-by="id"
                    v-on:click="addtoQuery('season', one.id, one.name)"
                    v-bind:class="{ 'selected': (','+tmpQuery.season+',').indexOf(','+one.id+',') > -1}">
                  {{one.name}} 
                </li>
              </ul>
            </div>

            <div class="more-value" v-show="context.seasons.length > maxNum">
              <i class="glyphicon glyphicon-menu-down"></i>
            </div>
          </div>

          <div class="row-select">

            <div class="attrKey">内外景:</div>
            
            <div class="attrValues attr-width-sm">
              <ul>
                <li v-for="one in context.sites" track-by="id"
                    v-on:click="addtoQuery('site', one.name)"
                    v-bind:class="{ 'selected': (','+tmpQuery.site+',').indexOf(','+one.name+',') > -1}">
                  {{one.name}} 
                </li>
              </ul>
            </div>

            <div class="more-value" v-show="context.sites.length > maxNum">
              <i class="glyphicon glyphicon-menu-down"></i>
            </div>
          </div>

          <div class="row-select">

            <div class="attrKey">气氛:</div>
            
            <div class="attrValues attr-width-sm">
              <ul>
                <li v-for="one in context.atmospheres" track-by="id"
                    v-on:click="addtoQuery('atmosphere', one.id, one.name)"
                    v-bind:class="{ 'selected': (','+tmpQuery.atmosphere+',').indexOf(','+one.id+',') > -1}">
                  {{one.name}} 
                </li>
              </ul>
            </div>

            <div class="more-value" v-show="context.atmospheres.length > maxNum">
              <i class="glyphicon glyphicon-menu-down"></i>
            </div>
          </div>

          <div class="row-select row-block">

            <div class="attrKey">文武:</div>
            
            <div class="attrValues attr-width-sm">
              <ul>
                <li v-for="one in context.cultureTypes" track-by="id"
                    v-on:click="addtoQuery('viewType', one.id, one.name)"
                    v-bind:class="{ 'selected': (','+tmpQuery.viewType+',').indexOf(','+one.id+',') > -1}">
                  {{one.name}} 
                </li>
              </ul>
            </div>

            <div class="more-value" v-show="context.cultureTypes.length > maxNum">
              <i class="glyphicon glyphicon-menu-down"></i>
            </div>
          </div>

          <div class="row-select">

            <div class="attrKey">服装:</div>
            
            <div class="attr-initial">

              <ul class="nav-initial">
                <li v-on:mouseover="displayInitial"
                    data-initial="ALL">
                  所有
                </li>
                <li v-for="one in initials.clothingsInitial"
                    v-on:mouseover="displayInitial"
                    data-initial="{{one}}">
                  {{one}}
                </li>
              </ul>
            
              <div class="attrValues attr-width-lg">
                <ul>
                  <li v-for="one in context.clothings" track-by="id"
                      v-on:click="addtoQuery('clothes', one.id, one.name)"
                      v-bind:class="{ 'selected': (','+tmpQuery.clothes+',').indexOf(','+one.id+',') > -1}"
                      data-initial="{{one.initial}}">

                    {{one.name}} 
                  </li>
                </ul>
              </div>
            </div>

            <div class="more-value" v-show="context.clothings.length > minNum">
              <i class="glyphicon glyphicon-menu-down"></i>
            </div>
          </div>

          <div class="row-select">

            <div class="attrKey">化妆:</div>
            
            <div class="attr-initial">

              <ul class="nav-initial">
                <li v-on:mouseover="displayInitial"
                    data-initial="ALL">
                  所有
                </li>
                <li v-for="one in initials.makeupsInitial"
                    v-on:mouseover="displayInitial"
                    data-initial="{{one}}">
                  {{one}}
                </li>
              </ul>

              <div class="attrValues attr-width-lg">
                <ul>
                  <li v-for="one in context.makeups" track-by="id"
                      v-on:click="addtoQuery('makeup', one.id, one.name)"
                      v-bind:class="{ 'selected': (','+tmpQuery.makeup+',').indexOf(','+one.id+',') > -1}"
                      data-initial="{{one.initial}}">
                    {{one.name}} 
                  </li>
                </ul>
              </div>
            </div>

            <div class="more-value" v-show="context.makeups.length > minNum">
              <i class="glyphicon glyphicon-menu-down"></i>
            </div>
          </div>

          <div class="row-select">

            <div class="attrKey">道具:</div>

            <div class="attr-initial">

              <ul class="nav-initial">
                <li v-on:mouseover="displayInitial"
                    data-initial="ALL">
                  所有
                </li>
                <li v-for="one in initials.propsInitial"
                    v-on:mouseover="displayInitial"
                    data-initial="{{one}}">
                  {{one}}
                </li>
              </ul>

              <div class="attrValues attr-width-lg">
                <ul>
                  <li v-for="one in context.props" track-by="id"
                      v-on:click="addtoQuery('props', one.id, one.name)"
                      v-bind:class="{ 'selected': (','+tmpQuery.props+',').indexOf(','+one.id+',') > -1}"
                      data-initial="{{one.initial}}">

                    {{one.name}} 
                  </li>
                </ul>
              </div>
            </div>

            <div class="more-value" v-show="context.props.length > minNum">
              <i class="glyphicon glyphicon-menu-down"></i>
            </div>
          </div>

          <div class="row-select row-block">

            <div class="attrKey">特殊:</div>

            <div class="attr-initial">

              <ul class="nav-initial">
                <li v-on:mouseover="displayInitial"
                    data-initial="ALL">
                  所有
                </li>
                <li v-for="one in initials.specialPropsInitial"
                    v-on:mouseover="displayInitial"
                    data-initial="{{one}}">
                  {{one}}
                </li>
              </ul>

              <div class="attrValues attr-width-lg">
                <ul>
                  <li v-for="one in context.specialProps" track-by="id"
                      v-on:click="addtoQuery('specialProps', one.id, one.name)"
                      v-bind:class="{ 'selected': (','+tmpQuery.specialProps+',').indexOf(','+one.id+',') > -1}">
                    {{one.name}} 
                  </li>
                </ul>
              </div>
            </div>

            <div class="more-value" v-show="context.specialProps.length > minNum">
              <i class="glyphicon glyphicon-menu-down"></i>
            </div>
          </div>

          <div class="row-select">

            <div class="attrKey">主要内容:</div>
            <div class="attrValues">
              <div class="input-text">
                <input type="text" style="width:200px;" v-model="tmpQuery.mainContent">
              </div>
            </div>
          </div>

          <div class="row-select row-block row-last">

            <div class="attrKey">备注:</div>
            <div class="attrValues">
              <div class="input-text">
                <input type="text" style="width:200px;" v-model="tmpQuery.remark">
              </div>
            </div>
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal" v-on:click="queryScenario">确定</button>
          <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  
  import Model from '../js/model'

  export default {
    props:{
      //已经存在的查询条件
      query:Object,
      //查询上下文
      context:Object,
      //首字母
      initials:Object
    },
    data:function(){
      return {

        //临时存储的查询条件
        tmpQuery: new Model.QueryModel(),
        //一列显示的数量
        maxNum:6,
        minNum:3
      }
    },
    methods:{
      //添加到临时查询条件
      addtoQuery:function(key, value, name){

        var arr = [],
            arrValue = [],
            repeat = false;

        if(this.tmpQuery[key] != ''){

          arr = this.tmpQuery[key].split(",");
          arrValue = this.tmpQuery.value[key].split(",");
        }

        for (var i in arr) {
          if (arr[i] == value) {

            arr.splice(i, 1);
            arrValue.splice(i, 1);
            repeat = true;
            break;
          }
        }

        if(!repeat){
          if (value == "blank" || value == "[空]") {
            arr = [];
            arrValue = [];
          } else {
            arr.$remove("blank");
            arr.$remove("[空]");
            arrValue.$remove("[空]");
          }

          arr.push(value);
          arrValue.push(name);
        }

        this.tmpQuery[key] = arr.join();
        this.tmpQuery.value[key] = arrValue.join();

        //主要演员查询模式初始化
        if (key == "roles" && arr.length == 1) {
          this.tmpQuery.searchMode = 1;
        }
      },
      //执行查询
      queryScenario:function(){

        this.query = Object.assign({}, this.tmpQuery);
        this.query.value = Object.assign({}, this.tmpQuery.value);

        this.$dispatch('refresh');
      },
      displayInitial:function(event){

        var target = $(event.target);
        var initial = target.data("initial");

        target.siblings().removeClass("hover-initial");
        target.addClass("hover-initial");

        if(initial == 'ALL'){

          target.parent().next().find("li").show();

        }else{

          target.parent().next().find("li").each(function(){

            if($(this).data("initial") == initial){

              $(this).show();
            }else{
              $(this).hide();
            }
          });
        }
      }
    },
    events:{
      //js obj arr 是引用传递，所以要深度赋值一个
      renderQuery:function(){

        this.tmpQuery = Object.assign({}, this.query);
        this.tmpQuery.value = Object.assign({}, this.query.value);
      }
    },
    computed: {
      selectedRoleLength: function() {
        var result = 0;
        if (this.tmpQuery.roles != "") {
          result = this.tmpQuery.roles.split(",").length;
        }
        return result;
      }
    },
    ready:function(){

      //所有的 “更多” 显示首字母导航
      $(".more-value").on("click",function(){

        var parent = $(this).parents(".row-select");
        parent.toggleClass("display-more");
        parent.find(".nav-initial").toggle();

        parent.find(".attrValues li").show();
        parent.find(".nav-initial li").removeClass("hover-initial");
        parent.find(".nav-initial li:first-child").addClass("hover-initial");
      });
    }
  }

</script>