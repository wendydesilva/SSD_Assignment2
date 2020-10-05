$(document).ready(function(){

   //Client ID 
   var client_id = "918783008007-318ia0dskiekssjl464qll4t61e69rar.apps.googleusercontent.com";

   //The URI which the login page gets redirected
   var redirect_uri = "http://localhost/GoogleDRive/upload.html";

   //The scope of the project
   var scope = "https://www.googleapis.com/auth/drive";

   //The url which the user gets redirected
   var url = "";


   //The method invoked by the login button 
   $("#login").click(function(){


      signIn(client_id,redirect_uri,scope,url);

   });

   //The method which generates the authorization code
   function signIn(client_id,redirect_uri,scope,url){
    

      url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
      +"&prompt=consent&response_type=code&client_id="+client_id+"&scope="+scope
      +"&access_type=offline";


      window.location = url;




   }



});