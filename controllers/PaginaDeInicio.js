const PaginaDeInicioModel = require('../models/NoSQL/PaginaDeInicio'); 

// Obtener todos los documentos de PaginaDeInicio
const getItems = async (req, res) => {
    try {
        const data = await PaginaDeInicioModel.find({});
        res.send({ data });
    } catch (error) {
        res.status(500).send({ message: 'Error al obtener los items', error });
    }
};

// Crear un nuevo documento de PaginaDeInicio
const createItem = async (req, res) => {
    try {
        const { body } = req;
        const data = await PaginaDeInicioModel.create(body);
        res.status(201).send({ data });
    } catch (error) {
        res.status(400).send({ message: 'Error al crear el item', error });
    }
};

// Obtener un documento de PaginaDeInicio por ID
const getItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await PaginaDeInicioModel.findById(id);
        if (!data) {
            return res.status(404).send({ message: 'Item no encontrado' });
        }
        res.send({ data });
    } catch (error) {
        res.status(500).send({ message: 'Error al obtener el item', error });
    }
};

// Actualizar un documento de PaginaDeInicio por ID
const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const data = await PaginaDeInicioModel.findByIdAndUpdate(id, body, { new: true, runValidators: true });
        if (!data) {
            return res.status(404).send({ message: 'Item no encontrado' });
        }
        res.send({ message: 'Item actualizado exitosamente', data });
    } catch (error) {
        res.status(500).send({ message: 'Error al actualizar el item', error });
    }
};

// Eliminar un documento de PaginaDeInicio por ID
const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await PaginaDeInicioModel.findByIdAndDelete(id);
        if (!data) {
            return res.status(404).send({ message: 'Item no encontrado' });
        }
        res.send({ message: 'Item eliminado exitosamente', data });
    } catch (error) {
        res.status(500).send({ message: 'Error al eliminar el item', error });
    }
};

module.exports = {
    getItems,
    createItem,
    getItemById,
    updateItem,
    deleteItem
};
