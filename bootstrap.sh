#!/bin/bash

# -- install software and dependencies -- #

# install xcode (development suite for Mac OSX)
echo "installing xcode..."
xcode -select -- install

# install homebrew (package manager) from github 
echo "installing homebrew (and coreutils)..."
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install coreutils  # helpful UNIX commands 

# python
echo "installing python (and pip)..."
brew install python
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py && python get-pip.py

# install node/npm
echo "installing node (and npm)..."
brew install node

npm install -g es-dev-server  # static site development/running locally
npm install -g cypress        # running tests across repositories


# -- configure accounts -- #

# git config credentials
echo -n "enter your github username: "
read github_username
git config --global user.name "$github_username"
echo -n "enter your github email: "
read github_email 
git config --global user.name "$github_email"

# npm login credentials
echo -n "enter 'npm' credentials for the following prompts: "
npm login


# -- setup the repositories -- #

# initialize projects directory
mkdir ~/projects || true
cd ~/projects 

# clone the web components directory and firstyear site
git clone https://github.com/bulib/bulib.github.io.git
git clone https://github.com/bulib/bulib-wc.git
git clone https://github.com/bulib/firstyear.git

# set up the BU Libraries Search (primo) development environment
git clone https://github.com/bulib/primo-explore-bu.git
wget https://github.com/ExLibrisGroup/primo-explore-devenv/archive/master.zip
unzip master.zip
rm master.zip
mv primo-explore-devenv-master primo-explore-devenv  # rename the directory to match the repository name
cd primo-explore-devenv/primo-explore
rm -rf custom/ tmp/
git clone https://github.com/bulib/primo-explore-devenv-bu.git ./

# backend stuff, scripts, and asserted one-offs
cd ~/projects
git clone https://github.com/bulib/playhouse.git
git clone https://github.com/bulib/metadata-workbench.git
