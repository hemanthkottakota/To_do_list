function hello(){
    let inp = document.getElementById("mainInput");
    let items = document.getElementById("item");
    if(inp.value.trim()!=""){
    items.innerHTML += inp.value.trim() + "<br>";
    document.getElementById("mainInput").value="";

    }
    

}
