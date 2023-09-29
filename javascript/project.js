let generate = document.getElementById('generate');
let ramdom = document.getElementById('ramdom')
function getcolor(){
    //hex code are colour codes 
    const random =Math.floor(Math.random() * 16777215)
    console.log(random)

    const randomcode = "#"+random.toString(16);
    document.body.style.backgroundColor=randomcode
    ramdom.innerHTML=randomcode
    generate.style.backgroundColor=randomcode
    

}



generate.addEventListener('click', function(){
    getcolor();

})

