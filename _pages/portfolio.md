---
layout: page
title: 프로젝트
permalink: /portfolio/
---

# 프로젝트

여기서는 제가 진행한 **프로젝트, 미니게임, 작업물** 등을 정리합니다.


<ul class="post-list">
{% for post in site.posts %}
  {% if post.categories contains 'portfolio' %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
    </li>
  {% endif %}
{% endfor %}
</ul>