

window.onload = function () {
    var sale = [];var html="";
    var request = new XMLHttpRequest();
    if (request) {
        request.open("GET", "sales.json");
        request.onload = function () {
            if (request.status == 200) {
                sale = JSON.parse(request.responseText);
                for(var i=0;i<sale.length;i++){
                    html+="<div class='saleItem'>"+sale[i].name+" sold "+sale[i].sales+" gumballs</div>";
                }
                sales.innerHTML=html;
            }
        }
        request.send();
    }
}
