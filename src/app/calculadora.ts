function operar(operacion: string = "", a: number, b: number) {
    if (operacion === 'suma') {
        return suma(a, b);
    } else if (operacion === 'resta') {
        return restar(a, b);
    }else if (operacion === 'multiplicacion') {
        return multiplicacion(a, b);
    }else if (operacion === 'division') {
        return division(a, b);
    }else if (operacion === 'potencia') {
        return potencia(a, b);
    }else if (operacion === 'factorial') {
        return factorial(a);
    }
}

function suma(a: number, b: number) { //a = 1 , b=2

    if (a === undefined || b === undefined) {
        throw new Error("No se puede sumar indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a + b;
}

function restar(a: number, b: number) {
    if (a === undefined || b === undefined) {

        throw new Error("No se puede restar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a - b;
}

function multiplicacion(a: number, b: number) {
    if (a === undefined || b === undefined) {

        throw new Error("No se puede multiplicar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a * b;
}

function division(a: number, b: number) {
    if (a === undefined || b === undefined) {

        throw new Error("No se puede dividir indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    if (b == 0){
        throw new Error("No se puede dividir por 0");
    }

    return a / b;
}

function potencia(a: number, b: number) {
    if (a === undefined || b === undefined) {

        throw new Error("No se puede hacer potencia con indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

   

    return a ** b;
}

function factorial(a: number) {
    if (a === undefined) {

        throw new Error("No se puede hacer factoriales con indefinidos");
    }
    if (typeof a !== 'number') {
        return NaN;
    }
    var num = 1;
    for (var i = 1; i<=a  ; i++) {
         
        num = num * i; 
        
       
      }

    return num;
}

export { suma, operar, restar, multiplicacion, division, potencia, factorial};