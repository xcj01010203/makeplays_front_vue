(function(){

  module.exports = {
    PlanModel:function(){
      
      return {

        id:'', 
        name:'', 
        crewid:'', 
        official: '',
        factors:[],
        planViews:[]
      }
    },
    PageModel:function(){
      return {
        pagesize:50,
        pagenum:0,
        total:0
      }
    }
  }
})(this)