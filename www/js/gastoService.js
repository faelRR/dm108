

var GastoService = {

    gastos: new Array(),

    getAll: function(){      
       // return this.gastos;

       var retorno = new Array();

       NativeStorage.getItem("gastos" , 
            function(obj){
                retorno.push(obj);
            } , 
            function(error){
                retorno = Array();
            } 
       )

       return retorno;

    },

    getGastoByDescricao: function(titulo){
        for (var i = 0; i < this.gastos.length; i++) {
            var index = this.gastos[i].gasto.indexOf(gasto);
            if (index > -1) {
                return this.gastos[i];
            }
        }
    },

    add: function(descricao, data, valor) {
        var gasto = new Gasto(descricao, data, valor);

        NativeStorage.setItem("gastos" , gasto , 
        function(obj){
            alert("Adicionado com sucesso [" + descricao + "]");        
        } , 
        function(error){
            alert("erro" + error);        
        });

        //gasto.id = this.gastos.length;
        //this.gastos.push(gasto);
    },

    remove: function(descricao){
        for (var i = this.gastos.length - 1; i >= 0; i--) {
            var index = this.gastos[i].gasto.indexOf(descricao);
            if (index > -1) {
                this.gastos.splice(index, 1);
            }
        }
        
    },

    edit: function(gasto){
        for (var i = 0; i < this.gastos.length; i++) {
            if (this.gastos[i].id == gasto.id) {
                this.gastos[i] = gasto;
                break;
            }
        }
    }

}