
from flask import Flask, request, redirect, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_migrate import Migrate
from sqlalchemy import ForeignKey
import json
from flask import Flask

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
#migrate = Migrate(app, db)

class Project(db.Model):
   project_id = db.Column(db.Integer, primary_key=True)
   project_name = db.Column(db.String(100))
   project_desc = db.Column(db.Text, nullable=True)
   client_name = db.Column(db.String(100), nullable=True)
   client_email = db.Column(db.String(100))
   client_phone = db.Column(db.Integer, nullable=True)
   project_status = db.Column(db.String(100), nullable=True)
   project_stack = db.Column(db.String(100), nullable=True)
   max_members = db.Column(db.Integer)
   date = db.Column(db.DateTime, default=datetime.utcnow, nullable=True)

   def __repr__(self):
       return '<Project %r>' % self.project_name

   def serialize(self):
       # todo в serialize указать все поля, даже если они пустые
       return {'client_email': self.client_email, 'max_members': self.max_members, 'project_name': self.project_name}


class Signup(db.Model):
   signup_id = db.Column(db.Integer, primary_key=True)
   project_id = db.Column(db.Integer, ForeignKey("project.project_id"), nullable=False)
   signup_name = db.Column(db.String(100), nullable=True)
   sign_up_github = db.Column(db.String(100), nullable=True)
   signup_email = db.Column(db.String(100))

@app.route('/api/')
def index():
   return "Home"
   def __repr__(self):
       return '<Signup %r>' % self.signup_name

@app.route('/api/projects')
def projects():
   return "Project list"

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
@app.route('/api/post-project', methods=['POST'])
def post_project():
   client_email = request.form['client_email']
   max_members = request.form['max_members']
   project_name = request.form['project_name']

@app.route('/api/details')
def details():
   return "Project details"

   # todo здесь добавить все поля

   project = Project(client_email=client_email, max_members=max_members, project_name=project_name)
@app.route('/api/vote')
def vote():
   return "Vote"

   try:
       db.session.add(project)
       db.session.commit()
       return redirect('/api/projects')
    except Exception as e:
       print(e)
       return "Nothing here. Try add the project again."

@app.route('/api/signup')
def signup():
   return "Sign up"

@app.route('/api/projects')
def all_projects():
   projects = Project.query.order_by(Project.project_id).all()
   return jsonify(list(map(lambda v: v.serialize(), projects)))

@app.route('/api/admin')
def admin():
   return "Admin"


if __name__ == "__main__":
   app.run(debug=True)
