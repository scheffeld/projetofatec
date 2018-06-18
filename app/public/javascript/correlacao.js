var valores = {

    valoresX: [],
    valoresY: [],
    valoresX_Y: [],
    valoresXpow: [],
    valoresYpow: []
}

var mensagemDados = $("#mensagemDados");
var mensagemTabela = $("#mensagemTabela");
var campoVazio = $("#campoVazio");
var tabelaVazia = $("#tabelaVazia");

mensagemTabela.hide();
mensagemDados.hide();
campoVazio.hide();
tabelaVazia.hide();

var tbody = $("#tbody");

function gerarTable(){

    var valorX = parseInt($("#valorX").val());
    var valorY = parseInt($("#valorY").val());
    var valorX_Y = (valorX*valorY);
    var valorXpow = Math.pow(valorX, 2);
    var valorYpow = Math.pow(valorY, 2);
    var mensagem = $("#mensagemDados")

    valores.valoresX.push(valorX);
    valores.valoresY.push(valorY);
    valores.valoresX_Y.push(valorX_Y);
    valores.valoresXpow.push(valorXpow);
    valores.valoresYpow.push(valorYpow);
    var tr = $('<tr></tr>');
    
    tr.append('<td>' + valorX + '</td>');
    tr.append('<td>' + valorY + '</td>');
    tr.append('<td>' + (valorX*valorY) + '</td>');
    tr.append('<td>' + Math.pow(valorX, 2) + '</td>');
    tr.append('<td>' + Math.pow(valorY, 2) + '</td>');
    tbody.append(tr);

    mensagem.show();


}

function limpar(){
    $("#valorX").val(0)
    $("#valorY").val(0);
}

function calcularResultado(){

    var n = valores.valoresX.length
    var somaX = 0;
    var somaY = 0;
    var somaX_Y = 0;
    var somaXpow = 0;
    var somaYpow = 0;

    for (i = 0; i < n; i++){
        somaX = somaX + valores.valoresX[i];
        somaY = somaY + valores.valoresY[i];
        somaX_Y = somaX_Y + valores.valoresX_Y[i];
        somaXpow = somaXpow + valores.valoresXpow[i];
        somaYpow = somaYpow + valores.valoresYpow[i];
    }

    valores.valoresX.push(somaX);
    valores.valoresY.push(somaY);
    valores.valoresX_Y.push(somaX_Y);
    valores.valoresXpow.push(somaXpow);
    valores.valoresYpow.push(somaYpow);

    var primeiraParte = n * somaX_Y - (somaX * somaY);
    var segundaParte = (n * somaXpow - Math.pow(somaX, 2)) * (n * somaYpow - Math.pow(somaY, 2));
    var a = parseFloat(((n * somaX_Y) - (somaX * somaY)) / (n * somaXpow - Math.pow(somaX, 2))).toFixed(2);
    var b = parseFloat(((somaY / n) - a * (somaX / n))).toFixed(2);
    var result = parseFloat((primeiraParte / Math.sqrt(segundaParte))).toFixed(4)

    if (result == 0){

        $("#resultado").empty();
        $("#correlacao").empty();
        $("#funcao").empty();
        $("#resultado").append(result);
        $("#correlacao").append("Não existe.");
        $("#funcao").append("N/A");

    } else if (result > 0){

        $("#resultado").empty();
        $("#correlacao").empty();
        $("#funcao").empty();
        $("#resultado").append(result);
        $("#correlacao").append("Perfeita Positiva.");
        $("#funcao").append("y = ("+ a + ") * x (" + b + ")");

    } else {

        $("#resultado").empty();
        $("#correlacao").empty();
        $("#funcao").empty();
        $("#resultado").append(result);
        $("#correlacao").append("Perfeita Negativa.");
        $("#funcao").append("y = -("+ a + ") * x (" + b + ")");

    }
}

function totalTabela(){

    var tr_ = $('<tr class="medium" style="font-weight: bold"></tr>');

    tr_.append('<td>' + valores.valoresX[valores.valoresX.length - 1] + '</td>');
    tr_.append('<td>' + valores.valoresY[valores.valoresY.length - 1] + '</td>');
    tr_.append('<td>' + valores.valoresX_Y[valores.valoresX_Y.length - 1] + '</td>');
    tr_.append('<td>' + valores.valoresXpow[valores.valoresXpow.length - 1] + '</td>');
    tr_.append('<td>' + valores.valoresYpow[valores.valoresYpow.length - 1] + '</td>');

    tbody.append(tr_)
    
};

function gerarGrafico(){

    var datas = []

    for (i = 0; i < (valores.valoresX.length - 1) ; i++){
        datas.push({
            x: valores.valoresX[i],
            y: valores.valoresY[i],
            name: "Point" + i 
        })
    }

    var lines = new Array();

    Highcharts.chart('container', {
        xAxis: {
          min: 0
        },
        yAxis: {
          min: 0
        },
        title: {
          text: 'Scatter plot with regression line'
        },
        series: [{
          type: 'line',
          name: 'Linha de Regressão',
          data: [[0, 1.11], [5, 4.51]],
          marker: {
            enabled: true
          },
          states: {
            hover: {
              lineWidth: 0
            }
          },
          enableMouseTracking: false
        }, {
          type: 'scatter',
          name: 'Observações',
          data: datas,
          marker: {
            radius: 2
          }
        }]
    });

}


$("#gerarTabela").click(function(){
    var valorX = $("#valorX").val();
    var valorY = $("#valorY").val();
    if ((valorX != 0 || valorX != "") || (valorY != 0 || valorY != "")){
        gerarTable();
        limpar();
    } else {
        campoVazio.show()
    }
})

$("#calcGerar").click(function(){
    tabelaVazia.hide();
    mensagemTabela.hide();
    if (valores.valoresX.length != 0){
        calcularResultado();
        totalTabela();
        gerarGrafico();
        mensagemTabela.show();
    } else {
        tabelaVazia.show();
    }
})