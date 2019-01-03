const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
    
}
const completado = {
    alias: 'c',
    default: 'true',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
            
        
    })
    .command('borrar', 'Bora una tarea antes creada', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}