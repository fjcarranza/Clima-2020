const lugar = require('./Lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el Clima',
        demand: true
    }
}).argv;


console.log(`FER --- > ${argv.direccion}`);


/* let lug = {
    dir: 'Mendiolaza',
    lat: '-31.170000',
    lng: '-64.330002'
}; 
console.log(`¡¡¡ FER ---->>>>   ${lugar.getLugarLatLng.lat} !!!`);

clima.getClima(lug)
    .then(console.log)
    .catch(console.log)*/


const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas);
        return `El clima de "${coordenadas.direccion}" es de Temp "${temperatura}"`
    } catch (error) {
        return `No se pudo determinar el clima de "${direccion}"`;
    }
    //console.log(temperatura);

    //salida el clima de 
    // no se pudo determinar el clima de xxx
}
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);