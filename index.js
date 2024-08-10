const commands = ["clear","list"]
function command(){
    if(document.body.querySelector("input").value.length!=0 && event.keyCode==13){
    if(document.body.querySelector("input").value=="clear"){
        document.body.querySelector(".prev_data").innerHTML="";
    }
    else{
    let a = document.createElement("div");
    a.innerText=document.body.querySelector("input").value;
    let out = document.createElement("div");
    if(!commands.includes(document.body.querySelector("input").value)){
        out.innerText="No such command found"
    }
    else{
        if(document.body.querySelector("input").value=="list"){
            out.innerText="clear : clear the screen\nlist : show all commands\n";
        }
    }
    document.body.querySelector(".prev_data").appendChild(a);
    document.body.querySelector(".prev_data").appendChild(out);
    }
    document.body.querySelector("input").value="";
}

}