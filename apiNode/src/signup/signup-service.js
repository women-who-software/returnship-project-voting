const SignupService = {
  getAll(knex) {
    return knex.select("*").from("signup").orderBy("signup_id", "asc");
  },
  getById(knex, id) {
    return knex.select("*").from("signup").where("signup_id", id).first();
  },
  getAllProjectSignups(knex, project_id) {
    return knex
      .select("*")
      .from("signup")
      .where("project_id", project_id)
      .orderBy("signup_name", "asc");
  },
  updateSignup(knex, id, updateFields) {
    return knex("signup")
      .where({ signup_id: id })
      .update(updateFields);
  },
  insertSignup(knex, newSignup) {
    return knex
      .insert(newSignup)
      .into("signup")
      .returning("*")
      .then((rows) => {
        return rows[0];
      });
  },
  deleteSignup(knex, signup_id) {
    return knex("signup").where({ signup_id }).delete();
  },
};

module.exports = SignupService;
