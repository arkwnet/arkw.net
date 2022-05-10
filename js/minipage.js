window.onload = function () {
	createUpdateInformation();
};

function createUpdateInformation() {
	$.ajax({
		url: "history.json",
		type: "GET",
		dataType: "json",
	}).done(function (data) {
		let output = "";
		output += "<table>";
		for (let i = 0; i < Object.keys(data).length; i++) {
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
