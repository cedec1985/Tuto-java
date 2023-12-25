function start()
   {
   var table=document.getElementById("factures");
   f = 0;
   while (f<factures.length)
       {
       var client = factures[f++];
       if (f>1)
          {
          var tr = table.appendChild(document.createElement("tr"));		
          tr.setAttribute("class", "empty");
          var td = tr.appendChild(document.createElement("td"));  
          td.setAttribute("colspan", "6"); 
          }
       var tr = table.appendChild(document.createElement("tr"));		
       tr.setAttribute("class", "title");
       var td = tr.appendChild(document.createElement("td"));  
       td.setAttribute("colspan", "6"); 
       td.appendChild(document.createTextNode(client[0]+" - date "+client[1]));
       var tr = table.appendChild(document.createElement("tr"));		
       tr.setAttribute("class", "subtitle");
       tr.appendChild(document.createElement("td")).appendChild(document.createTextNode("produit"));  
       tr.appendChild(document.createElement("td")).appendChild(document.createTextNode("quantitÃ©"));  
       tr.appendChild(document.createElement("td")).appendChild(document.createTextNode("total HTVA"));  
       tr.appendChild(document.createElement("td")).appendChild(document.createTextNode("taux TVA"));  
       tr.appendChild(document.createElement("td")).appendChild(document.createTextNode("TVA"));  
       tr.appendChild(document.createElement("td")).appendChild(document.createTextNode("total"));  
       var j=0;
       var grandTotalTVA=0;
       var grandTotalHTVA=0;
       var grandTotalTTC=0;
       while (j<client[2].length)
           {
	     var produit = client[2][j++];

           var total=produit[1] * produit[3];
           total = Math.round(total * 100) / 100;
           
           var tva  = total * produit[2] / 100;
           tva = Math.round(tva * 100) / 100;

           totalTTC = Math.round((total + tva) * 100) / 100;

           grandTotalTVA+=tva;
           grandTotalHTVA+=total;
           grandTotalTTC+=totalTTC;

           var tr = table.appendChild(document.createElement("tr"));		
           tr.appendChild(document.createElement("td")).appendChild(document.createTextNode(produit[0]));  
           tr.appendChild(document.createElement("td")).appendChild(document.createTextNode(produit[1]));  
           tr.appendChild(document.createElement("td")).appendChild(document.createTextNode(total));  
           tr.appendChild(document.createElement("td")).appendChild(document.createTextNode(produit[2]));  
           tr.appendChild(document.createElement("td")).appendChild(document.createTextNode(tva));  
           tr.appendChild(document.createElement("td")).appendChild(document.createTextNode(totalTTC));             	
           }

       var tr = table.appendChild(document.createElement("tr"));		
       tr.setAttribute("class", "subtitle");
       var td = tr.appendChild(document.createElement("td"));
       td.setAttribute("colspan", "2");
       td.appendChild(document.createTextNode("total"));  

       var td = tr.appendChild(document.createElement("td"));
       td.setAttribute("colspan", "2");
       td.appendChild(document.createTextNode(grandTotalHTVA));  

       var td = tr.appendChild(document.createElement("td"));
       td.appendChild(document.createTextNode(grandTotalTVA));  

       var td = tr.appendChild(document.createElement("td"));
       td.appendChild(document.createTextNode(grandTotalTTC));  
       }
   }