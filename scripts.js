function validar(operacion) {
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;
    var numero3 = document.getElementById('numero3').value;

    if (numero1 > numero2) {
        resultado = parseInt(numero1) * parseInt(numero2) * parseInt(numero3);
        document.getElementById('resultado').value = resultado;
        alert('Como el numero 1 es mayor al numero 2, se han multiplicado los 3 numeros, el resultado es: ')

    }
    if (numero2 === 0) {
    resultado = parseInt(numero1) - parseInt(numero3);
    document.getElementById('resultado').value = resultado;
    alert('Como el numero 2 es 0, entonces se han restado el valor 1 y 3')
    }

    if (numero1 === numero2) {
        resultado = parseInt(numero1) + parseInt(numero2) + parseInt(numero3)
        document.getElementById('resultado').value = resultado;
        alert('Como el numero 1 y 2 son iguales, se han sumado los 3 valores')
    }

}