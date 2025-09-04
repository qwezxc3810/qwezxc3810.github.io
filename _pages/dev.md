---
layout: page
title: 오늘의 코딩
permalink: /dev/
---

# 오늘의 코딩

이 페이지에서는 개발 과정에서 마주한  **작은 코드, 실수, 에러, 그리고 공부한 과정** 등을 공유합니다.

<ul class="post-list">
{% for post in site.posts %}
  {% if post.categories contains 'dev' %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
    </li>
  {% endif %}
{% endfor %}
</ul>
