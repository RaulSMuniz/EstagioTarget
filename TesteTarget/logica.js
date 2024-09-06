let a = [1, 3, 5, 7]; // pergunta A
let b = [2, 4, 8, 16, 32, 64]; // pergunta B
let c = [0, 1, 4, 9, 16, 25, 36]; // pergunta C
let d = [4, 16, 36, 64]; // pergunta D
let e = [1, 2, 3, 5, 8]; // pergunta E
let f = [2, 10, 12, 16, 17, 18, 19]; // pergunta F

/* Para a pergunta A
A sequência utiliza uma lógica de números impares, o que significa que o próximo número é 9 (próximo número impar)
*/
a.push(9);

/* Para a pergunta B
A sequência utiliza uma lógica de números que são potência de dois. Isso significa que o próximo número é 128 (o dobro de 64)
*/
b.push(128);

/* Para a pergunta C
A sequência utiliza uma lógica de potência de dois, o que significa que o próximo número é 49 (7²)
*/
c.push(49);

/* Para a pergunta D
A sequência utiliza uma lógica do quadrado de números pares, o que significa que o próximo número é 100 (10 * 10);
*/
d.push(100);

/* Para a pergunta E 
A sequência utiliza a sequência de Fibonacci, o que significa 
que o próximo valor é igual ao último valor + o penúltimo valor. Isso significa que o próximo número é 13 (8 + 5)
*/
e.push(13);

/* Para a pergunta F 
A sequência não aparenta utilizar uma lógica matemática como as anteriores, mas sim outro tipo.
O que eu pude deduzir é que segue a lógica de: 2 por escrito tem a inicial D, 10 tem a inicial D, etc.
Isso significa que após 19, o próximo número a ter essa lógica é 200 (duzentos).
*/
f.push(200);
console.log(a + '\n' 
    + b + '\n' 
    + c + '\n' 
    + d + '\n' 
    + e + '\n' 
    + f);


