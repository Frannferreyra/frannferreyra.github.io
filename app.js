//Menu 
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si se encuentra oculto oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Se oculta el menu al seleccionar una opcion
let links = document.querySelectorAll("nav a");
for(var x = 0; x < links.length; x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible
    }
}

//Se crean las barras de cada una identificadas por su id
function crearBarrar(id_barra){
    for(i = 0; i <= 19; i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//Seleccionamos todas las barras para manipularlas
let html = document.getElementById("html");
crearBarrar(html);

let javascript = document.getElementById("javascript");
crearBarrar(javascript);

let c = document.getElementById("c");
crearBarrar(c);

let net = document.getElementById("net");
crearBarrar(net);

let kotlin = document.getElementById("kotlin");
crearBarrar(kotlin);

let sql = document.getElementById("sql");
crearBarrar(sql);

//Ahora almacenaremos la cantidad de barras que se van a pintar
//Para eso se utilizamos un arreglo, asignando cada posicion a un elemento
//Cada elemento comienza en -1, indicando que aún no ha sido pintado
let contadores = [-1,-1,-1,-1,-1,-1];
//Variable tipo bandera para identificar si la animacion se ejecuto o no
let entro = false;

//Función que se encarga de aplicar las animaciones de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills >= 300 && entro == false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 19, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 17, 1, intervalJavascript);
        },100);
        const intervalC = setInterval(function(){
            pintarBarra(c, 15, 2, intervalC);
        },100);
        const intervalNet = setInterval(function(){
            pintarBarra(net, 14, 3, intervalNet);
        },100);
        const intervalKotlin = setInterval(function(){
            pintarBarra(kotlin, 18, 4, intervalKotlin);
        },100);
        const intervalSql = setInterval(function(){
            pintarBarra(sql, 18, 5, intervalSql);
        },100);
    }
}

//Se llena cada barra con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#913175";
    }else{
        clearInterval(interval)
    }
}

//Detectamos el scroll del mouse para ejecutar la animacion de la barra
window.onscroll = function(){
    efectoHabilidades();
}