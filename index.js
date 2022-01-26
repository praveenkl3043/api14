const btn=document.getElementsByClassName("btn btn-primary");
const result=document.getElementsByClassName("data");

const url="https://coronavirus.m.pipedream.net/";

btn[0].addEventListener("click",async function (){


    result[0].innerHTML="loading...";
     try{
         let res= await fetch(url);
         let objet=await res.json();
         console.log(objet)
         result[0].innerHTML=`
         <h2 class="global">Global</h2> 
         <h6 class="confirmed">confirmed:<span>${objet.summaryStats.global.confirmed}</span></h6>
         <h6 class="death">deaths:<span>${objet.summaryStats.global.deaths}</span></h6>
         <h6 class="recovered">recovered:<span>${objet.summaryStats.global.recovered}</span></h6>
         <h2 class="china">China</h2>
         <h6 class="confirmedn">confirmed:<span>${objet.summaryStats.china.confirmed}</span></h6>
         <h6 class="deathsn">deaths:<span>${objet.summaryStats.china.deaths}</span></h6>
         <h6 class="recoveredn">recovered:<span>${objet.summaryStats.china.recovered}</span></h6>
         <h2 class="nonchina">Non China</h2>
         <h6 class="confirmedc">confirmed:<span>${objet.summaryStats.nonChina.confirmed}</span></h6>
         <h6 class="recoveredc">deaths:<span>${objet.summaryStats.nonChina.deaths}</span></h6>
         <h6 class="deathsc">recovered:<span>${objet.summaryStats.nonChina.recovered}</span></h6>
         <h2 class="lastupdated">Last Updated</h2>
         <h6 class="updated">updated:<span>${objet.cache.lastUpdated}</span></h6>
         <h2 class="expires">EXPIRES IN</h2>
         <h6 class="updated">expiresin:<span>${objet.cache.expires}</span></h6>

         `
     }catch (error){
         console.log(error);
         
     }
 });