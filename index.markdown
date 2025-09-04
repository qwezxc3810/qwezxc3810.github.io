---
layout: home
title: "Oneul Code"
---

<h2>최근 포스트</h2>
<ul class="post-list">
{% for post in site.posts limit:5 %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
  </li>
{% endfor %}
</ul>