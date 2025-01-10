function username1() {
  const userName = document.getElementById('my-account').innerHTML;
  
  document.getElementById('UserGreeting').innerHTML = "Welcome" + " " + userName;
  };
  username1();
