const Poduct = require("../model/productModel.js") // new


const getAll = async (req, res) => {

    try {
        let alldata = await Poduct.find({})
        res.send(alldata)
    } catch (error) {
        res.send(error)

    }
}
const getById = async (req, res) => {
    try {
        const { id } = req.params

        let single = await Poduct.findById({ _id: id })
        res.send(single)
    } catch (error) {
        res.send(error)

    }
}
const deleteById = async (req, res) => {
    try {
        const { id } = req.params

        let deleted = await Poduct.findOneAndDelete({ _id: id })
        res.send(deleted)
    } catch (error) {
        res.send(error)

    }
}

const patchById = async (req, res) => {
    try {
        const { id } = req.params

        let edited = await Poduct.findOneAndUpdate({ _id: id }, req.body)
        res.send(edited)
    } catch (error) {
        res.send(error)

    }
}

const puthById = async (req, res) => {
    try {
        const { id } = req.params

        let replaced = await Poduct.findOneAndReplace({ _id: id }, req.body)
        res.send(replaced)
    } catch (error) {
        res.send(error)

    }
}

const postData = async (req, res) => {
    try {
        let newProd = new Poduct(req.body)
        newProd.save()
        res.send(newProd)
    } catch (error) {
        res.send(error)
    }
}

module.exports = { getAll, getById, deleteById, patchById, puthById, postData }