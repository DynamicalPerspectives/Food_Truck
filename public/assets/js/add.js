

$("#submitTruck").on("click", function(event){
	event.preventDefault();
	var cw = $("#webSite").val().trim();

	if ($("#foodTruckName").val() === "") {

		$("#foodTruckName").val("");
		$("#foodTruckName").parent().addClass("has-danger");
		$("#foodTruckName").attr("placeholder", "MUST INCLUDE A NAME");

	} else if ($("#foodType").val() === "") {

		$("#foodType").val("")
		$("#foodType").parent().addClass("has-danger");
		$("#foodType").attr("placeholder", "MUST INCLUDE A FOOD TYPE");

	} else if (cw.endsWith(".com") || cw.endsWith(".org") || cw === "") {

		var newTruck = {

			name: $("#foodTruckName").val().trim(),

			food_type: $("#foodType").val().trim(),

			popular_item: $("#bestDish").val().trim(),

			website: $("#webSite").val().trim(),

			twitter_handle: $("#twitterHandle").val().trim()
			
		};

		if (newTruck.popular_item === "") {
			newTruck.popular_item = "none";
		}

		if (newTruck.website === "") {
			newTruck.website = "none.com";
		}

		if (newTruck.twitter_handle === "") {
			newTruck.twitter_handle = "none";
		}

		console.log(newTruck);

		$.post("/api/enter", newTruck)

		.done(function(data){
			console.log(data);
			$("#foodTruckName").val("");
			$("#foodTruckName").parent().removeClass("has-danger");
			$("#foodTruckName").attr("placeholder", "Burger, she wrote.");
			$("#foodType").val("");
			$("#foodType").parent().removeClass("has-danger");
			$("#foodType").attr("placeholder", "Burgers");
			$("#bestDish").val("");
			$("#webSite").val("");
			$("#webSite").parent().removeClass("has-danger");
			$("#webSite").attr("placeholder", "www.burgerduh.com");
			$("#twitterHandle").val("");
			$("#truckName").attr("value", newTruck.name);
			$("#uploadModal").click();
		});
	} else {

		$("#webSite").val("");
		$("#webSite").parent().addClass("has-danger");
		$("#webSite").attr("placeholder", "valid websites only (ends in .com or .org)");
	}
});

$("#submitUpload").on("click", function() {
	alert("Thank you for your menu!");
});