from app import db
from datetime import datetime
from flask_migrate import Migrate
from sqlalchemy import ForeignKey

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
    signup_github = db.Column(db.String(100), nullable=True)
    signup_email = db.Column(db.String(100))

    # TODO project_id must be array -> projects_ids

    # constructor of Signup
    def __init__(self, signup_email, project_id, signup_name=None, signup_github=None):
        self.project_id = project_id
        self.signup_email = signup_email
        self.signup_name = signup_name
        self.signup_github = signup_github

    def __repr__(self):
        return '<Signup %r>' % self.signup_name

    def serialize(self):
        return {'signup_email': self.signup_email, 'signup_name': self.signup_name, 'signup_github': self.signup_github, 'project_id': self.project_id, 'signup_id': self.signup_id}

# class for voting for the project with the member like


class Vote(db.Model):
    project_id = db.Column(db.Integer, ForeignKey(
        "project.project_id"), nullable=False)
    voter_name = db.Column(db.String(100), nullable=True)
    voter_slack_name = db.Column(db.String(100), nullable=True)
    voter_email = db.Column(db.String(100), primary_key=True)

    def __init__(self, project_id, voter_email, voter_name=None, voter_slack_name=None):
        self.project_id = project_id
        self.voter_name = voter_name
        self.voter_slack_name = voter_slack_name
        self.voter_email = voter_email

    def __repr__(self):
        return '<Vote %r>' % self.voter_name

    def serialize(self):
        return {'voter_name': self.voter_name, 'voter_slack_name': self.voter_slack_name, 'voter_email': self.voter_email, 'project_id': self.project_id}


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

    def serialize(self):
        return {'admin_name': self.admin_name, 'password': self.password, 'chapter_name': self.chapter_name}
