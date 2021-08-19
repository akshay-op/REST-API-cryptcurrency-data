fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cripple&vs_currencies=usd%2Cinr&include_24hr_change=true")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayCrypto(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  function displayCrypto(data) {

    const bitDiv = document.getElementById("bitD");
    const bitDivC=document.getElementById("bitDC");
    const ethDiv=document.getElementById("ethD");
    const ethDivC=document.getElementById("ethDC");
    const ripDiv=document.getElementById("ripD");
    const ripDivC=document.getElementById("ripDC");

   var bitdiv = document.createElement("div");
   var bitdivc=document.createElement("div");
   var ethdiv=document.createElement("div");
   var ethdivc=document.createElement("div");
   var ripdiv=document.createElement("div");
   var ripdivc=document.createElement("div")

   bitdiv.innerHTML=' ₹ '+data.bitcoin['inr'];
   bitDiv.appendChild(bitdiv);
   var numB=data.bitcoin['inr_24h_change'];
   if(numB>=0){
   bitdivc.innerHTML='<span style="color:green">'+ '🡹 '+data.bitcoin['inr_24h_change'].toFixed(1)+'%'+'</span>';
   bitDivC.appendChild(bitdivc);
   }
   else{
   bitdivc.innerHTML='<span style="color:red">'+'🡻 '+ data.bitcoin['inr_24h_change'].toFixed(1)+'</span>';
   bitDivC.appendChild(bitdivc);
   }


   ethdiv.innerHTML=' ₹ '+data.ethereum['inr'];
   ethDiv.appendChild(ethdiv);
   var numE=data.ethereum['inr_24h_change'];
   if(numE>=0){
   ethdivc.innerHTML='<span style="color:green">'+'🡹 '+ data.ethereum['inr_24h_change'].toFixed(1)+'%'+'</span>';
   ethDivC.appendChild(ethdivc);
   }
   else{
   ethdivc.innerHTML='<span style="color:red">'+'🡻 '+ data.ethereum['inr_24h_change'].toFixed(1)+'</span>';
   ethDivC.appendChild(ethdivc);
   }


   ripdiv.innerHTML=' ₹ '+data.ripple['inr'];
   ripDiv.appendChild(ripdiv);
   var numR=data.ripple['inr_24h_change'];
   if(numR>=0){
   ripdivc.innerHTML='<span style="color:green">'+'🡹 '+ data.ripple['inr_24h_change'].toFixed(1)+'%'+'</span>';
   ripDivC.appendChild(ripdivc);
   }
   else{
   ripdivc.innerHTML='<span style="color:red">'+'🡻 '+ data.ripple['inr_24h_change'].toFixed(1)+'</span>';
   ripDivC.appendChild(ripdivc);
   }

  }
