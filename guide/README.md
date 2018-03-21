# Kaizen Design System Website - www.cultureamp.design

This folder contains the code and content required to build the
[www.cultureamp.design](http://www.cultureamp.design) design system website.

It's built using [Gatsby](https://www.gatsbyjs.org/), a static site generator
built with React.

## Contributing

Anyone at Culture Amp can contribute! Open a Pull Request on this repo, and when
we merge it, the new site will be automatically deployed. You're also welcome to
review, approve and merge pull requests.

Tip: you can edit files directly from the Github by opening the file you want
and clicking the "Edit this file" button (the one with a pencil icon). After
you've made your changes it will guide you to open a pull request.

If you need any help, ask somebody in the Front End Capability Team.

### Testing locally

To test locally:

1.  Clone the repository:

    `git clone git@github.com:cultureamp/cultureamp-style-guide.git`

2.  Run `bin/setup` to install the dependencies

3.  Run `bin/gatsby` to start the local development server

4.  Visit http://localhost:8000/ to preview the site.

As you edit and save files the site will automatically rebuild and the browser
refresh.

### Changing text content

Most of the text heavy pages, including the product language guide, are created
using Markdown. We actually use a special form of markdown that supports
including React components with JSX, but we still use the `*.md` file extension.

So if you want to edit text content, find the relevant mdx file and make your
changes.

### Adding icons

If you are adding a new icon, you can add it to the
[\_allIcons.js](https://github.com/cultureamp/cultureamp-style-guide/blob/master/guide/src/pages/visuals/icons/_allIcons.js)
file and it will be included on the icons page.

### Adding pages

You can create new pages by creating new mdx or JS files and saving them in the
`pages/` folder. The URL for the page will be based on the folder it is in and
the name of the file. If you would like to set the default page for a folder,
you can call it `index.js` or `index.mdx`.

To add a new page to the main navigation, add an entry to
[\_sitemap.js](https://github.com/cultureamp/cultureamp-style-guide/blob/master/guide/src/pages/_sitemap.js)

If you create some helper JS files and don't want them to be treated as pages,
you can start the filename with an an underscore: `_myHelper.js`.

### CSS

The Gatsby site is configured to handle both SASS and PostCSS. If you would like
your file to be treated as a CSS module, it will need to end with the extension
`.module.scss`.
