import * as app from "./app";
import * as math from "./math";
test("calls math.add", () => {
  // En la variable originalAdd, se asigna la funcion o propiedad matematica add, 
  // la cual se encarga de realizar la operacion de suma
  const originalAdd = math.add;
  // Simulamos la funcion que previamente a sido declarada en originalAdd
  math.add = jest.fn(originalAdd);
  // Probamos el metodo doAdd pasando como parametros 1 y 2, y lo comparamos o validamos
  // para comprobar que el valor resultante sea igual a 3. Se asegura ademas de que la
  // funcion simulada contenga argumentos especificos
  expect(app.doAdd(1, 2)).toEqual(3);
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // Acepta la funcion add para utilizarse como implementacion
  // se implementa una funcion llamada mock y compara si el metodo doADD
  // Realiza una funcion simulada con los argumentos 1 y 2
  math.add.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // El valor obtenido en la variable originalAdd es asignado a la funcion matematica add
  // se compara si los argumentos 1 y 2, dan como resultado el valor con el que se esta 
  // comparando en este caso 3
  math.add = originalAdd;
  expect(app.doAdd(1, 2)).toEqual(3);
});