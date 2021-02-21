// Document loaded
$(document).ready(function () {
  const universities = [
    {
      "name": "McMaster University",
      "details": {
        "Program": "Music",
        "OUAC Program Code": "MM",
        "Degree": "Bachelor of Arts, BA Bachelor of Music, BMus",
        "Grade Range": "75–78%",
        "Instruction Language": "English",
        "Experimental Learning": "Practicum or internship",
        "Prerequisite Courses": "ENG4U",
        "Language Requirements": "ENG4U",
        "Failed/Repeated Course Information": "For students who have repeated up to 2 courses, the highest mark reported will be used in the calculation of the admission average. Students repeating more than 2 courses, or an individual course 3 or more times, may be asked to provide a letter explaining the need for the repeats. This information may be considered when determining admission. Courses completed after June 30 will not be included in the admission average calculation.",
        "Address": "1280 Main St. West Hamilton ON L8S 4L8",
        "Phone/Fax Number": "Student Recruitment: 905-525-9140, ext. 23650",
        "Program Website": "https://sota.humanities.mcmaster.ca/",
        "Supplementary Application": "Music audition. Contact the School of the Arts by email or call 905-525-9140, ext. 24246 to schedule an audition/interview (held in March and April 2021).",
        "Admission Timing": "Be sure to check the university's \"Admissions 101\" page for information and updates about the admission process, estimated cut-offs, enrollment targets, application deadlines and more. McMaster will begin making offers of admission in March, based on a minimum of 3 final 4U/M grades and registration in sufficient 4U/M courses to a total of 6; or 6 interim and/or final 4U/M grades, including any required courses. All offers are conditional upon completing the OSSD with at least six 4U/M courses and an acceptable final admission average, which will be specified in the offer of admission.",
        "Additional Information": "N/A",
        "Career Pathway": "Musician",
      },
      "tags": ["McMaster", "Music", "MM", "Arts"],
    },
    {
      name: "McMaster University",
      details: {
        "Program": "Life Science",
        "OUAC Program Code": "MLS",
        "Degree": "Bachelor of Science, BSc",
        "Grade Range": "87–90%",
        "Instruction Language": "English",
        "Experimental Learning": "Co-op available by major",
        "Prerequisite Courses": "ENG4U, 1 of MHF4U, or MCV4U, or SBI4U, 1 of MHF4U, or MCV4U, or SCH4U, or SPH4U",
        "Language Requirements": "English",
        "Failed/Repeated Course Information": "For students who have repeated up to 2 courses, the highest mark reported will be used in the calculation of the admission average. Students repeating more than 2 courses, or an individual course 3 or more times, may be asked to provide a letter explaining the need for the repeats. This information may be considered when determining admission. Courses completed after June 30 will not be included in the admission average calculation.",
        "Address": "1280 Main St. West Hamilton ON L8S 4L8",
        "Phone/Fax Number": "Student Recruitment: 905-525-9140, ext. 23650",
        "Program Website": "https://www.science.mcmaster.ca/",
        "Supplementary Application": "N/A",
        "Admission Timing": "Be sure to check the university's \"Admissions 101\" page for information and updates about the admission process, estimated cut-offs, enrollment targets, application deadlines and more. McMaster will begin making offers of admission in March, based on a minimum of 3 final 4U/M grades and registration in sufficient 4U/M courses to a total of 6; or 6 interim and/or final 4U/M grades, including any required courses. All offers are conditional upon completing the OSSD with at least six 4U/M courses and an acceptable final admission average, which will be specified in the offer of admission.",
        "Additional Information": "N/A",
        "Career Pathway": "Medical Professional",
      },
      tags: ["McMaster", "Life Science", "MLS", "Medical Professional"],
    },
    {
      name: "McMaster University",
      details: {
        "Program": "Economics",
        "OUAC Program Code": "MLE",
        "Degree": "Bachelor of Arts, BA Bachelor of Music, BMus",
        "Grade Range": "80–83%",
        "Instruction Language": "English",
        "Experimental Learning": "Practicum or internship",
        "Prerequisite Courses": "ENG4U, 2 of MHF4U, or MCV4U, or MDM4U",
        "Language Requirements": "English",
        "Failed/Repeated Course Information": "For students who have repeated up to 2 courses, the highest mark reported will be used in the calculation of the admission average. Students repeating more than 2 courses, or an individual course 3 or more times, may be asked to provide a letter explaining the need for the repeats. This information may be considered when determining admission. Courses completed after June 30 will not be included in the admission average calculation.",
        "Address": "1280 Main St. West Hamilton ON L8S 4L8",
        "Phone/Fax Number": "Student Recruitment: 905-525-9140, ext. 23650",
        "Program Website": "https://future.mcmaster.ca/",
        "Supplementary Application": "N/A",
        "Admission Timing": "Be sure to check the university's \"Admissions 101\" page for information and updates about the admission process, estimated cut-offs, enrollment targets, application deadlines and more. McMaster will begin making offers of admission in March, based on a minimum of 3 final 4U/M grades and registration in sufficient 4U/M courses to a total of 6; or 6 interim and/or final 4U/M grades, including any required courses. All offers are conditional upon completing the OSSD with at least six 4U/M courses and an acceptable final admission average, which will be specified in the offer of admission.",
        "Additional Information": "N/A",
        "Career Pathway": "Investor",
      },
      tags: ["McMaster", "Economics", "MLE", "Investor"],
    },
    {
      name: "McMaster University",
      details: {
        "Program": "Computer Science",
        "OUAC Program Code": "MC",
        "Degree": "Bachelor of Applied Science, BASc",
        "Grade Range": "92–95%",
        "Instruction Language": "English",
        "Experimental Learning": "Co-op or internship",
        "Prerequisite Courses": "ENG4U, MCV4U, 2 of SBI4U, or SCH4U, or SPH4U, or SES4U, or ICS4U, or TEJ4M",
        "Language Requirements": "English",
        "Failed/Repeated Course Information": "For students who have repeated up to 2 courses, the highest mark reported will be used in the calculation of the admission average. Students repeating more than 2 courses, or an individual course 3 or more times, may be asked to provide a letter explaining the need for the repeats. This information may be considered when determining admission. Courses completed after June 30 will not be included in the admission average calculation.",
        "Address": "1280 Main St. West Hamilton ON L8S 4L8",
        "Phone/Fax Number": "Student Recruitment: 905-525-9140, ext. 23650",
        "Program Website": "https://www.eng.mcmaster.ca/future-students/future-undergraduate-students",
        "Supplementary Application": "N/A",
        "Admission Timing": "Be sure to check the university's \"Admissions 101\" page for information and updates about the admission process, estimated cut-offs, enrollment targets, application deadlines and more. McMaster will begin making offers of admission in March, based on a minimum of 3 final 4U/M grades and registration in sufficient 4U/M courses to a total of 6; or 6 interim and/or final 4U/M grades, including any required courses. All offers are conditional upon completing the OSSD with at least six 4U/M courses and an acceptable final admission average, which will be specified in the offer of admission.",
        "Additional Information": "N/A",
        "Career Pathway": "Computer Programer and Engineer",
      },
      tags: ["McMaster", "Computer Science", "MC", "Computer Programer and engineer"],
    },
    {
      name: "McMaster University",
      details: {
        "Program": "Business",
        "OUAC Program Code": "MB",
        "Degree": "Bachelor of Commerce, BCom",
        "Grade Range": "87–90%",
        "Instruction Language": "English",
        "Experimental Learning": "Co-op or internship",
        "Prerequisite Courses": "ENG4U, MHF4U, MCV4U",
        "Language Requirements": "English",
        "Failed/Repeated Course Information": "For students who have repeated up to 2 courses, the highest mark reported will be used in the calculation of the admission average. Students repeating more than 2 courses, or an individual course 3 or more times, may be asked to provide a letter explaining the need for the repeats. This information may be considered when determining admission. Courses completed after June 30 will not be included in the admission average calculation.",
        "Address": "1280 Main St. West Hamilton ON L8S 4L8",
        "Phone/Fax Number": "Student Recruitment: 905-525-9140, ext. 23650",
        "Program Website": "https://ug.degroote.mcmaster.ca/",
        "Supplementary Application": "N/A",
        "Admission Timing": "Be sure to check the university's \"Admissions 101\" page for information and updates about the admission process, estimated cut-offs, enrollment targets, application deadlines and more. McMaster will begin making offers of admission in March, based on a minimum of 3 final 4U/M grades and registration in sufficient 4U/M courses to a total of 6; or 6 interim and/or final 4U/M grades, including any required courses. All offers are conditional upon completing the OSSD with at least six 4U/M courses and an acceptable final admission average, which will be specified in the offer of admission.",
        "Additional Information": "N/A",
        "Career Pathway": "Business Owner",
      },
      tags: ["McMaster", "Business", "MB", "Business Owner"],
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
