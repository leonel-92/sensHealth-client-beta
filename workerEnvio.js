function envioServer() {

self.addEventListener('message',function (e) {
	var coor = e.data;
	console.log("Datos: "+ coor);
	//Envío de datos al servidor
	var valores = JSON.parse(coor);
	console.log("valores: "+valores.cliente);
	console.log("frecuencia: "+valores.frecuencia);
	console.log("posicion: "+valores.posicion.x+"  "+valores.posicion.y);



var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
xmlhttp.open("POST", "http://localhost:8080/posiciones");
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xmlhttp.send(JSON.stringify({cliente: valores.cliente,
        frecuencia:valores.frecuencia,
        posicion:{x:valores.posicion.x,y:valores.posicion.y},
        fechalocal: valores.fechalocal

      }));



},false);


	setTimeout("envioServer()",5000);
}
envioServer();
