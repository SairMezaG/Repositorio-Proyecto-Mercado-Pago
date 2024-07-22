const mongoose = require('mongoose');

// Define el esquema para los elementos del menú
const MenuItemSchema = new mongoose.Schema({
    icono: {
        type: String, 
        required: true
    },
    titulo: {
        type: String,
        required: true
    }
}, { _id: false }); 


const PaginaDeInicioSchema = new mongoose.Schema({
    
    searchHint: {
        type: String,
        default: 'Buscar producto'
    },
    menu: [MenuItemSchema], 
    bottomNavItems: [{
        icon: {
            type: String, 
            required: true
        },
        label: {
            type: String,
            required: true
        }
    }],
    bottomNavColor: {
        type: String, 
        default: '#007BFF'
    }
}, {
    timestamps: { createdAt: 'fechaHoraCreacion', updatedAt: 'fechaHoraActualizacion' },
    versionKey: false
});

module.exports = mongoose.model('PaginaDeInicio', PaginaDeInicioSchema);





