// fix 100 vh in Android Chrome
var vhFix = new VHChromeFix([{
  selector: '.fullViewH',
  vh: 100
}]);

$(document).ready(function() {

  //Remove parent if child empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").parent(":empty").remove();
  //Remove if empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty, .ifEmpty:empty").remove();

  //Dropdown button addClass.btn_secondary
  $(".uk-nav-dropdown li").parent().parent().siblings().removeClass("btn_secondary");
  $(".uk-nav-dropdown li.uk-active").parent().parent().siblings().addClass("btn_secondary");

  //c3.chart
  var chart = c3.generate({
    data: {
      columns: [
        ["未選課", 60],
        ["已選修，尚未完成之學分數", 30],
        ["已完成的學分數", 10],
      ],
      type: 'donut',
      onclick: function(d, i) {
        console.log("onclick", d, i);
      },
      onmouseover: function(d, i) {
        console.log("onmouseover", d, i);
      },
      onmouseout: function(d, i) {
        console.log("onmouseout", d, i);
      }
    },
    donut: {
      title: "100%"
    }
  });

  setTimeout(function() {
    chart.load({
      columns: [
        ["未選課", 60],
        ["已選修，尚未完成之學分數", 30],
        ["已完成的學分數", 10],
      ]
    });
  }, 1500);

  setTimeout(function() {
    chart.unload({
      ids: 'data1'
    });
    chart.unload({
      ids: 'data2'
    });
    chart.unload({
      ids: 'data3'
    });
  }, 2500);

});

$(window).on("resize load", function() {

  //keep aspect ratio of image's height to width
  $(".ratio3_4 li img, .thisRatio3_4").each(function() {
    $(this).css({
      height: $(this).width() * 4 / 3
      //portrait
    });
  });
  $(".ratio9_16 li img, .thisRatio9_16").each(function() {
    $(this).css({
      height: $(this).width() * 16 / 9
      //portrait
    });
  });
  $(".ratio4_3 li img, .thisRatio4_3").each(function() {
    $(this).css({
      height: $(this).width() * 3 / 4
      //landscape
    });
  });
  $(".ratio16_9 li img, .thisRatio16_9").each(function() {
    $(this).css({
      height: $(this).width() * 9 / 16
      //landscape
    });
  });
  $(".ratio1_1 li img, .thisRatio1_1").each(function() {
    $(this).css({
      height: $(this).width()
    });
  });
});