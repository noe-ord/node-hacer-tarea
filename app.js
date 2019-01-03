// const {argv} = require('yargs') ;
const colors = require('colors');
const {argv} = require('./config/yargs');
// 

// console.log(argv);
const {crear} = require('./por-hacer/por-hacer');
const {getListado} = require('./por-hacer/por-hacer')
const {actualizar} = require('./por-hacer/por-hacer');
const {borrar} = require('./por-hacer/por-hacer') ;
let comando = argv._[0];
switch(comando){
    case 'crear':
        console.log("Crear una tarea");
        let tarea = crear(argv.descripcion);
       
        console.log(tarea);
    break;
    case 'listar':
        let listado = getListado();
        for (let tarea of listado){
            console.log(colors.green('===Por Hacer==='));
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('================'.green);
        }
        console.log("Listar las tareas");
    break;
    case 'actualizar': 
        let act = actualizar(argv.descripcion, argv.completado);
        console.log(act);
    break;
    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;
    default: 
        console.log("Comando no reconocido");

}