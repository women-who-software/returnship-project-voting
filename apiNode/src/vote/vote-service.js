const VoteService = {
  getAll(knex) {
    return knex.select("*").from("vote").orderBy("voter_email", "asc");
  },
  getById(knex, id) {
    return knex.select("*").from("vote").where("vote_id", id).first();
  },
  getAllProjectVotes(knex, project_id) {
    return knex
      .select("*")
      .from("vote")
      .where("project_id", project_id)
      .orderBy("voter_email", "asc");
  },
  updateVote(knex, id, updateFields) {
    return knex("vote").where({ vote_id: id }).update(updateFields);
  },
  insertVote(knex, newVote) {
    return knex
      .insert(newVote)
      .into("vote")
      .returning("*")
      .then((rows) => {
        return rows[0];
      });
  },
  deleteVote(knex, vote_id) {
    return knex("vote").where({ vote_id }).delete();
  },
};

module.exports = VoteService;
