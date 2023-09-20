// Event section More Information dropdown 

let clickedState = {};


function toggleInfoOnHover(id) {
  if (!clickedState[id]) {  
    let element = document.getElementById(id);
    element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
  }
}

function toggleInfoOnClick(id) {
  let element = document.getElementById(id);
  clickedState[id] = !clickedState[id];  
  element.style.display = 'block';  
}
