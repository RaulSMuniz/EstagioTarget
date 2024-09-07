/*
Considerando que os interruptores são 1, 2 e 3, correspondendo às lampadas 1, 2 e 3,
eu ligaria o interruptor[1] por um certo tempo e então desligaria ele.
Após isso, ligaria o interruptor[2] e o deixaria ligado. Então, eu utilizaria a
minha primeira ida à sala contendo alguma lâmpada e verificaria três coisas:
1. Se a lampada estiver desligada e quente, significa que o interruptor[1] encontrou a lampada[1];
2. Se a lampada estiver desligada e fria, significa que o interruptor[3] encontrou a lampada[3]
P.S: Isso ocorre pois o interruptor[2] está ligado, o que significa que apenas uma lampada ligada 
corresponde a ele.
3. Se a lampada estiver ligada, significa que o interruptor[2] encontrou a lampada[2].

Então, eu usaria minha segunda ida para outra sala contendo outra lampada e verificaria essas 
três coisas novamente. Isso efetivamente garantiria que eu saiba qual interruptor corresponde a cada
lampada.
*/