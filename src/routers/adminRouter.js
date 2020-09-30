const express = require('express')
const router = new express.Router()
const adminController = require('../controllers/adminController');
const loginController = require('../controllers/loginController');
const categoryController = require('../controllers/categoryController');
const blogController = require('../controllers/blogController');
const multer = require('multer')
const auth = require('../middleware/auth')


const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './src/public/images/blog/featured');
    },
    filename: (req, file, cb) => {
      cb(null,  Date.now() + '-' + file.originalname);
    }
  });

  const profilImage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './src/public/images/profile');
    },
    filename: (req, file, cb) => {
      cb(null,  Date.now() + '-' + file.originalname);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

const upload = multer({ storage: fileStorage, fileFilter: fileFilter }).single('image');
const uploadProfile = multer({ storage: profilImage, fileFilter: fileFilter }).single('uimage');
//login
router.get('/login',loginController.Loginpage)
router.post('/login',loginController.postLogin)
router.get('/logout',auth,loginController.userLogout)


router.get('/dashboard',auth,adminController.adminDashboard)
//category route
router.get('/category',auth,categoryController.newsCategory)
router.post('/category',auth,categoryController.addCategory)
router.get('/category/edit/:id',auth,categoryController.editCategory)
router.get('/category/delete/:id',auth,categoryController.deleteCategory)

//blog route
router.get('/blogs',auth,blogController.allBlog)
router.get('/news/add',auth,blogController.newsForm)
router.post('/news/save',auth,upload,blogController.newsSave)
router.get('/blog/delete/:id',auth,blogController.deleteBlog)
router.get('/blog/edit/:id',auth,blogController.editBlog)


router.get('/media',auth,adminController.allMedia)
router.get('/ads',auth,adminController.googleAds)

//user name
router.get('/user',auth,adminController.allUsers)
router.get('/user/add',auth,adminController.addUsers)
router.post('/user/save',auth,uploadProfile,adminController.saveUsers)

module.exports = router