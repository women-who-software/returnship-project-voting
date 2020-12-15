from flask import Flask, request, redirect, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_migrate import Migrate
from sqlalchemy import ForeignKey
import json
from __init__ import *


@app.route('/')
def index():
    return "Home"


#
#
@app.route('/api/post-project', methods=['POST'])
def post_project():
    client_email = request.form['client_email']
    max_members = request.form['max_members']
    project_name = request.form['project_name']

    # todo здесь добавить все поля

    project = Project(client_email=client_email, max_members=max_members, project_name=project_name)

    try:
        db.session.add(project)
        db.session.commit()
        return redirect('/api/projects')
    except Exception as e:
        print(e)
        return "Nothing here. Try add the project again."


@app.route('/api/projects')
def all_projects():
    projects = Project.query.order_by(Project.project_id).all()
    return jsonify(list(map(lambda v: v.serialize(), projects)))


if __name__ == "__main__":
    app.run(debug=True)
