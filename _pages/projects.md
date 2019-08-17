---
layout: page
title: Projects
permalink: /projects/
---

{% for client in site.data.clients %}
<h2>{{ client.name }}</h2>
{% if client.link %}
<a href="{{ clients.link }}" target="_blank">{{ client.linktext }}</a>
{% endif %}
{% if client.description %}
<p>{{ client.description }}</p>
{% endif %}
<ul>
  {% if client.role %}
  <li>
    <strong>Role:</strong> {{ client.role }}
  </li>
  {% endif %}
  {% if client.year %}
  <li>
    <strong>Year:</strong> {{ client.year }}
  </li>
  {% endif %}
  {% if client.agency %}
  <li>
    <strong>Client:</strong> {{ client.agency }}
  </li>
  {% endif %}
</ul>

<img src="/assets/images/{{ client.image }}" />
{% endfor %}
