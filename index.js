$(document).ready(function () {
	searchForm = $("#searchForm");

	searchForm.submit(function (event) {
		event.preventDefault();
		searchQuery = $("#searchQuery").val();

		searchResult = $("#searchResult");
		searchResult.html(searchQuery);
	});
});
