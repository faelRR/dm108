var GastoController = {
    
        init: function (){
            //Register events via framework7
            $$(document).on("click", "#btnAddGasto", GastoController.goToAdd);
            $$(document).on("click", "#save", GastoController.save);
            $$(document).on("click", "#cancel", GastoController.cancel);
    
            //load list
            GastoController.refreshGastoList();
        },
    
        goToAdd: function () {
            //Framework7 carregando a página addGasto
            mainView.router.loadPage("addGasto.html");
        },
    
        save: function(){
            var descricao = $$("#descricao").val();
            var data = $$("#data").val();
            var valor = $$("#valor").val();
            var id = $$("#id").val();

    
            if (!id) {
                GastoService.add(descricao, data, valor);
            } else {
                var gasto = new Gasto(descricao, data, valor);
                gasto.id = id;
                GastoService.edit(gasto);
            }
            
            //refresh list
            GastoController.refreshGastoList();
        },
    
        cancel: function(){
            GastoController.refreshGastoList();
        },
    
        refreshGastoList: function(){
            //back to view
            mainView.router.back();
    
            // listar do banco de dados ----------    

             var gastoList = GastoService.getAll();
            //virtual list framework 7
            //myApp.virtualList('.list-block.virtual-list', {

            myApp.virtualList('.list-block.media-list', {
                items: gastoList,
                // Template 7 template ira renderizar os itens
                // template: 
                //   '<li>' +
                //   '   <a href="addGasto.html?id={{id}}&descricao={{descricao}}&data={{data}}&valor={{valor}}" class="item-link">'+
                //   '       <div class="item-content">' + 
                //   '          <div class="item-inner">' +
                //   '             <div class="item-title">{{descricao}}</div>' +
                //   '             <div class="item-title">{{valor}}</div>' +
                //   '             <div class="item-after">{{data}}</div>' +
                //   '          </div>' +
                //   '       </div>' +
                //   '   </a>' +
                //   '</li>'


                template: 
                        '<li>'+
                        '  <a href="addGasto.html?id={{id}}&descricao={{descricao}}&data={{data}}&valor={{valor}}" class="item-link item-content">'+
                        '    <div class="item-inner">'+
                        '      <div class="item-title-row">' +
                        '        <div class="item-title">{{descricao}}</div>' +
                        '        <div class="item-after">{{data}}</div>' +
                        '      </div>' +
                        '      <div class="item-subtitle">New messages from John Doe</div>' +
                        '      <div class="item-text">Lorem ipsum dolor sit amet...</div>' +
                        '    </div>' +
                        '  </a>' +
                        '</li>' 


            });
        },

            // //virtual list framework 7
            // myApp.virtualList('.list-block.virtual-list', {
            //     items: todoList,
            //     // Template 7 template ira renderizar os itens
            //     template: '<li>' +
            //     '<a href="addTodo.html?id={{id}}&titulo={{titulo}}&data={{userID}}" class="item-link">'+
            //                   '<div class="item-content">' + 
            //                         '<div class="item-inner">' +
            //                     '<div class="item-title">{{titulo}}</div>' +
            //                     '<div class="item-after">{{data}}</div>' +
            //                         '</div>' +
            //                    '</div>' +
            //                 '</a>' +
            //                '</li>'
            // });

        //native storage
        // onSuccess: function(data){
        //     NativeStorage.getItem("dm108", 
        //         function onSuccess(obj){
        //             alert(obj.name);
        //         },

        //         function onError(err){
        //             console.log(err);
        //         }
        //     );
        // },

        // onError: function(){

        // }
    }