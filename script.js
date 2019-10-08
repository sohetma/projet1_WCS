document.querySelector('img').onclick = function() {addDescription()};
function addDescription()
{
  var tag = document.getElementById('description');
    tag.classList.toggle('description');
}