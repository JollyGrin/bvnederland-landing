/* This file cleans out all compiled markdown files in visie and visie/* */
const fs = require('fs')
var points = fs.readdirSync('./pages/visie')

try {
  console.log('to remove:')
  for (var i = 0; i < points.length; i++) {
    var point = points[i]
    console.log(point)
    fs.unlinkSync('./pages/visie/' + point)
  }
} catch (e) {
  console.log(e)
}

var pages = fs.readdirSync('./pages/')
try {
  for (var pagei = 0; pagei < pages.length; pagei++) {
    var page = pages[pagei]
    if (page !== 'visie.jsx') {
      continue
    }
    console.log(page)
    fs.unlinkSync('./pages/' + page)
  }
} catch (e) {
  console.log(e)
}
