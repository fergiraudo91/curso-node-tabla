const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (base = 5, list, hasta = 10) => {
    try {
        let salida = ""
    
        for (let i = 1; i <= hasta; i++) {
            let res = base * i
            salida += `${base} X ${i} = ${res}\n`;
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        if(list){
            console.log(salida);
        }
    
        return `tabla-${base}.txt`;
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}