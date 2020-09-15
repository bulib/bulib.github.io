# Welcome to the BU Libraries' Web Services Team

- a playground for rapid static site development and user testing
- doubles as a hub for additional documentation and development support

## About this Repository

This repository is a bit of a catch-all at the moment related to internal development. It's used mostly as
  a test-bed for rapid-prototyping and free hosting of websites. It also contains some additional
  onboarding documentation, troubleshooting, and a script for setting up the development environment.

## Static Sites

### Advantages

There are a number of reasons we do/would make use of static sites and Single Page Apps (SPAs) at BU Libraries:

- they're very **easy to deploy** and to understand,
- they're **cheap** (or even free) to host,
- they're **low-risk**, since little can "go wrong" in terms of dependencies or updates,
- and they require far **less maintenance** than running servers

### Workflow, Deployment, and Hosting

- we run static sites **locally** via an `npm run start` command via `es-dev-server` (a lightweight host fluent in modern js)
- for **staging**, we use [GitHub pages](https://pages.github.com/) on `bulib.github.io`.
  - this is because it's easy, there's a lot of documentation for how this is done, and it's free
  - this repository is vanilla and runs off of master (`bulib.github.io`) at the base/root as the default
  - [firstyear](https://github.com/bulib/firstyear/settings) uses master as well, but at the path prefaced by its repo name `bulib.github.io/firstyear`
  - [bulib-wc](https://bulib.github.io/bulib-wc/) is hosted from its `gh-pages` branch after a storybook-assisted build step
    (deploy-storybook [`storybook-to-ghpages`](https://github.com/storybookjs/storybook-deployer#storybook-deployer))
- **production** hosting is set up by IS&T and can be placed at most subpaths of `www.bu.edu/library` (e.g. `www.bu.edu/library/firstyear`)
  - [`firstyear/deploy.sh`](https://github.com/bulib/firstyear/blob/master/deploy.sh) is an example of a simple prod deployment script
  - jira tickets [FYOS-2](https://bulibrary.atlassian.net/browse/FYOS-2) and [FYOS-3](https://bulibrary.atlassian.net/browse/FYOS-3)
    have some background information on how to coordinate with IS&T to establish the space and authorize the upload

## Setting Up Your Development Environment

We've made a **`bootstrap.sh`** script to help setup a new developer to work with our repositories.

It will install the dependencies, clone various repositories, and aid in the configuration/credentialing.

To run the script, open a terminal and run the following commands to:

1. download the most recent version of the script from `bulib/bulib.github.io`.
2. make the downloaded script executable (give permissions to run as a script)
3. execute the bash script

```bash
$ curl https://raw.githubusercontent.com/bulib/bulib.github.io/master/bootstrap.sh > bootstrap.sh
$ chmod +x ./bootstrap.sh
$ ./bootstrap.sh
```

It should be run (ideally) once in the first week of orientation (or when starting development work) to get
  someone set up to run and edit code. Hopefully it "just works".

If you have any issues running the script, comment out the sections that are giving you trouble and
  **run the commands manually** line-by-line.

If that's really not working, you can pretty much **give up** and try working with each repository individually
  as you go. No pressure.

## Suggested Software

### Recommended

- [Visual Studio Code](https://code.visualstudio.com/Download): IDE for viewing and editing code
  - [lit-html](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html): extension
  syntax highlighting for `lit-html` web components
  - [mdx](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx):
  syntax highlighting for `*.stories.mdx` files (storybook documentation)
  - [python](https://marketplace.visualstudio.com/items?itemName=ms-python.python): python auto-completion,
  - [markdown all-in-one](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one):
  keyboard shortcuts and auto-preview for README and other markdown files.
  jupyter notebooks, debugging/testing/etc.
- [InVision](https://www.invisionapp.com/): create and update UI diagrams and clickable prototypes (e.g. [bulib-header](https://projects.invisionapp.com/prototype/bulib-header-cju8tit1y00deol01jekpfew6/play/95738b75))
- [Postman](https://www.postman.com/): an application for managing, testing, documenting/detailing API usage

### Additional

- [GitHub Desktop](https://desktop.github.com/): manage git commits/history more granularly/visually
- [Lightshot Screenshot](https://apps.apple.com/us/app/lightshot-screenshot/id526298438): quickly capture
  and annotate pictures of your screen for mockups, messages, and pull requests
- [Magnet](https://magnet.crowdcafe.com/) window manager: quickly organize a number of windows (paid)
- [Jira Desktop](https://apps.apple.com/app/jira-cloud-by-atlassian/id1475897096): access jira on the app
