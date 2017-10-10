$(function() {
  //tab 切换
  $.fn.navTabs = function(options) {
    //配置
    var defaults = {
        tabNav: ".nav-tabs",
        tabNavChild: "li",
        tabContent: ".tabs-content",
        tabPane: ".tabs-pane",
        tabEvent: "click",
        tabNavLink:'.tab-box'
      },
      opts = $.extend({}, defaults, options);
    return this.each(function() {
      //切换内容
      $(opts.tabNav).on(opts.tabEvent, opts.tabNavChild, function(e) {
        var $this = $(this);
        var $index = $this.index();
        console.log($index);
        // $this
        //   .addClass("active")
        //   .siblings()
        //   .removeClass("active");

        $(opts.tabNav)
          .find(opts.tabNavChild)
          .eq($index)
          .addClass("active")
          .siblings()
          .removeClass("active");
          if(opts.tabNavLink){
            $(opts.tabNavLink)
            .find(opts.tabNavChild)
            .eq($index)
            .addClass("active")
            .siblings()
            .removeClass("active");
          }
        $(opts.tabContent)
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

  // setTimeout(function() {
  //   onlineApply();
  // }, 1000);
  // function onlineApply() {
  //   debugger
  //   layer.open({
  //     type: 1,
  //     title: false,
  //     skin: "layui-layer-service",
  //     // closeBtn: false,
  //     area: ["510px", "380px"], //宽高
  //     content: $(".service-big-box")
  //   });
  // }

  // $(".apply-retention").on("click", function() {
  //   onlineApply();
  // });

  $("#close-message").on("click", function() {
    $("#leave-message-box").hide();
    if ($("#leave-message-box").is(":hidden")) {
      time = setTimeout(function() {
        $("#leave-message-box").show();
      }, 30 * 1000);
    } else {
      $("#leave-message-box").hide();
    }
  });
});
$(function() {
  //banner
  $(".onSub").click(function() {
    // alert('ddd');
    layer.load(1);
    $.ajax({
      url: "/Index/addBook",
      data: $("#onForm").serialize(),
      dataType: "json",
      type: "post",
      success: function(ret) {
        layer.closeAll("loading");
        layer.msg(ret.info);
        $(".layui-layer-close").click();
      },
      error: function(ret) {
        setTimeout(function() {
          layer.closeAll();
        }, 5000);
      }
    });
  });

  $(".butSub").click(function() {
    layer.load(1);
    $.ajax({
      url: "/Index/addBook",
      data: $("#butForm").serialize(),
      dataType: "json",
      type: "post",
      success: function(ret) {
        layer.closeAll("loading");
        layer.msg(ret.info);

        $("#butForm")
          .find("input")
          .val("");
        $("#butForm")
          .find("#province01")
          .val("");
        $("#butForm")
          .find("#city01")
          .val("");
        $("#butForm")
          .find("#district01")
          .val("");
      },
      error: function(ret) {
        setTimeout(function() {
          layer.closeAll();
        }, 5000);
      }
    });
  });

  $(".lySub").click(function() {
    // window.location.reload();
    layer.load(1);
    $.ajax({
      url: "/Index/addMessage",
      data: $("#lyForm").serialize(),
      dataType: "json",
      type: "post",
      success: function(ret) {
        layer.closeAll("loading");
        layer.msg(ret.info);
        if (ret.status == 1) {
          $("#lyForm")
            .find("input")
            .val("");
          $("#lyForm")
            .find(".service-txt")
            .val("");

          $("#leave-message-box").hide();
        }
      },
      error: function(ret) {
        setTimeout(function() {
          layer.closeAll();
        }, 5000);
      }
    });
  });
});
