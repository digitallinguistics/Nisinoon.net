---
class:     bibliography-page
permalink: /bibliography/
title:     Bibliography
---

{% capture less %}
  {% include './print.less' %}
{% endcapture %}

<!-- TODO: add media=print -->
<style>
  {{ less | css }}
</style>

# Algonquian Components Bibliography

This is a collection of resources used in the [Nisinoon project][website] to collect data on derivational morphemes in Algonquian languages. It was compiled by [Monica Macaulay][website-monica] (University of Wisconsin-Madison) and [Hunter Lockwood][website-hunter] (Myaamia Center, Miami University) with the help of Savana Stauss, Anushri Kartik-Narayan, Rachel Fedorchak, and Eleanor Sand.

This material is based upon work supported by the National Science Foundation under Grant No. BCS-1953103.

If you see an error in this bibliography, or would like to suggest any additions, please email Monica Macaulay at [mmacaula@wisc.edu](mailto:mmacaula@wisc.edu).

## References {.header}

[Download this bibliography as a PDF.](/bibliography/bibliography.pdf) {.download-link}

*Last updated {{ "today" | date: "%B %e, %Y" }}.*

{% include './entries.html' %}

<!-- LINKS -->
[website]:        https://nisinoon.net
[website-hunter]: http://miamioh.edu/myaamia-center/about/staff-faculty-affiliates/lockwood/index.html
[website-monica]: https://monicamacaulay.com/
