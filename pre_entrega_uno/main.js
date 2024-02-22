function verificarRespuestas() {

    var total = 3;
    var puntos = 0;
    var myForm = document.forms["salimos_o_no"];
    var respuestas = ["d", "c", "a"];

    for (var i = 1; i <= total; i++) {
        if (myForm["p" + i].value === null || myForm["p" + i].value === "") {
            alert("Responde la pregunta " + i);
            return false;
        } else {
            if (myForm["p" + i].value === respuestas[i - 1]) {
                puntos++;
            }
        }
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Obtuviste  <span>" + puntos + "</span> de <span>" + total + "Puntos</span>";


    return false;
}