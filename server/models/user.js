const mongoose = require('mongoose')
const Shema = mongoose.Schema;

const userSchema = new Shema({
    documento: String,
    nombres: String,
    apellidos: String,
    fecha_inicio: Date,
    fecha_fin: Date,
    horario_inicio_turno: Date,
    horario_fin_turno: Date,
    horas_extras : [{
        inicio_hora_extra: Date,
        fin_Hora_extra: Date,
        motivo_hora_extra : String, 
    }]
});

module.exports = mongoose.model('user',userSchema, 'users')

/*
Documento 2. Nombres y apellidos 3. Fecha inicio 4. Fecha fin 5. Horario inicio de turno. 6. Horario fin de turno. 7. Horario Inicio hora extra 8. Horario fin Hora extra. 9. Motivo hora extra 
* */