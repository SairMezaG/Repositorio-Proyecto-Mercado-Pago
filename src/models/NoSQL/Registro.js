const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const RegistroSchema = new mongoose.Schema({
    nombreCompleto: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
    
},

{
    timestamps: { createdAt: 'fechaHoraCreacion', updatedAt: 'fechaHoraActualizacion' },
    versionKey: false
});

// Método para cifrar la contraseña antes de guardar (Consultar mas sobre esto)
RegistroSchema.pre('save', async function(next) {
    if (this.isModified('password') || this.isNew) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

// Método para comparar la contraseña ingresada con la almacenada (Consultar mas sobre esto)
RegistroSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};


module.exports = mongoose.model("Registro", RegistroSchema); //Usuarios es el nombre de una coleccion en la BDMesaDeServicios



