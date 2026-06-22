jQuery(function() {
  // Initialize lunr with the fields to be searched, plus the boost.
  window.idx = lunr(function () {
    this.field('id');
    this.field('title');
    this.field('content', { boost: 10 });
    this.field('author');
    this.field('categories');

    // === CUSTOM STOP WORD FILTER: Exclude "not"  added by RTH per Grok on 6/22/2026 ===
    // Remove the default stop word filter from BOTH pipelines
    this.pipeline.remove(lunr.stopWordFilter);
    this.searchPipeline.remove(lunr.stopWordFilter);

    // Define the default list WITHOUT "not"
    var stopWords = [
      'a', 'able', 'about', 'across', 'after', 'all', 'almost', 'also', 'am', 'among',
      'an', 'and', 'any', 'are', 'as', 'at', 'be', 'because', 'been', 'but', 'by',
      'can', 'cannot', 'could', 'dear', 'did', 'do', 'does', 'either', 'else', 'ever',
      'every', 'for', 'from', 'get', 'got', 'had', 'has', 'have', 'he', 'her', 'hers',
      'him', 'his', 'how', 'however', 'i', 'if', 'in', 'into', 'is', 'it', 'its', 'just',
      'least', 'let', 'like', 'likely', 'may', 'me', 'might', 'most', 'must', 'my',
      'neither', 'no', 'nor', /* 'not' removed */, 'of', 'off', 'often', 'on', 'only',
      'or', 'other', 'our', 'own', 'rather', 'said', 'say', 'says', 'she', 'should',
      'since', 'so', 'some', 'than', 'that', 'the', 'their', 'them', 'then', 'there',
      'these', 'they', 'this', 'tis', 'to', 'too', 'twas', 'us', 'wants', 'was', 'we',
      'were', 'what', 'when', 'where', 'which', 'while', 'who', 'whom', 'why', 'will',
      'with', 'would', 'yet', 'you', 'your'
    ];

    var customStopWordFilter = lunr.generateStopWordFilter(stopWords);

    // Insert the custom filter after the trimmer (before stemmer) in both pipelines
    this.pipeline.after(lunr.trimmer, customStopWordFilter);
    this.searchPipeline.after(lunr.trimmer, customStopWordFilter);

  });

  // Get the generated search_data.json file so lunr.js can search it locally.
  window.data = $.getJSON('/search_data.json');

  // Wait for the data to load and add it to lunr
  window.data.then(function(loaded_data){
    $.each(loaded_data, function(index, value){
      window.idx.add(
        $.extend({ "id": index }, value)
      );
    });
  });

  // Event when the form is submitted
  $("#site_search").submit(function(event){
      event.preventDefault(); // RTH: per Google, preventDefault() might be the culprit in Firefox
      var query = $("#search_box").val(); // Get the value for the text field
      var results = window.idx.search(query); // Get lunr to perform a search
      display_search_results(results); // Hand the results off to be displayed
  });

  function display_search_results(results) {
    var $search_results = $("#search_results");

    // Wait for data to load
    window.data.then(function(loaded_data) {

      // Are there any results?
      if (results.length) {
        $search_results.empty(); // Clear any old results

        // Iterate over the results
        results.forEach(function(result) {
          var item = loaded_data[result.ref];

          // Build a snippet of HTML for this result
          var appendString = '<li><a href="' + item.url + '">' + item.title + '</a></li>';

          // Add the snippet to the collection of results.
          $search_results.append(appendString);
        });
      } else {
        // If there are no results, let the user know.
        $search_results.html('<li>No results found.<br/>Please check spelling, spacing, yada...</li>');
      }
    });
  }
});

