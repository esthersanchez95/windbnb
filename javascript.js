window.addEventListener('load', () => {



var datosAlojamiento = [
    {
      "city": "Helsinki",
      "country": "Finland",
      "superHost": false,
      "title": "Stylist apartment in center of the city",
      "rating": 4.4,
      "maxGuests": 3,
      "type": "Entire apartment",
      "beds": 2,
      "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"
    },
    {
      "city": "Turku",
      "country": "Finland",
      "superHost": false,
      "title": "Nice apartment in center of Helsinki",
      "rating": 4.2,
      "maxGuests": 5,
      "type": "Entire apartment",
      "beds": 3,
      "photo": "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    },
    {
      "city": "Helsinki",
      "country": "Finland",
      "superHost": true,
      "title": "Arty interior in 1900 wooden house",
      "rating": 4.5,
      "maxGuests": 10,
      "type": "Entire house",
      "beds": 6,
      "photo": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    },
    {
      "city": "Helsinki",
      "country": "Finland",
      "superHost": false,
      "title": "Apartment next to market spuare",
      "rating": 4.48,
      "maxGuests": 3,
      "type": "Entire apartment",
      "beds": null,
      "photo": "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    },
    {
      "city": "Turku",
      "country": "Finland",
      "superHost": true,
      "title": "Villa Aurora guest-house",
      "rating": 4.75,
      "maxGuests": 9,
      "type": "Entire house",
      "beds": null,
      "photo": "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80"
    },
    {
      "city": "Vaasa",
      "country": "Finland",
      "superHost": true,
      "title": "A cosy family house",
      "rating": 4.95,
      "maxGuests": 6,
      "type": "Entire house",
      "beds": null,
      "photo": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    },
    {
      "city": "Vaasa",
      "country": "Finland",
      "superHost": false,
      "title": "Lovely Studio near Railway Station",
      "rating": 4.68,
      "maxGuests": 2,
      "type": "Private room",
      "beds": null,
      "photo": "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2591&q=80"
    },
    {
      "city": "Oulu",
      "country": "Finland",
      "superHost": false,
      "title": "Peaceful little home in city center",
      "rating": 4.12,
      "maxGuests": 6,
      "type": "Entire house",
      "beds": 3,
      "photo": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    },
    {
      "city": "Oulu",
      "country": "Finland",
      "superHost": false,
      "title": "Beautiful new studio apartment nearby the center",
      "rating": 4.49,
      "maxGuests": 2,
      "type": "Entire apartment",
      "beds": 1,
      "photo": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80"
    },
    {
      "city": "Oulu",
      "country": "Finland",
      "superHost": true,
      "title": "Cozy woodhouse flat with wooden sauna",
      "rating": 4.38,
      "maxGuests": 4,
      "type": "Entire house",
      "beds": null,
      "photo": "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=930&q=80"
    },
    {
      "city": "Vaasa",
      "country": "Finland",
      "superHost": false,
      "title": "Brand new studio apartment near the harbour",
      "rating": 4.89,
      "maxGuests": 6,
      "type": "Entire apartment",
      "beds": 3,
      "photo": "https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
    },
    {
      "city": "Helsinki",
      "country": "Finland",
      "superHost": false,
      "title": "Beautiful and comfortable old wooden house",
      "rating": 4.63,
      "maxGuests": 10,
      "type": "Entire house",
      "beds": null,
      "photo": "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
    },
    {
      "city": "Turku",
      "country": "Finland",
      "superHost": false,
      "title": "Turku Nordic Home near city center",
      "rating": 4.24,
      "maxGuests": 5,
      "type": "Entire apartment",
      "beds": 3,
      "photo": "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=2253&q=80"
    },
    {
      "city": "Turku",
      "country": "Finland",
      "superHost": true,
      "title": "Nice 2 room apartment close to everything",
      "rating": 4.34,
      "maxGuests": 6,
      "type": "Entire apartment",
      "beds": 3,
      "photo": "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80"
    }
  ];

  var caja_alojamiento = document.querySelectorAll('.alojamiento');
 
   /*
   //buscador
   var buscador = document.querySelectorAll('#list');
  
   for(x in datosAlojamiento){
     var pcity = document.createElement('li');
     pcity.append(datosAlojamiento[x].city);
     pcity.className='ciudad';
     console.log(pcity);
 
     var pcountry = document.createElement('li');
     pcountry.append(datosAlojamiento[x].country);
     pcountry.className='pais';
     console.log(pcountry);

    buscador[0].append(pcity, pcountry);
   };
   
 
  //////////

 let filter = document.getElementById('searchbox');

 filter.addEventListener('keyup', function(){
   var search = this.value.toLowerCase();
   var all = document.querySelectorAll('#list li');

   for(let i of all){
     let item = i.innerHTML.toLowerCase();
     if (item.indexOf(search) == -1){
       i.classList.add('hide');
     }
   }
 });
 */

   //alojamientos

  for(var i=0; i<=datosAlojamiento.length; i++){
    var ffoto = document.createElement('img');
    ffoto.append(datosAlojamiento[i].photo);
    ffoto.setAttribute("src", datosAlojamiento[i].photo);
    ffoto.className='alojFoto';

    var psuperhost = document.createElement('p');

    if(datosAlojamiento[i].superHost == false){
        psuperhost.style.display = "none";
    }else{psuperhost.append('SUPER HOST');};
    psuperhost.className='superhost';

    var pcamas = document.createElement('p');
    if(datosAlojamiento[i].beds == null){
        pcamas.append('');
    }else{pcamas.append(datosAlojamiento[i].beds + ' camas');};
    pcamas.className='camas';

    var prating = document.createElement('p');
    prating.append(datosAlojamiento[i].rating);
    prating.style.display = "inline";
    prating.className='rating';

    var estrella = document.createElement('img');
    estrella.src ="windbnb-master/estrella.png";
    estrella.className='star';
 
    

    var ptitle = document.createElement('h2');
    ptitle.append(datosAlojamiento[i].title);

    var ptype = document.createElement('p');
    ptype.append(datosAlojamiento[i].type);
    ptype.className='tipo';

    caja_alojamiento[i].append(ffoto, psuperhost, ptype, pcamas, estrella, prating, ptitle);
    
  };

 
/*
//alojamiento1
var caja_alojamiento1 = document.querySelector('#alojamiento1');

console.log(caja_alojamiento1);

    var ffoto = document.createElement('img');
    ffoto.append(datosAlojamiento[0].photo);
    ffoto.setAttribute("src", datosAlojamiento[0].photo);

    var psuperhost = document.createElement('p');

    if(datosAlojamiento[0].superHost == false){
        psuperhost.append('');
        console.log(psuperhost);
    }else{psuperhost.append('Superhost');};

    var pcamas = document.createElement('p');
    if(datosAlojamiento[0].beds == null){
        pcamas.append('');
    }else{psuperhost.append(datosAlojamiento[0].beds + ' camas');};

    var prating = document.createElement('p');
    pcamas.append(datosAlojamiento[0].rating);

    var ptitle = document.createElement('h2');
    ptitle.append(datosAlojamiento[0].title);

    var ptype = document.createElement('p');
    ptype.append(datosAlojamiento[0].type);
    

    caja_alojamiento1.append(ffoto, psuperhost, ptype, pcamas, prating, ptitle);

//alojamiento2
var caja_alojamiento2 = document.querySelector('#alojamiento2');

console.log(caja_alojamiento2);

    var ffoto = document.createElement('img');
    ffoto.append(datosAlojamiento[1].photo);
    ffoto.setAttribute("src", datosAlojamiento[1].photo);

    var psuperhost = document.createElement('p');
    if(datosAlojamiento[1].superHost == false){
        psuperhost.append('');
        console.log(psuperhost);
    }else{psuperhost.append('Superhost');};

    var pcamas = document.createElement('p');
    if(datosAlojamiento[1].beds == null){
        pcamas.append('');
    }else{psuperhost.append(datosAlojamiento[1].beds + ' camas');};

    var prating = document.createElement('p');
    pcamas.append(datosAlojamiento[1].rating);

    var ptitle = document.createElement('h2');
    ptitle.append(datosAlojamiento[1].title);

    var ptype = document.createElement('p');
    ptype.append(datosAlojamiento[1].type);
    

    caja_alojamiento2.append(ffoto, psuperhost, ptype, pcamas, prating, ptitle);

//alojamiento3
    var caja_alojamiento3 = document.querySelector('#alojamiento3');

    console.log(caja_alojamiento3);

    var ffoto = document.createElement('img');
    ffoto.append(datosAlojamiento[2].photo);
    ffoto.setAttribute("src", datosAlojamiento[2].photo);

    var psuperhost = document.createElement('p');
    if(datosAlojamiento[2].superHost == false){
        psuperhost.append('');
        console.log(psuperhost);
    }else{psuperhost.append('Superhost');};

    var pcamas = document.createElement('p');
    if(datosAlojamiento[2].beds == null){
        pcamas.append('');
    }else{psuperhost.append(datosAlojamiento[2].beds + ' camas');};

    var prating = document.createElement('p');
    pcamas.append(datosAlojamiento[2].rating);

    var ptitle = document.createElement('h2');
    ptitle.append(datosAlojamiento[2].title);

    var ptype = document.createElement('p');
    ptype.append(datosAlojamiento[2].type);
    

    caja_alojamiento3.append(ffoto, psuperhost, ptype, pcamas, prating, ptitle);

//alojamiento4
var caja_alojamiento4 = document.querySelector('#alojamiento4');

console.log(caja_alojamiento4);

    var ffoto = document.createElement('img');
    ffoto.append(datosAlojamiento[3].photo);
    ffoto.setAttribute("src", datosAlojamiento[3].photo);

    var psuperhost = document.createElement('p');
    if(datosAlojamiento[3].superHost == false){
        psuperhost.append('');
        console.log(psuperhost);
    }else{psuperhost.append('Superhost');};

    var pcamas = document.createElement('p');
    if(datosAlojamiento[3].beds == null){
        pcamas.append('');
    }else{psuperhost.append(datosAlojamiento[3].beds + ' camas');};


    var prating = document.createElement('p');
    pcamas.append(datosAlojamiento[3].rating);

    var ptitle = document.createElement('h2');
    ptitle.append(datosAlojamiento[3].title);

    var ptype = document.createElement('p');
    ptype.append(datosAlojamiento[3].type);
    

    caja_alojamiento4.append(ffoto, psuperhost, ptype, pcamas, prating, ptitle);

    //alojamiento5
    var caja_alojamiento5 = document.querySelector('#alojamiento5');

    console.log(caja_alojamiento5);

    var ffoto = document.createElement('img');
    ffoto.append(datosAlojamiento[4].photo);
    ffoto.setAttribute("src", datosAlojamiento[4].photo);

    var psuperhost = document.createElement('p');
    if(datosAlojamiento[4].superHost == false){
        psuperhost.append('');
        console.log(psuperhost);
    }else{psuperhost.append('Superhost');};

    var pcamas = document.createElement('p');
    if(datosAlojamiento[4].beds == null){
        pcamas.append('');
    }else{psuperhost.append(datosAlojamiento[4].beds + ' camas');};

    var prating = document.createElement('p');
    pcamas.append(datosAlojamiento[4].rating);

    var ptitle = document.createElement('h2');
    ptitle.append(datosAlojamiento[4].title);

    var ptype = document.createElement('p');
    ptype.append(datosAlojamiento[4].type);
    

    caja_alojamiento5.append(ffoto, psuperhost, ptype, pcamas, prating, ptitle);

//alojamiento6
    var caja_alojamiento6 = document.querySelector('#alojamiento6');

    console.log(caja_alojamiento6);

    var ffoto = document.createElement('img');
    ffoto.append(datosAlojamiento[5].photo);
    ffoto.setAttribute("src", datosAlojamiento[5].photo);

    var psuperhost = document.createElement('p');
    if(datosAlojamiento[5].superHost == false){
        psuperhost.append('');
        console.log(psuperhost);
    }else{psuperhost.append('Superhost');};

    var pcamas = document.createElement('p');
    if(datosAlojamiento[5].beds == null){
        pcamas.append('');
    }else{psuperhost.append(datosAlojamiento[5].beds + ' camas');};

    var prating = document.createElement('p');
    pcamas.append(datosAlojamiento[5].rating);

    var ptitle = document.createElement('h2');
    ptitle.append(datosAlojamiento[5].title);

    var ptype = document.createElement('p');
    ptype.append(datosAlojamiento[5].type);
    

    caja_alojamiento6.append(ffoto, psuperhost, ptype, pcamas, prating, ptitle);
*/
}); //final del load