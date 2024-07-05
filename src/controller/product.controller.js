const productController = {


    getProduct(req, res) {
        res.status(200).json({ message: "Get product is working!" })
        // res.send("This is product!")
    }
}

module.exports = productController;