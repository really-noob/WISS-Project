// Document loaded
$(document).ready(function () {
  const universities = [
	{
	  name: "firstUni",
	  details: {
		Program: "",
		"OUAC Program Code": "",
		"Grade Range": "",
		"Acceptance Rate": "",
		"Instruction Language": "",
		"Experimental Learning": "",
		"Prerequisite Courses": "",
		"Language Requirements": "",
		"Competitive Admission": "",
		"Contact Information": "",
		"Supplementary Application": "",
		"Admission Timing": "",
		"Potential Course Selection": "",
		"Career Pathway": "",
		"Educational Outcomes": "",
	  },
	  tags: ["fU", "firstUni"],
	},
	{
	  name: "secondUni",
	  details: {
		Program: "",
		"OUAC Program Code": "",
		"Grade Range": "",
		"Acceptance Rate": "",
		"Instruction Language": "",
		"Experimental Learning": "",
		"Prerequisite Courses": "",
		"Language Requirements": "",
		"Competitive Admission": "",
		"Contact Information": "",
		"Supplementary Application": "",
		"Admission Timing": "",
		"Potential Course Selection": "",
		"Career Pathway": "",
		"Educational Outcomes": "",
	  },
	  tags: ["sU", "secondUni"],
	},
	{
	  name: "thirdUni",
	  details: {
		Program: "",
		"OUAC Program Code": "",
		"Grade Range": "",
		"Acceptance Rate": "",
		"Instruction Language": "",
		"Experimental Learning": "",
		"Prerequisite Courses": "",
		"Language Requirements": "",
		"Competitive Admission": "",
		"Contact Information": "",
		"Supplementary Application": "",
		"Admission Timing": "",
		"Potential Course Selection": "",
		"Career Pathway": "",
		"Educational Outcomes": "",
	  },
	  tags: ["tU", "thirdUni"],
	},
  ]; // All the available universities
  const fuzzySearchOptions = {
	isCaseSensitive: false,
	includeScore: false,
	shouldSort: true,
	includeMatches: false,
	findAllMatches: true,
	minMatchCharLength: 1,
	location: 0,
	threshold: 0.4,
	distance: 100,
	useExtendedSearch: false,
	ignoreLocation: false,
	ignoreFieldNorm: false,
	keys: ["tags"],
  }; // Define the search options
  const fuzzySearch = new Fuse(universities, fuzzySearchOptions);

  searchForm = $("#searchForm");

  // Form submitted
  searchForm.submit(function (event) {
	event.preventDefault();
	searchQuery = $("#searchQuery").val();

	// Search for the query
	var searchQueryResultList = fuzzySearch.search(searchQuery);

	var searchQueryResult = "<br>";

	// Loop through all the search results
	for (var i = 0; i < searchQueryResultList.length; i++) {
	  var uniInfo = searchQueryResultList[i]["item"];
	  var uniName = uniInfo["name"];
	  var uniDetails = uniInfo["details"];
	  // Append the university name
	  searchQueryResult += `<h3>${uniName}</h3>`;
	  // Loop through the university details
	  for (var [detail, info] of Object.entries(uniDetails)) {
		// Append the detail and info
		searchQueryResult += `${detail}: ${info}<br>`;
	  }
	}

	searchResult = $("#searchResult");
	// Change the inner html
	searchResult.html(searchQueryResult);
  });
});
