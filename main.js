$(document).ready(function(){
   
   var client_id = "918783008007-318ia0dskiekssjl464qll4t61e69rar.apps.googleusercontent.com";


   var redirect_uri = "http://localhost/GoogleDRive/upload.html";


   var scope = "https://www.googleapis.com/auth/drive";


   var url = "";



   $("#login").click(function(){


      signIn(client_id,redirect_uri,scope,url);

   });

   function signIn(client_id,redirect_uri,scope,url){
    

      url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
      +"&prompt=consent&response_type=code&client_id="+client_id+"&scope="+scope
      +"&access_type=offline";


      window.location = url;




   }



});