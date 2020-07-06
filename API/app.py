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
<<<<<<< HEAD
    app.run(debug=True)
=======
    app.run(debug=True)
>>>>>>> 14c0f891d257ae42971f616ea9ba23eb467bbc7e
