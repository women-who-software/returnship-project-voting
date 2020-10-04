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
        # TODO в serialize указать все поля, даже если они пустые
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
    # TODO project_id must be array -> projects_ids

    # constructor of Signup
    def __init__(self, signup_email, project_id, signup_name=None, sign_up_github=None):
        self.project_id = project_id
        self.signup_email = signup_email
        self.signup_name = signup_name
        self.sign_up_github = sign_up_github

    def __repr__(self):
        return '<Signup %r>' % self.signup_name

    def serialize(self):
        return {'signup_email': self.signup_email, 'signup_name': self.signup_name, 'sign_up_github': self.sign_up_github, 'project_id': self.project_id, 'signup_id': self.signup_id}


# method for creating signup
@app.route('/api/signup', methods=['POST'])
def create_signup():
    project_id = request.form['project_id']
    signup_email = request.form['signup_email']
    sign_up_github = request.form['sign_up_github'] if 'sign_up_github' in request.form else None
    signup_name = request.form['signup_name'] if 'signup_name' in request.form else None

    signup = Signup(project_id=project_id, sign_up_github=sign_up_github,
                    signup_email=signup_email, signup_name=signup_name)
    try:
        db.session.add(signup)
        db.session.commit()
        return jsonify(signup.serialize())
    except Exception as e:
        print(e)
        return "Nothing here. Try again."


# method to read in signup
@app.route('/api/signup/<signup_id>')
def read_signup(signup_id):
    signup = Signup.query.get(signup_id)
    return jsonify(signup.serialize() if signup else 'no object')


# method to delete in signup
@app.route('/api/signup/<signup_id>', methods=['DELETE'])
def delete_signup(signup_id):
    db.session.query(Signup).filter(Signup.signup_id == signup_id).delete()
    db.session.commit()
    return jsonify({'success': True})


# method for updating in signup class
@app.route('/api/signup/<signup_id>', methods=['PATCH'])
def update_signup(signup_id):

    signup_new = json.loads(request.form['signup'])
    print(signup_new)
    signup_old = Signup.query.get(signup_id)
    signup_old.signup_name = signup_new['signup_name']
    signup_old.signup_email = signup_new['signup_email']
    signup_old.sign_up_github = signup_new['sign_up_github']
    signup_old.project_id = signup_new['project_id']

    db.session.commit()
    return jsonify(signup_old.serialize())


# class for voting for the project with the member like
class Vote(db.Model):
    project_id = db.Column(db.Integer, ForeignKey(
        "project.project_id"), nullable=False)
    voter_name = db.Column(db.String(100), nullable=True)
    voter_slack_name = db.Column(db.String(100), nullable=True)
    voter_email = db.Column(db.String(100), primary_key=True)

    def __init__(self, project_id, voter_email, voter_name=None, voter_slack_name=None):
        self.voter_name = voter_name
        self.voter_slack_name = voter_slack_name
        self.voter_email = voter_email

    def __repr__(self):
        return '<Vote %r>' % self.voter_name

    def serialize(self):
        return {'voter_name': self.voter_name, 'voter_slack_name': self.voter_slack_name, 'voter_email': self.voter_email}


# method for adding vote
@app.route('/api/vote', methods=['POST'])
def create_vote():
    project_id = request.form['project_id']
    voter_name = request.form['voter_name']
    voter_slack_name = request.form['voter_slack_name'] if 'voter_slack_name' in request.form else None
    voter_email = request.form['voter_email'] if 'voter_email' in request.form else None

    vote = Vote(project_id=project_id, voter_name=voter_name,
                voter_slack_name=voter_slack_name, voter_email=voter_email)
    try:
        db.session.add(vote)
        db.session.commit()
        return jsonify(vote.serialize())
    except Exception as e:
        print(e)
        return "Nothing here. Try again."


# method to get all votes
@app.route('/api/vote')
def all_vote():
    rows = Vote.query.all()
    return jsonify(list(map(lambda v: v.serialize(), rows)))


# method to read the votes
@app.route('/api/vote/<project_id>')
def read_vote(project_id):
    vote = Vote.query.get(project_id)
    return jsonify(vote.serialize() if vote else 'no object')


# method to delete the votes
@app.route('/api/vote/<project_id>', methods=['DELETE'])
def delete_vote(project_id):
    db.session.query(Vote).filter(Vote.project_id == project_id).delete()
    db.session.commit()
    return jsonify({'success': True})


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


# method for adding in admin
@app.route('/api/admin', methods=['POST'])
def create_admin():
    admin_name = request.form['admin_name']
    password = request.form['password']
    chapter_name = request.form['chapter_name']

    admin = Admin(admin_name=admin_name,
                  password=password, chapter_name=chapter_name)
    try:
        db.session.add(admin)
        db.session.commit()
        return jsonify(admin.serialize())
    except Exception as e:
        print(e)
        return "Nothing here. Try again."


# method to get in admin
@app.route('/api/admin')
def all_admin():
    rows = Vote.query.all()
    return jsonify(list(map(lambda v: v.serialize(), rows)))


# method to read in admin
@app.route('/api/admin')
def read_admin(project_id):
    admin = Admin.query.get(project_id)
    return jsonify(admin.serialize() if admin else 'no object')


# method to delete in admin
@app.route('/api/admin/<project_id>', methods=['DELETE'])
def delete_admin(project_id):
    db.session.query(Admin).filter(Admin.project_id == project_id).delete()
    db.session.commit()
    return jsonify({'success': True})


# @app.route('/')
# def index():
#     return "Home"

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

# method to get all signup
@app.route('/api/signup')
def all_signup():
    rows = Signup.query.all()
    return jsonify(list(map(lambda v: v.serialize(), rows)))

# method to get all projects
@app.route('/api/projects')
def all_projects():
    projects = Project.query.order_by(Project.project_id).all()
    return jsonify(list(map(lambda v: v.serialize(), projects)))

# method to read the project
@app.route('/api/projects/<project_id>')
def read_project(project_id):
    project = Project.query.get(project_id)
    return jsonify(project.serialize() if project else 'no object')

# method to delete the project
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
    # TODO дописать остальные поля класса Project

    db.session.commit()
    return jsonify(project_old.serialize())
    # "{"project_name": "sdkjfhs", "project_status": "new project"}"
    # t = json.loads("{"project_name": "sdkjfhs", "project_status": "new project"}") -> {"project_name": "sdkjfhs", "project_status": "new project"}
    # обращаемся к t['project_name'] и получаем (sdkjfhs)


if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)
