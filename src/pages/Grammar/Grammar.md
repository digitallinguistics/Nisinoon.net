---
class:     grammar-page ling-document
permalink: /grammar/
title:     Algonquian Word-Structure Basics
---

{% capture less %}
  {% include './Grammar.less' %}
{% endcapture %}

<style>
  {{ less | css }}
</style>

# Algonquian Word-Structure Basics

(Written for the Nisinoon Project; last updated July 2, 2021) {.title-note}

Monica Macaulay {.author}

## Introduction

This document provides an overview of word structure in Algonquian languages.

Caveat: The view in this document is influenced by my familiarity with some of the Central Algonquian languages (especially Menominee); it may not be quite right for some of the other languages, especially the Plains languages, which are really different. But this should work for most of the languages. I will make updates as I learn more! (Input appreciated!)

## Contents

<!-- TOC -->

- [Lexical Categories (Parts of Speech)](#lexical-categories)
- [Derivation vs. Inflection](#derivation-vs-inflection)
- [Components](#components)
- [Hyphenation](#hyphenation)
- [Animacy](#animacy)
- [Verb Types](#verb-types)
- [Paired Verb Stems](#paired-verb-stems)
- [Primary vs. Secondary Derivation](#primary-vs-secondary-derivation)
- [Formatives](#formatives)
- [Deverbal Formations](#deverbal-formations)
- [References](#references)

<!-- /TOC -->

## Lexical Categories (Parts of Speech) {#lexical-categories}

The classic way to divide up Algonquian lexical categories at the very highest level is according to whether they inflect or not (see next section for the distinction between [Derivation vs. Inflection](#derivation-vs-inflection)):

1. Do inflect (take endings)
   - Verbs
   - Nouns
2. Do not inflect
   - Particles

Sometimes a few other things are included under the "do inflect" heading, e.g., pronouns, negators, etc. <dfn>Particle</dfn> is usually a vast category, and some authors have subdivided it further, adding, for example, prepositions (see, e.g., Oxford [[2007](#Oxford2007)] for discussion of the category <dfn>particle</dfn> in Innu-Aimun.

Notice that there aren't any adjectives or adverbs (although some authors do use these labels).

## Derivation vs. Inflection

The distinction is a little fuzzy around the edges, but basically:

- <dfn>Derivation</dfn> creates <dfn>stems</dfn>; derivational morphemes have meaning or function (like making a noun stem into a verb stem)
- <dfn>Inflection</dfn> creates <dfn>words</dfn>; adds information that doesn't really change the meaning of the stem; it just provides information like person (e.g. the subject is first person [I]{.tln}), number (singular or plural), etc.

In Algonquian languages you pretty much always have to have inflection on verbs (except in some cases where we say there's a zero morpheme).

This project is concerned with the derivational morphemes of Algonquian.

## Components

The basic derivational morphemes in Algonquian languages are called <dfn>components</dfn>, and Nisinoon is creating a cross-Algonquian dictionary of these components. There are three types, which correspond to where in the stem they appear. The following is from my in-progress [Menominee grammar](#MacaulayPrep).

<table id=figure-1 class=table>
  <tr>
    <td>Initial</td>
    <td>Medial</td>
    <td>Final</td>
  </tr>
  <caption>Figure 1. Menominee Stem Components</caption>
</table>

- Initials are also called <dfn>roots</dfn>.
- Medials tend to be nominal in character and are optional.
- Finals determine the lexical category (part of speech) of the stem, and sometimes add additional meaning too.

There are (at least!) two ways of looking at the make-up of stems: one view is that a stem can be formed of an initial by itself; an initial and a final; or an initial, a medial, and a final (see, e.g., Goddard [1990](#Goddard1990)). The other view is that initials and finals are obligatory, but sometimes the final is a zero morpheme just carrying lexical category (Cowell and Moss [[2008](#CowellMoss2008)], for example, take this view for verb stems; see also Wolfart [[1973](#Wolfart1973)]).

Some authors allow for double medials; other authors do not. Authors who want to rule them out will say one of the (apparent) medials is really part of another component. Either way, though, it's not common.

Finals can just give a word its lexical category (in which case they're called 'abstract'), or they can have some lexical meaning in addition to providing a lexical category (in which case they're called 'concrete'). Some authors divide finals into a concrete part and an abstract part (see below, on formatives).

Examples (components in slashes in the third line; this line does not include inflectional morphology):

<ol class="examples">

  <li class="ex igl">
    <p class="ex-header">Menominee</p>
    <p class="txn">pemētaehkipew</p>
    <ol class="morphemes">
      <li class="initial morpheme">
        <span class="txn">paemet‑</span>
        <span class="m-gl">crosswise</span>
        <span class="m-gl"><abbr>initial</abbr></span>
      </li>
      <li class="morpheme">
        <span class="txn">‑aehkw‑</span>
        <span class="m-gl">face</span>
        <span class="m-gl"><abbr>medial</abbr></span>
      </li>
      <li class="final morpheme">
        <span class="txn">‑ape</span>
        <span class="m-gl">sit</span>
        <span class="m-gl"><abbr>final</abbr></span>
      </li>
    </ol>
    <p class="tln">S/he sits sideways.</p>
    <span class="ex-source">Bloomfield <a href="#Bloomfield1975">1975</a>: 208</span>
  </li>

  <li class="ex igl">
    <p class="ex-header">SW Ojibwe</p>
    <p class="txn">ozhaashisagaa</p>
    <ol class="morphemes">
      <li class="initial morpheme">
        <span class="txn">ozhaash‑</span>
        <span class="m-gl">slippery</span>
        <span class="m-gl"><abbr>initial</abbr></span>
      </li>
      <li class="morpheme">
        <span class="txn">‑sag‑</span>
        <span class="m-gl">floor</span>
        <span class="m-gl"><abbr>medial</abbr></span>
      </li>
      <li class="final morpheme">
        <span class="txn">‑aa</span>
        <span class="m-gl">state</span>
        <span class="m-gl"><abbr>final</abbr></span>
      </li>
    </ol>
    <p class="tln">It is a slippery floor.</p>
    <span class="ex-source">Nichols <a href="#Nichols2015">2015</a></span>
  </li>

  <li class="ex igl">
    <p class="ex-header">Delaware</p>
    <p class="txn">kwənaskwat</p>
    <ol class="morphemes">
      <li class="initial morpheme">
        <span class="txn">kwən‑</span>
        <span class="m-gl">long</span>
        <span class="m-gl"><abbr>initial</abbr></span>
      </li>
      <li class="morpheme">
        <span class="txn">‑askw‑</span>
        <span class="m-gl">grass</span>
        <span class="m-gl"><abbr>medial</abbr></span>
      </li>
      <li class="final morpheme">
        <span class="txn">‑at</span>
        <span class="m-gl">inanimate</span>
        <span class="m-gl"><abbr>final</abbr></span>
      </li>
    </ol>
    <p class="tln">It is long grass.</p>
    <span class="ex-source">O'Meara <a href="#OMeara1990">1990</a>: 250</span>
  </li>

  <li class="ex igl">
    <p class="ex-header">Blackfoot</p>
    <p class="txn">sisáápittakit</p>
    <ol class="morphemes">
      <li class="initial morpheme">
        <span class="txn">siso‑</span>
        <span class="m-gl">cut</span>
        <span class="m-gl"><abbr>initial</abbr></span>
      </li>
      <li class="morpheme">
        <span class="txn">‑ap‑</span>
        <span class="m-gl">stringlike</span>
        <span class="m-gl"><abbr>medial</abbr></span>
      </li>
      <li class="final morpheme">
        <span class="txn">‑ittaki</span>
        <span class="m-gl">by.blade</span>
        <span class="m-gl"><abbr>final</abbr></span>
      </li>
    </ol>
    <p class="tln">shred (the hide) into strips</p>
    <span class="ex-source">Frantz & Genee <a href="#FrantzGenee2015">2015</a></span>
  </li>

</ol>

(In these examples, the components are given in their underlying forms, which differ in some cases from the forms as they show up in the actual word.)

Components occur in all lexical categories, not just verbs. But the particles tend to be fairly simple in structure, and the nouns are generally simpler than the verbs. It's in the verbs that you see the really complex combinations.

## Hyphenation

Our standard for hyphens is:

- Initials: hyphen at right, e.g. [siso‑]{.inex}
- Medials: hyphen on both sides, e.g. [‑askw‑]{.inex}
- Finals: hyphen at left, e.g. [‑ape]{.inex}

However, other authors don't necessarily follow this. We enter the data their way but convert it to the standard above in the project orthography.

## Animacy

Nouns in Algonquian languages can be animate or inanimate.

- This can correlate with intuitive notions of animacy, i.e. if something is living it should be animate, but if not, it should be inanimate. But this is by no means always the case. It's just like gender in European languages — there, some nouns might be masculine, some might be feminine, but there's not necessarily any correlation with the object and sex. (Tables are feminine in Spanish, but masculine in German, for example. Why?) There's a huge literature on why particular nouns are either animate or inanimate in Algonquian languages; for our purposes we'll just say it can be arbitrary.

- In most of the languages the plural is different depending on animacy — e.g. in Menominee, animate plurals have the suffix [‑ak]{.inex} and inanimate plurals have the suffix [‑an]{.inex} ([āmōw]{.inex} [bee]{.tln}, [āmōw**ak**]{.inex} [bees]{.tln}; [mēn]{.inex} [blueberry]{.tln}, [mēn**an**]{.inex} [blueberries]{.tln}).

- In a few of the languages (and in the hypothetical proto-language) the singular also has different suffixes depending on animacy.

- Verbs agree with subjects or objects in animacy; see next section.
