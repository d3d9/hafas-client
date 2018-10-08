'use strict'

const {DateTime} = require('luxon')

const hour = 60 * 60 * 1000
const day = 24 * hour
const week = 7 * day

// next Monday 10 am
const createWhen = (timezone, locale) => {
	return DateTime.fromMillis(Date.now(), {
		zone: timezone,
		locale,
	}).startOf('week').plus({weeks: 1, hours: 10}).toJSDate()
}

module.exports = {
	hour, createWhen
}
