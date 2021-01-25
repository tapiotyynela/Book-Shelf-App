const express = require('express')

const BookCtrl = require('../controllers/book-controller')

const router = express.Router()

router.get('/books', BookCtrl.getBooks)
router.get('/book/:id', BookCtrl.getBookById)
router.post('/book', BookCtrl.createBook)
router.put('/book/:id', BookCtrl.updateBook)
router.delete('/book/:id', BookCtrl.deleteBook)


module.exports = router