function myFunction(param) {
  console.log(param.id);
  var element = document.getElementById(param.id);
  console.log(element);
  element.classList.toggle("vision");
}
