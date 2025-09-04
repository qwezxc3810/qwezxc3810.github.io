---
layout: page
title: 아카이브
permalink: /archive/
---

# 아카이브

블로그의 모든 글을 **카테고리별/연도별**로 모아둔 페이지입니다.


<ul class="post-list">
{% for post in site.posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
  </li>
{% endfor %}
</ul>
