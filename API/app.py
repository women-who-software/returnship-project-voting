from flask import Flask

app = Flask(__name__)


@app.route('/')
def index():
    return "Home"


@app.route('/projects')
def projects():
    return "Project list"


@app.route('/details')
def details():
    return "Project details"


@app.route('/vote')
def vote():
    return "Vote"


@app.route('/signup')
def signup():
    return "Sign up"


@app.route('/admin')
def admin():
    return "Admin"


if __name__ == "__main__":
    app.run(debug=True)
