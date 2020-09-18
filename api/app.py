from flask import Flask, request, redirect, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_migrate import Migrate
from sqlalchemy import ForeignKey
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import json

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# migrate = Migrate(app, db)

# class for creating ptoject


class Project(db.Model):
    project_id = db.Column(db.Integer, primary_key=True)
    project_name = db.Column(db.String(100))
    project_desc = db.Column(db.Text, nullable=True)
    client_name = db.Column(db.String(100), nullable=True)
    client_email = db.Column(db.String(100), nullable=True)
    client_phone = db.Column(db.Integer, nullable=True)
    project_status = db.Column(db.String(100))
    project_stack = db.Column(db.String(100), nullable=True)
    max_members = db.Column(db.Integer)
    date = db.Column(db.DateTime, default=datetime.utcnow)

    # constructor of Project
    def __init__(self, project_name, max_members, project_status, project_stack=None,
                 client_phone=None, project_desc=None, client_name=None, client_email=None, date=None):
        self.project_name = project_name
        self.client_name = client_name
        self.client_email = client_email
        self.max_members = max_members
        self.project_desc = project_desc
        self.project_status = project_status
        self.project_stack = project_stack
        self.client_phone = client_phone
        self.date = date

    def __repr__(self):
        return '<Project %r>' % self.project_name

    def serialize(self):
        # todo в serialize указать все поля, даже если они пустые
        return {'project_id': self.project_id, 'project_desc': self.project_desc, 'client_name': self.client_name,
                'client_phone': self.client_phone, 'project_status': self.project_status,
                'project_stack': self.project_stack, 'date': self.date,
                'client_email': self.client_email, 'max_members': self.max_members, 'project_name': self.project_name}


# class for the signing up to the project
class Signup(db.Model):
    signup_id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, ForeignKey(
        "project.project_id"), nullable=False)
    signup_name = db.Column(db.String(100), nullable=True)
    sign_up_github = db.Column(db.String(100), nullable=True)
    signup_email = db.Column(db.String(100))

    # constructor of Signup
    def __init__(self, signup_id, signup_email, signup_name, sign_up_github, project_id=None):
        self.signup_id = signup_id
        self.signup_email = signup_email
        self.signup_name = signup_name
        self.sign_up_github = sign_up_github

    def __repr__(self):
        return '<Signup %r>' % self.signup_name


# class for voting for the project which the member like
class Vote(db.Model):
    project_id = db.Column(db.Integer, ForeignKey(
        "project.project_id"), nullable=False)
    voter_name = db.Column(db.String(100), nullable=True)
    voter_slack_name = db.Column(db.String(100), nullable=True)
    voter_email = db.Column(db.String(100), primary_key=True)

    def __init__(self, voter_name, voter_slack_name, voter_email, project_id=None):
        self.voter_name = voter_name
        self.voter_slack_name = voter_slack_name
        self.voter_email = voter_email

    def __repr__(self):
        return '<Vote %r>' % self.voter_name


# class for admin page
class Admin(db.Model):
    admin_name = db.Column(db.String(100), primary_key=True)
    password = db.Column(db.String(100))
    chapter_name = db.Column(db.String(100))

    def __init__(self, admin_name, password, chapter_name):
        self.admin_name = admin_name
        self.password = password
        self.chapter_name = chapter_name

    def __repr__(self):
        return '<Admin %r>' % self.admin_name


# @app.route('/')
# def index():
#     return "Home"
#
# method for creating the project
@app.route('/api/post-project', methods=['POST'])
def post_project():
    max_members = request.form['max_members']
    project_name = request.form['project_name']
    project_desc = request.form['project_desc'] if 'project_desc' in request.form else None
    project_status = request.form['project_status']
    project_stack = request.form['project_stack'] if 'project_stack' in request.form else None

    project = Project(max_members=max_members, project_name=project_name,
                      project_desc=project_desc, project_status=project_status, project_stack=project_stack)

    try:
        db.session.add(project)
        db.session.commit()
        return jsonify(project.serialize())
    except Exception as e:
        print(e)
        return "Nothing here. Try add the project again."


@app.route('/api/projects')
def all_projects():
    projects = Project.query.order_by(Project.project_id).all()
    return jsonify(list(map(lambda v: v.serialize(), projects)))


@app.route('/api/projects/<project_id>')
def read_project(project_id):
    project = Project.query.get(project_id)
    return jsonify(project.serialize() if project else 'no object')


@app.route('/api/projects/<project_id>', methods=['DELETE'])
def delete_project(project_id):
    db.session.query(Project).filter(Project.project_id == project_id).delete()
    db.session.commit()
    return jsonify({'success': True})

# method for updating the project
@app.route('/api/projects/<project_id>', methods=['PATCH'])
def update_project(project_id):

    project_new = json.loads(request.form['project'])
    print(project_new['project_name'])
    project_old = Project.query.get(project_id)
    project_old.project_name = project_new['project_name']
    project_old.project_status = project_new['project_status']
    project_old.project_stack = project_new['project_stack']

    db.session.commit()
    return jsonify(project_old.serialize())


if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)
