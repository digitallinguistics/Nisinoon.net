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

## Introduction {#introduction}

This document provides an overview of word structure in Algonquian languages.

Caveat: The view in this document is influenced by my familiarity with some of the Central Algonquian languages (especially Menominee); it may not be quite right for some of the other languages, especially the Plains languages, which are really different. But this should work for most of the languages. I will make updates as I learn more! (Input appreciated!)

## Contents {#contents}

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

## Lexical Categories (Parts of Speech) {% include 'backlink' %} {#lexical-categories}

The classic way to divide up Algonquian lexical categories at the very highest level is according to whether they inflect or not (see next section for the distinction between [Derivation vs. Inflection](#derivation-vs-inflection)):

1. Do inflect (take endings)
   - Verbs
   - Nouns
2. Do not inflect
   - Particles

Sometimes a few other things are included under the "do inflect" heading, e.g., pronouns, negators, etc. <dfn>Particle</dfn> is usually a vast category, and some authors have subdivided it further, adding, for example, prepositions (see, e.g., Oxford [[2007](#Oxford2007)] for discussion of the category <dfn>particle</dfn> in Innu-Aimun).

Notice that there aren't any adjectives or adverbs (although some authors do use these labels).

## Derivation vs. Inflection {% include 'backlink' %} {#derivation-vs-inflection}

The distinction is a little fuzzy around the edges, but basically:

- <dfn>Derivation</dfn> creates <dfn>stems</dfn>; derivational morphemes have meaning or function (like making a noun stem into a verb stem)
- <dfn>Inflection</dfn> creates <dfn>words</dfn>; adds information that doesn't really change the meaning of the stem; it just provides information like person (e.g. the subject is first person [I]{.tln}), number (singular or plural), etc.

In Algonquian languages you pretty much always have to have inflection on verbs (except in some cases where we say there's a zero morpheme).

This project is concerned with the derivational morphemes of Algonquian.

## Components {% include 'backlink' %} {#components}

The basic derivational morphemes in Algonquian languages are called <dfn>components</dfn>, and Nisinoon is creating a cross-Algonquian dictionary of these components. There are three types, which correspond to where in the stem they appear. The following is from my in-progress [Menominee grammar](#MacaulayPrep).

<table id=figure-1>
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

<ol class=examples>

  <li class='ex igl'>
    <p class=ex-header>Menominee</p>
    <p class=txn>pemētaehkipew</p>
    <ol class=morphemes>
      <li class='initial morpheme'>
        <span class=txn>paemet‑</span>
        <span class=m-gl>crosswise</span>
        <span class=m-gl><abbr>initial</abbr></span>
      </li>
      <li class=morpheme>
        <span class=txn>‑aehkw‑</span>
        <span class=m-gl>face</span>
        <span class=m-gl><abbr>medial</abbr></span>
      </li>
      <li class='final morpheme'>
        <span class=txn>‑ape</span>
        <span class=m-gl>sit</span>
        <span class=m-gl><abbr>final</abbr></span>
      </li>
    </ol>
    <p class=tln>S/he sits sideways.</p>
    <span class=ex-source>Bloomfield <a href=#Bloomfield1975>1975</a>: 208</span>
  </li>

  <li class='ex igl'>
    <p class=ex-header>SW Ojibwe</p>
    <p class=txn>ozhaashisagaa</p>
    <ol class=morphemes>
      <li class='initial morpheme'>
        <span class=txn>ozhaash‑</span>
        <span class=m-gl>slippery</span>
        <span class=m-gl><abbr>initial</abbr></span>
      </li>
      <li class=morpheme>
        <span class=txn>‑sag‑</span>
        <span class=m-gl>floor</span>
        <span class=m-gl><abbr>medial</abbr></span>
      </li>
      <li class='final morpheme'>
        <span class=txn>‑aa</span>
        <span class=m-gl>state</span>
        <span class=m-gl><abbr>final</abbr></span>
      </li>
    </ol>
    <p class=tln>It is a slippery floor.</p>
    <span class=ex-source>Nichols <a href=#Nichols2015>2015</a></span>
  </li>

  <li class='ex igl'>
    <p class=ex-header>Delaware</p>
    <p class=txn>kwənaskwat</p>
    <ol class=morphemes>
      <li class='initial morpheme'>
        <span class=txn>kwən‑</span>
        <span class=m-gl>long</span>
        <span class=m-gl><abbr>initial</abbr></span>
      </li>
      <li class=morpheme>
        <span class=txn>‑askw‑</span>
        <span class=m-gl>grass</span>
        <span class=m-gl><abbr>medial</abbr></span>
      </li>
      <li class='final morpheme'>
        <span class=txn>‑at</span>
        <span class=m-gl>inanimate</span>
        <span class=m-gl><abbr>final</abbr></span>
      </li>
    </ol>
    <p class=tln>It is long grass.</p>
    <span class=ex-source>O'Meara <a href=#OMeara1990>1990</a>: 250</span>
  </li>

  <li class='ex igl'>
    <p class=ex-header>Blackfoot</p>
    <p class=txn>sisáápittakit</p>
    <ol class=morphemes>
      <li class='initial morpheme'>
        <span class=txn>siso‑</span>
        <span class=m-gl>cut</span>
        <span class=m-gl><abbr>initial</abbr></span>
      </li>
      <li class=morpheme>
        <span class=txn>‑ap‑</span>
        <span class=m-gl>stringlike</span>
        <span class=m-gl><abbr>medial</abbr></span>
      </li>
      <li class='final morpheme'>
        <span class=txn>‑ittaki</span>
        <span class=m-gl>by.blade</span>
        <span class=m-gl><abbr>final</abbr></span>
      </li>
    </ol>
    <p class=tln>shred (the hide) into strips</p>
    <span class=ex-source>Frantz & Genee <a href=#FrantzGenee2015>2015</a></span>
  </li>

</ol>

(In these examples, the components are given in their underlying forms, which differ in some cases from the forms as they show up in the actual word.)

Components occur in all lexical categories, not just verbs. But the particles tend to be fairly simple in structure, and the nouns are generally simpler than the verbs. It's in the verbs that you see the really complex combinations.

## Hyphenation {% include 'backlink' %} {#hyphenation}

Our standard for hyphens is:

- Initials: hyphen at right, e.g. [siso‑]{.inex}
- Medials: hyphen on both sides, e.g. [‑askw‑]{.inex}
- Finals: hyphen at left, e.g. [‑ape]{.inex}

However, other authors don't necessarily follow this. We enter the data their way but convert it to the standard above in the project orthography.

## Animacy {% include 'backlink' %} {#animacy}

Nouns in Algonquian languages can be animate or inanimate.

- This can correlate with intuitive notions of animacy, i.e. if something is living it should be animate, but if not, it should be inanimate. But this is by no means always the case. It's just like gender in European languages — there, some nouns might be masculine, some might be feminine, but there's not necessarily any correlation with the object and sex. (Tables are feminine in Spanish, but masculine in German, for example. Why?) There's a huge literature on why particular nouns are either animate or inanimate in Algonquian languages; for our purposes we'll just say it can be arbitrary.

- In most of the languages the plural is different depending on animacy — e.g. in Menominee, animate plurals have the suffix [‑ak]{.inex} and inanimate plurals have the suffix [‑an]{.inex} ([āmōw]{.inex} [bee]{.tln}, [āmōw**ak**]{.inex} [bees]{.tln}; [mēn]{.inex} [blueberry]{.tln}, [mēn**an**]{.inex} [blueberries]{.tln}).

- In a few of the languages (and in the hypothetical proto-language) the singular also has different suffixes depending on animacy.

- Verbs agree with subjects or objects in animacy; see next section.

## Verb Types {% include 'backlink' %} {#verb-types}

Verbs in Algonquian languages are categorized in two ways:

- <dfn>Transitivity</dfn> (intransitive just has a subject; transitive has subject and object)
- <dfn>Animacy</dfn> (animate or inanimate)

The two intersect like this (again, from my in-progress Menominee grammar):

<table id=table-1>

  <caption>Table 1. Verbs and Animacy</caption>

  <thead>
    <th colspan=2></th>
    <th>Subject</th>
    <th>Object</th>
  </thead>

  <tr>
    <td>Animate Intransitive</td>
    <td>AI</td>
    <td>animate</td>
    <td></td>
  </tr>
  <tr>
    <td>Inanimate Intransitive</td>
    <td>II</td>
    <td>inanimate</td>
    <td></td>
  </tr>
  <tr>
    <td>Transitive Animate</td>
    <td>TA</td>
    <td></td>
    <td>animate</td>
  </tr>
  <tr>
    <td>Transitive Inanimate</td>
    <td>TI</td>
    <td></td>
    <td>inanimate</td>
  </tr>

</table>

That is, intransitive verbs are categorized by the animacy of their subjects (and of course they don't have objects), and transitive verbs are categorized by the animacy of their objects. The abbreviations given for each type are used extensively.

This matters because there are different verb paradigms (sets of endings) for each type. And for our purposes, verb finals will create not just verb stems, but verb stems of a particular type (e.g. a TA verb).

Some of the types have subcategories, which are usually numbered — the AI and TI verbs have these, so you'll see e.g. AI2 or TI1. In some of the languages you'll see, e.g., TI1a and TI1b.

## Paired Verb Stems {% include 'backlink' %} {#paired-verb-stems}

Usually, verbs come in pairs — AI and II, TA and TI. For example, in Menominee:

<ol class=examples>

  <li class=ex>
    <ol class=subexamples>
      <li><p><span class=inex>pāpaehcen</span> <span class=tln>he, she, it (an.) falls</span> (AI)</p></li>
      <li><p><span class=inex>pāpaehnaen</span> <span clas=tln>it (inan.) falls</span> (II)</p></li>
    </ol>
    <p class=ex-source>Bloomfield <a href=#Bloomfield1975>1975</a>: 200</p>
  </li>

  <li class=ex>
    <ol class=subexamples>
      <li><p><span class=inex>na͞ewa͞ew</span> <span class=tln>s/he sees him, her, it (an.)</span> (TA)</p></li>
      <li><p><span class=inex>na͞emwah</span> <span class=tln>s/he sees it (inan.)</span> (TI)</p></li>
    </ol>
    <p class=ex-source>Bloomfield <a href=#Bloomfield1975>1975</a>: 154</p>
  </li>

</ol>

You can see that they differ, but only a bit. Usually the difference comes in the final, which makes sense, because that's the component that gives a stem its category.

In some cases you find sets of four, where all four verb types are based on a common initial, e.g. Menominee [maehkīhotaew]{.inex} [it is painted red]{.tln} (II), [maehkīhosow]{.inex} [it (animate) is painted red]{.tln} (AI), [maehkīhonaew]{.inex} [s/he paints him, her, it (animate) red]{.tln} (TA), [maehkīhotaw]{.inex} [s/he paints it red]{.tln} (TI).

## Primary vs. Secondary Derivation {% include 'backlink' %} {#primary-vs-secondary-derivation}

What was described in the [Components](#components) section is what is known as <dfn>primary derivation</dfn>, where an initial, an optional medial, and a final form a stem. But you can take a stem created this way and add another final to it to create a larger stem — this is called <dfn>secondary derivation</dfn>. (Authors use different terms for what I’m calling the stem here; some call it an initial or a derived initial.) These are illustrated below (again, from my Menominee grammar (Macaulay, [in prep](#MacaulayPrep))):

<table id=figure-2>
  <caption>Figure 2. Primary Derivation</caption>
  <tr>
    <td>Initial</td>
    <td>Medial</td>
    <td>Final</td>
  </tr>
</table>

<table id=figure-3>

  <caption>Figure 3. Secondary Derivation</caption>

  <tr>
    <td>
      <table>
        <tr>
          <td>Initial</td>
          <td>Medial</td>
          <td>Final</td>
        </tr>
        <tr>
        <td class=stem-cell colspan=3>Stem</td>
        </tr>
      </table>
    </td>
    <td>
      <table>
        <tr>
         <td>Final</td>
        </tr>
      </table>
    </td>
  </tr>

</table>

Some finals can only be used in primary derivation, some can only be used in secondary derivation, but some can be used in both.

Following are some examples from Menominee:

<ol class=examples>

  <li class=ex>
    <p><span class=inex>kōhkawaew</span> (AI) <span class=tln>it (animate; for example, a wagon or canoe) tips over</span></p>
    <p><strong>Stem:</strong> <span class=inex>kōhkawae‑</span> [initial <span class=inex>kōhkā‑</span> <span class=tln>tip over</span> + <span class=inex>‑āwa͞e</span> <span class=tln>AI final</span>]</p>
    <p><strong>Secondary final:</strong> <span class=inex>‑makat</span> <span class=tln>II verb</span></p>
    <p><strong>New word:</strong> <span class=inex>kōhkawae<b>makat</b></span> (II) <span class=tln>it tips over</span></p>
    <p class=ex-source>Bloomfield <a href=#Bloomfield1975>1975</a>: 103</p>
  </li>

  <li class=ex>
    <p><span class=inex>cēkataham</span> (TI) <span class=tln>he or she sweeps it clear, cleans it with a broom</span></p>
    <p><strong>Stem:</strong> <span class=inex>cēkatah‑</span> [initial <span class=inex>cēk‑</span> <span class=tln>near, next to</span> (?) + <span class=inex>‑atah</span> <span class=tln>by stick</span>]</p>
    <p><strong>Secondary final:</strong> <span class=inex>‑ka͞e</span> <span class=tln>AI verb; indefinite action</span></p>
    <p><strong>New word:</strong> <span class=inex>cēkatahe<b>kae</b>w</span> (AI1) <span class=tln>he or she sweeps</span></p>
    <p class=ex-source>Bloomfield <a href=#Bloomfield1975>1975</a>: 42</p>
  </li>

  <li class=ex>
    <p><span class=inex>wāqnenam</span> (TI) <span class=tln>he or she throws light on it, lights it up</span></p>
    <p><strong>Stem:</strong> <span class=inex>wāqnen‑</span> [initial <span class=inex>wāqN‑</span> <span class=tln>light</span> + <span class=inex>‑aen</span> <span class=tln>by hand</span>]</p>
    <p><strong>Secondary final:</strong> <span class=inex>‑kan</span> <span class=tln>N; instrument, product, place, etc.</span></p>
    <p><strong>New word:</strong> <span class=inex>wāqnene<b>kan</b></span> (N) <span class=tln>lamp, candle</span></p>
    <p class=ex-source>Bloomfield <a href=#Bloomfield1975>1975</a>: 267</p>
  </li>

  <li class=ex>
    <p><span class=inex>sūniyan</span> (N) <span class=tln>money</span></p>
    <p><strong>Stem:</strong> <span class=inex>sūniyan‑</span> [initial <span class=inex>sōni‑</span> <span class=tln>silver</span> + <span class=inex>‑ān</span> <span class=tln>N final</span> (?)]</p>
    <p><strong>Secondary final:</strong> <span class=inex>‑ikamekw</span> <span class=tln>N; house, building</span></p>
    <p><strong>New word:</strong> <span class=inex>sūniyan<b>ikamek</b></span> (N) <span class=tln>bank</span></p>
    <p class=ex-source>Bloomfield <a href=#Bloomfield1975>1975</a>: 244 & Sarah Skubitz 4/3/00</p>
  </li>

</ol>

These examples represent the standard kind of secondary derivation, where a final is added to a stem. Very rarely, you’ll find someone who allows secondary derivation to add a medial as well as a final (e.g. Drapeau [1980](#Drapeau1980): 317).

## Formatives {% include 'backlink' %} {#formatives}

Traditionally, Algonquianists have recognized another level or layer of derivation, saying that components can themselves be made up of more than one piece. There's no standard name for this sub-component element; we've adopted the word <dfn>formative</dfn> for it.

In this project, we believe that what looks like sub-component elements are really historical relics, and should not be treated as synchronically present in a word's analysis. But it's important for the database to be true to the sources we get the data from, so if they include formatives in their analysis, we are entering them.

The types of formatives can include:

- Postradical extensions (also called postinitials)
- Premedials
- Premedial accretions
- Postmedials
- Prefinal accretions

This list (examples appear below) comes from Bloomfield's ([1962](#Bloomfield1962)) grammar of Menominee; other authors may use other terms or include other types. Some of the formative types are claimed to be meaningful; others are just phonological material that attaches to a component (the <dfn>accretions</dfn> and <dfn>extensions</dfn>).

The example below comes from a paper I coauthored on this topic (Macaulay and Salmons [2017](#MacaulaySalmons2017)) and shows where each type of formative attaches to the component it goes with.

![Menominee Stem Structure](/images/Menominee_Stem_Structure.png){.stem-structure}

Examples of formatives (all from Menominee):

- ### Postradical extensions

  The initial [īqsaw‑]{.inex} [to one side]{.tln} is found in [**īqsaw**ekāpowew]{.inex} [he, she, it (animate) stands bent to one side]{.tln}. It shows up with the postradical extension [‑a͞e]{.inex} in [**īqsawa͞e**hkaw]{.inex} [he, she, it (animate) moves to one side]{.tln}.

- ### Premedials

  This is one of the ways of getting around saying a word can have two medials. Premedials appear as the first "part of a complex medial suffix. Thus, beside [‑qkw‑]{.inex} [eye, face]{.tln}, there is [‑ānakeqkw‑]{.inex} [eye]{.tln}, with [‑ānak‑]{.inex} [opening]{.tln} as a premedial" (Bloomfield [1962](#Bloomfield1962): 381).

- ### Premedial accretions

  The medial [‑kamy‑]{.inex} [water, liquid]{.tln} appears in [tahkī**kami**w]{.inex} [it is cool water]{.tln}. It appears with a premedial accretion [ā‑]{.inex} in [apīs**ākami**w]{.inex} [it is a black liquid]{.tln}.

- ### Postmedials

  The medial [‑qsahkwan‑]{.inex} [nose]{.tln} appears in [wīne**qsāhkwan**]{.inex} [s/he has a dirty nose]{.tln} (there's a final vowel which is deleted so that it looks like there's no final, but there is). In [kesī**qsahkwana͞e**ha͞ew]{.inex} [s/he wipes his or her nose for him or her]{.tln} the medial has a postmedial [‑a͞e]{.inex} ([‑qsahkwana͞e‑]{.inex}).

- ### Prefinal accretions

  The noun [oma͞eqnomenēw]{.inex} [Menominee]{.tln} can be secondarily derived to [oma͞eqnomenēwe**qnaese**w]{.inex} [s/he speaks Menominee]{.tln} with the final [‑qnaese]{.inex} [speak]{.tln}. But the noun [mōhkomān]{.inex} [white person]{.tln} becomes [mōhkomān**ēweqnaese**w]{.inex} [s/he speaks English]{.tln} with a prefinal accretion [ēw‑]{.inex} added to the final.

For authors who divide finals into two parts, a concrete part and an abstract part (mentioned above), the prefinal corresponds to the concrete part.

The problem we have with the notion of formative has to do with the definition of <dfn>morpheme</dfn>. A <dfn>morpheme</dfn> is supposed to be the smallest unit of sound and meaning or function. But if components are morphemes, then what are the formatives? Morphemes shouldn't be made up of smaller parts, especially meaningful parts (like with the premedials). But if the formatives are the morphemes, then what status does the component have? If it's not a morpheme, what is it?

## Deverbal Formations {% include 'backlink' %} {#deverbal-formations}

<dfn>Deverbal</dfn> in the sense it is used here means "formed from a word" (<em>not</em> formed from a verb).

The traditional Algonquianists also see derivation happening to create morphemes. They very correctly recognize the relationship between full words (or stems or roots) and morphemes, but take it the extra step to say that the morpheme is derived from the word. The problem is, if this is a synchronic operation, where in the grammar could it occur?

For example, Bloomfield believed that a number of finals were derived from stems or words ("deverbal finals"). He cites the word [mahka͞esen]{.inex} [shoe, moccasin]{.tln} and notes that in a word like [maeqteku**ahkesen**]{.inex} [wooden shoe]{.tln} we find a final of the form [‑ahkaesen]{.inex} [shoe]{.tln}. For him, the fact that they're similar means the latter is derived from the former — apparently synchronically, although he's (frustratingly) never specific.

Although we believe that this kind of relationship is purely historical, when an author says that something is deverbal, we make a note of it, and note the source, if they give it.

## References {% include 'backlink' %} {#references}

- Bloomfield, Leonard. 1962. <cite>The Menomini Language</cite>. New Haven: Yale University Press. {#Bloomfield1962}
- Bloomfield, Leonard. 1975. <cite>Menominee Lexicon</cite>. Ed. Charles F. Hockett. Milwaukee Public Museum Publications in Anthropology and History No. 3. {#Bloomfield1975}
- Cowell, Andrew and Alonzo Moss Sr. 2008. <cite>The Arapaho Language</cite>. Boulder: University Press of Colorado. {#CowellMoss2008}
- Drapeau, Lynn. 1980. <cite>Le rôle des racines en morphologie derivationelle</cite>. Recherches linguistiques à Montréal 14:313-326. {#Drapeau1980}
- Frantz, Don & Inge Genee (eds.). 2015–2020. <cite>Blackfoot Dictionary</cite>. [https://dictionary.blackfoot.atlas-ling.ca](https://dictionary.blackfoot.atlas-ling.ca). {#FrantzGenee2015}
- Goddard, Ives. 1990. <cite>Primary and Secondary Stem Derivation in Algonquian</cite>. International Journal of American Linguistics 56(4):449-483. {#Goddard1990}
- Macaulay, Monica. in preparation. <cite>Menominee grammar</cite>. {#MacaulayPrep}
- Macaulay, Monica and Joseph Salmons. 2017. <cite>Synchrony and Diachrony in Menominee Derivational Morphology</cite>. Morphology 27(2):179-215. {#MacaulaySalmons2017}
- Nichols, John D. 2015. <cite>Ojibwe People's Dictionary</cite>. [https://ojibwe.lib.umn.edu/main-entry/ozhaashisagaa-vii](https://ojibwe.lib.umn.edu/main-entry/ozhaashisagaa-vii). {#Nichols2015}
- O'Meara, John. 1990. <cite>Delaware stem morphology</cite>. Montreal, Quebec: McGill University Ph.D. dissertat {#OMeara1990}
- Oxford, Will. 2007. <cite>Towards a Grammar of Innu-Aimun Particles</cite>. M.A. thesis,  Department of Linguistics, Memorial University of Newfoundland. {#Oxford2007}
- Wolfart, H. Christoph. 1973. <cite>Plains Cree: A Grammatical Study</cite>. Transactions of the American Philosophical Society, New Series, Vol 63(5):1-90. Philadelphia: American Philosophical Society. {#Wolfart1973}
