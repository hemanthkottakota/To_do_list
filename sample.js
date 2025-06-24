function hello(){
    let inp = document.getElementById("mainInput");
    let items = document.getElementById("item");
    items.innerHTML += inp.value + "<br>";
    document.getElementById("mainInput").value="";
    

}