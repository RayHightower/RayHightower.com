---
layout: nonav
title: Blog Categories
---

{% capture tags %}
  {% for tag in site.tags %}
    {{ tag[0] }}
  {% endfor %}
{% endcapture %}
{% assign sortedtags = tags | split:' ' | sort %}

{% for tag in sortedtags %}
  <h3 id="{{ tag | escape }}">{{ tag }}{{ tag.count }}</h3>
  <ul>
  {% for post in site.tags[tag] %}
  <li><a class="tag-items" href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
  </ul>
{% endfor %}
