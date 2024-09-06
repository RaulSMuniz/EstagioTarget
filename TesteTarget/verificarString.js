function verificarString(palavra){
    if (typeof palavra != 'string'){
        console.log("Escolha uma palavra.");
    } else{
        const tamanhoPalavra = palavra.length;
        let qtdDeA = 0;

        for (let i = 0; i < tamanhoPalavra; i++){
            if (palavra[i] === 'a' || palavra[i] === 'A'){
                qtdDeA++;
            }
        }
        console.log(`A quantidade de 'a' em ${palavra} é: ${qtdDeA}`);
    }
}
verificarString("Amar");
verificarString("Target");
