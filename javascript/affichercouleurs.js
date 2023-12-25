function afficherCouleurs(id,tr)
   {
   var div = document.getElementById("colorPick");
   var table = div.appendChild(document.createElement("table"));
   for (var i=0; i<16; i++)
       {
       var tr = table.appendChild(document.createElement("tr"));
       for (var j=0; j<16; j++)
           {
           var td = tr.appendChild(document.createElement("td"));
           td.setAttribute("style", "width:16px; height:16px; background-color:rgb("+(i*16)+","+(j*16)+",0);");
           }
       }
       onclick=function () {
        afficherBleu(id,tr);
        };
       
   }
   function afficherBleu(id,tr) 
   {
   var div = document.getElementById("colorSlide");
   var table = div.appendChild(document.createElement("table"));
   for (var i=0; i<16; i++)
       {
       var tr = table.appendChild(document.createElement("tr"));
       tr.setAttribute("style", "width:16px; height:16px; background-color:rgb(0,0,"+(i*16)+");");}}

       function effacerTableau()
       {
       var div = document.getElementById("colorPick");
       while (div.firstChild) div.removeChild(div.firstChild);
       div.appendChild(document.createElement(table));
       table.appendChild(document.createElement(tr));
       }