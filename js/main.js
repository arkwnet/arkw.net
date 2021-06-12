var pmid = "windows";

$(document).ready(function(){
	$('.slider').slick({
		autoplay: true,
		arrows: false
	});
});

function changeProductsMenu(a){
	if(pmid != a){
		$("#pr_menu_windows").removeClass("pr_menu_selected");
		$("#pr_menu_web").removeClass("pr_menu_selected");
		$("#pr_menu_dev").removeClass("pr_menu_selected");
		$("#pr_item_windows").hide(100);
		$("#pr_item_web").hide(100);
		$("#pr_item_dev").hide(100);
		$("#pr_menu_"+a).addClass("pr_menu_selected");
		$("#pr_item_"+a).show(100);
		pmid = a;
	}
}