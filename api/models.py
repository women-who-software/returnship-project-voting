# from __init__ import db
from flask import Flask
import flask_sqlalchemy
import datetime
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
from flask_marshmallow import Marshmallow
import re

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)


class Project(db.Model):
    """
    Class used to represent Project and its details


    """
    __tablename__ = 'project'
    project_id = db.Column(db.Integer, primary_key=True)
    project_name = db.Column(db.String(100))
    project_desc = db.Column(db.Text, nullable=True)
    project_status = db.Column(db.String(100))
    project_stack = db.Column(db.String(100), nullable=True)
    max_members = db.Column(db.Integer)
    date = db.Column(db.DateTime, default=datetime.datetime.now)
    client_name = db.Column(db.String(100), nullable=True)
    client_email = db.Column(db.String(100), nullable=True)
    client_phone = db.Column(db.Integer, nullable=True)

    # constructor of Project
    def __init__(self, project_name, project_desc, project_status, project_stack=None,
                 max_members=None, date=None, client_name=None, client_email=None, client_phone=None):
        """

        :param project_name: Str
        :param project_desc: Str
        :param project_status: str
        :param project_stack: str
        :param max_members: int
        :param date: date
        :param client_name: str
        :param client_email: str
        :param client_phone: int
        """
        self.project_name = project_name
        self.project_desc = project_desc
        self.project_status = project_status
        self.project_stack = project_stack
        self.date = date
        self.max_members = max_members
        self.client_name = client_name
        self.client_phone = client_phone

        self.client_email = client_email

    def __repr__(self):
        return '<Project %r>' % self.project_name

    def serialize(self):
        #
        return {'project_id': self.project_id, 'project_desc': self.project_desc, 'client_name': self.client_name,
                'client_phone': self.client_phone, 'project_status': self.project_status,
                'project_stack': self.project_stack, 'date': self.date,
                'client_email': self.client_email, 'max_members': self.max_members, 'project_name': self.project_name}


# class for the signing up to the project
class Signup(db.Model):
    """
    class for storing signup details
    """
    __tablename__ = 'singup'
    signup_id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, ForeignKey(
        "project.project_id"), nullable=False)
    signup_name = db.Column(db.String(100))
    signup_email = db.Column(db.String(100))
    signup_github_name = db.Column(db.String(100), nullable=True)

    # constructor of Signup
    def __init__(self, project_id, signup_name, signup_email, signup_github_name=None):
        """

        :param project_id:  int
        :param signup_name: str
        :param signup_email: str
        :param signup_github_name: str
        """
        self.project_id = project_id
        self.signup_name = signup_name
        self.signup_email = signup_email
        self.signup_github_name = signup_github_name

    def __repr__(self):
        return '<Signup %r>' % self.signup_name

    def serialize(self):
        return {'signup_id': self.signup_id, 'project_id': self.project_id, 'signup_name': self.signup_name,
                'signup_email': self.signup_email, 'signup_github_name': self.signup_github_name}


# class for voting for the project with the member like
class Vote(db.Model):
    __tablename__ = 'Vote'
    voter_id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, ForeignKey(
        "project.project_id"), nullable=False)
    voter_name = db.Column(db.String(100))
    voter_email = db.Column(db.String(100))
    voter_slack_name = db.Column(db.String(100), nullable=True)

    def __init__(self, project_id, voter_name, voter_email, voter_slack_name=None):
        """

        :param project_id: int
        :param voter_name: str
        :param voter_email: str
        :param voter_slack_name: str
        """
        self.project_id = project_id
        self.voter_name = voter_name
        self.voter_email = voter_email
        self.voter_slack_name = voter_slack_name

    def __repr__(self):
        return '<Vote %r>' % self.voter_name

    def serialize(self):
        return {'voter_id': self.voter_id, 'project_id': self.project_id, 'voter_name': self.voter_name,
                'voter_email': self.voter_email, 'voter_slack_name': self.voter_slack_name}


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


