jQuery(function() {
  // Initialize lunr with the fields to be searched, plus the boost.
  window.idx = lunr(function () {
    this.field('id');
    this.field('title');
    this.field('content', { boost: 10 });
    this.field('author');
    this.field('categories');

    // === CUSTOM STOP WORD FILTER: Exclude "not" so titles like "Who Not How" work ===
    this.pipeline.remove(lunr.stopWordFilter);
    this.searchPipeline.remove(lunr.stopWordFilter);

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
      event.preventDefault();
      var query = $("#search_box").val();
      var results = window.idx.search(query);
      display_search_results(results);
  });

  function display_search_results(results) {
    var $search_results = $("#search_results");

    window.data.then(function(loaded_data) {
      if (results.length) {
        $search_results.empty();

        results.forEach(function(result) {
          var item = loaded_data[result.ref];
          var appendString = '<li><a href="' + item.url + '">' + item.title + '</a></li>';
          $search_results.append(appendString);
        });
      } else {
        $search_results.html('<li>No results found.<br/>Please check spelling, spacing, yada...</li>');
      }
    });
  }
});