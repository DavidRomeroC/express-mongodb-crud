const { Schema, model } = require('mongoose')

const taskSchema = new Schema(//creacion del esquema de la base de datos
    { 
        title: {
            type: String,// que sea de tipo string
            required: true,//que sea un dato requerido
            unique: true,//que sea unico en la base de datos
            trim: true,//para limpiar el texto de espacios extra
        },
        description: {
            type: String,
            required: true,
        },
        done: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true, //habilitar created at o updated at
        versionKey: false,//para que no añada la version en la respuesta del servidor
    }
);

module.exports = model('Task', taskSchema) //creacion de modelo de la base de datos