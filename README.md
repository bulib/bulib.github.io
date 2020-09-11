# Welcome to the BU Libraries' Web Services Team

- a playground for rapid static site development and user testing
- doubles as a hub for additional documentation and development support

## About this Repository

This repository is a bit of a catch-all at the moment related to internal development. It's used mostly as
  a test-bed for rapid-prototyping and free hosting of websites. It also contains some additional
  onboarding documentation, troubleshooting, and a script for setting up the development environment.
## Setting Up Your Development Environment

We've made a **`bootstrap.sh`** script to help setup a new developer to work with our repositories. This script
  will install the dependencies, clone various repositories, and aid in the configuration/credentialing.

```bash
$ chmod +x bootstrap.sh
$ bootstrap.sh
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
