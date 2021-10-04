const express = require('express')
const router = new express.Router()
const apiController = require('../controllers/ApiController');
const commonData = require('../middleware/front')


router.get('/home',commonData,apiController.Homepage)
router.get('/news/details/:id',commonData,apiController.singleBlog)
router.get('/category/:id',commonData,apiController.categoryWiseBlog)
router.get('/search',commonData,apiController.search)

router.get('/test',apiController.test)

module.exports = router