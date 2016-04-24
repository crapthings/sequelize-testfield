'use strict'

import _ from 'lodash'

import faker from 'faker'

import { sql, Users, Posts } from './models'

import feathers from 'feathers'

// import rest = require('feathers-rest');

const server = feathers()

sql.sync({
	force: true
}).then(function () {

	_.times(10, async n => {

		let user = await Users.create({
			username: faker.internet.userName()
		})

		user.createPost({
			title: faker.lorem.sentence()
		})
	})

	server.use('/users', async function (req, res, next) {
		let results = await Users.findAll({ include: Posts })
		results && res.json(results)
	})

	server.listen(5000)

})