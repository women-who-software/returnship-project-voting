const AdminService = {
  getAll(knex) {
    return knex.select("*").from("admin").orderBy("admin_name", "asc");
  },
  getByName(knex, name) {
    return knex.select("*").from("admin").where("admin_name", name).first();
  },
  updateAdmin(knex, name, updateFields) {
    return knex("admin")
      .where({ admin_name: name })
      .update(updateFields);
  },
  insertAdmin(knex, newAdmin) {
    return knex
      .insert(newAdmin)
      .into("admin")
      .returning("*")
      .then((rows) => {
        return rows[0];
      });
  },
  deleteAdmin(knex, admin_name) {
    return knex("admin").where({ admin_name }).delete();
  },
};

module.exports = AdminService;
