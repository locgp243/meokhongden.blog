var animationElements = document.querySelectorAll('.show-on-scroll')
   
function toggleAnimationElementInWindow(element){
   
    var rect = element.getClientRects()[0];
 
    
    var heightScreen = window.innerHeight;

    if((rect.bottom < 0 || rect.top > heightScreen)){
        element.classList.remove('start');
    }else{
        element.classList.add('start');
    }
}

function checkAnimation(){
    animationElements.forEach(function(el){
        toggleAnimationElementInWindow(el)
    })
}

window.onscroll = checkAnimation