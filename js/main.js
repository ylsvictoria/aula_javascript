
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigada por clicar");
}

function redirecionar(){
    window.open("https://dictionary.cambridge.org/pt/");
    window.location.href = "https://dictionary.cambridge.org/pt/"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    elemento.innerHTML = "Obrigada por passar o mouse";
    //alert("trocar texto");
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";

}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*function soma(n1, n2){
    return n1 + n2;
}
*/
/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
    

}
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/
//alert(soma(5, 10));

/*
function soma(n1, n2){
    return n1 + n2;
}


funcion setReplace(frase, nome, novo_nome){
    return frase.replace (nome, novo_nome)
}
/*


/*
var d = new Date();
alert(d.getMonth());
*/

/*
var count;
for(count=1; count <=5; count++){
    alert(count);
};
*/



/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/



//var frutas = [{nome:"maçã", cor:"vermelha"} , {nome:"uva", cor:"roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);


/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/


//var lista = ["maçã" , "pêra" , "laranja"];
//lista.push("uva");
//lista.pop()
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));


//var nome = "Victoria Souza ";
//var idade =  25;
//alert(nome + "tem " + idade + " anos");