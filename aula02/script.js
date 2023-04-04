function validar(){
    var valor = document.getElementById("txtValor").value;
    var infoP = document.getElementById("info");
    if(valor == ""){
        infoP.innerHTML = "O campo deve ser preenchido!";
        return false;
    }else{
        if(isNaN(valor)){ //isNaN = is Not a Number
            infoP.innerHTML = "O campo deve ser um número!";
            return false;
        }else{
            if(valor > 0 && valor < 11){
                return true;
            }else{
                infoP.innerHTML = "Valor não permitido!";
                return false;
            }
        }
    }
}

function lerObjeto(){
    var carro = {modelo : "Doblo", ano : 2006};
    var pessoa = {
        nome : "Maria",
        idade : 25,
        tem_filhos : true,
        altura : 1.80,
        endereco : null,
        veiculo : carro,
        filhos : [{nome : "Carlos", idade : 6}, {nome : "Julia", idade : 4}],
        formacao : [2010, 2017, 2022],
        imprimir : function(){
            texto = this.nome + " - idade: " + this.idade + " - carro: " + this.veiculo.modelo;
            return texto;
        }
    }; //duas formas de escrever um objeto, meramente visual
    document.getElementById("divObjeto").innerHTML = pessoa.imprimir()
}

//Exercício: Criar o objeto retangulo com os atributos "largura" e "altura" que deve conter um método que calcula
//a área do retagundo. Criar em HTML dois campos para inserir os valores de largura e altura.
//Imprimir o resultado usando um botão "Calcular".

function areaRetangulo(){
    var altura = document.getElementById("vAltura").value;
    var largura = document.getElementById("vLargura").value;
    var area = altura * largura;
    var retangulo = {
        alturaR : altura,
        larguraR : largura,
        areaR : area,
        imprimirR : function(){
            text = "Altura: " + this.alturaR + " Largura: " + this.larguraR + " Área: " + this.areaR;
            return text
        }
    };
    document.getElementById("pResultado").innerHTML = retangulo.imprimirR()
}