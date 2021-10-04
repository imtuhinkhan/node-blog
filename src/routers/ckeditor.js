const express = require('express')
const router = new express.Router()
var multer  =   require('multer');
var fs = require('fs')
var path = require('path')
var crypto = require('crypto');

var storage = multer.diskStorage({
  destination: './src/public/images/blog/',
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err)
      cb(null, Math.floor(Math.random()*9000000000) + 1000000000 + path.extname(file.originalname))
    })
  }
})
var upload = multer({ storage: storage });

router.get('/files', function (req, res) {
    const images = fs.readdirSync('./src/public/images/blog/')
    var sorted = []
    for (let item of images){
        if(item.split('.').pop() === 'png'
        || item.split('.').pop() === 'jpg'
        || item.split('.').pop() === 'jpeg'
        || item.split('.').pop() === 'svg'){
            var abc = {
                  "image" : "/src/public/images/blog/"+item,
                  "folder" : '/src/public/images/blog/'
            }
            sorted.push(abc)
        }
    }
    res.send(sorted);
  })

  router.post('/upload', upload.array('flFileUpload', 12), function (req, res, next) {
      res.redirect('back')
  });

  router.post('/delete_file', function(req, res, next){
  	var url_del = './' + req.body.url_del
    console.log(url_del)
  	if(fs.existsSync(url_del)){
  		fs.unlinkSync(url_del)
  	}else{
          console.log(123)
      }
  	res.redirect('back')
  });

  module.exports = router
