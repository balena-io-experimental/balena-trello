'use strict';

const _       = require('lodash')
const Promise = require('bluebird')
const rp      = require('request-promise')

const board      = process.env.TRELLO_BOARD
const listFilter = process.env.TRELLO_LIST
const apiKey     = process.env.TRELLO_API_KEY
const oauthToken = process.env.TRELLO_OAUTH_TOKEN

if (!board) {
  throw new Error('Missing required env var TRELLO_BOARD!')
}

if (!listFilter) {
  throw new Error('Missing required env var TRELLO_LIST!')
}

if (!apiKey) {
  throw new Error('Missing required env var TRELLO_API_KEY!')
}

if (!oauthToken) {
  throw new Error('Missing required env var TRELLO_OAUTH_TOKEN!')
}

const sanitize = (input) => {
  return input.replace(/#(devops|process)/i, '')
}

const main = () => {
  rp({
    uri: `https://api.trello.com/1/boards/${board}/lists`,
    method: 'get',
    json: true,
    qs: {
      key: apiKey,
      token: oauthToken,
      cards: 'all'
    }
  })
  .promise()
  .filter(list => list.name == listFilter)
  .then(([list]) => list.cards)
  .mapSeries(card => {
    console.log('* ', sanitize(card.name))

    return card
  })
}

main()

