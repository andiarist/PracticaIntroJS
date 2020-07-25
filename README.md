# Práctica del módulo Introducción a JavaScript

**01_principal.js**

Leemos el fichero de datos y lo pasamos a un array.

Actuamos sobre cada elemento de nuestro array de datos, escribiendo el resultado en otro array.

Escribimos el resultado de la conversión en dos nuevos ficheros, uno síncrono y otro asíncrono.

**02_que_hacer.js**

Llamamos a la función comprobarTipo para saber si el elemento es árabe, romano o un dato que no se puede convertir.

Según el resultado que obtenemos, llamamos a la función de conversión correspondiente.

La función devuelve el dato convertido si era válido, o false si erá inválido.

**03_comprobaciones.js**

Declaramos varias funciones:

1. tieneNumeros para comprobar si un texto tiene números del 0 al 9.

2. tieneLetras para comprobar si un texto tiene letras válidas una cadena de números romanos.

3. comprobarTipo para hacer la evaluación de nuestro dato: 

Si es solo número, que este sea mayor que 0 y menor que 3999.

Si es solo letras, lo pasamos a un array y llamamos a la función validar romano, para comprobar que dichas letras están dispuestas de forma que son un número romano válido.

**04_validador_romano.js**

Declaramos varias funciones:

1. valoresRepetidos para comprobar que las letras repetidas cumplen las reglas establecidas.

2. condicionVLD si cuando tenemos una V, L o D, esta cumple la regla de que la siguiente no puede ser de mayor valor.

3. esRomano es nuestro validador. Evaluamos todos los elementos del array. Si en algún momento detecta que no se está cumpliendo las reglas de los números romanos, para el bucle. 

Devuelve el valor de flag, que será 1 si el array es correcto, y 0 si el array no es un número romano.

**05_conversor_a_arabe.js**

Función que recibe el array de números romanos y lo convierte en árabe.

Devuelve el número.

**06_conversor_a_romano.js**

Función que recibe un número válido y lo convierte en un array del equivalente en letras romanas.

Devuelve un string de número romano válido.