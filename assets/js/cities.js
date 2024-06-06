var cities = [
  { 
      city: "Adana", 
      famousFor: "Kebap", 
      type: "food", 
      plateNumber: "01" 
  },
  { 

      city: "Ankara", 
      famousFor: "Simit", 
      type: "food", 
      plateNumber: "06" 
  },
  { 
      city: "İstanbul", 
      famousFor: "Boğaz", 
      type: "place", 
      plateNumber: "34" 
  },
  { 
      city: "İzmir", 
      famousFor: "Boyoz", 
      type: "food", 
      plateNumber: "35" 
  },
  { 
      city: "Bursa", 
      famousFor: "İskender Kebabı", 
      type: "food", 
      plateNumber: "16" 
  },
  { 
      city: "Antalya", 
      famousFor: "Düden Şelalesi", 
      type: "place", 
      plateNumber: "07" 
  },
  { 
      city: "Gaziantep", 
      famousFor: "Baklava", 
      type: "food", 
      plateNumber: "27" 
  },
  { 
      city: "Konya", 
      famousFor: "Etli Ekmek", 
      type: "food", 
      plateNumber: "42" 
  },
  { 
      city: "Trabzon", 
      famousFor: "Hamsi", 
      type: "food", 
      plateNumber: "61" 
  },
  { 
      city: "Kayseri", 
      famousFor: "Mantı", 
      type: "food", 
      plateNumber: "38" 
  },
  { 
      city: "Eskişehir", 
      famousFor: "Lületaşı", 
      type: "place", 
      plateNumber: "26" 
  },
  { 
      city: "Rize", 
      famousFor: "Çay", 
      type: "food", 
      plateNumber: "53" 
  },
  { 
      city: "Erzurum", 
      famousFor: "Cağ Kebabı", 
      type: "food", 
      plateNumber: "25" 
  },
  { 
      city: "Diyarbakır", 
      famousFor: "Karpuz", 
      type: "place", 
      plateNumber: "21" 
  },
  { 
      city: "Mardin", 
      famousFor: "Taş Evler", 
      type: "place", 
      plateNumber: "47" 
  },
  { 
      city: "Van", 
      famousFor: "Van Kedisi", 
      type: "place", 
      plateNumber: "65" 
  },
  { 
      city: "Sivas", 
      famousFor: "Kangal Köpeği", 
      type: "place", 
      plateNumber: "58" 
  },
  { 
      city: "Şanlıurfa", 
      famousFor: "Balıklıgöl", 
      type: "place", 
      plateNumber: "63" 
  },
  { 
      city: "Mersin", 
      famousFor: "Tantuni", 
      type: "food", 
      plateNumber: "33" 
  },
  { 
      city: "Muğla", 
      famousFor: "Turistik Yerleri", 
      type: "place", 
      plateNumber: "48" 
  },
  { 
      city: "Çanakkale", 
      famousFor: "Tarihi Gelibolu Yarımadası", 
      type: "place", 
      plateNumber: "17" 
  },
  { 
      city: "Hatay", 
      famousFor: "Antakya Mozaikleri", 
      type: "place", 
      plateNumber: "31" 
  },
  { 
      city: "İzmir", 
      famousFor: "Efes Antik Kenti", 
      type: "place", 
      plateNumber: "35" 
  },
  { 
      city: "Nevşehir", 
      famousFor: "Kapadokya", 
      type: "place", 
      plateNumber: "50" 
  },
  { 
      city: "Aydın", 
      famousFor: "Milet Antik Kenti", 
      type: "place", 
      plateNumber: "09" 
  }
];

city = document.querySelector('.city');

for (let i = 0; i < cities.length; i++) {
  city.innerHTML += `<ul class='sehir'> <li  data-index=${i}><h4>Şehir:</h4> ${cities[i].city}</li>` + `<li  data-index=${i}><h4>Meşhur:</h4>${cities[i].famousFor}</li>` + `<li  data-index=${i}><h4>Plaka:</h4>${cities[i].plateNumber}</li></ul>` ;
}

let food = document.querySelector('.food');

for (let i = 0; i < cities.length; i++) {
  if (cities[i].type === 'food') {
    food.innerHTML += `<ul class='sehir'> <li  data-index=${i}><h4>Şehir:</h4> ${cities[i].city}</li>` + `<li  data-index=${i}><h4>Meşhur:</h4>${cities[i].famousFor}</li>` + `<li  data-index=${i}><h4>Plaka:</h4>${cities[i].plateNumber}</li></ul>` ;
  }
}

let place = document.querySelector('.place');

for (let i = 0; i < cities.length; i++) {
  if (cities[i].type === 'place') {
    place.innerHTML += `<ul class='sehir'> <li  data-index=${i}><h4>Şehir:</h4> ${cities[i].city}</li>` + `<li  data-index=${i}><h4>Meşhur:</h4>${cities[i].famousFor}</li>` + `<li  data-index=${i}><h4>Plaka:</h4>${cities[i].plateNumber}</li></ul>` ;
  }
}

let plateNumber = parseInt(cities.plateNumber);
let doublePlate =document.querySelector('.doublePlate');
let singlePlate = document.querySelector('.singlePlate');


for (let i = 0; i < cities.length; i++) {
  if (cities[i].plateNumber % 2 === 0) {
    doublePlate.innerHTML += `<ul class='sehir'> <li  data-index=${i}><h4>Şehir:</h4> ${cities[i].city}</li>` + `<li  data-index=${i}><h4>Meşhur:</h4>${cities[i].famousFor}</li>` + `<li  data-index=${i}><h4>Plaka:</h4>${cities[i].plateNumber}</li></ul>` ;
  } else {
    singlePlate.innerHTML += `<ul class='sehir'> <li  data-index=${i}><h4>Şehir:</h4> ${cities[i].city}</li>` + `<li  data-index=${i}><h4>Meşhur:</h4>${cities[i].famousFor}</li>` + `<li  data-index=${i}><h4>Plaka:</h4>${cities[i].plateNumber}</li></ul>` ;
  }
}

