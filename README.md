# HE MUST BE STOPPED

Site for Charlie so he stops vaping

# Journal Entries

Entries are in `src/assets/journal-entries`, they are markdown files. They are displayed on the `/journal` page, which is currently hidden, but you can see it by just navigating to the url directly. The name of the files don't matter, as long as they are `.md`, however the name of the files will decide which order the entries are showed in (`1.md` will be before `2.md`), so I suggest just numbering them. I have a `1.md` file already made, feel free to change the contents of it.

## What is Markdown

It's a markup language for formatting documents. [Heres an introduction on the syntax](https://www.markdownguide.org/basic-syntax/). You can look at the `.md` files in `src/pages/journal-example` and see how they are displayed on [`/journal-example`](https://charlieneedshelp.com/journal-example). (this is a hidden page just for you to reference, make sure you put your actual entries in `src/assets/journal-entries`)

## Creating an Entry

Make a new `.md` file in the journal entries folder, and add this section to the top:
```md
---
date: "December 17th"
---
```
This is the markdown file's [frontmatter](https://markdoc.dev/docs/frontmatter), you can store general information about the file here, but in our case we just use it for the date of the entry. Make sure every entry file starts with this. The string you put in date will appear exactly that way on the website, and will have no affect on sorting of the entry (again sorting is by filename).

Then you can add anymore markdown to the file you want:
```md
---
date: "December 17th"
---

# Entry 1

Damn this is **hard**
```

If you have the dev server running (later section tells you how to do this) you will be able to see your changes be made in real time on the `/journal` page. 

## Publishing your changes

I assume you have used git before, just commit your changes to main and push that shit. Once you commit **your changes will immediately be visible on the website** (well, give it like 30 seconds to build, but yea immediately) so if you fuck something up it will be visible. I suggest not fucking stuff up. If you fuck up stuff so bad that the site fails to build then the change will not go through on the production site. I suggest you run the dev server to ensure your changes don't break the site.

# Heres how you run the dev server

*Note: you do NOT need to run the dev server to make journal entries, its just nice to do to see what the page will look like when you push your changes* 

Clone the repo and open the folder in a terminal, make sure you have [Node installed](https://nodejs.org/en/download/prebuilt-installer) (make sure after installing you restart, check if node is working with `node -v`). then in the folder in terminal run `npm install`. Once that is done run `npm run dev` to get the dev server going. You will be able to open the localhost link that astro spits out in console and see the site. When you save changes to files the project should be automatically be reloaded.