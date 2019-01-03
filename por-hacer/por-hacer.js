const fs  = require('fs');

let listadoPorHacer = [];


const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, err => {
        if(err) throw new Error('No se pudo grabar', err);
    });
}
const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    }catch(err){
        listadoPorHacer = [];
    }
    
    // Como estamos del lado del servidor al cargar el archivo
    // no es necesario espesificar
    // console.log(listadoPorHacer);

}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        // descripcion: descripcion 
        // Nota: en el ecm6 los parametros no deben reasignarse
        completado: false

    };
    // 
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
    // ´para retornar lo que se acaba de crear
}
const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}
const actualizar = (descripcion, completado) => {
    cargarDB();
    // con findIndex(callback) recorre cada uno de loss elementos
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion
    );
    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }

}
const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);
    if(index >= 0){
        listadoPorHacer.splice(index,1);
        guardarDB();
        return true;
    }else{
        return false;
    }
    // let nuevolistado = listadoPorHacer.filter( tarea => {
    //     return tarea.descripcion !== descripcion;
    // });
    // if(listadoPorHacer.length === nuevolistado.length) {
    //     return false;
    // }else{
    //     listadoPorHacer = nuevolistado;
    //     guardarDB();
    //     return true;
    // }
    // se realiza lo mismo pero creando un nuevo listado
}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}