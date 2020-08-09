from flask import Flask, request, redirect, render_template
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_migrate import Migrate
from sqlalchemy import ForeignKey


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
#migrate = Migrate(app, db)


class Project(db.Model):
    project_id = db.Column(db.Integer, primary_key=True)
    project_name = db.Column(db.String(100), nullable=True)
    project_desc = db.Column(db.Text, nullable=True)
    client_name = db.Column(db.String(100), nullable=True)
    client_email = db.Column(db.String(100))
    client_phone = db.Column(db.Integer)
    project_status = db.Column(db.String(100))
    project_stack = db.Column(db.String(100))
    max_members = db.Column(db.Integer)
    date = db.Column(db.DateTime, default=datetime.utcnow)


    def __repr__(self):
        return '<Project %r>' % self.project_name


class Signup(db.Model):
    signup_id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, ForeignKey("project.project_id"), nullable=False)
    signup_name = db.Column(db.String(100), nullable=True)
    sign_up_github = db.Column(db.String(100), nullable=True)
    signup_email = db.Column(db.String(100))


    def __repr__(self):
        return '<Signup %r>' % self.signup_name


class Vote(db.Model):
    project_id = db.Column(db.Integer, ForeignKey("project.project_id"), nullable=False)
    voter_name = db.Column(db.String(100), nullable=True)
    voter_slack_name = db.Column(db.String(100), nullable=True)
    voter_email = db.Column(db.String(100), primary_key=True)

    def __repr__(self):
        return '<Vote %r>' % self.voter_name

class Admin(db.Model):
    admin_name = db.Column(db.String(100), primary_key=True)
    password = db.Column(db.String(100))
    chapter_name = db.Column(db.String(100))

    def __repr__(self):
        return '<Admin %r>' % self.admin_name


# @app.route('/')
# def index():
#     return "Home"
#
#
# @app.route('/post-project', methods=['POST','GET'])
# def post_project():
#     if request.method == "POST":
#         client_email = request.form['client_email']
#
#         project = Project(client_email=client_email)
#
#         try:
#             db.session.add(project)
#             db.session.commit()
#             return redirect('/projects')
#         except Exception as e:
#             print(e)
#             return "Nothing here. Try add the project again."
#     else:
#         return render_template("post_project.html")
#
#
# @app.route('/projects')
# def all_projects():
#     projects = Project.query.order_by(Project.project_id).all()
#     return render_template("all-projects.html", projects=projects)


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