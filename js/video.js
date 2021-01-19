/*document.querySelector('video.active').play();
var videos = document.querySelectorAll('video.item');
for(var i = 0; i < videos.length; i++) {
    videos[i].pause();
}*/
 
$('#modal1').on('hidden.bs.modal', function (e) {
    // do something...
    $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
  });
  
  $('#modal6').on('hidden.bs.modal', function (e) {
    // do something...
    $('#modal6 iframe').attr("src", $("#modal6 iframe").attr("src"));
  });
  
  $('#modal4').on('hidden.bs.modal', function (e) {
    // do something...
    $('#modal4 iframe').attr("src", $("#modal4 iframe").attr("src"));
  });
  $("video").each(function(){
    $(this).get(0).pause();
});
