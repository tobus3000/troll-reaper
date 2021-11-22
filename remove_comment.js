

var element = document.querySelector('#commentSection');
if (element != null){
    element.parentElement.removeChild(element);
    console.log("Removed Comments...")
}


