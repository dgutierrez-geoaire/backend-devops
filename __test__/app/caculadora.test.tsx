import { describe, expect, test } from "@jest/globals";
import { suma, restar, multiplicacion, division, potencia, factorial, operar } from "../../src/app/calculadora";


describe("tets", () => {

    test("probar suma", () => {

        let a: any = "1";
        expect(suma(1,1)).toBe(2);
        expect(suma(a,1)).toBeNaN();

        a = undefined;
        expect(()=> {suma(a,1)}).toThrow("No se puede sumar indefinidos")

    })

    test("probar resta", () => {

        let a: any = "1";
        expect(restar(1,1)).toBe(0);
        expect(restar(a,1)).toBeNaN();

        a = undefined;
        expect(()=> {restar(a,1)}).toThrow("No se puede restar indefinidos")

    })

    test("probar multiplicacion", () => {

        let a: any = "1";
        expect(multiplicacion(1,1)).toBe(1);
        expect(multiplicacion(a,1)).toBeNaN();

        a = undefined;
        expect(()=> {multiplicacion(a,1)}).toThrow("No se puede multiplicar indefinidos")

    })

    test("probar division", () => {

        let a: any = "1";
        expect(division(1,1)).toBe(1);
        expect(division(a,1)).toBeNaN();

        a = undefined;
        expect(()=> {division(a,1)}).toThrow("No se puede dividir indefinidos")

        expect(()=> {division(10,0)}).toThrow("No se puede dividir por 0")

    })

    test("probar potencia", () => {

        let a: any = "1";
        expect(potencia(1,1)).toBe(1);
        expect(potencia(a,1)).toBeNaN();

        a = undefined;
        expect(()=> {potencia(a,1)}).toThrow("No se puede hacer potencia con indefinidos")

       

    })

    test("probar factorial", () => {

        let a: any = "1";
        expect(factorial(1)).toBe(1);
        expect(factorial(a)).toBeNaN();

        a = undefined;
        expect(()=> {factorial(a)}).toThrow("No se puede hacer factoriales con indefinidos")

       

    })

    test("probar operar", () => {

        let a: any = "1";
        expect(operar("suma",1,1)).toBe(2);
        expect(operar("resta",1,1)).toBe(0);
        expect(operar("multiplicacion",1,1)).toBe(1);
        expect(operar("division",1,1)).toBe(1);
        expect(operar("potencia",1,1)).toBe(1); 
        expect(operar("factorial",5,1)).toBe(120);
        

    })

  


});