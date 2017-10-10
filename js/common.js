$(function () {
  //tab 切换
  $.fn.navTabs = function (options) {
    //配置
    var defaults = {
      tabNav: ".nav-tabs",
      tabNavChild: "li",
      tabContent: ".tabs-content",
      tabPane: ".tabs-pane",
      tabEvent: "click",
      tabNavLink: '.tab-box'
    },

      opts = $.extend({}, defaults, options);
    return this.each(function () {
      //切换内容
      $(opts.tabNav).on(opts.tabEvent, opts.tabNavChild, function (e) {
        var $this = $(this);
        var $index = $this.index();
        console.log($index);
        // $this
        // .addClass("active")
        // .siblings()
        // .removeClass("active");

        $(opts.tabNav)
          .find(opts.tabNavChild)
          .eq($index)
          .addClass("active")
          .siblings()
          .removeClass("active");
        if (opts.tabNavLink) {
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

  // setTimeout(function () {
  //   onlineApply();
  // }, 1000);
  // function onlineApply() {
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

  $("#close-message").on("click", function () {
    $("#leave-message-box").hide();
    if ($("#leave-message-box").is(':hidden')) {
      time = setTimeout(function () {
        $("#leave-message-box").show();
      }, 30 * 1000)
    } else {
      $("#leave-message-box").hide();
    }
  });
});
$(function () {
  //banner
  $('.onSub').click(function () {
    var validate = {
      userName: {
        value: $('.yyUserName').val().trim(),
        message: '请输入姓名！'
      },
      phone: {
        value: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test($('.yyPhone').val().trim()),
        message: '请输入正确的手机号！'

      },
      email: {
        value: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test($('.yyEmail').val().trim())
      },
      occupation: {
        value: $('.yyOccupation').val().trim(),
        message: '请输入您定职位！'
      },
      address: {
        value: $('.yyProvince').val() && $('.yyCity').val() && $('.yyDistrict').val(),
        message: '请选择地址！'
      }
    }
    for (var key in validate) {
      if (!validate[key].value) {
        layer.msg(validate[key].message)
        return
      }
    }
    // alert('ddd');
    layer.load(1)
    $.ajax({
      url: '/Index/addBook',
      data: $('#onForm').serialize(),
      dataType: 'json',
      type: 'post',
      success: function (ret) {
        layer.closeAll('loading');
        layer.msg(ret.info);
        $('.layui-layer-close').click();
        $('#butForm').find('input').val('');
        $('#butForm').find('#province02').val('');
        $('#butForm').find('#city02').val('');
        $('#butForm').find('#district02').val('');
      },
      error: function (ret) {
        setTimeout(function () {
          layer.closeAll();
        }, 5000)
      }
    });
  });
  $('.butSub').click(function () {
    var validate = {
      userName: {
        value: $('.butUserName').val().trim(),
        message: '请输入姓名！'
      },
      phone: {
        value: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test($('.butPhone').val().trim()),
        message: '请输入正确的手机号！'

      },
      email: {
        value: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test($('.butEmail').val().trim())
      },
      occupation: {
        value: $('.butOccupation').val().trim(),
        message: '请输入您定职位！'
      },
      address: {
        value: $('.butProvince').val() && $('.butCity').val() && $('.butDistrict').val(),
        message: '请选择地址！'
      }
    }
    for (var key in validate) {
      if (!validate[key].value) {
        layer.msg(validate[key].message)
        return
      }
    }
    layer.load(1);
    $.ajax({
      url: '/Index/addBook',
      data: $('#butForm').serialize(),
      dataType: 'json',
      type: 'post',
      success: function (ret) {
        layer.closeAll('loading');
        layer.msg(ret.info);

        $('#butForm').find('input').val('');
        $('#butForm').find('#province01').val('');
        $('#butForm').find('#city01').val('');
        $('#butForm').find('#district01').val('');
      },
      error: function (ret) {
        setTimeout(function () {
          layer.closeAll();
        }, 5000)
      }
    });
  });


  $('.lySub').click(function () {
    var validate = {
      message: {
        value: $('.lyMessage').val().trim(),
        message: '请输入留言信息！'
      },
      userName: {
        value: $('.lyUserName').val().trim(),
        message: '请输入姓名！'
      },
      phone: {
        value: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test($('.lyPhone').val().trim()),
        message: '请输入正确的手机号！'

      },
      area: {
        value: $('.lyArea').val().trim(),
        message: '请输入合作区域！'
      }
    }
    for (var key in validate) {
      if (!validate[key].value) {
        layer.msg(validate[key].message)
        return
      }
    }
    // window.location.reload();
    layer.load(1);
    $.ajax({
      url: '/Index/addMessage',
      data: $('#lyForm').serialize(),
      dataType: 'json',
      type: 'post',
      success: function (ret) {
        layer.closeAll('loading');
        layer.msg(ret.info);
        if (ret.status == 1) {
          $('#lyForm').find('input').val('');
          $('#lyForm').find('.service-txt').val('');
          $('#leave-message-box').hide();
        }
      },
      error: function (ret) {
        setTimeout(function () {
          layer.closeAll();
        }, 5000)
      }
    });
  });
});
