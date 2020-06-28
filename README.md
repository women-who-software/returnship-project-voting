# Women Who Code (WWC) Colorado Career Returnship' s ProjectHub

## Project Status

This project is currently in development. Front end is in React and Backend is Python Flask.

## Getting Started

### Prerequisites (Frontend)

For the Frontend development environment follow the below instructions:

This project uses [NodeJS](http://nodejs.org) and [NPM](https://npmjs.com). To confirm if locally installed, enter into the terminal `node --version`, `npm --version`. If not locally installed, you will need to install these via [Homebrew](https://brew.sh/) (recommended) or check the links below for alternative download and install methods.

#### Homebrew Install

- Install Homebrew via the link above (if you do not have it already)
- Run `brew install node` to install both NodeJS and NPM

#### Homebrew Alternative Install

- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [NodeJS](https://nodejs.org/en/download/)

### Project Setup & Installation

1. Open the terminal and in the desired directory, run `git clone https://github.com/wwcodecolorado/returnship-project-voting.git` to clone this project repository to the local machine.
2. Once cloned, in the terminal run `cd returnship-project-voting/client` and `npm install` inside the `client` directory.
3. Once all developer dependencies are downloaded, you are ready to get started.
   - In `returnship-project-voting/client` run `npm run start` to start the ReactJS development server.
4. Visit locally running copy of the ReactJS project at `http://localhost:3000` (or as indicated in the terminal)

### Prerequisites (Backend)

Install a recent Python 3 interpreter to run the Flask Backend on. To install Python, go to [install Python](https://www.python.org/). To confirm if locally installed, enter into the terminal `python3 --version`.
To install Flask, enter into the terminal `pip install flask python-dotenv`.

### Project Setup

Since we want to have both the frontend and backend combined into a single project,  Backend is in the top-level subdirectory API.

1. If you haven't cloned the project, open the terminal and in the desired directory, run `git clone https://github.com/wwcodecolorado/returnship-project-voting.git` to clone this project repository to the local machine.
2. Once cloned, in the terminal run
`cd returnship-project-voting/API`
and create a virtual environment called `venv`, by entering (for Unix-based operating systems)
``$ python3 -m venv venv
$ source venv/bin/activate``
and you will get the terminal as `(venv) $ `
If you are using Windows, then you will do this instead:
``$ python -m venv venv
$ venv\Scripts\activate``
3. To get started,
   - In `returnship-project-voting/API` run `flask run` to start the Flask development server.To stop the Flask server press Ctrl-C.
4. Visit api of the project locally at `http://localhost:5000/`
