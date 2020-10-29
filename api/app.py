from flask import Flask, request, redirect, render_template, jsonify

from flask_migrate import Migrate

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import json
import datetime

from __init__ import *


# method for creating signup
@app.route('/api/post-signup', methods=['POST'])
def create_signup():
    project_id = request.form.get("project_id")
    signup_name = request.form.get("signup_name")
    signup_email = request.form.get("signup_email")
    signup_github_name = request.form.get("signup_github_name")
    # check if sign up name is none
    if not signup_name:
        raise AssertionError('Signup name cannot be Null')
    # check if sign up email given and is valid address
    if signup_email is not None:
        if not re.match("(\w+@\w+\.\w+)", signup_email):
            raise AssertionError('Signup email address is not valid email address')

    signup = Signup(project_id=project_id, signup_name=signup_name, signup_email=signup_email,
                    signup_github_name=signup_github_name)
    try:
        db.session.add(signup)
        db.session.commit()
        return jsonify(signup.serialize())
    except Exception as e:
        print(e)
        return "Nothing here. Try again."


# method to read list of signup for a specific project
@app.route('/api/signup/<project_id>')
def read_signup(project_id):
    signup = Signup.query.filter(Signup.project_id == project_id).all()

    return jsonify(list(map(lambda s: s.serialize(), signup))) if signup else 'no object'


# method to delete in signup
@app.route('/api/signup/<signup_id>', methods=['DELETE'])
def delete_signup(signup_id):
    db.session.query(Signup).filter(Signup.signup_id == signup_id).delete()
    db.session.commit()
    return jsonify({'success': True})


# method to get all signup
@app.route('/api/signup')
def all_signup():
    rows = Signup.query.all()
    return jsonify(list(map(lambda v: v.serialize(), rows)))


# method for updating in signup object
@app.route('/api/signup/<signup_id>', methods=['PATCH'])
def update_signup(signup_id):
    # deserialize the json data sent in the request data
    signup_new = json.loads(request.form['signup'])
    # check if signup_email is given and if it is valid email adsress
    if 'signup_email' in signup_new and not re.match("(\w+@\w+\.\w+)", signup_new['signup_email']):
        raise AssertionError('provided email address is not valid email address')
    # check if signup-name is given, if given it should not be null
    if 'signup_name' in signup_new and not signup_new['signup_name']:
        raise AssertionError('Signup name cannot be Null')
    # get the signup details for the given signup_id from the database
    signup_old = Signup.query.get(signup_id)

    # update old value with the new given value only it exists else use the old value
    signup_old.signup_name = signup_new['signup_name'] if 'signup_name' in signup_new \
        else signup_old.signup_name
    signup_old.signup_email = signup_new['signup_email'] if 'signup_email' in signup_new \
        else signup_old.signup_email
    signup_old.signup_github_name = signup_new['signup_github_name'] if 'signup_github_name' in signup_new \
        else signup_old.signup_github_name
    signup_old.project_id = signup_new['project_id'] if 'project_id' in signup_new \
        else signup_old.project_id

    db.session.commit()
    return jsonify(signup_old.serialize())


# method for adding vote
@app.route('/api/post-vote', methods=['POST'])
def create_vote():
    project_id = request.form.get("project_id")
    voter_name = request.form.get("voter_name")
    voter_email = request.form.get("voter_email")
    voter_slack_name = request.form.get("voter_slack_name")

    # check if voter_email is blank
    if not voter_email:
        raise AssertionError('Voter email cannot be Null')
    # check if given email address is valid
    if not re.match('(\w+@\w+\.\w+)', voter_email):
        raise AssertionError('Voter email address is not valid email address')

    vote = Vote(project_id=project_id, voter_name=voter_name, voter_email=voter_email,
                voter_slack_name=voter_slack_name)
    try:
        db.session.add(vote)
        db.session.commit()
        return jsonify(vote.serialize())
    except Exception as e:
        print(e)
        return "Nothing here. Try again."


# method to get all votes
@app.route('/api/votes')
def all_vote():
    rows = Vote.query.all()
    return jsonify(list(map(lambda v: v.serialize(), rows)))


# method to read the votes
@app.route('/api/votes/<project_id>')
def read_vote(project_id):
    vote = Vote.query.filter(Vote.project_id == project_id).all()

    return jsonify(list(map(lambda v: v.serialize(), vote))) if vote else 'no object'


# method to delete the vote
@app.route('/api/votes/<voter_id>', methods=['DELETE'])
def delete_vote(voter_id):
    db.session.query(Vote).filter(Vote.voter_id == voter_id).delete()
    db.session.commit()
    return jsonify({'success': True})

# method for updating in vote object
@app.route('/api/votes/<vote_id>', methods=['PATCH'])
def update_vote(vote_id):
    # deserialize the json data sent in the request data
    vote_new = json.loads(request.form['vote'])
    # check if vote_email is given and if it is valid email address
    if 'voter_email' in vote_new and not re.match("(\w+@\w+\.\w+)", vote_new['voter_email']):
        raise AssertionError('provided email address is not valid email address')
    # check if voter_name is given, if given it should not be null
    if 'voter_name' in vote_new and not vote_new['voter_name']:
        raise AssertionError('Voter name cannot be Null')
    # get the signup details for the given voter_id from the database
    vote_old = Vote.query.get(vote_id)

    # update old value with the new given value only it exists else use the old value
    vote_old.voter_name = vote_new['voter_name'] if 'voter_name' in vote_new \
        else vote_old.voter_name
    vote_old.voter_email = vote_new['voter_email'] if 'voter_email' in vote_new \
        else vote_old.voter_email
    vote_old.voter_slack_name = vote_new['voter_slack_name'] if 'voter_slack_name' in vote_new \
        else vote_old.voter_slack_name
    vote_old.project_id = vote_new['project_id'] if 'project_id' in vote_new \
        else vote_old.project_id

    db.session.commit()
    return jsonify(vote_old.serialize())

# method for adding in admin
# @app.route('/api/admin', methods=['POST'])
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
# @app.route('/api/admin')
def all_admin():
    rows = Vote.query.all()
    return jsonify(list(map(lambda v: v.serialize(), rows)))


# method to read in admin
# @app.route('/api/admin')
def read_admin(project_id):
    admin = Admin.query.get(project_id)
    return jsonify(admin.serialize() if admin else 'no object')


# method to delete in admin
# @app.route('/api/admin/<project_id>', methods=['DELETE'])
def delete_admin(project_id):
    db.session.query(Admin).filter(Admin.project_id == project_id).delete()
    db.session.commit()
    return jsonify({'success': True})


# @app.route('/')
def index():
    return "Home"


# convert string to datetime object
def datetime_sqlalchemy(value):
    return datetime.datetime.strptime(value, '%Y-%m-%d %H:%M:%S.%f')


# method for creating the project
@app.route('/api/post-project', methods=['POST'])
def post_project():
    project_name = request.form.get("project_name")
    project_desc = request.form.get("project_desc")
    project_status = request.form.get("project_status")
    project_stack = request.form.get("project_stack")
    max_members = request.form.get("max_members")

    date = request.form.get("date") if 'date' in request.form else datetime.datetime.now()
    client_name = request.form.get("client_name")
    client_email = request.form.get("client_email")
    client_phone = request.form.get("client_phone")
    # check if client_email is given and if given check if it is valid
    if client_email is not None:
        if not re.match("(\w+@\w+\.\w+)", client_email):
            raise AssertionError('provided email address is not valid email address')
    # check if client_phone is given and if given check if it is valid
    if client_phone is not None:
        if not re.match('^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$', client_phone):
            raise AssertionError('provided phone number is not valid phone number')
    # convert date to sqlalchemy datetime object
    date = datetime_sqlalchemy(str(date))
    project = Project(project_name, project_desc, project_status, project_stack, max_members, date, client_name,
                      client_email, client_phone)

    try:
        db.session.add(project)
        db.session.commit()
        return jsonify(project.serialize())
    except Exception as e:
        print(e)
        return "Nothing here. Try add the project again."


# method to get all projects
@app.route('/api/projects')
def all_projects():
    projects = Project.query.order_by(Project.project_name).all()
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
    # check if given email address is in correct format
    if 'client_email' in project_new and not re.match("(\w+@\w+\.\w+)", project_new['client_email']):
        raise AssertionError('provided email address is not valid email address')
    # check if given client_phone is in correct format
    if 'client_phone' in project_new and not re.match('^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$',
                                                      project_new['client_phone']):
        raise AssertionError('provided phone number is not valid phone number')
    # get project details for the given project_id from database
    project_old = Project.query.get(project_id)

    # update old value with the new given value only it exists else use the old value
    project_old.project_name = project_new['project_name'] if 'project_name' in project_new \
        else project_old.project_name
    project_old.project_desc = project_new['project_desc'] if 'project_desc' in project_new \
        else project_old.project_desc
    project_old.project_status = project_new['project_status'] if 'project_status' in project_new \
        else project_old.project_status
    project_old.project_stack = project_new['project_stack'] if 'project_stack' in project_new \
        else project_old.project_stack
    project_old.max_members = project_new['max_members'] if 'max_members' in project_new else project_old.max_members
    if 'date' in project_new:
        project_new['date'] = datetime_sqlalchemy(str(project_new['date']))

    project_old.date = project_new['date'] if 'date' in project_new else project_old.date
    project_old.client_name = project_new['client_name'] if 'client_name' in project_new else project_old.client_name
    project_old.client_email = project_new['client_email'] if 'client_email' in project_new \
        else project_old.client_email
    project_old.client_phone = project_new['client_phone'] if 'client_phone' in project_new \
        else project_old.client_phone

    db.session.commit()
    return jsonify(project_old.serialize())


if __name__ == "__main__":
    # db.create_all()
    app.run(debug=True)
