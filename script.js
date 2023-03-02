const display = document.querySelector("#display");//el id 
const buttons = document.querySelectorAll("button"); //seleccionamos todos los botones

//recorreremos todos los botones

buttons.forEach((item)=>{ //por el item recorro todos los botones
    item.onclick=()=>{

        if (item.id=="clear") { //si el boton es clear
            display.innerText=""; //inner lo que hara es borrar el texto interior
        }else if(item.id=="backspace"){

            let string = display.innerText.toString(); //toString lo estamos convirtiendo a tipo letra
            display.innerText = string.substr(0,string.length-1); //nos va extraer el ultimo caracter para borrar

        }else if(display.innerText != "" && item.id == "equal"){
            display.innerText = eval(display.innerText); // hace la aritmetica 

        }else if(display.innerText == "" && item.id == "equal"){
            display.innerText = "Null";
            setTimeout(()=>(display.innerText = ""), 2000);//ejecuta un codigo en determinado tiempo

        }else{
            display.innerText+=item.id;  //va ir acumulando las operaciones

        }
    }  //quiero reconocer el clik en el boton

})

