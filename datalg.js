//<![CDATA[
$("#lagimenu ul ul li:odd").addClass("odd");$("#lagimenu ul ul li:even").addClass("even");$("#lagimenu > ul > li > a").click(function(){$("#lagimenu li").removeClass("active");$(this).closest("li").addClass("active");var a=$(this).next();a.is("ul")&&a.is(":visible")&&($(this).closest("li").removeClass("active"),a.slideUp("normal"));a.is("ul")&&!a.is(":visible")&&($("#lagimenu ul ul:visible").slideUp("normal"),a.slideDown("normal"));return 0==$(this).closest("li").find("ul").children().length?!0:!1});
$(function(){$(".menu").click(function(){$("#laginav").css({right:"0"})});$(".close-menu").click(function(){$("#laginav").css({right:"-340px"})});$(".translator").click(function(){$(".widget-translator").toggle("slow")})});$(function(){$("#comments p").find("a").contents().unwrap()});
var pres = document.querySelectorAll('blockquote,pre,div.kode');
for (var i = 0; i < pres.length; i++) {
  pres[i].addEventListener("dblclick", function () {
    var selection = getSelection();
    var range = document.createRange();
    range.selectNodeContents(this);
    selection.removeAllRanges();
    selection.addRange(range);
  }, false);
}
//]]>