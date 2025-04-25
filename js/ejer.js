const bienvenida = 'Bienvenido a a la calculadora de indice de masa corporal';
const resultado = 'Su indice de masa corporal es:'
const resultgenero = 'El total de '
const mensaje = 'Basandonos en ese resultado su estado dentro del imc es:';
const mensaje2 = 'Algo salió mal'
const mensajesalir = 'Bye :)'
alert(bienvenida);
let running = true;
let mujeres = 0;
let hombres = 0;
let canhombre = 0;
let canMujer = 0;
let promedad = 0;
let sumaedad = 0;
let mujersobrepeso = 0;
let hombresobrepeso = 0;
let menores = 0;
let totalperso = 0;
let persona = [];
let personainfo = [[]];
do {
    let menu = prompt('Opciones de Menu\n 1. Registar Paciente.\n 2. Informe total de Hombres y Mujeres registrados.\n 3. Informe del promedio de edad de Hombres y Mujeres registrados.\n 4. Informe total de menores registrados.\n 5. Informe de Hombres y Mujeres con sobre peso.\n 6. Informe del paciente con el IMC mas bajo.\n 7. Salir.')
    switch (menu){
        case '1':
            let id = prompt('Ingrese su ID:')
            let nombre = prompt('Ingrese su nombre');
            let edad = parseInt(prompt('Ingrese su edad'));
            let genero = prompt("Ingrese su genero\n: 1.Hombre\n 2.Mujer\n");
            let peso = prompt('ingrese su peso en kg');
            let estatura = prompt ('ingrese su estatura en m');
            let imc = peso / (estatura ** 2);
            sumaedad = sumaedad + edad;
            if (genero === '1'){
                canhombre = canhombre +=1;
            } 
            if (genero === '2'){
                canMujer = canMujer +=1;
            } 
            totalperso = canMujer + canhombre;
            promedad = sumaedad/totalperso;
            alert(`${resultado}${imc}`);
            persona.push({id, nombre, edad, genero, peso, estatura, imc});
            if (imc < 18.5){
                alert(`${mensaje} peso inferior al normal`);
            } else if (imc >= 18.5 && imc <= 24.9 ){
                alert(`${mensaje} normal`);
            } else if (imc >= 25 && imc <= 29.9){
                alert(`${mensaje} Peso superior al normal`);
            } else if (imc >30){
                alert(`${mensaje} obesidad`);
            } else{
                alert(mensaje2)}
            if (genero == '1'){
                hombres += 1;
            }else if (genero == '2'){
                mujeres +=1;
            }
            if (edad < 18){
                menores += 1;
            }
            if (genero == '1' && imc >= 25){
                hombresobrepeso += 1;
            }else if (genero == '2' && imc >= 25){
                mujersobrepeso +=1;
            }
            personainfo[0].push(persona);
            console.log(personainfo);
            break;
        case '2':
            alert(`${resultgenero}Hombres ${hombres} y Mujeres ${mujeres}`)
            break;
        case '3':
            alert(`El promedio de edad es ${promedad}`)
        case '4':
            alert(`El total de menores registrados es ${menores}`)
            break;
        case '5':
            alert(`El total de Hombres con sobre peso es${hombresobrepeso} y Mujeres con sobre peso es \n ${mujersobrepeso}`)
            break;
        case '6':
            let pacientebajoImc = persona[0];
            for (let i = 1; i < persona.length; i++)
                if (persona[i].imc < pacientebajoImc.imc){
                pacientebajoImc = persona[i]
                };
            alert(`${pacientebajoImc}\nID: ${pacientebajoImc.id}\nNombre: ${pacientebajoImc.nombre}\nEdad: ${pacientebajoImc.edad}\nGenero: ${pacientebajoImc.genero}\nIMC: ${pacientebajoImc.imc}`)
            break;
        case '7':
            alert(mensajesalir)
    }
}while (running !== "7");
