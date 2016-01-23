---
layout: default
title: Blog Tags
published: true
---

<h2>{{page.title}}</h2>

{% capture tags %}
  {% for tag in site.tags %}
    {{ tag[0] }}
  {% endfor %}
{% endcapture %}
{% assign sortedtags = tags | split:' ' | sort %}

{% for tag in sortedtags %}
  <h3 id="{{ tag | escape }}">{{ tag }}</h3>
  <ul>
  {% for post in site.tags[tag] %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
  </ul>
{% endfor %}
