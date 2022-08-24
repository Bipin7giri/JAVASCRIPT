const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
  console.log("hello")
}

function myStopFunction() {
  clearTimeout(myTimeout);
}