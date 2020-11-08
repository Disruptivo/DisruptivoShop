let previousBtn = document.getElementById("previousBtn");
let item = document.getElementById("slideImg");
const slideArray = ['img/3.png', 'img/gorras/Gorras-07.png', 'img/1.png', 'img/gorras/Gorras-06.png', 'img/4.png', 'img/gorras/1.png', 'img/camisasMujeres/camisa11.png'];
let index = 0;

console.log(slideArray[0]);

function next() {

    console.log(index);
    item.src = slideArray[index];
    index ++;
    
    if( index > 6 || index < 0 ){
        index = 0;
    }
}
function previous() {

    console.log(index);
    item.src = slideArray[index];
    index --;
    
    if( index < 0){
        // previousBtn.style.display='none';
        index = slideArray.length-1;
        // manipular el css del boton
    }else if( index > 6 ){
        index = 0;
    }

}