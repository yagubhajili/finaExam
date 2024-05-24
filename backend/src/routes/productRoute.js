const express = require("express")
const router = express.Router()
const productController = require('../controller/productController.js')

// Get all posts
router.get("/products", productController.getAll)
router.get("/products/:id", productController.getById)
router.post("/products", productController.postData)
router.patch("/products/:id", productController.patchById)
router.put("/products/:id", productController.puthById)
router.delete("/products/:id", productController.deleteById)



module.exports = router