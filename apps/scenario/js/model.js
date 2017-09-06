(function(){

  module.exports = {
    QueryModel:function(){
      
      return {

        startSeriesNo:'', 
        startViewNo:'', 
        endSeriesNo:'', 
        endViewNo: '',

        shootStatus:'',
        roles:'',
        guest:'',
        mass:'',
        shootLocation:'',
        major:'',
        minor:'',
        season:'',
        site:'',
        atmosphere:'',
        viewType:'',
        clothes:'',
        makeup:'',
        props:'',
        specialProps:'',

        mainContent:'',
        remark:'',

        sortType:'1',
        searchMode: '1',

        value:{
          shootStatus:'',
          roles:'',
          guest:'',
          mass:'',
          shootLocation:'',
          major:'',
          minor:'',
          season:'',
          site:'',
          atmosphere:'',
          viewType:'',
          clothes:'',
          makeup:'',
          props:'',
          specialProps:''
        }
      }
    },
    PageModel:function(){
      return {
        pagesize:100,
        pagenum:0,
        total:0
      }
    },
    ScenarioModel: function() {
      return {
        crewId: "",
        viewId: "",
        seriesNo: "",
        viewNo: "",
        pageCount: null,
        mainContent: "",
        remark: "",

        viewType: null,
        viewTypeName: "",
        specialEffects: "",
        season: null,
        seasonName: "",
        weather: "",
        atmosphereName: "",
        site: "",

        shootLocation: "",
        lvlOneLocation: "",
        lvlTwoLocation: "",
        lvlThreeLocation: "",

        leadingRoles: "",
        guestRoles: "",
        massesRoles: "",

        clothes: "",
        makeups: "",
        commonProps: "",
        specialProps: "",
        adverts: "",

        shootStatus: null,
        shootStatusName: "",
        title: "",
        content: "",
        isManualSave: false
      }
    },
    ModifyScenarioModel: function() {
      //是否更改场景信息的模型
      return {
        cgMainContent: false,
        cgRemark: false,
        cgShootLocation: false,
        cgLvlOneLocation: false,
        cgLvlTwoLocation: false,
        cgLvlThreeLocation: false,
        cgLeadingRoles: false,
        cgGuestRoles: false,
        cgMassesRoles: false,
        cgViewType: false,
        cgSeason: false,
        cgAtmosphereName: false,
        cgSite: false,
        cgClothes: false,
        cgMakeups: false,
        cgCommonProps: false,
        cgSpecialProps: false
      }
    },
    ContextModel:function(){

      return {
        atmospheres:[],
        seasons:[],
        shootStates:[],
        sites:[],
        primaryScenarios:[],
        secondaryScenarios:[],
        thirdScenarios:[],
        stars:[],
        guestActors:[],
        figurants:[],
        props:[],
        specialProps:[],
        cultureTypes:[],
        clothings:[],
        makeups:[],
        shootLocations:[]
      }
    },
    //场景表列信息
    ViewColumnModel: function() {
      return [
        //列名称         别名                   是否显示    是否可以隐藏
        {name: '集-场', field: 'seriesViewNo', show: true, canHide: false},

        {name: '季节', field: 'season', show: true, canHide: true},
        {name: '气氛' , field: 'atmosphereName', show: true, canHide: true},
        {name: '内外景', field: 'site', show: true, canHide: true},
        {name: '文武戏', field: 'viewType', show: true, canHide: true},
        {name: '拍摄地点', field: 'shootLocation', show: true, canHide: true},
        {name: '主场景', field: 'lvlOneLocation', show: true, canHide: true},
        {name: '次场景', field: 'lvlTwoLocation', show: true, canHide: true},
        {name: '三级场景', field: 'lvlThreeLocation', show: true, canHide: true},
        {name: '主要内容', field: 'mainContent', show: true, canHide: true},
        {name: '页数', field: 'pageCount', show: true, canHide: true},
        {name: '主要演员', field: 'leadingRoles', show: true, canHide: false},
        {name: '特约演员', field: 'guestRoles', show: false, canHide: true},
        {name: '群众演员', field: 'massesRoles', show: false, canHide: true},
        {name: '服装', field: 'clothes', show: false, canHide: true},
        {name: '化妆', field: 'makeups', show: false, canHide: true},
        {name: '道具', field: 'commonProps', show: false, canHide: true},
        {name: '特殊道具', field: 'specialProps', show: false, canHide: true},
        {name: '备注', field: 'remark', show: true, canHide: true},
        {name: '拍摄时间', field: 'shootDate', show: true, canHide: true},
        {name: '拍摄状态', field: 'shootStatus', show: true, canHide: true}
      ]
    },
    //新增修改场景时的选择性数据模型，showInput为是否显示搜索文本，dataSource为选择控件中的数据
    SelectModel: function(){
      return {
        baseInfo:{title:'待选项区域', showInput: false, inputHolder: '', inputValue:'', dataSource: [], selectedValue:'', vmodel:""},    //基本信息
        location:{title:'待选项区域', showInput: false, inputHolder: '', inputValue:'', dataSource: [], selectedValue:'', vmodel:""},    //场景
        figure:{title:'待选项区域', showInput: false, inputHolder: '', inputValue:'', dataSource: [], selectedValue:[], vmodel:""},  //人物
        assist:{title:'待选项区域', showInput: false, inputHolder: '', inputValue:'', dataSource: [], selectedValue:[], vmodel:""}   //服化道
      }
    }
  }
})(this)