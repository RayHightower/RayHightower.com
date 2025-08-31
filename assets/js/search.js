document.addEventListener('DOMContentLoaded', function() {
  var idx = lunr(function() {
    this.ref('id');
    this.field('title');
    this.field('content');

    {% for post in site.posts %}
      this.add({
        id: '{{ post.url }}',
        title: '{{ post.title | escape }}',
        content: '{{ post.content | strip_html | escape }}'
      });
    {% endfor %}
  });

  document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var query = document.getElementById('search-input').value;
    var results = idx.search(query);
    var output = '<ul>';
    results.forEach(function(result) {
      output += '<li><a href="' + result.ref + '">' + result.ref.split('/').pop() + '</a></li>';
    });
    output += '</ul>';
    document.querySelector('main').innerHTML = output;
  });
}