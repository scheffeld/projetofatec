$("#continua").hide();
$("#discreta").hide();
$("#titulo").hide();
$("#modaKing").hide();
$("#modaPearson").hide();
$("#modaCzuber").hide();
$("#modaConvencional").hide();
$("#media").hide();
$("#desvio").hide();
$("#moda").hide();
$("#coeficiente").hide();
$("#modaValores").hide();
$("#coeficienteValores").hide();

$("#convencional").click(function(){
    $("#modaDrop").addClass("active");
    $("#valoresDrop").removeClass("active");
    $("#modaConvencional").show();
    $("#modaKing").hide();
    $("#modaPearson").hide();
    $("#modaCzuber").hide();
    $("#media").hide();
    $("#desvio").hide();
    $("#moda").hide();
    $("#coeficiente").hide();
    $("#modaValores").hide();
    $("#coeficienteValores").hide();
})

$("#king").click(function(){
    $("#modaDrop").addClass("active");
    $("#valoresDrop").removeClass("active");
    $("#modaKing").show();
    $("#modaPearson").hide();
    $("#modaCzuber").hide();
    $("#modaConvencional").hide();
    $("#media").hide();
    $("#desvio").hide();
    $("#moda").hide();
    $("#coeficiente").hide();
    $("#modaValores").hide();
    $("#coeficienteValores").hide();
})

$("#pearson").click(function(){
    $("#modaDrop").addClass("active");
    $("#valoresDrop").removeClass("active");
    $("#modaKing").hide();
    $("#modaPearson").show();
    $("#modaCzuber").hide();
    $("#modaConvencional").hide();
    $("#media").hide();
    $("#desvio").hide();
    $("#moda").hide();
    $("#coeficiente").hide();
    $("#modaValores").hide();
    $("#coeficienteValores").hide();
})

$("#czuber").click(function(){
    $("#modaDrop").addClass("active");
    $("#valoresDrop").removeClass("active");
    $("#modaKing").hide();
    $("#modaPearson").hide();
    $("#modaCzuber").show();
    $("#modaConvencional").hide();
    $("#media").hide();
    $("#desvio").hide();
    $("#moda").hide();
    $("#coeficiente").hide();
    $("#modaValores").hide();
    $("#coeficienteValores").hide();
})

$("#mediana").click(function(){
    $("#modaDrop").removeClass("active");
    $("#valoresDrop").addClass("active");
    $("#modaKing").hide();
    $("#modaPearson").hide();
    $("#modaCzuber").hide();
    $("#modaConvencional").hide();
    $("#media").show();
    $("#desvio").hide();
    $("#moda").hide();
    $("#coeficiente").hide();
    $("#modaValores").hide();
    $("#coeficienteValores").hide();
})

$("#padrao").click(function(){
    $("#modaDrop").removeClass("active");
    $("#valoresDrop").addClass("active");
    $("#modaKing").hide();
    $("#modaPearson").hide();
    $("#modaCzuber").hide();
    $("#modaConvencional").hide();
    $("#media").hide();
    $("#desvio").show();
    $("#moda").hide();
    $("#coeficiente").hide();
    $("#modaValores").hide();
    $("#coeficienteValores").hide();
})

$("#moda").click(function(){    
    $("#moda").addClass("active");
    $("#coeficiente").removeClass("active");
    $("#modaKing").hide();
    $("#modaPearson").hide();
    $("#modaCzuber").hide();
    $("#modaConvencional").hide();
    $("#media").hide();
    $("#desvio").show();
    $("#moda").hide();
    $("#coeficiente").hide();
    $("#modaValores").show();
    $("#coeficienteValores").hide();
})

$("#coeficiente").click(function(){    
    $("#moda").removeClass("active");
    $("#coeficiente").addClass("active");
    $("#modaKing").hide();
    $("#modaPearson").hide();
    $("#modaCzuber").hide();
    $("#modaConvencional").hide();
    $("#media").hide();
    $("#desvio").show();
    $("#moda").hide();
    $("#coeficiente").hide();
    $("#modaValores").hide();
    $("#coeficienteValores").show();
})


// Abre o modal de variavel quantitativa
$("#quantitativaButton").click(function(){
    // Chama a função Limpar, para limpar o campo de Medidas 
    $("#varQuant").modal("show"); 
    limparMedidas();
})

// ABre o modal de Distribuição Normal
$("#normalButton").click(function(){
    $("#disNormal").modal("show");
})

// Abre o modal de Distribuição Binomial
$("#binomialButton").click(function(){
    $("#disBinomial").modal("show");
})

// Abre o modal de Distribuição Uniforme
$("#uniformeButton").click(function(){
    $("#disUniforme").modal("show");
})

// Atribui ação ao evento "change" do input
$("#numeroElementos").change(function(){
    // Chama função para gerar os números
    gerarElementos();
});

// Ações para quando o checkbox dos dados copiados (Ctrl+C) mudar
$("#dadosCopiados").change(function(){
    // Carrega a div que vai receber os inputs de elementos
    var calculos = $("#calculos");
    // Mantem a div vazia, para evitar a soma da quantidade selecionada anteriormente
    calculos.empty();
    // Se não for marcado
    if ($(this).is(':checked')){
        // Esconde o campo de quantidade de elementos
        $("#elementos").hide();
        //
        calculos.append('<div class="col-2"></div>');
        calculos.append('<input class="form-control form-control-sm input-sm col-8 number" min="0" placeholder="Cole os dados aqui, separados por ;" style="margin: 2px;" id="dados"/>');
        calculos.append('<div class="col-2"></div>');
    // Se for marcado
    } else {
        // Mostra o campo de quantidade de elementos
        $("#elementos").show();
    }
});

// Função para limpar os campos de Medidas
function limparMedidas(){
    // Limpa campo Media
    $("#mediaResult").empty();
    // Limpa campo Moda
    $("#modaResult").empty();
    // Limpa campo Mediana
    $("#medianaResult").empty();
    // Limpa campo Desvio Padrão
    $("#desvioResult").empty();
    // Limpa campo Coeficiênte
    $("#coeficienteResult").empty();
    // Limpa o checkbox
    $("#dadosCopiados").prop('checked', false);
    // Limpa a div que continha os input
    $("#calculos").empty();
    // Limpa o número de elementos
    $("#numeroElementos").val(0)
    // Limpa a DIV do grafico
    $("#container").empty();
};

// Função para gerar os campo para inserir elementos de acordo com a quantidade de elementos
function gerarElementos(){

    // Verifica a quantidade de elementos para poder inserir
    var qtd = $("#numeroElementos").val();
    // Carrega a div que vai receber os inputs de elementos
    var calculos = $("#calculos");
    // Mantem a div vazia, para evitar a soma da quantidade selecionada anteriormente
    calculos.empty();
    // For para adicionar os elementos de acordo com a quantidade selecionada
    for (i = 0; i < qtd; i++){
        // Variavel recebendo código do input, formatado para padronização, o ID recebe variavel i para controle, e  placeholder recebe i+1 para coerencia visual
        var input = '<input class="form-control form-control-sm input-sm col-2 number" type="number" min="0" placeholder="' + (i+1) +'º" style="margin: 2px;" id="inputvalor_' + i + '"/>';
        // Input é adicionado na div carregada anteriormente
        calculos.append(input);
    };
};

// Função para gerar chamar outras função de Variavel Quantitativa de acordo com o tipo de dado
$("#gerQuant").click(function(){
    var dadosCopiados = $("#dadosCopiados").is(':checked')
    // Receve o valor do Select de Tipo de Dado
    var tipoDados = $("#tipoDados").val();
    // Recebe o valor do Select de Tipo de Coleta
    var tipoColeta = $("#tipoColeta").val();
    // Recupera a div que contem os input que foram recebidos   
    var calculos = $("#calculos");
    // Verifica se o campo de quantidade de elementos é 0 mesmo sem marcar o checkbox de dados copiados
    if ($("#numeroElementos").val() > 0  || dadosCopiados === true){
        // Faz o if para verificar qual dado foi selecionado
        if (tipoDados == 1){
            // Se o usuario selecionou o tipo 1 "Discreta", chama a função que calcula a Variavel Quantitativa Discreta
            calculoDiscreta();
            // Fecha o modal para visualização dos dados gerados
            $('#varQuant').modal('hide');
        } else if (tipoDados == 2){
            // Se o usuario selecionou o tipo 2 "Continua", chama a função que calcula a Variavel Quantitativa Continua
            calculoContinua();
            // Fecha o modal para visualização dos dados gerados
            $("#varQuant").modal("hide");
        }
    } else {
        alert('Campos Vazios')
    }

});

// Função que faz o caculo de Variavel Quantitativa Discreta
// Calcula Media, Moda, Mediana, Coeficiente de Variação e Desvio Padrão
// Motra a tabela e o grafico
function calculoDiscreta(){
    //
    $("#valoresContinua").hide();
    $("#valoresDiscreta").show();
    //
    $("#modaValores").show();
    // Exibe os titulos dos dados de Media e etc
    $("#titulo").show();
    // Exibe os campos que serão mostrados Media, Moda e Mediana
    $("#discreta").show();
    // Oculta os campos que mostram Media, Modas e Mediana de Variavel Continua
    $("#continua").hide();
    // Variavel que recebe a marcação do checkbox dos dados copiados
    var dadosCopiados = $("#dadosCopiados").is(":checked");
    // Variavel que recebe os dados colados
    var dados = $("#dados").val();
    // Oculta o modal dos calculos para mostrar os resultados    
    $("#varQuant").modal("hide");
    // Variavel que recupera a quantidade de elementos inseridos
    // Caso o usuario cole os dados, esse valor é calculado após receber os dados
    var qtd = parseInt($("#numeroElementos").val());
    // Array que recebe os elementos inseridos
    var elementos = new Array();
    // Array auxiliar para utilizar nos for e if
    var aux = new Array();
    // Array que recebe as frequencias dos elementos
    var qtdElementos = new Array();
    // Array que recebe a soma das frequências
    var somaQtd = new Array();
    // Array que recebe os elementos sem repetições, para realizar os calculos de maneira mais simples
    var elementosAux = new Array();
    // Arrau que recebe as frequencias sem repetições, para realizar os calculos de maneira mais simples
    var qtdAux = new Array();
    // Array para receber as porcentagens
    var porcenQtd = new Array;
    // Array que recebe o valor que representa a quantidade de elementos (repetições do elemento * valor do elemento)
    var xi_fi = new Array();
    // Array que vai receber a variancia dos elementos
    var variancia = new Array();
    // Variavel que recebe a media aritimetica (soma dos valores dos elementos/quantidade de elementos)
    var mediaAr = 0;
    // Variavel que recebe a media aritimetica (soma dos valores dos elementos/quantidade de elementos)
    var mediana = 0;
    // Variavel para receber o total de frequencia 
    var qtdElementos_ = 0;
    // Variavel para receber o total do acumulado de frequencia
    var somaQtd_ = 0;
    // Variavel para receber o total de porcentagem
    var porcenQtd_ = 0;
    // Variavel para receber o total do calculo de Frequencia*Elemento
    var xi_fi_ = 0;
    // Variavel para receber o total de variancia
    var variancia_ = 0;
    // Variavel que recura o campo da media
    var mediaDiscreta = $("#mediaDiscreta");
    // Variavel que recura o campo da moda
    var modaDiscreta = $("#modaDiscreta");
    // Variavel que recura o campo da mediana
    var medianaDriscreta = $("#medianaDiscreta");

    // If que verifica se o usuário optou por inserir todos os dados manualmente ou colou de um banco
    if (dadosCopiados == false){
        // Se o usuario não marcou para utilizar os dados colados
        // For que recupera os valores dos elementos
        for (i = 0; i < qtd; i++){
            // Variavel com o valor dos inputs dos elementos
            var valor = parseInt($("#inputvalor_" + i).val());
            // Array que recebe o valor do input atual 
            elementos.push(valor);
        };
    // Se o usuario optou por colar os dados
    } else if (dadosCopiados == true){
        // Array recebe todos os dados, utilizando ponto e virgula como seoaração
        var elementos = dados.split(';');
        // Quantidade de elementos é definida pelo comprimento - comprimento do array é igual ao número de elementos que contem - do Array
        qtd = elementos.length;
    }

    // Função que organiza os elemento em ordem crescente
    elementos = elementos.sort(function(a, b){return a - b});


    // For que conta a frequencia dos elementos
    for (i = 0; i < qtd; i++){
        // Variavel auxiliar para contar a frequencia do elemento atual
        var cont = 0;
        // For para verificar a frequencia de cada elemento
        for (j = 0; j < qtd; j++){
            // Se o elemento atual se repetir, executa
            if (elementos[i] == elementos[j]){
                // Soma ao cont caso o elemento se repita
                cont += 1;
            };
        };
        // Adiciona as frequencias ao array
        qtdElementos.push(cont);
    };


    
    // For para remover as frequencia e elemento repetidos
    for (i = 0; i < qtd; i++){
        // Verifica se o elemento pesquisado é igual ao proximo
        if (elementos[i] != elementos[i+1]){
            // Array auxiliar que recebe o valor encontrado se repetir
            elementosAux.push(elementos[i]);
            // Array auxiliar que recebe a frequencia encontrada sem repetir
            qtdAux.push(qtdElementos[i]);
        };
    };

    

    /// For que faz a soma dos acumulados, 
    for (i = 0; i < qtdAux.length; i++){
        // Verifica se o indicie é 0, ou seja, esta no primeiro indicie
        if (i == 0){
            // Caso indicie for 0, não tem soma, o acumulado é ele mesmo
            somaQtd.push(qtdAux[i]);
        // Se o indicie for diferente de 0, tem que somar o atual com o anterior
        } else {
            // Variavel recebe o acumulado (valor anterior acumulado + valor atual)
            var soma = qtdAux[i] + somaQtd[i - 1];
            // Array recebe os valores acumulados
            somaQtd.push(soma);
        };
        // Variavel que recebe o calculo da porcentagem (quantidade do elemento / total dos elementos ) * 100
        var calcPor = (qtdAux[i]/qtd)*100;
        // Array recebe o valor da porcentagem calculado
        porcenQtd.push(calcPor);
        // Array recebe o valor multiplicação calculado
        xi_fi.push(qtdAux[i]*elementosAux[i]);
    };    

    // For para calcular a variância de cada elemento
    // Calculo (elemento - media)² * frequencia do elemento
    for (i =0; i < elementosAux.length; i++){
        // Variavel recebe (elemento - media)
        var a = elementosAux[i]-mediaAr;
        // Variavel recebe (elemento - media)²
        var b = Math.pow(a, 2);
        // Variavel recebe (elemento - media)² * frequencia
        var c = b*qtdAux[i];
        // Array de variancia recebe resultado do elemento calculado
        variancia.push(c);
    };

    // Variavel recebe a maior frequencia
    // Moda é maior frequencia
    var maior = Math.max.apply(Math, qtdAux);
    // Array para receber as modas, caso tenham duas ou mais maiores frequencias
    var moda = new Array();
    
    // For que verifica se existe mais de um elemento que esta na moda
    for (i = 0; i < qtdAux.length; i++){
        // Verifica se o elemento atual é igual ao valor de moda
        if (qtdAux[i] === maior){
            // Se for igual, esta na moda, array recebe esse elemento
            moda.push(elementosAux[i]);
        };
    };

    
    // Calculo da Mediana
    // Mediana é o elemento central quando a quantidade de elementos é inpar
    // Mediana é a soma dos 2 elementos centrais dividido por 2 quando é par
    // Verifica se a quantidade de elementos é par, dividindo por 2
    if (qtd%2 == 0){
        // Se for par, variavel recebe o indicie do primeiro valor central
        var d = qtd/2;
        // Variavel recebe os valores centrais divididos por 2
        mediana = (elementos[d] + elementos[d-1])/2;
    // Caso o número seja impar
    } else if (qtd%2 == 1){
        // Variavel recebe a quantidade de elementos - 1
        var d = qtd - 1
        // Variavel recebe (quantidade de elementos - 1)/ 2, para saber qual é o indicie central
        var e = d/2;
        // Variavel recebe o valor da mediana, no caso, o elemento central
        mediana = elementos[e];
    };

    // For para calcular o total de todos os valores (Quantidade de Elementos, Acumulado, Porcentagem, Elemento*Frequencia e Variancia)
    for (i =0; i < elementosAux.length; i++){
        // Recebe a frequencia e soma com o valor
        qtdElementos_ += qtdAux[i];
        // Recebe o acumulado e soma com o valor
        somaQtd_ = somaQtd[i];
        // Recebe a porcentagem e soma com o valor
        porcenQtd_ += porcenQtd[i];
        // Recebe o calculo (Elemento*Frequencia) e soma com o valor
        xi_fi_ += xi_fi[i];
        // Recebe a variancia e soma com o valor
        variancia_ += variancia[i];
    };

    // Calculando a media aritimetica dos elementos
    mediaAr = (xi_fi_/qtdElementos_);

    // Deixando a div vazia e adicionando o valor de media a div 
    mediaDiscreta.empty();
    mediaDiscreta.append(parseFloat(mediaAr).toFixed(2));
    // Deixando a div vazia e adicionando o valor de mediana a div
    medianaDriscreta.empty();
    medianaDriscreta.append(parseFloat(mediana).toFixed(2));
    modaDiscreta.empty();

    // If para verificar se existem mais de 1 moda
    if (moda.length > 1){
        // For para percorrer os valores das modas
        for (i=0; i < moda.length; i++){
            // Se o proximo indicie não executar o for, adiciona somente a moda
            if ((i+1) == moda.length){
                // Adicionando a moda
                modaDiscreta.append(moda[i]);
            // Se o proximo inidicie executar o for, adiciona a moda com virgula para poder adicionar o outro valor
            } else {
                // Adicionando a moda e a virgula para o proximo valor
                modaDiscreta.append(moda[i] + ', ')
            }
        }
    // Caso não exitir mais de uma moda
    } else {
        // Adiciona a moda
        modaDiscreta.append(moda);
    }
        

    // Recuperando a div que vai estar a tabela
    var div = $("#tabela");
    // Deixando a div vazia
    div.empty();
    // Criando o elemento da tabela
    var table = $('<table class="table text-center table-sm table-condensed table-striped" style="padding-top: 5px; margin-top: 13px;"></table>');
    // Criando o head da tabela
    var thead = $('<thead class="text-center" style="background-color: rgb(74, 85, 92); color: white;"><tr class="medium"><th class="text-center">Xi</th><th class="text-center">Fi</th><th class="text-center">F(Acumulado)</th><th class="text-center">F(%)</th><th class="text-center">Xi.Fi</th><th class="text-center">Variancia</th></thead>');
    // Criando o body vazio da tabela, para adicionar os valores
    var tbody = $('<tbody></tbody>');
    
    // For para adicionar todos os valores individuais a tabela criada
    for (i = 0; i < elementosAux.length; i++){
        // Variavel que recebe a linha
        var tr = $('<tr></tr>');
        // Adicionando a coluna do elemento
        tr.append('<td>' + elementosAux[i] + '</td>');
        // Adicionando a coluna da frequencia
        tr.append('<td>' + qtdAux[i] + '</td>');
        // Adicionando a coluna de acumulado
        tr.append('<td>' + somaQtd[i] + '</td>');
        // Adicionando a coluna de porcentagem, mostrando somente 2 casas decimais após a virgula
        tr.append('<td>' + parseFloat(porcenQtd[i].toFixed(2)) + '%' + '</td>');
        // Adicionando a coluna de Frequencia*Elemento
        tr.append('<td>' + xi_fi[i] + '</td>');
        // Adicionando a coluna de variancia, mostrando somente 2 casas decimais após a virgula
        tr.append('<td>' + parseFloat(variancia[i].toFixed(2)) + '</td>');
        // Adicionando a linha ao body da tabela
        tbody.append(tr);
    };
    
    // Variavel que recebe a linha do total das colunas
    var tr = $('<tr class="medium" style="font-weight: bold"></tr>');
    // Adicionando a coluna com a legenda TOTAL
    tr.append('<td>TOTAL</td>');
    // Adicionando o total de elementos
    tr.append('<td>' + qtdElementos_ + '</td>');
    // Adicionando o total de elementos acumulado
    tr.append('<td>' + somaQtd_ + '</td>');
    // Adicionando o total de porcentagem
    tr.append('<td>' + porcenQtd_ + '</td>');
    // Adicionando o total de Frequencia*Elemento
    tr.append('<td>' + xi_fi_ + '</td>');
    // Adicionando o total de variancia
    tr.append('<td>' + variancia_ + '</td>');
    // Adicionando a linha ao final do body da tabela
    tbody.append(tr);

    // Adicionando o head à tabela
    table.append(thead);
    // Adicionando o body a tabela
    table.append(tbody);
    // Adicionando a tabela à div
    div.append(table);

    

    // Gerando os graficos
    $(function () { 
        // Atribuindo a variavel o valores dos elementos
        a = elementosAux;
        // Atribuindo a variavel as frequencias dos elemento
        b = qtdAux;
        // Adicionando o titulo dos valores
        a.unshift("Elementos");
        // Adicionando o titulo dos valores
        b.unshift("Elementos");
        // Iniciando o grafico na div
        Highcharts.chart('container', {
            // Definindo o tipo de grafico, nesse caso grafico de colunas
            chart: {
                type: 'column'
            },
            // Adicionando o titulo do eixo Y
            yAxis: {
                title: {
                    text: 'Quantidade de Elementos'
                }
            },
            // Adicionando o titulo do grafico
            title: {
                text: 'VARIAVEL QUANTITATIVA DISCRETA'
            },
            // Adicionando os dados
            data: {
                rows: [
                    a,
                    b  
                ]
            }
        });
    });
};
// Fim da função de calcuo de Variavel Qunatitativa Discreta

// Função que faz o calculo de Variavel Quantitativa Continua
// Calcula Media, Moda (Convencional, King, Czuber, Pearson), Mediana, Coeficiente de Variação e Desvio Padrão
// Mostra tabela e grafico
function calculoContinua(){
    
    $("#valoresContinua").show();
    $("#valoresDiscreta").hide();
    // Exibe a moda convencional como aba padrão
    $("#modaConvencional").show();
    // Exibe os titulos dos dados de Media, Moda...
    $("#titulo").show();
    // Exibe os campos onde serão mostrados Media, Moda...
    $("#continua").show();
    // Oculta as informações de Variavel Discreta
    $("#discreta").hide();
    // Variavel que recebe a marcação do checkbox dos dados copiados
    var dadosCopiados = $("#dadosCopiados").is(':checked');
    // Variavel que recebe os dados colados
    var dados = $("#dados").val();
    // Ouclta o modal para mostrar somente os calculos
    $("#varQuant").modal("hide");
    // Variavel que recupera a quantidade de elementos inseridos
    // Caso o usuario cole os dados, esse valor é calculado após receber os dados
    var qtd = parseInt($("#numeroElementos").val());
    // Array que recebe os elementos inseridos
    var elementos = new Array();    
    // Array auxiliar para utilizar nos for e if
    var aux = new Array();
    // Array que recebe as frequencias dos elementos
    var qtdElementos = new Array();
    // Variavel que recebe a media aritimetica
    var media = 0;
    // Array que recebe os elementos sem repetições, para realizar os calculos de maneira mais simples
    var elementosAux = new Array();
    // Arrau que recebe as frequencias sem repetições, para realizar os calculos de maneira mais simples
    var qtdAux = new Array();
    // Variavel auxiliar para o while do calculo da variancia
    var achou = false;
    // Variavel que recebe o intervalo calculado para cada classes
    var intervaloClasse = 0;
    // Array que recebe os intervalos de classes calculados
    var intervalo_Classe = new Array();
    // Array que recebe os intervalos de classes maiores
    var maiorIntervalo = new Array();
    // Array que recebe os intervalos de classes menores
    var menorIntervalo = new Array();
    // Variavel que recebe a quantidade de classes calculadas
    var classes = 0;
    // Array que recebe a quantidade de elementos que estão dentro desse intervalo
    var qtdIntervalos = new Array();
    // Array que recebe os acumulados de porcentagem
    var acumuladoPorc = new Array();
    // Array que recebe as porcentagens de cada classe
    var qtdPorc = new Array();
    // Array que recebe o acumulado da quantidade de elementos que estão dentro de cada classe
    var acumulado = new Array();
    // Array que recebe o valor de um calculo que eu nao sei o nome
    var valorUndefinido = new Array();
    // Array que recebe os intervalos de classes para ser mostrado no grafico
    var classeGrafico = new Array();
    // Array que recebe os resultados de moda convencional
    var resultConvencional = new Array();
    // Array que recebe os resultados de moda king
    var resultKing = new Array();
    // Array que recebe os resultados de moda convencional
    var resultPearson = new Array();
    // Array que recebe os resultados de moda convencional
    var resultCzuber = new Array();
    var moda = new Array();
    var medianaContinua = $("#medianaResult")
    var mediaContinua = $("#mediaResult")
    var modaCzuber = new Array();
    var modaKing = new Array();
    var modaPearson = new Array();
    var mediana = 0;

    // If que verifica se o usuário optou por inserir todos os dados manualmente ou colou de um banco
    if(dadosCopiados == false){
        // Se o usuario não marcou para utilizar os dados colados
        // For que recupera os valores dos elementos
        for (i = 0; i < qtd; i++){
            // Variavel com o valor dos inputs dos elementos
            var valor = parseInt($("#inputvalor_" + i).val());
            // Array que recebe o valor do input atual
            elementos.push(valor);
        };
    } else if (dadosCopiados == true){        
        // Array recebe todos os dados, utilizando ponto e virgula como seoaração
        var elementos = dados.split(";");
        // Quantidade de elementos é definida pelo comprimento - comprimento do array é igual ao número de elementos que contem - do Array
        qtd = elementos.length;
    }

    // Função que organiza os elemento em ordem crescente
    elementos = elementos.sort(function(a, b){return a - b});


    // For que conta a frequencia dos elementos
    for (i = 0; i < qtd; i++){
        // Variavel auxiliar para contar a frequencia do elemento atual
        var cont = 0;
        // For para verificar a frequencia de cada elemento
        for (j = 0; j < qtd; j++){
            // Se o elemento atual se repetir, executa
            if (elementos[i] == elementos[j]){
                // Soma ao cont caso o elemento se repita
                cont += 1;
            };
        };
        // Adiciona as frequencias ao array
        qtdElementos.push(cont);
    };

   
    // For para remover as frequencia e elemento repetidos
    for (i = 0; i < qtd; i++){
        // Verifica se o elemento pesquisado é igual ao proximo
        if (elementos[i] != elementos[i+1]){
            // Array auxiliar que recebe o valor encontrado se repetir
            elementosAux.push(elementos[i]);
            // Array auxiliar que recebe a frequencia encontrada sem repetir
            qtdAux.push(qtdElementos[i]);
        };
    };

    // Variavel que recebe o maior elementos
    var maior = Math.max.apply(Math, elementosAux);
    // Variavel que recebe o menor elementos
    var menor = Math.min.apply(Math, elementosAux);
    // Variavel que recebe o valor da amplitudo, a diferença entre o maior e o menor elemento
    var amplitude = maior - menor;
    // Variavel que recebe a raiz quadrada da quantidade de elementos, arredondando
    var raiz = Math.floor(Math.sqrt(elementos.length));
    

    // While para calcular o intervalo de classe
    while (!achou){
        amplitude++;
        for (i = -1; i < 2; i++){
            if ((amplitude % (raiz + i)) === 0){
                achou = true;
                classes = (i + raiz);
                intervaloClasse = (amplitude/classes);
                break;
            };
        };
    };

    // For para adicionar os v
    for (i = 0; i < classes; i++){
        // Array recebe o ponto maior do intervalo da classe
        menorIntervalo.push(menor + (i * intervaloClasse));
        // Array recebe o ponto menor do intervalo da classe
        maiorIntervalo.push(menor + ((i + 1) * intervaloClasse));
        // Variavel auxiliar que recebe a quantidade de elementos que estão no intervalo atual
        var cont = 0;
        // Resultado de um calculo que ainda não sei porque precisa
        valorUndefinido.push((menorIntervalo[i] + maiorIntervalo[i])/2);
        for (j = 0; j < qtdAux.length; j++){
            if (elementosAux[j] >= menorIntervalo[i] && elementosAux[j] < maiorIntervalo[i]){
                cont += qtdAux[j];
            };

        };
        qtdIntervalos.push(cont);
    };


    for (i = 0; i < qtdIntervalos.length; i++){
        var valor = ((qtdIntervalos[i]/qtd)*100);
        qtdPorc.push(valor);
        if (i === 0){
            acumulado.push(qtdIntervalos[i]);
        } else {
            acumulado.push((acumulado[i-1] + qtdIntervalos[i]));
        };
    };


    for (i = 0; i < qtdPorc.length; i++){
        if (i === 0){
            acumuladoPorc.push(qtdPorc[i]);
        } else {
            acumuladoPorc.push((acumuladoPorc[i-1] + qtdPorc[i]));
        };
    };

    var maior = Math.max.apply(Math, qtdIntervalos);

    var elementosAux_ = 0
    var qtdAux_ = 0

    for (i = 0; i < qtd.length; i++){
        elementosAux_ = elementosAux[i]*qtdAux[i];
        qtdAux_ = qtdAux_ + qtdAux[i];
    }

    for (i = 0; i < elementosAux.length; i++){
        elementosAux_ += elementosAux[i]*qtdAux[i]
    }

    mediana = math.median(elementos)

    media = (elementosAux_ / qtd);
    
    for (i = 0; i < qtdIntervalos.length; i++){
        if (qtdIntervalos[i] == maior){
            moda.push(i+1);
            moda.push(qtdIntervalos[i]);
            moda.push((menorIntervalo[i])+((intervaloClasse/2)));
            modaCzuber.push(i+1);
            modaCzuber.push(qtdIntervalos[i]);
            modaCzuber.push((menorIntervalo[i])+(((qtdIntervalos[i] - qtdIntervalos[i-1]))/((qtdIntervalos[i]-qtdIntervalos[i-1])+(qtdIntervalos[i] - qtdIntervalos[i+1])))*intervaloClasse);
            modaKing.push(i+1);
            modaKing.push(qtdIntervalos[i]);
            modaKing.push((menorIntervalo[i])+((qtdIntervalos[i + 1])/(qtdIntervalos[i+1] + qtdIntervalos[i-1]))*intervaloClasse)
            modaPearson.push(i+1);
            modaPearson.push(qtdIntervalos[i]);
            modaPearson.push((3*mediana)-(2*media));
        }
    }

    mediaContinua.append(media)
    medianaContinua.append(mediana);
    $("#convencionalClasse").append(moda[0])
    $("#convencionalFrequencia").append(moda[1])
    $("#convencionalPonto").append(moda[2])
    $("#czuberClasse").append(modaCzuber[0])
    $("#czuberFrequencia").append(modaCzuber[1])
    $("#czuberPonto").append(modaCzuber[2])
    $("#kingClasse").append(modaKing[0])
    $("#kingFrequencia").append(modaKing[1])
    $("#kingPonto").append(modaKing[2]);
    $("#pearsonClasse").append(modaPearson[0]);
    $("#pearsonFrequencia").append(modaPearson[1]);
    $("#pearsonPonto").append(parseFloat(modaPearson[2]).toFixed(2));
    
        
    // Recuperando a div que vai estar a tabela
    var div = $("#tabela");
    // Deixando a div vazia
    div.empty();
    // Criando o elemento da tabela
    var table = $('<table class="table text-center table-sm table-condensed table-striped" style="padding-top: 5px; margin-top: 13px; margin-bottom: 13px;"></table>');
    // Criando o head da tabela
    var thead = $('<thead class="text-center medium" style="background-color: rgb(74, 85, 92); color: white;"><tr><th class="text-center">Classe</th><th class="text-center">Intervalo de Classe</th><th>F</th><th class="text-center">F(%)</th><th class="text-center">F(Acumulado)</th><th class="text-center">F%(Acumulado)</th><th class="text-center">(min + max)/2</th></tr></thead>');
    // Criando o body vazio da tabela, para adicionar os valores
    var tbody = $('<tbody></tbody>');
    
    

    for (i =0; i < classes; i++){
        var tr = $('<tr class="light"></tr>');
        tr.append('<td>' + (i + 1) + '</td>');
        tr.append('<td>' + menorIntervalo[i] + ' |---- ' + maiorIntervalo[i] + '</td>');
        tr.append('<td>' + qtdIntervalos[i] + '</td>');
        tr.append('<td>' + parseFloat(qtdPorc[i].toFixed(2)) + '%' + '</td>');
        tr.append('<td>' + acumulado[i] + '</td>');
        tr.append('<td>' + parseFloat(acumuladoPorc[i].toFixed(2)) + '%' + '</td>');
        tr.append('<td>' + valorUndefinido[i] + '</td>');
        tbody.append(tr);
    }
    
    table.append(thead);
    table.append(tbody);
    div.append(table);


    for (i = 0; i < classes; i++){
        classeGrafico.push(menorIntervalo[i] + ' |-- ' + maiorIntervalo[i]);
    }



    $(function () { 
        a = classeGrafico;
        b = qtdIntervalos;
        a.unshift("Classes");
        b.unshift("Classes");
        Highcharts.chart('container', {
    
            chart: {
                type: 'column'
            },
            yAxis: {
                title: {
                    text: 'Quantidade de Elementos'
                }
            },            
            title: {
                text: 'VARIAVEL QUANTITATIVA CONTINUA'
            },
            
            data: {
                rows: [
                    a,
                    b  
                ]
            },

            plotOptions: {
                column: {
                    pointPadding: 0,
                    borderWidth: 0
                }
            }
        });
    });
};
/* Fim da função gerarElementos */

$("#comparacao").change(function(){
    var valor = $("#comparacao").val();

    if (valor == 1){

        var div = $("#tipoComp");

        div.empty();

        var label = $('<label class="col-6">Maior: </label>');
        
        var input = $('<input id="compMaior" class="form-control form-control-sm input-sm col-4" type="number" min="0"/>');

        div.append(label);
        div.append(input);

    } else if (valor == 2){

        var div = $("#tipoComp");

        div.empty();

        var label = $('<label class="col-6">Menor: </label>');

        var input = $('<input id="compMenor" class="form-control form-control-sm input-sm col-4" type="number" min="0"/>');

        div.append(label);
        div.append(input);

    } else if (valor == 3){

        var div = $("#tipoComp");

        div.empty();

        var label = $('<label class="col-3">Entre: </label>');

        var label_ = $('<label class="col-2">E </label>');

        var input = $('<input id="entreOne" class="form-control form-control-sm input-sm col-3" type="number" min="0"/>');

        var input_ = $('<input id="entreTwo" class="form-control form-control-sm input-sm col-3" type="number" min="0"/>');

        div.append(label);
        div.append(input);
        div.append(label_);
        div.append(input_);

    };

    return valor
});

function normalMenor(){

    var menorQ = parseFloat($("#compMenor").val());
    var media = parseFloat($("#mediaNormal").val());
    var desvio = parseFloat($("#desvioNormal").val());

    if (menorQ < media){
        var valor = (0.5 - getValue((menorQ - media)/desvio))*100;
    } else {
        var valor = (0.5 + getValue((menorQ - media)/desvio))*100;
    };

    compResult.append(valor);

};

function normalMaior(){

    var maiorQ = parseFloat($("#compMaior").val());
    var media = parseFloat($("#mediaNormal").val());
    var desvio = parseFloat($("#desvioNormal").val());
    var compResult = $("#compResult");

    if (maiorQ < media){
        var valor = (0.5 + getValue((maiorQ - media)/desvio))*100;
    } else {
        var valor = (0.5 - getValue((maiorQ - media)/desvio))*100;
    };

    compResult.append(valor);

};

function entreNormal(){
    
    var entreOne = $("#entreOne").val();
    var entreTwo = $("#entreTwo").val();
    var media = $("#mediaNormal").val();
    var desvio = $("#desvioNormal").val();
    var compResult = $("#compResult");

    var valorOne = (maiorQ - media)/desvio;
    var valorTwo = (menorQ - media)/desvio;

    if (((entreOne < media) && (entreTwo < media)) || ((entreOne > media) && (entreTwo > media))){
        var valor = (valorOne - valorTwo)*100;
    } else {
        var valor = (valorOne + valorTwo);
    };

    compResult.append(valor);

};

$("#compBinomial").change(function(){
    var choice =  $("#compBinomial").val();
    if(choice == 1){

        var label = $('<label class="col-6 medium">K:</label>')
        var input = $('<input id="binExatamente" class="light form-control form-control-sm input-sm col-2" type="number" min="0" max="1" step="0.1" placeholder="0"/>')
        var div = $("#elementosK");
        div.empty();

        div.append(label);
        div.append(input);
    
    } else if (choice == 2){

        var label = $('<label class="col-6 medium">K Menor Que:</label>')
        var input = $('<input id="binMenor" class="light form-control form-control-sm input-sm col-2" type="number" min="0" max="1" step="0.1" placeholder="0"/>')
        var div = $("#elementosK");
        div.empty();

        div.append(label);
        div.append(input);


    } else if (choice == 3){

        var label = $('<label class="col-6 medium">K Maior Que:</label>')
        var input = $('<input id="binMaior" class="light form-control form-control-sm input-sm col-2" type="number" min="0" max="1" step="0.1" placeholder="0"/>')
        var div = $("#elementosK");
        div.empty();

        div.append(label);
        div.append(input);

    } else if (choice == 4){

        var label = $('<label class="col-6 medium">Entre</label>')
        var input = $('<input id="binEntreOne" class="light form-control form-control-sm input-sm col-2" type="number" min="0" max="1" step="0.1" placeholder="0"/>')
        var label_ = $('<label class="col-2 medium">E</label>')
        var input_ = $('<input id="binEntreTwo" class="light form-control form-control-sm input-sm col-2" type="number" min="0" max="1" step="0.1" placeholder="0"/>')
        var div = $("#elementosK");
        div.empty();

        div.append(label);
        div.append(input);
        div.append(label_);
        div.append(input_);

    };

    return choice;
});

function gerarBinomial(){

    var choice =  $("#compBinomial").val();
    var div = $("#resultadoBinomial");
    div.empty();

    function binomial(n, k) {

        if ((typeof n !== 'number') || (typeof k !== 'number')) 
            return false; 
        var coeff = 1;
        for (var x = n-k+1; x <= n; x++) coeff *= x;
        for (x = 1; x <= k; x++) coeff /= x;
        return coeff;

    }

    if (choice == 1){
    
        var valorK = parseInt($("#binExatamente").val());
        var valorP = parseFloat($("#valorP").val());
        var valorQ = parseFloat($("#valorQ").val());
        var valorN = parseInt($("#valorN").val());

        var fat = binomial(valorN, valorK);

        var resultP = Math.pow(valorP, valorK);
        var resultQ = Math.pow(valorQ, (valorN - valorK));

        var result = parseFloat((fat*resultP*resultQ)*100).toFixed(2);

        div.append('<h5 class="medium">Resultado: </h5>');
        div.append('<a class="light">' + result + '%</a>');

    } else if (choice == 2){

        var valorK = 0
        var fat = 0
        var resultP = 0
        var resultQ = 0
        var resultParc = 0
        var menor = parseInt($("#binMenor").val());
        var valorP = parseFloat($("#valorP").val());
        var valorQ = parseFloat($("#valorQ").val());
        var valorN = parseInt($("#valorN").val());
        var result = 0;

        for (i = 0; i < menor; i++){

            valorK = i;
            fat = (binomial(valorN, valorK));
            resultP = (Math.pow(valorP, valorK));
            resultQ = (Math.pow(valorQ, (valorN - valorK)));
            resultParc = (fat*resultP*resultQ);
            result = result + resultParc;

        }


        div.append('<h5 class="medium">Resultado: </h5>');
        div.append('<a class="light">' + parseFloat(result*100).toFixed(2) + '%</a>');

    } else if (choice == 3){

        var valorK = 0
        var fat = 0
        var resultP = 0
        var resultQ = 0
        var resultParc = 0
        var maior = parseInt($("#binMaior").val());
        var valorP = parseFloat($("#valorP").val());
        var valorQ = parseFloat($("#valorQ").val());
        var valorN = parseInt($("#valorN").val());
        var result = 0;

        for (i = valorN; i > maior; i--){

            valorK = i;
            fat = (binomial(valorN, valorK));
            resultP = (Math.pow(valorP, valorK));
            resultQ = (Math.pow(valorQ, (valorN - valorK)));
            resultParc = (fat*resultP*resultQ);
            result = result + resultParc;

        }


        div.append('<h5 class="medium">Resultado: </h5>');
        div.append('<a class="light">' + parseFloat(result*100).toFixed(2) + '%</a>');

    } else if (choice == 4){

        var valorK = 0
        var fat = 0
        var resultP = 0
        var resultQ = 0
        var resultParc = 0
        var entreOne = parseInt($("#binEntreOne").val());
        var entreTwo = parseInt($("#binEntreTwo").val());
        var valorP = parseFloat($("#valorP").val());
        var valorQ = parseFloat($("#valorQ").val());
        var valorN = parseInt($("#valorN").val());
        var result = 0;

        for (i = 0; i < entreTwo; i++){
            if (i > entreOne){
                valorK = i;
                fat = (binomial(valorN, valorK));
                resultP = (Math.pow(valorP, valorK));
                resultQ = (Math.pow(valorQ, (valorN - valorK)));
                resultParc = (fat*resultP*resultQ);
                result = result + resultParc;
            }
        }

        
        div.append('<h5 class="medium">Resultado: </h5>');
        div.append('<a class="light">' + parseFloat(result*100).toFixed(2) + '%</a>');
    }
};

$("#gerarBinomial").click(function(){
    $("#resultadoBinomial").empty();
    gerarBinomial();
});

function calcDistrib() {
    var valor = $("#comparacao").val();
    var div = $("#compResult");
    div.empty();
    var media = parseFloat($("#mediaNormal").val());
    var dp = parseFloat($("#desvioNormal").val());
    var tableZ = new Array(0.0000, 0.0040, 0.0080, 0.0120, 0.0160, 0.0199, 0.0239, 0.0279, 0.0319, 0.0359,
                            0.0398, 0.0438, 0.0478, 0.0517, 0.0557, 0.0596, 0.0636, 0.0675, 0.0714, 0.0754,
                            0.0793, 0.0832, 0.0871, 0.0910, 0.0948, 0.0987, 0.1026, 0.1064, 0.1103, 0.1141,
                            0.1179, 0.1217, 0.1255, 0.1293, 0.1331, 0.1368, 0.1406, 0.1443, 0.1480, 0.1517,
                            0.1554, 0.1591, 0.1628, 0.1664, 0.1700, 0.1736, 0.1772, 0.1808, 0.1844, 0.1879,
                            0.1915, 0.1950, 0.1985, 0.2019, 0.2054, 0.2088, 0.2123, 0.2157, 0.2190, 0.2224,
                            0.2258, 0.2291, 0.2324, 0.2357, 0.2389, 0.2422, 0.2454, 0.2486, 0.2518, 0.2549,
                            0.2580, 0.2612, 0.2642, 0.2673, 0.2704, 0.2734, 0.2764, 0.2794, 0.2823, 0.2852,
                            0.2881, 0.2910, 0.2939, 0.2967, 0.2996, 0.3023, 0.3051, 0.3078, 0.3106, 0.3133,
                            0.3159, 0.3186, 0.3212, 0.3238, 0.3264, 0.3289, 0.3315, 0.3340, 0.3365, 0.3389,
                            0.3413, 0.3438, 0.3461, 0.3485, 0.3508, 0.3531, 0.3554, 0.3577, 0.3599, 0.3621,
                            0.3643, 0.3665, 0.3686, 0.3708, 0.3729, 0.3749, 0.3770, 0.3790, 0.3810, 0.3830,
                            0.3849, 0.3869, 0.3888, 0.3907, 0.3925, 0.3944, 0.3962, 0.3980, 0.3997, 0.4015,
                            0.4032, 0.4049, 0.4066, 0.4082, 0.4099, 0.4115, 0.4131, 0.4147, 0.4162, 0.4177,
                            0.4192, 0.4207, 0.4222, 0.4236, 0.4251, 0.4265, 0.4279, 0.4292, 0.4306, 0.4319,
                            0.4332, 0.4345, 0.4357, 0.4370, 0.4382, 0.4394, 0.4406, 0.4418, 0.4429, 0.4441,
                            0.4452, 0.4463, 0.4474, 0.4484, 0.4495, 0.4505, 0.4515, 0.4525, 0.4535, 0.4545,
                            0.4554, 0.4564, 0.4573, 0.4582, 0.4591, 0.4599, 0.4608, 0.4616, 0.4625, 0.4633,
                            0.4641, 0.4649, 0.4656, 0.4664, 0.4671, 0.4678, 0.4686, 0.4693, 0.4699, 0.4706,
                            0.4713, 0.4719, 0.4726, 0.4732, 0.4738, 0.4744, 0.4750, 0.4756, 0.4761, 0.4767,
                            0.4772, 0.4778, 0.4783, 0.4788, 0.4793, 0.4798, 0.4803, 0.4808, 0.4812, 0.4817,
                            0.4821, 0.4826, 0.4830, 0.4834, 0.4838, 0.4842, 0.4846, 0.4850, 0.4854, 0.4857,
                            0.4861, 0.4864, 0.4868, 0.4871, 0.4875, 0.4878, 0.4881, 0.4884, 0.4887, 0.4890,
                            0.4893, 0.4896, 0.4898, 0.4901, 0.4904, 0.4906, 0.4909, 0.4911, 0.4913, 0.4916,
                            0.4918, 0.4920, 0.4922, 0.4925, 0.4927, 0.4929, 0.4931, 0.4932, 0.4934, 0.4936,
                            0.4938, 0.4940, 0.4941, 0.4943, 0.4945, 0.4946, 0.4948, 0.4949, 0.4951, 0.4952,
                            0.4953, 0.4955, 0.4956, 0.4957, 0.4959, 0.4960, 0.4961, 0.4962, 0.4963, 0.4964,
                            0.4965, 0.4966, 0.4967, 0.4968, 0.4969, 0.4970, 0.4971, 0.4972, 0.4973, 0.4974,
                            0.4974, 0.4975, 0.4976, 0.4977, 0.4977, 0.4978, 0.4979, 0.4979, 0.4980, 0.4981,
                            0.4981, 0.4982, 0.4982, 0.4983, 0.4984, 0.4984, 0.4985, 0.4985, 0.4986, 0.4986,
                            0.4987, 0.4987, 0.4987, 0.4988, 0.4988, 0.4989, 0.4989, 0.4989, 0.4990, 0.4990);

    if (valor==1) { // maior que
        valor = parseFloat($("#compMaior").val());
        z=(valor-media)/dp
        if(z<0){
            z*=-1;
        }
        indice= parseInt(z.toFixed(2)*100)
        if(indice <= 309){
            tabela=parseFloat(tableZ[indice]);
        } else {
            tabela=0.4999 
        }
    
        if(valor > media){
            p=(0.5-tabela)*100;
        } else {
            p=(0.5+tabela)*100; 
        }
        p=p.toFixed(2);
        div.append('<h5>Resultado: </h5>' + p + '%');
    } else if (valor==2){
        valor= parseFloat($("#compMenor").val());
        z=(valor-media)/dp

        if(z<0){
            z*=-1;
        }
        indice=parseInt(z.toFixed(2)*100)

        if(indice <= 309){
            tabela=parseFloat(tableZ[indice]);
        } else {
            tabela=0.4999 
        }

        if(valor > media){
            p=(0.5+tabela)*100;
        } else {
            p=(0.5-tabela)*100; 
        }
        p=p.toFixed(2);
        div.append('<h5>Resultado: </h5>' + p + '%');
    } else if (valor==3){
        valor1=parseFloat($("#entreOne").val());
        valor2=parseFloat($("#entreTwo").val());
        z1=(valor1-media)/dp; if(z1<0){z1*=-1}  
        z2=(valor2-media)/dp; if(z2<0){z2*=-1}
        
        indice1=parseInt(z1.toFixed(2)*100)
        if(indice1 <= 309){
            tabela1=parseFloat(tableZ[indice1]);
        } else {
            tabela1=0.4999 
        }
        indice2=parseInt( (z2.toFixed(2)*100).toFixed(0) )
        
        if(indice2 <= 309){
            tabela2=parseFloat(tableZ[indice2]);
        } else {
            tabela2=0.4999 
        }

        if(valor1>media && valor2>media){
            p=(tabela1-tabela2)*100
        } else if (valor1<media && valor2<media){
            p=(tabela1-tabela2)*100
        } else {
            p=(tabela1+tabela2)*100
        }

        if(p<0){
            p*=-1
        }

        p=p.toFixed(2);
        div.append('<h5>Resultado: </h5>' + p + '%');
    }
};

$("#gerarNormal").click(function(){
    calcDistrib();
});

$("#calcUniforme").change(function(){
    
    var choice = $("#calcUniforme").val();

    if (choice == 1){

        var div = $("#divUniforme");
        div.empty();

        var lblMinimo = '<label class="medium col-2">Ponto Min:</label>'
        var inpMinimo = '<input class="form-control form-control-sm input-sm col-2 light" id="pontoMinimo"></input>'
        var lblMaximo = '<label class="medium col-2">Ponto Max:</label>'
        var inpMaximo = '<input class="form-control form-control-sm input-sm col-2 light" id="pontoMaximo"></input>'
        var lblMaior = '<label class="medium col-2">Maior:</label>'
        var inpMaior = '<input class="form-control form-control-sm input-sm col-2 light" id="maior"></input>'

        div.append(lblMinimo);
        div.append(inpMinimo);
        div.append(lblMaximo);
        div.append(inpMaximo);
        div.append(lblMaior);
        div.append(inpMaior);

        
        
    } else if (choice == 2){

        var div = $("#divUniforme");
        div.empty();

        var lblMinimo = '<label class="medium col-2">Ponto Min:</label>'
        var inpMinimo = '<input class="form-control form-control-sm input-sm col-2 light" id="pontoMinimo"></input>'
        var lblMaximo = '<label class="medium col-2">Ponto Max:</label>'
        var inpMaximo = '<input class="form-control form-control-sm input-sm col-2 light" id="pontoMaximo"></input>'
        var lblMenor = '<label class="medium col-2">Menor:</label>'
        var inpMenor = '<input class="form-control form-control-sm input-sm col-2 light" id="menor"></input>'

        div.append(lblMinimo);
        div.append(inpMinimo);
        div.append(lblMaximo);
        div.append(inpMaximo);
        div.append(lblMenor);
        div.append(inpMenor);

    } else if (choice == 3){

        var div = $("#divUniforme");
        div.empty();

        var lblMinimo = '<label class="medium col-4">Ponto Min:</label>'
        var inpMinimo = '<input class="form-control form-control-sm input-sm col-2 light" id="pontoMinimo"></input>'
        var lblMaximo = '<label class="medium col-4">Ponto Max:</label>'
        var inpMaximo = '<input class="form-control form-control-sm input-sm col-2 light" id="pontoMaximo"></input>'
        var lblEntreOne = '<label class="medium col-4">Entre:</label>'
        var inpEntreOne = '<input class="form-control form-control-sm input-sm col-2 light" id="entreOne"></input>'
        var lblEntreTwo = '<label class="medium col-4">E:</label>'
        var inpEntreTwo = '<input class="form-control form-control-sm input-sm col-2 light" id="entreTwo"></input>'

        div.append(lblMinimo);
        div.append(inpMinimo);
        div.append(lblMaximo);
        div.append(inpMaximo);
        div.append(lblEntreOne);
        div.append(inpEntreOne);
        div.append(lblEntreTwo);
        div.append(inpEntreTwo);

    }
});

// Função de calculo para opção Menor da Distribuição Uniforme
// Calcula a probabilidade do resultado ser um valor maior que o valor digitado pelo usuario
// Considerando os pontos minimo e maximos também digitados pelo usuario
function maiorUniforme(){

    // Captura o div que recebe o resultado dos calculos
    var jumbotron = $("#jumbotronUniforme");
    // Variavel que recebe o valor de Ponto Minimo
    var pontoMinimo = parseFloat($("#pontoMinimo").val());
    // Variavel que recebe o valor de Ponto Maximo
    var pontoMaximo = parseFloat($("#pontoMaximo").val());
    // Variavel que recebe o valor de comparação
    var maior = parseFloat($("#maior").val());
    // Variavel que recebe a diferença entre o Ponto Minimo e o valor de comparação
    var diferenca = pontoMaximo - maior
    // Variavel que recebe o título do resultado, para o usuario entender o que signifca o resultado
    var tituloProb = '<h5 class="medium" style="font-size: 14px;">A probalidade do resultado ser maior que ' + maior + ' é de:</h5>'
    // Variavel que recebe o título do resultado, para o usuario entender o que signifca o resultado
    var tituloMed = '<h5 class="medium" style="font-size: 14px;">A Media, Variân2cia e o Desvio Padrão são:</h5>'
    // Variavel que receve o resultado do calculo da probabilidade com base nos valores informados
    var result = parseFloat(((1/(pontoMaximo-pontoMinimo))*diferenca)*100).toFixed(2);
    // Variavel que recebe o resultado calculado e prepara para ser adicionado a div junto ao titulo
    // Esse valor é informado em porcentagem(%)
    var prob = '<a class="light">' + result +'%</a>'
    // Variavel que recebe a media
    var media = '<a class="light">' + (((pontoMaximo - pontoMinimo)/2)+pontoMinimo) +' </a>'

    // Adiciona o titulo ao div
    jumbotron.append(tituloProb);
    // Adiciona o resultado ao div
    jumbotron.append(prob);
    // Adiciona o titulo ao div
    jumbotron.append(tituloMed);
    // Adiciona o resultado ao div
    jumbotron.append(media);

}
// -- Fim da função de calcular a probabilidade de valor menor

// Função de calculo para opção Menor da Distribuição Uniforme
// Calcula a probabilidade do resultado ser um valor menor que o valor digitado pelo usuario
// Considerando os pontos minimo e maximos também digitados pelo usuario
function menorUniforme(){

    // Captura o div que recebe o resultado dos calculos
    var jumbotron = $("#jumbotronUniforme");
    // Variavel que recebe o valor de Ponto Minimo
    var pontoMinimo = parseFloat($("#pontoMinimo").val()).toFixed(2);
    // Variavel que recebe o valor de Ponto Maximo
    var pontoMaximo = parseFloat($("#pontoMaximo").val()).toFixed(2);
    // Variavel que recebe o valor de comparação
    var menor = parseFloat($("#menor").val()).toFixed(2);
    // Variavel que recebe a diferença entre o Ponto Minimo e o valor de comparação
    var diferenca = menor - pontoMinimo
    // Variavel que recebe o título do resultado, para o usuario entender o que signifca o resultado
    var h5 = '<h5 class="medium" style="font-size: 14px;">A probalidade do resultado ser menor que ' + menor + ' é de:</h5>'
    // Variavel que receve o resultado do calculo da probabilidade com base nos valores informados
    var result = parseFloat(((1/(pontoMaximo-pontoMinimo))*diferenca)*100).toFixed(2);
    // Variavel que recebe o resultado calculado e prepara para ser adicionado a div junto ao titulo
    // Esse valor é informado em porcentagem(%)
    var resultado = '<a class="light">' + result +'%</a>'
    // Limpando todo os dados no Jumbotro
    jumbotron.empty();

    // Adiciona o titulo ao div
    jumbotron.append(h5);
    // Adiciona o resultado ao div
    jumbotron.append(resultado);

}
// -- Fim da função de calcular a probabilidade de valor menor

// Função de calculo para opção Entre da Distribuição Uniforme
// Calcula a probabilidade do resultado ser um valor entre dois valores digitados pelo usuario
// Considerando os pontos Minimos e Maximos, também informados pelo usuario
function entreUniforme(){

    // Captura a div que recebera o resultado dos calculos
    var jumbotron = $("#jumbotronUniforme");
    // Variavel que recebe o valor de Ponto Minimo que será digitada pelo usuario
    var pontoMinimo = parseFloat($("#pontoMinimo").val()).toFixed(2);
    // Variavel que recebe o valor de Ponto Maximo que será digitada pelo usuario
    var pontoMaximo = parseFloat($("#pontoMaximo").val()).toFixed(2);
    // Variavel que recebe o valor minimo de comparação, sempre maior que o ponto Minimo e menor que o valor maximo de comparação
    var entreOne = parseFloat($("#entreOne").val()).toFixed(2)
    // Variavel que recebe o valor maximo de comparação, sempre menor que o ponto maximo e maior que o valor minimo de comparação
    var entreTwo = parseFloat($("#entreTwo").val()).toFixed(2)

    // IF para verificar se o valor minimo de comparação é maior que o valor maximo
    // IF para previnir que a diferença desses valores saiam negativas
    // Caso o primeiro valor digitado pelo usuario - valor minimo de comparação - for maior que o segundo valor - valor maximo de comparação -
    if (entreOne > entreTwo){
        // Variavel que recebe a diferença dos valores minimos e maximos para comparação
        var diferenca = entreOne - entreTwo
        // Variavel que recebe o Título do resultado, para o usuario entender o que significa o resultado
        var h5 = '<h5 class="medium" style="font-size: 14px;">A probalidade do resultado ser entre ' + entreOne + ' e ' + entreTwo + ' é de:</h5>'
    // Caso o primeiro valor digitado pelo usuario - valor minimo de comparação - for menor que o segundo valor - valor maximo de comparação -
    } else {
        // Variavel que recebe a diferença dos valores minimos e maximos para comparação
        var diferenca = entreTwo - entreOne
        // Variavel que recebe o título do resultado, para o usuario entender o que significa o resultado
        var h5 = '<h5 class="medium" style="font-size: 14px;">A probalidade do resultado ser entre ' + entreTwo + ' e ' + entreOne + ' é de:</h5>'
    }
    
    // Variavel que recebe o resultado do calculo da probabilidade com base nos valore informados
    var result = parseFloat(((1/(pontoMaximo-pontoMinimo))*diferenca)*100).toFixed(2);
    // Variavel que recebe o resultado calculado e prepara para ser adicionado a div junto ao título
    // Esse valor é informado em porcentagem(%)
    var resultado = '<a class="light">' + result +'%</a>'

    // Adiciona o título à div
    jumbotron.append(h5);
    // Adiciona o resultado a div
    jumbotron.append(resultado);


}
// -- Fim da função de calcular a probabilidade entre dois valores

// Ações e verificações para quando houver o click do botão Gerar de Distribuição Uniforme 
$("#gerarUniforme").click(function(){
    
    // Atribui a choice, a escolha do tipo de Distribuição Uniforme
    var choice = $("#calcUniforme").val()

    //IF para verificar qual opção foi escolhida e executar as devidas ações
    if (choice == 1){

        // Caso a opção seja Maior, executa a função abaixo
        maiorUniforme();

    } else if (choice == 2){

        // Caso a opção seja Menor, executa a função abaixo
        menorUniforme();

    } else if (choice == 3){

        // Caso a opção seja Entre, executa a função abaixo
        entreUniforme();

    }

})
// -- Fim da ação de Click do botão Gerar de Distribuição Uniforme