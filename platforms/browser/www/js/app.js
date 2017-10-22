// Inicializacao
var myApp = new Framework7({
    material: true, //quando material:true nao suporta back link com navegacao dinamica
    template7Pages: true
});

// Exportando os seletores
var $$ = Dom7;

// Adicionando uma view principal
var mainView = myApp.addView('.view-main', {
    // Configurado para o modo de navegação dinâmico
    dynamicNavbar: true
});

//Plugin Dialogs 
// var alertCallback = function() { 
//     alert('alertCallback'); 
// };

// var geolocationSuccess = function(position){
//     alert("Latitude: " + position.coords.latitude + "\n" + 
//           "Logitude: " + position.coords.longitude);
// };

// var geolocationError = function(){
//     alert("Erro GPS");
// }



// var checkConnections= function() {
//         var networkState = navigator.connection.type; 
//         var states = {}; 
//         states[Connection.UNKNOWN] = 'Unknown connection'; 
//         states[Connection.ETHERNET] = 'Ethernet connection'; 
//         states[Connection.WIFI] = 'WiFi connection'; 
//         states[Connection.CELL_2G] = 'Cell 2G connection'; 
//         states[Connection.CELL_3G] = 'Cell 3G connection'; 
//         states[Connection.CELL_4G] = 'Cell 4G connection'; 
//         states[Connection.CELL] = 'Cell generic connection'; 
//         states[Connection.NONE] = 'No network connection'; 
//         alert('Conexão: ' + states[networkState]); 
//     }

//evento especifico do cordova
$$(document).on('deviceready', function() {
    // init statu bar
    //Statusbar.backgoundColorByHexString("#FF5722");

    // Dialog nativo
    //navigator.notification.alert( 'Minha mensagem!', app.alertCallback, 'Meu título', 'Salvar' ); 

    //navigator.vibrate([1000, 1000, 2000, 1000, 4000]);

    // checkConnections();    

        //native storage
    // var data = {name:"DM108", data: new Date().toLocaleDateString()};
    // NativeStorage.setItem("dm108",data, TodoController.onSuccess, TodoController.onError);

    // navigator.geolocation.getCurrentPosition( geolocationSuccess , geolocationError , 
    //         {enableHighAccuracy: true, timeout:15000, maximumAge:0}
    // );

    GastoController.init();
});