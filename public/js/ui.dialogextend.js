$(function(){
  var last;

  var dialogToFront = function ( ) {
    $.each( $(".ui-dialog"), function ( k, d ) { 
        $( d ).removeClass( 'ui-dialog-frontmost' ); 
    });
    $( ".ui-dialog:last" ).addClass( 'ui-dialog-frontmost' ); 
  }
  
  // preview icon
  $("#config-icon select")
    .change(function(){
      var icon = "<span class='ui-icon "+$(this).val()+"'></span>";
      $(this).parents(".wrapper").find("ins").html(icon);
    })
    .trigger("change");


  // click to open dialog
  $("#new-dialog").click(function(){
    //dialog options
    var dialogOptions = {
      "title" : "dialog@" + new Date().getTime(),
      "width" : 400,
      "height" : 300,
      "modal" : false,
      "resizable" : true,
      "draggable" : true,
      "close" : function(){
        if(last[0] != this){
          $(this).remove(); 
        }
      }
    };
    if ( $("#button-cancel").is(":checked") ) {
      dialogOptions.buttons = { "Cancel" : function(){ $(this).dialog("close"); } };
    }
    // dialog-extend options
    var dialogExtendOptions = {
      "closeable" : true,
      "maximizable" : true,
      "minimizable" : true,
      "minimizeLocation" : 'right',
      "collapsable" : true,
      "dblclick" : 'minimize',
      "titlebar" : false,
    };
    $("#my-form [name=icon]").each(function(){
      if ( $(this).find("option:selected").html() != "(default)" ) {
        dialogExtendOptions.icons = dialogExtendOptions.icons || {};
        dialogExtendOptions.icons[$(this).attr("rel")] = $(this).val();
      }
    });
    $("#my-form [name=event]").each(function(){
      if ( $(this).is(":checked") ) {
        dialogExtendOptions[$(this).attr("rel")] = function(evt, a,b,c) {
          $(evt.target).prepend(evt.type+"@"+evt.timeStamp+"<br />");
        };
      }
    });
    console.log( $("<div />") );
    // open dialog
    last = $("<div />").dialog(dialogOptions).dialogExtend(dialogExtendOptions);
    $( ".ui-dialog:last" ).click( function ( e ) { 
        dialogToFront(); 
    }); 
    dialogToFront();
  });
  
  //click to reopen dialog
  $('#reopen-dialog').click(function(){
    last.dialog('open');
  });
  // click to invoke method
  $("#config-method button").click(function(){
    var command = $(this).text();
    var dialog = $(".ui-dialog:last").find(".ui-dialog-content");
    if ( $(dialog).length ) {
      if ( command == 'state' ) {
        alert( $(dialog).dialogExtend(command) );
      } else {
        $(dialog).dialogExtend(command);
      }
    }
  });

});