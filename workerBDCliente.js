var pacienteData, datosPaciente;
var indice;


self.onmessage = function(e) {
  pacienteData = e.data;


 /* var DBOpenRequest = indexedDB.open("Pacientes", 1);

    DBOpenRequest.onerror = function(event) {
    console.log('Error al abrir la base de datos');

  };

  DBOpenRequest.onsuccess = function(event) {
    console.log('Base de datos iniciliazada');

    // store the result of opening the database in the db variable. This is used a lot below
     db = DBOpenRequest.result;
      console.log('db: '+DBOpenRequest.result);

    // Run the displayData() function to populate the task list with all the to-do list data already in the IDB

DBOpenRequest.onupgradeneeded = function(event) {

    var db = event.target.result;

    db.onerror = function(event) {
      note.innerHTML += '<li>Error loading database.</li>';
    };
  var objectStore = db.createObjectStore("paciente", { keyPath: indice });
    // Create an index to search customers by name. We may have duplicates
    objectStore.createIndex("nombre", "nombre", { unique: false });

    objectStore.createIndex("pulso", "pulso", { unique: false });

    objectStore.createIndex("latitud", "latitud", { unique: false });

    objectStore.createIndex("longitud", "longitud", { unique: false });

    objectStore.createIndex("fecha", "fecha", { unique: false });
    console.log('i05yetrgjmiky6szr')


}
  };
function addData() {
  // Create a new object ready to insert into the IDB

    ////////////////////////////////////////************************************************************////////////////////////////////////

    /*
  console.log('Entre al addData()');
  var nuevoPaciente =[
  				{ indice: pacienteData.index, nombre: pacienteData.nombre, pulso: pacienteData.pulso, latitud: pacienteData.lat, longitud: pacienteData.lon, fecha: pacienteData.hoy   }
			];

  // open a read/write db transaction, ready for adding the data
  var transaction = db.transaction(["Pacientes"], "readwrite");

  // report on the success of opening the transaction
  transaction.oncomplete = function() {
    //note.innerHTML += '<li>Transaction completed: database modification finished.</li>';
    console.log('Transacción completada, modificación en base de datos terminada ');
  };

  transaction.onerror = function(event) {
  //note.innerHTML += '<li>Transaction not opened due to error. Duplicate items not allowed.</li>';
  console.log('Transacción no abierta, ERROR');
  };

  // create an object store on the transaction
  var objectStore = transaction.objectStore("Pacientes");
  console.log(objectStore.keyPath);

  // add our newItem object to the object store
  console.log('NuevoPaciente dsds: '+JSON.stringify(pacienteData));
  var objectStoreRequest = objectStore.add(pacienteData);

     objectStoreRequest.onerror = function(event){
        console.log('Error al agregar objeto al ObjectStore');
    };

  objectStoreRequest.onsuccess = function(event) {
    // report the success of our new item going into the database
   // note.innerHTML += '<li>New item added to database.</li>';
    console.log('Nuevo paciente agregado a la base de datos');
  };
  ////////////////*******************************************/////////////////////////////////////////////
   /*
};

     addData();

function muestraDatos()
{
  var objectStore = transaction.objectStore("Pacientes");
      console.log(objectStore.indexNames);
      console.log(objectStore.keyPath);
      console.log(objectStore.name);
      console.log(objectStore.transaction);
      console.log(objectStore.autoIncrement);
}
    //muestraDatos();
*/





















  var request = indexedDB.open("Senshealth",1);
  request.onerror = function(event) {
    self.postMessage("Error: "+event.target.errorCode);
  };
  request.onsuccess = function(event) {
    db = request.result;
    self.postMessage("Exito al realizar la peticion");
    console.log(JSON.stringify(pacienteData));
    //console.log(pacienteData.indice);
    indice = pacienteData.indice;



  }
  request.onupgradeneeded = function(event) {
    var db = event.target.result;
     console.log('Hola bd ')
    var objectStore = db.createObjectStore("datos", { keyPath: indice });
    // Create an index to search customers by name. We may have duplicates
    objectStore.createIndex("nombre", "nombre", { unique: false });

    objectStore.createIndex("pulso", "pulso", { unique: false });

    objectStore.createIndex("latitud", "latitud", { unique: false });

    objectStore.createIndex("longitud", "longitud", { unique: false });

    objectStore.createIndex("fecha", "fecha", { unique: false });
    // Use transaction oncomplete to make sure the objectStore creation is
    // finished before adding data into it.
  objectStore.transaction.oncomplete = function(event) {
    // Store values in the newly created objectStore.
    var pacienteObjectStore = db.transaction("datos", "readwrite").objectStore("Paciente");
      pacienteObjectStore.add(pacienteData);

    console.log(pacienteData);
    console.log("Guarde");
  }
  }


};
