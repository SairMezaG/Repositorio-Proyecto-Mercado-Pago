const RegistroModel = require('../models/NoSQL/Registro'); // Verifica que esta ruta sea correcta

const getItems = async (req, res) => {
    try {
        const data = await RegistroModel.find({});
        res.send({ data });
    } catch (error) {
        res.status(500).send({ message: 'Error al obtener los items', error });
    }
};

const createItem = async (req, res) => {
    try {
        const { body } = req;
        console.log(body);
        const data = await RegistroModel.create(body);
        res.status(201).send({ data });
    } catch (error) {
        res.status(400).send({ message: 'Error al crear el item', error });
    }
};

const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await RegistroModel.findByIdAndDelete(id);
        if (!data) {
            return res.status(404).send({ message: 'Item no encontrado' });
        }
        res.send({ message: 'Item eliminado exitosamente', data });
    } catch (error) {
        res.status(500).send({ message: 'Error al eliminar el item', error });
    }
};

const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const data = await RegistroModel.findByIdAndUpdate(id, body, { new: true, runValidators: true });
        if (!data) {
            return res.status(404).send({ message: 'Item no encontrado' });
        }
        res.send({ message: 'Item actualizado exitosamente', data });
    } catch (error) {
        res.status(500).send({ message: 'Error al actualizar el item', error });
    }
};

module.exports = {
    getItems,
    createItem,
    deleteItem,
    updateItem
};
