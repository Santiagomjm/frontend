function guardar() {
    let cliente_ingresado = document.getElementById("cliente").value //input
    let cuit_ingresado = document.getElementById("cuit").value 
    let fecha_ingresada = document.getElementById("fecha").value 
    let encargo_ingresado = document.getElementById("encargo").value 

    console.log(cliente_ingresado,cuit_ingresado,fecha_ingresada,encargo_ingresado);
    // Se arma el objeto de js 
    let datos = {
        cliente: cliente_ingresado,
        cuit:cuit_ingresado,
        fecha:fecha_ingresada,
        encargo:encargo_ingresado
    }
    console.log(datos);
    
    let url = "https://catalinatransporte.pythonanywhere.com/registro"
    var options = {
        body: JSON.stringify(datos),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            window.location.href = "../index.html";  
            
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}