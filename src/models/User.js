module.exports = {
    index: function(con, callback) {
        con.query("SELECT * FROM users", callback)
    },

    create: function(con, data, callback) {
        con.query(
            `INSERT INTO users SET
            name = '${data.name}',
            bio = '${data.bio}',
            profile_pic = '${data.profile_pic}' `,
            callback

        )
    },

    update: function(con, data, id, callback) {
        con.query(
            `UPDATE users SET
            name = '${data.name}'
            bio = '${data.bio}'
            profile_pic = '${data.profile_pic}'
            WHERE id = ${id}`,
            callback
        )
    },

    destroy: function(con, id, callback) {
        con.query(`DELETE from users WHERE id = ${id}`, callback)
    }



}