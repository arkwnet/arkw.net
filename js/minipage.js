window.onload = function() {
	createUpdateInformation();
}

function createUpdateInformation() {
	let output = "";
	output += "<table>";
	for (let i = 0; i < history.length; i++) {
		output += "<tr><th>" + history[i].Date + "</th><td>";
		for (let j = 0; j < history[i].Content.length; j++) {
			output += history[i].Content[j] + "<br>";
		}
		output += "</td></tr>"
	}
	output += "</table>";
	$("#update_information").html(output);
}