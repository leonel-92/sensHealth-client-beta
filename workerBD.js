
var dataBase = null;
var db;

    var pacienteData = e.data;


dataBase = indexedDB.open("sensHealth",1);

dataBase.onupgradeneeded = function(event){
    active = dataBase.result;
    db =dataBase.result;
    console.log('active: '+active);
    object = active.createObjectStore("paciente",{keypath:'id',autoIncrement:true});

    object.createIndex("by_nombre", "nombre",   { unique: false });
    object.createIndex("by_pulso", "pulso",     { unique: false });
    object.createIndex("by_latitud", "latitud", { unique: false });
    object.createIndex("by_longitud", "longitud", { unique: false });
    object.createIndex("by_fecha", "fecha",     { unique: false });
};

    dataBase.onsuccess = function(event){
        console.log('Base de datos cargada correctamente');
    };

    dataBase.onError = function(event){
        console.log('Error al cargar la base de datos');
    };



function add(){
    console.log('add(): '+JSON.stringify(pacienteData));

     active = dataBase.result;
    var data = active.transaction(["paciente"],"readwrite");
    var object = data.objecStore("paciente");

    var request = object.put({
        nombre: pacienteData.nombre,
        pulso: pacienteData.pulso,
        latitud: pacienteData.latitud,
        longitud: pacienteData.longitud,
        fecha: pacienteData.fecha
    });

        request.onerror = function(event){
            console.log(request.error.name + '\n\n' + request.error.message);
        }

        request.oncomplete = function(event){

            console.log('Objeto agregado correctamente');
        }
    }
    add();


/*

self.onmessage =function(e){
 var dataBase = null;
 var i=0;
                startDB();
                function startDB() {

                    dataBase = indexedDB.open("object", 1);

                    dataBase.onupgradeneeded = function (e) {

                        active = dataBase.result;

                        object = active.createObjectStore("people", { keyPath : 'id', autoIncrement : true });
                        object.createIndex('by_name', 'name', { unique : false });
                        object.createIndex('by_dni', 'dni', { unique : true });
                    };

                    dataBase.onsuccess = function (e) {
                        console.log('Base de datos cargada correctamente');

                    };

                    dataBase.onerror = function (e)  {
                        console.log('Error cargando la base de datos');
                    };

                }
                for( i =0;i<10;i++){

                add();
                }
                function add() {
                    var active = dataBase.result;
                    var data = active.transaction(["people"], "readwrite");
                    var object = data.objectStore("people");

                    var request = object.put({
                        dni: document.querySelector("#dni").value,
                        name: document.querySelector("#name").value,
                        surname: document.querySelector("#surname").value
                    });

                    request.onerror = function (e) {
                        console.log(request.error.name + '\n\n' + request.error.message);
                    };

                    data.oncomplete = function (e) {
                        document.querySelector("#dni").value = '';
                        document.querySelector("#name").value = '';
                        document.querySelector("#surname").value = '';
                        console.log('Objeto agregado correctamente');
                    };

                }
}
*/
