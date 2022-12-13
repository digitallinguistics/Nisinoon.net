# Nisinoon.net

The website for the [Algonquian Components project][website].

## How to edit site content

To edit the prose/copy on the website:

1. On the [GitHub page for the repository][GitHub], find the page you wish to edit inside the [`src/pages`][pages] folder, and click the file with the `.md` extension (e.g. `Home.md`).
2. Click the edit icon (a pencil towards the top right).
3. Edit the page content.
   - Pages are written in [Markdown][md].
   - HTML is valid Markdown, so you can use HTML tags as well.
   - You can't use Markdown *inside* HTML tags. If you use an HTML tag, everything inside that tag needs to be written in HTML as well.
4. At the bottom of the page, select "Create a new branch for this commit and start a pull request", then click the "Propose changes" button.
5. A new pull request draft will be started. Add a note briefly explaining the changes you made, then click the "Create pull request" towards the bottom right.
6. Wait for a developer to review your changes and merge them into the live version of the website.

## How to update the bibliography

1. In Zotero, right click the Nisinoon group folder and select "Export Library".
   - Make sure the format is "BibTex" and the character encoding is "Unicode (UTF-8)".
   - Save the file somewhere you can easily locate it.
2. [Click here](https://github.com/dwhieb/Nisinoon.net/edit/main/bibliography/bibliography.bib) to edit the website's BibTeX file.
   - full link: <https://github.com/dwhieb/Nisinoon.net/edit/main/bibliography/bibliography.bib>
   - OR: Nisinoon.net repo > `bibliography` folder > `bibliography.bib` > click the edit icon (top right)
3. Copy the contents of the file you exported from Zotero and paste them into GitHub (replacing the content that was there).
   - Use Ctrl/Cmd + A to select all the text at once.
4. Click the "Commit Changes" button at the bottom of the page.
   - Select the "Commit directly to the main branch." option.

[GitHub]:  https://github.com/dwhieb/Nisinoon.net
[md]:      https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
[pages]:   https://github.com/dwhieb/Nisinoon.net/tree/main/src/pages
[website]: https://nisinoon.net

## Generating the bibliography PDF

Currently, the bibliography PDF can only be generated manually. You can either download [Prince XML](https://www.princexml.com/) and run it on the Bibliography page, or run `npm run pdf` in the local git repo, then commit the changes.
