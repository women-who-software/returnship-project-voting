const ProjectService = {
  getAll(knex) {
    return knex.select("*").from("project").orderBy("project_id", "asc");
  },
  getById(knex, id) {
    return knex.select("*").from("project").where("project_id", id).first();
  },
  updateProject(knex, id, updateProjectFields) {
    return knex("project")
      .where({ project_id: id })
      .update(updateProjectFields);
  },
  insertProject(knex, newProject) {
    return knex
      .insert(newProject)
      .into("project")
      .returning("*")
      .then((rows) => {
        return rows[0];
      });
  },
  deleteProject(knex, project_id) {
    return knex("project").where({ project_id }).delete();
  },
};

module.exports = ProjectService;
