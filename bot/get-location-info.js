'use strict'

const viberTemplate = require('claudia-bot-builder').viberTemplate
const laptopFriendly = require('../data/laptopfriendly.json')

module.exports = function getLocationInfo(city, slug) {
  var location = laptopFriendly.locations[city].find(location => location.slug === slug)
  return [
    `${location.name}`,
    `${location.address}, Belgrade`,
    new viberTemplate.Location(location.lat, location.lng)
      .addReplyKeyboard(true)
        .addKeyboardButton(`<font color="#FFFFFF"><b>Info</b></font>`, `INFO|${city}|${slug}`, 6, 1, {
          TextSize: 'large',
          BgColor: '#f6d95e'
        })
        .addKeyboardButton(`<font color="#FFFFFF"><b>Price</b></font>`, `PRICE|${city}|${slug}`, 6, 1, {
          TextSize: 'large',
          BgColor: '#f6d95e'
        })
        .addKeyboardButton(`<font color="#FFFFFF"><b>Website</b></font>`, location.link, 6, 1, {
          TextSize: 'large',
          BgColor: '#f6d95e'
        })
        .addKeyboardButton(`<font color="#FFFFFF"><b>Back</b></font>`, `CITY|${city}`, 6, 1, {
          TextSize: 'large',
          BgColor: '#343434'
        })
      .get()
  ]
}