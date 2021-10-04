const express = require('express')
const router = new express.Router()
const frontController = require('../controllers/frontController');
const commonData = require('../middleware/front')


router.get('/',commonData,frontController.Homepage)
router.get('/news/details/:id',commonData,frontController.singleBlog)
router.get('/category/:id',commonData,frontController.categoryWiseBlog)
router.get('/search',commonData,frontController.search)

router.get('/test',frontController.test)

module.exports = router