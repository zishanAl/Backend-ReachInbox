document.addEventListener('DOMContentLoaded', function() {
    const signinButton1 = document.getElementById('signin-btn-google');
  
    signinButton1.addEventListener('click', function() {
      
      window.location.href = 'http://localhost:3000/oauth-callback';
    });

    const signinButton2 = document.getElementById('signin-btn-ms');
  
    signinButton2.addEventListener('click', function() {
      
      window.location.href = 'http://localhost:4400/outlook/callback/outlook/signin';
    });
  });
  