---
layout: nonav
title: Blog Archive
---

<div id="blog-archives">
{% for post in site.posts reversed %}
{% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
{% unless year == this_year %}
  {% assign year = this_year %}
  <h1>{{ year }}</h1>
{% endunless %}
<article>
  {% include archive_post.html %}
</article>
{% endfor %}
</div>

