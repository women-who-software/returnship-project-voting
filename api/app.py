from flask import Flask, request, redirect, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_migrate import Migrate
from sqlalchemy import ForeignKey
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import json

from init import *

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# migrate = Migrate(app, db)

# method for creating signup
@app.route('/api/signup', methods=['POST'])
def create_signup():
    project_id = request.form['project_id']
    signup_email = request.form['signup_email']
    signup_github = request.form['signup_github'] if 'signup_github' in request.form else None
    signup_name = request.form['signup_name'] if 'signup_name' in request.form else None

    signup = Signup(project_id=project_id, signup_github=signup_github,
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
    signup_old.signup_github = signup_new['signup_github']
    signup_old.project_id = signup_new['project_id']

    db.session.commit()
    return jsonify(signup_old.serialize())


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
@app.route('/api/vote/project/<project_id>')
def read_votes(project_id):
    rows = [i for i in Vote.query.all() if i.project_id == int(project_id)]
    return jsonify(list(map(lambda v: v.serialize(), rows)))


# method to delete the votes
@app.route('/api/vote/<voter_email>', methods=['DELETE'])
def delete_vote(voter_email):
    db.session.query(Vote).filter(Vote.voter_email == voter_email).delete()
    db.session.commit()
    return jsonify({'success': True})


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
    rows = Admin.query.all()
    return jsonify(list(map(lambda v: v.serialize(), rows)))


# method to get admin by name
@app.route('/api/admin/<admin_name>')
def get_admin(admin_name):
    admin = db.session.query(Admin).filter(
        Admin.admin_name == admin_name).scalar()
    return jsonify(admin.serialize() if admin else 'no object')


# @app.route('/')
# def index():
#     return "Home"

# method for creating the project
@app.route('/api/projects', methods=['POST'])
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

    db.session.commit()
    return jsonify(project_old.serialize())
    # "{"project_name": "sdkjfhs", "project_status": "new project"}"
    # t = json.loads("{"project_name": "sdkjfhs", "project_status": "new project"}") -> {"project_name": "sdkjfhs", "project_status": "new project"}
    # call t['project_name'] and get (sdkjfhs)


if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)
