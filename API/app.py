from flask import Flask

app = Flask(__name__)


@app.route('/api/')
def index():
    return "Home"


@app.route('/api/projects')
def projects():
    return "Project list"


@app.route('/api/details')
def details():
    return "Project details"


@app.route('/api/vote')
def vote():
    return "Vote"


@app.route('/api/signup')
def signup():
    return "Sign up"


@app.route('/api/admin')
def admin():
    return "Admin"


if __name__ == "__main__":
    app.run(debug=True)
