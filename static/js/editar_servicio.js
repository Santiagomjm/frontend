function modificar() {
    let id = document.getElementById("id").value;
    let cliente_ingresado = document.getElementById("cliente").value;
    let cuit_ingresado = document.getElementById("cuit").value; 
    let fecha_ingresada = document.getElementById("fecha").value; 
    let encargo_ingresado = document.getElementById("encargo").value; 

    let datos = {
        cliente: cliente_ingresado,
        cuit:cuit_ingresado,
        fecha:fecha_ingresada,
        encargo:encargo_ingresado
    }

    console.log(datos);

    let url = "https://catalinatransporte.pythonanywhere.com/update/"+id
    var options = {
        body: JSON.stringify(datos),
        method: 'PUT',        
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    };

    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")

            //Puedes utilizar window.location.href para obtener la URL actual, redirigir a otras páginas
           window.location.href = "../index.html";
          
        })
        .catch(err => {
            this.error = true
            console.error(err);
            alert("Error al Modificar")
        })      
}