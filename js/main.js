let pmid = "windows";
const slideShow = [
	{
		Image: "md_lab",
		URL: "",
	},
	{
		Image: "md_qubefall",
		URL: "https://arkw.net/products/pc_game/qubefall/",
	},
	{
		Image: "md_prohaya",
		URL: "https://arkw.net/products/web/prohaya/",
	},
	{
		Image: "md_dokaben",
		URL: "https://arkw.net/products/web/dokaben/",
	},
	{
		Image: "md_psk",
		URL: "https://psk.arkw.net/",
	},
	{
		Image: "md_kin",
		URL: "https://arkw.net/products/web/kintetsu/",
	},
	{
		Image: "md_mei",
		URL: "https://arkw.net/products/web/meitetsu/",
	},
];

window.onload = function () {
	createSlideShow();
	createUpdateInformation();
	$(".slider").slick({
		autoplay: true,
		arrows: false,
	});
};

function createSlideShow() {
	let output = "";
	output += '<div class="slider">';
	for (let i = 0; i < slideShow.length; i++) {
		if (slideShow[i].URL == "") {
			output +=
				'<div><img src="img/header/' + slideShow[i].Image + '.png"></div>';
		} else {
			output +=
				'<a href="' +
				slideShow[i].URL +
				'" target="blank"><div><img src="img/header/' +
				slideShow[i].Image +
				'.png"></div></a>';
		}
	}
	output += "</div>";
	$(".navi").html(output);
}

function createUpdateInformation() {
	$.ajax({
		url: "history.json",
		type: "GET",
		dataType: "json",
	}).done(function (data) {
		let output = "";
		output += "<table>";
		for (let i = 0; i < 5; i++) {
			output += "<tr><th>" + data[i]["Date"] + "</th><td>";
			for (let j = 0; j < data[i]["Content"].length; j++) {
				output += data[i]["Content"][j] + "<br>";
			}
			output += "</td></tr>";
		}
		output += "</table>";
		$("#update_information").html(output);
	});
}

function changeProductsMenu(a) {
	if (pmid != a) {
		$("#pr_menu_windows").removeClass("pr_menu_selected");
		$("#pr_menu_web").removeClass("pr_menu_selected");
		$("#pr_menu_dev").removeClass("pr_menu_selected");
		$("#pr_item_windows").hide(100);
		$("#pr_item_web").hide(100);
		$("#pr_item_dev").hide(100);
		$("#pr_menu_" + a).addClass("pr_menu_selected");
		$("#pr_item_" + a).show(100);
		pmid = a;
	}
}
