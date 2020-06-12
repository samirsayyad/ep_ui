exports.documentReady = function(){
    $('#pad_title').prepend('<a href="../../"><img class="logo" src="../static/images/logo.png"> </a>');
   
}
exports.aceEditorCSS = function(hook_name, cb){return ["/ep_ui/static/css/main.css"];} // inner pad CSS
