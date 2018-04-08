$(function(){
  $(".nav").on("click", "li", function(){
    var sId = $(this).data("id"); //获取data-id的值
    window.location.hash = sId; //设置锚点
    loadInner(sId);
  });
  function loadInner(sId){
    var sId = window.location.hash;
    var pathn, i;
    switch(sId){
      case "#center": pathn = "center.html"; i = 0; break;
	  case "#chang_M1": pathn = "M1.html"; i = 1; break;
      case "#chang_M2": pathn = "M2.html"; i = 2; break;
      case "#chang_M3": pathn = "user_info.html"; i = 3; break;
　　　　　　 default: pathn = "user_center.html"; i = 0; break;
    }
    $("#content").load(pathn); //加载相对应的内容
    $(".nav li").eq(i).addClass("current").siblings().removeClass("current"); //当前列表高亮
  }
  var sId = window.location.hash;
  loadInner(sId);
});