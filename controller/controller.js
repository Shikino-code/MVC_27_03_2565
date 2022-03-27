const req = require('express/lib/request')
const res = require('express/lib/response')
const binarys = require('../model/binary')

module.exports.index = (req,res)=>{
    res.render('index.ejs')
}