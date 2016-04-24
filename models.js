import SQL from 'sequelize'

const sql = new SQL('db', null, null, {
	dialect: 'sqlite',
	storage: './db.sqlite'
})

const Users = sql.define('users', {
	username: SQL.STRING
})

const Posts = sql.define('posts', {
	title: SQL.STRING
})

Users.hasMany(Posts)

Posts.belongsTo(Users)

export {
	sql,
	Users,
	Posts
}