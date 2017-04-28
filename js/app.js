var texto = document.getElementById("random");
window.addEventListener("load", function (e){
  e.preventDefault();
  var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ123456789´";
  var contrasena = "";
  for (var i=0; i<6; i++) {
  contrasena += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
  }
  return texto.value = contrasena;
});
  var comprobar = document.getElementById("comparar");
  var enviar = document.getElementById("check");
  enviar.addEventListener("click",function(){

  if(comprobar.value == texto.value){
  alert("Comprobacion correcta");
  } else{
  alert("Intente otra vez");
  }
});
  var recargar = document.getElementById("reload");
  recargar.addEventListener("click",function(){
   location.reload();
  });
