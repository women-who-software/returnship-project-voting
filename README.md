# Women Who Code (WWC) Colorado Career Returnship' s ProjectHub

## Project Status

This project is currently in development. Front end is in React and Backend is Python Flask.

## Getting Started

### Prerequisites (Frontend)

For the Frontend development environment follow the below instructions:

This project uses [NodeJS](http://nodejs.org) and [NPM](https://npmjs.com). To confirm if locally installed, enter into the terminal
```shell
 node --version
 npm --version
 ```
If not locally installed, you will need to install these via [Homebrew](https://brew.sh/) (recommended) or check the links below for alternative download and install methods.

#### Homebrew Install

- Install Homebrew via the link above (if you do not have it already)
- Run `brew install node` to install both NodeJS and NPM

#### Homebrew Alternative Install

- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [NodeJS](https://nodejs.org/en/download/)

### Project Setup & Installation

1. Open the terminal and in the desired directory, and clone this repo to your local machine using the Git CLI.
```shell
 git clone https://github.com/wwcodecolorado/returnship-project-voting.git
 ```
2. Once cloned, navigate to the directory
```shell
 cd returnship-project-voting/client
```
  and pull down the node modules inside the client subdirectory
  ```shell
  npm install
  ```
3. Once all developer dependencies are downloaded, you are ready to get started. To start the ReactJS development server,
```shell
npm run start
```
4. Visit locally running copy of the ReactJS project at `http://localhost:3000` (or as indicated in the terminal)

### Prerequisites (Backend)

Install a recent Python 3 interpreter to run the Flask Backend on. To install Python, go to [install Python](https://www.python.org/). To confirm if locally installed, enter into the terminal
```shell
python3 --version
```
To install Flask, enter into the terminal
```shell
pip install flask python-dotenv
```

### Project Setup

Since we want to have both the frontend and backend combined into a single project,  Backend is in the top-level subdirectory API.

1. If you haven't cloned the project, open the terminal and in the desired directory, run
```shell
  git clone https://github.com/wwcodecolorado/returnship-project-voting.git
```
  to clone this project repository to the local machine.

2. Once cloned, in the terminal run
```shell
  cd returnship-project-voting/API
```
  and create a virtual environment called `venv`, by entering (for Unix-based operating systems)
```shell
  $ python3 -m venv venv
  $ source venv/bin/activate
```
  and you will get the terminal as `(venv) $ `
  If you are using Windows, then you will do this instead:
```shell
  $ python -m venv venv
  $ venv\Scripts\activate
```

3. To get started, in `returnship-project-voting/API` run
   ```shell
    flask run
   ```
   to start the Flask development server. To stop the Flask server press Ctrl-C.

4. Visit api of the project locally at `http://localhost:5000/`

### Contribute to this project:

1. **Find a non assigned [issue](https://github.com/wwcodecolorado/returnship-project-voting/issues) which you want to work and self assign your name.**

2. **Follow the steps Prerequisites and Project Setup.**

3. **Before making any changes, create a branch in your name with issue number.**
```shell
  git branch [your-feature-branch-name]
```

4. **Open the source code and start editing/coding!**

5. **Updating your feature branch to latest master changes: **
If you have your branch created for a while now, you may need to update it to what master has currently to avoid conflicts as you push/ commit your changes. You can skip this if you are just starting out.  

Follow [these](https://gist.github.com/santisbon/a1a60db1fb8eecd1beeacd986ae5d3ca) git commands or this summary:

```shell
git checkout master
git fetch -p origin
git merge origin/master
git checkout [your-feature-branch-name]
git merge master
git push origin [your-feature-branch-name]
```

6. **Once you finish making changes, push your commit to your branch and do a pull request on master.**
(starting on your-feature-branch-name)
```shell
# get a list of all the updated, added and deleted files.
git status

# add changes to stage for commit ,or use git add file_path 		                     
git add . 	

# commit your code to your branch	                    
git commit -m “commit message”

# Upload all local branch commits to GitHub	and create upstream branch	 
git push -u origin [your-feature-branch-name]

# or if your upstream branch already exists you can just do
git push                           
```
Then go to Github and click the 'Create Pull Request' button and assign a reviewer.

7. **After reviewing, your changes will be merged to the master branch.🎉 🎉 🎉**
