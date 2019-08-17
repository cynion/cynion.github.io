---
layout: page
title: Categories
permalink: /categories/
---

{% for category in site.categories %}
{% capture category_name %}{{ category | first }}{% endcapture %}
<h3 class="category-head" id="#{{ category_name | slugize }}" name="{{ category_name | slugize }}">{{ category_name }}</h3>
{% for post in site.categories[category_name] %}
<p><a href="{{ site.baseurl }}{{ post.url }}">{% if post.title and post.title != "" %}{{post.title}}{% else %}{{post.excerpt |strip_html}}{%endif%}</a></p>
{% endfor %}
{% endfor %}
