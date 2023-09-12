---
class:     bibliography-page
permalink: /bibliography/
title:     Bibliography
---

{% capture print %}
  {% include './print.less' %}
{% endcapture %}

<style media=print>
  {{ print | css }}
</style>

# Algonquian Components Bibliography

This is a collection of resources used in the [Nisinoon project][website] to collect data on derivational morphemes in Algonquian languages. It was compiled by Monica Macaulay (University of Wisconsin-Madison) and [Hunter Lockwood][website-hunter] (Myaamia Center, Miami University) with the help of Savana Stauss, Anushri Kartik-Narayan, Rachel Fedorchak, and Eleanor Sand.

This material is based upon work supported by the National Science Foundation under Grant No. BCS-1953103.

You can cite this bibliography using the following model:

> Macaulay, Monica & Hunter Thompson Lockwood. {{ "today" | date: "%Y" }}. *Algonquian Components Bibliography*. doi:[10.5281/zenodo.5115261](https://doi.org/10.5281/zenodo.5115261).

If you see an error in this bibliography, or would like to suggest any additions, please email Monica Macaulay at [mmacaula@wisc.edu](mailto:mmacaula@wisc.edu).

## References {.header}

[Download this bibliography as a PDF.](/bibliography/bibliography.pdf) {.download-link}

**Total references:** {% include './totalEntries.txt' %}

*Last updated {{ "today" | date: "%B %e, %Y" }}.*

{% include './entries.html' %}

<!-- LINKS -->
[website]:        https://nisinoon.net
[website-hunter]: http://miamioh.edu/myaamia-center/about/staff-faculty-affiliates/lockwood/index.html
