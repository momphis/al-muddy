$(function() {
    

$( ".dialog" ).dialog( { 'title' : 'Survey Test: Dialog #1', 'closeText' : 'x' } );
    
$( ".newDialog" ).click( function ( e ) { 
    var d = document.createElement( 'div' );
    $( d ).dialog( { 'title' : 'Dialog #'+ parseInt( ( $( ".ui-dialog" ).length )+1 ) });
    $( d ).text( 'we can make as many of them as we want' );
});

});