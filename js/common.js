$(function() {
  //tab 切换
  $.fn.navTabs = function(options) {
    //配置
    var defaults = {
        tabNav: ".nav-tabs",
        tabNavChild: "li",
        tabContent: ".tabs-content",
        tabPane: ".tabs-pane",
        tabEvent: "click"
      },
      opts = $.extend({}, defaults, options);
    return this.each(function() {
      //切换内容
      $(opts.tabNav).on(opts.tabEvent, opts.tabNavChild, function(e) {
        var $this = $(this);
        var $index = $this.index();
        console.log($index);
        $this
          .addClass("active")
          .siblings()
          .removeClass("active");
        $this
          .parent()
          .siblings(opts.tabContent)
          .children(opts.tabPane)
          .eq($index)
          .show()
          .siblings()
          .hide();
      });
    });
  };

  //懒加载控件执行
  $("img").lazyload({
    placeholder: "images/grey.gif",
    effect: "fadeIn",
    failurelimit: 54
  });

  $("#distpicker").distpicker({
    autoSelect: false
  });
  $("#distpicker1").distpicker({
    autoSelect: false
  });

  var showOnlie = false;
  setTimeout(function() {
    onlineApply();
  }, 1000);
  function onlineApply() {
    layer.open({
      type: 1,
      title: false,
      skin: "layui-layer-service",
      // closeBtn: false,
      area: ["510px", "380px"], //宽高
      content: $(".service-big-box")
    });
  }

  $(".apply-retention").on("click", function() {
    onlineApply();
  });

  $("#close-message").on("click", function() {
    $("#leave-message-box").hide();
  });
});
