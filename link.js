function valid() {
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value
  if (username == 'admin' && password == 'admin'){

    alert('welcome to shopping mall') 
    location.replace('promise.html')
  }
  else{
      alert('incorrect user name or password')
    }
  }
  
  