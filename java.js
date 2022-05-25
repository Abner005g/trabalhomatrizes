document.write("<hr><h1> Soma de Matrizes </h1>")
//
var matriz = [];

matrizt = prompt("digite o tamanho da matriz ");

for(var i = 0 ; i < matrizt ; i++){
    matriz.push([0,0,0]);
    for(var x = 0 ; x< matrizt ; x++){
        matriz[i][x] = Math.floor(Math.random()*100);
    }
}

document.write("<div>")

document.write("<table border='1' class=direita>");
for( i = 0 ; i < matrizt ; i++){
    var linha = "<tr>" ; 
    for( x = 0 ; x < matrizt ; x++){
        linha = linha + "<td>" + matriz [i][x] + "</td>";
    }
    linha = linha + "</tr>";
    document.write(linha);
}

document.write("</div>")


      document.write("<div> <br>")    
  //    
      var matriz2 = [];


for(var i = 0 ; i < matrizt ; i++){
    matriz2.push([0,0,0]);
    for(var x = 0 ; x< matrizt ; x++){
        matriz2[i][x] = Math.floor(Math.random()*100);
    }
}

document.write("<table border='1' class=direita>");
for( i = 0 ; i < matrizt ; i++){
    var linham2 = "<tr>" ; 
    for( x = 0 ; x < matrizt ; x++){
        linham2 = linham2 + "<td>" + matriz2 [i][x] + "</td>";
    }
    linham2 = linham2 + "</tr>";
    document.write(linham2);
}

document.write("</div>")
//
document.write("<p class=gg>   +   </p>")

var matriz3 = [];


for(var i = 0 ; i < matrizt ; i++){
    matriz3.push([0,0,0]);
    for(var x = 0 ; x< matrizt ; x++){
        matriz3[i][x] =  matriz[i][x] + matriz2[i][x];
    }
}

document.write("<table border='1' class=direita>");
for( i = 0 ; i < matrizt ; i++){
    var linham3 = "<tr>" ; 
    for( x = 0 ; x < matrizt ; x++){
        linham3 = linham3 + "<td>" + matriz3 [i][x] + "</td>";
    }
    linham3 = linham3 + "</tr>";
    document.write(linham3);
}



document.write("<p class=gg>   =   </p>")
