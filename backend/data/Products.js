
const products = [
    {
        id : "1",
        image : "/public/shop/kameno.jfif",
        name : "Gospa Sinjska",
        new_price : "46,45€",
        category:"Kip",
        description : "Suvenir izrađen od prirodnog kamena. Dostupan u različitim varijantama.",
        dimenzion : "Težina suvenira :340g",
        popular:false,
        new_collection:false
      
    },
    {
        image : "/public/shop/kip1.jpeg",
        name : "Kamena alka na staklu",
        new_price : "15,93€",
        category:"Kip",
        description : "Alka izrađena od prirodnog kamena. Nalazi se na drvenom postolju",
        dimenzion : "Promjer alke: 8cm",
        popular : false,
        new_collection: false
      
    },
    {
        
        image : "/public/shop/kip4.jpeg" ,
        name : "Vrličanka i momak" ,
        new_price : "59,09€",
        category:"Kip",
        description : "Statua izrađena od gipsa.Prikazuje djevojku u vrličkoj narodnoj nošnji.Rad je akademskog slikara. Dolazi na mramornom postolju.",
        dimenzion: "Dimenzije: 25x17cm",
        popular : false,
        new_collection:false
       
    },
    {
        
        image: "/public/shop/kip5.jpeg",
        name : "Alkar na konju",
        new_price : "199,08€",
        category:"Kip",
        description : "Statue izrađena od gipsa. Prikazuje alkara na konju. Dolazi na mramornom postolju.",
        dimenzion : "Dimenzije : 24x16.5 cm",
        popular:false,
        new_collection:false
       
    },
    {
        
        image : "/public/shop/kip6.jpeg" ,
        name : "Alkar" ,
        new_price : "199,45€",
        category:"Kip",
        description : "Statua alkara na konju" ,
        dimenzion : "Dimenzije 28x25cm",
        popular : false,
        new_collection: false
        
    },
    {
        
        image : "/public/shop/kip8.jpg" ,
        name : "Edek i alkari" ,
        new_price : "257,45€",
        category:"Kip",
        description: "Statua alkarskih momaka i edeka-konja bez jahača. Statua je izrađena od gipsa.",
        dimenzion : "Dimenzije : 35x25cm",
        popular : false,
        new_collection:false
      
    },
    {
        
        image : "/public/shop/kip11.jpg" ,
        name : "Alkarski momak" ,
        new_price : "862,75€",
        category:"Kip",
        description : "Statua alkarskog momka",
        dimenzion : null,
        popular : false,
        new_collection: false
       
    },
    {
        
        image : "/public/shop/kip12.jpg" ,
        name : "Alkarski momak" ,
        new_price : "869,45€",
        category:"Kip",
        description : "Statua alkarskog momka",
        dimenzion : null,
        popular : false,
        new_collection : false
      
    },
    {
        
        image : "/public/shop/alkamomak.jpg" ,
        name : "Alkar i momak" ,
        new_price : "59,73€",
        category:"Kip",
        description : "Statua izrađena od gipsa. Prikazuje alkarskog momka i alkara kopljanika",
        dimenzion : "Dimenzija : 37x19cm",
        popular:false,
        new_collection:false

    },
    {
        
        image : "/public/shop/ki13.jfif",
        name : "Kip gospe",
        new_price : "200,93€",
        category:"Kip",
        description : "Statua izrađena od gipsa u bijeloj boji. Napravljena po uzoru Gospina kipa u mramoru.",
        dimenzion : "Visina statue: 24cm",
        popular:false,
        new_collection:false
     
    },
    {
        
        image : "/public/shop/slika1.jpeg",
        name : "Ulje na platnu",
        new_price : "199,03€",
        category:"Slike",
        description : "Slika ulje na platnu sa motivom alkarskog momka",
        dimenzion : null,
        popular : false,
        new_collection:false
   
    },
    {
        
        image : "/public/shop/slika2.jpeg",
        name : "Pirografija arambaša1",
        new_price : "159,93€",
        category:"Slike",
        description : "Pirografija zapovjednika čete alkarskih momaka",
        dimenzion : null,
        popular:false,
        new_collection:false
        
    },
    {
        
        image : "/public/shop/slika3.jpeg",
        name : "Opanci",
        new_price : "200,93€",
        category:"Slike",
        description : "Slika ulje na platnu sa motivom opanci",
        dimenzion : null,
        popular:false,
        new_collection:false
       
    },
    {
        
        image : "/public/shop/slika4.jpeg",
        name : "Procesija",
        new_price : "130,94€",
        category:"Slike",
        description: "Neuokvirena grafika koja prikazuje procesiju",
        dimenzion : null,
        popular:false,
        new_collection:false
        
    },
    {
        
        image : "/public/shop/slika5.jpeg",
        name : "Alkar na konju",
        new_price : "230,93€",
        category:"Slike",
        description : "Neuokvirena grafika koja prikazuje alkara na konju",
        dimenzion:null,
        popular:false,
        new_collection:false
      
    },
    {
        
        image : "/public/shop/slika6.jfif",
        name : "Portal grada",
        new_price : "10,43€",
        category:"Slike",
        description : "Portal izrađen u kombinaciji drva i poliestera. Dostupan je u srebrenoj zlatnoj i bakrenoj varijanti.",
        dimenzion : "Motiv : alkarski momak i grad u pozadini.",
        popular:false,
        new_collection:false
     
    },
    {
        
        image : "/public/shop/slika7.jfif",
        name : "Alkar sikirica",
        new_price : "29,30€",
        category:"Slike",
        description : "Portal izrađen u kombinaciji drva i poliestera. Dostupan je u bijeloj boji.",
        dimenzion : "Motiv : alkar na konju.",
        popular:false,
        new_collection:false
        
    },
    {
        
        image : "/public/shop/slika8.jfif",
        name : "Grafika Gospa",
        new_price : "30,93€",
        category:"Slike",
        description : "Grafika Gospe Sinjske",
        dimenzion : "Neuokvirena",
        popular:false,
        new_collection:false      
    },
    {
        
        image : "/public/shop/slika9.jpg",
        name : "Grafika Marko Gugić",
        new_price : "20,93€",
        category:"Slike",
        description : "Grafika autora Marka Gugića",
        dimenzion : "Motiv štitonoše",
        popular:false,
        new_collection:false
       
    },
    {
        
        image : "/public/shop/slika10.jfif",
        name : "Portal alkar",
        new_price : "10,93€",
        category:"Slike",
        description : "Portal izrađen u kombinaciji drva i poliestera. Dostupan u zlatnoj i srebrenoj varijanta.",
        dimenzion : "Motiv alkara",
        popular:false,
        new_collection:false
  
    },
    {
        
        image : "/public/shop/magnet.jpeg",
        name : "Magnet reljef kit",
        new_price : "2,93€",
        category:"Magneti" ,
        description : "Materijal izrade gips. Prikaz: grad Sinj",
        dimenzion : null,
        popular:false,
        new_collection:false
       
    }, {
        
        image : "/public/shop/magnet8.jpg",
        name : "Magnet pleksiglas",
        new_price : "1,93€",
        category:"Magneti" ,
        description : "Magnet alkar na konju bijeli dekupaž",
        dimenzion:null,
        popular:false,
        new_collection:false
       

    }, {
        
        image : "/public/shop/magnet2.jpeg",
        name : "Brački kamem kit",
        new_price : "2,90€",
        category:"Magneti" ,
        description: "Magnet na alkarskog momka i izrađen od prirodnog kamena.",
        dimenzion:null,
        popular:false,
        new_collection:false
       
    }, {
        
        image : "/public/shop/magnet3.jpeg",
        name : "Magnet alka",
        new_price : "2,93€",
        category:"Magneti",
        description : "Magnet prikaz alka.",
        dimenzion : null,
        popular:false,
        new_collection:false
       
    }, {
        
        image : "/public/shop/magnet4.jpeg",
        name : "Motiv grada",
        new_price : "2,93€",
        category:"Magneti" ,
        description : "Magnet izrađen od bronce prikaz grada",
        dimenzion:null,
        popular:false,
        new_collection:false

    }, {
        
        image : "/public/shop/magnet5.jfif",
        name : "Motiv Gospa bijela",
        new_price : "2,93€",
        category:"Magneti" ,
        description: "Magnet izrađen od poliestera",
        dimenzion: "Motiv : Gospa Sinjska",
        popular:false,
        new_collection:false

    
    }, {
        
        image : "/public/shop/magnet6.jpg",
        name : "Motiv magarac",
        new_price : "3,95€",
        category:"Magneti" ,
        description : "Magnet od poliestera",
        dimenzion : "Motiv magarca",
        popular:false,
        new_collection:false
      
    }, {
        
        image : "/public/shop/magnet7.jpg",
        name : "Motiv crkva",
        new_price : "2,93€",
        category:"Magneti" ,
        description : "Magnet od poliestera",
        dimenzion : "Motiv : crkva dekupaž",
        popular:false,
        new_collection:false
       
    }, {
        
        image : "/public/shop/magnet18.jpg",
        name : "alkar Sikirica zlatni",
        new_price : "3,93€",
        category:"Magneti" ,
        description : "Magnet od poliestera. Dostupni u više varijanti",
        dimenzion:false,
        popular:false,
        new_collection:false
        
    },
     {
        
        image : "/public/shop/magnet19.jpg",
        name : "Alka bakrena",
        new_price : "1,93€",
        category:"Magneti" ,
        description : "Motiv alke u bakru",
        dimenzion : null,
        popular:false,
        new_collection:false
     
    },
    {
        
        image : "/public/shop/magnet10.jpg",
        name : "Motiv Gospa dekupaž",
        new_price : "2,93€",
        category:"Magneti" ,
        description :"Magnet od poliestera prikaz Gospe dekupaž",
        dimenzion:null,
        popular:false,
        new_collection:false
    },
    {
        
        image : "/public/shop/knjiga.jpeg",
        name : "Knjiga",
        new_price : "12,93€",
        category:"Ostali predmeti",
        description : "Naslov : Ljudi jeli to moguće autora Mario Garber ",
        dimenzion : "Godina izdanja: 2016. Naknadnik : NK Junak Sinj",
        popular:false,
        new_collection:false
    },
    {
        
        image : "/public/shop/privjesak.jpg",
        name : "Privjesak plexsi",
        new_price : "12,93€",
        category:"Ostali predmeti",
        description : "Privjesak na alku",
        dimenzion : null,
        popular:false,
        new_collection:false
    },
   
    {
        
        image : "/public/shop/bičve2.jfif",
        name : "Srednje sokne",
        new_price : "10,93€",
        category:"Ostali predmeti",
        description : "Ručno rađenje sokne dostupne u raznim veličinama",
        dimenzion:null,
        popular:false,
        new_collection:false
       
    },
    {
        
        image : "/public/shop/sat2.jfif",
        name : "Sat alka",
        new_price : "10,93€",
        category:"Ostali predmeti",
        description : "Sat izrađen od prirodnog kamena.Dolazi u odgovarajućon kutiji.",
        dimenzion: "Promjer sata : 28.5cm",
        popular:false,
        new_collection:false
    },
    {
        
        image : "/public/shop/moda6.jpg",
        name : "Torba",
        new_price : "39,93€",
        category:"Ostali predmeti",
        description : "Vunena tkana torba dio narodne nošnje",
        dimenzion:null,
        popular:false,
        new_collection:false
        
    },
    {
        
        image : "/public/shop/moda10.jpg",
        name : "Kaput motiv alka",
        new_price : "358,93€",
        category:"Ostali predmeti",
        description : "Kaput,u crnoj boji.",
        dimenzion : "S prednje strane zlatovezom izvezen s motivon s alkarskih hlača",
        popular:false,
        new_collection:false
        
    },
    {
        
        image : "/public/shop/kamen1.jfif",
        name : "Privjesak",
        new_price : "2,93€",
        category:"Ostali predmeti",
        description : "Privjesak sa motivon Gospe Sinjske",
        dimenzion:null,
        popular:false,
        new_collection:false
        
    },
    {
        
        image : "/public/shop/kutija1.jpg",
        name : "Pića sinjska",
        new_price : "19,73€",
        category:"Ostali predmeti",
        description : "Drvena kutija u kojoj se nalaze dvije male bočice rakije. Vrste rakije: borovica i orahovica prema tradicionalnoj recepturi.",
        dimenzion : "U kutiji se još nalazi i majica s motivon Starog grada.",
        popular:false,
        new_collection:false
        
    },
    {
        
        image : "/public/shop/alka1.jfif",
        name : "Srebrena alka u kutijici",
        new_price : "39,73€",
        category:"Ostali predmeti",
        description : "Alka u plavoj kutijici,na plavoj podlozi,posrebrenja",
        dimenzion : "Promjer alke : 8cm",
        popular:false,
        new_collection:false    
    },
   
    {
        
        image : "/public/shop/nakit.jpeg",
        name : "Lančić srebreni mini",
        new_price : "10,93€",
        category :"Nakit",
        description : "Lanac u srebrenoj boji s motivom alke.",
        dimenzion : null,
        popular:false,
        new_collection:false

        
    },
    {
        
        image : "/public/shop/nakit3.jpeg",
        name : "Konac srebreni",
        new_price : "7,93€",
        category :"Nakit",
        description: "Naruknica izrađena od konca, s biserom u bijeloj boji s privjeskom na alku.",
        dimenzion:null,
        popular:false,
        new_collection:false  
        
    },
    {
        
        image : "/public/shop/nakit5.jpeg",
        name : "Srebreni ring",
        new_price : "9,93€" ,
        category :"Nakit",
        description: "Lančić sajla s privjeskom u srebrenoj boji.",
        dimenzion:null,
        popular:false,
        new_collection:false
    },
    {
        
        image : "/public/shop/nakit7.jpeg",
        name : "Medoljon alka",
        new_price : "10,93€",
        category :"Nakit",
        description : "Lančić u boji srebra, s medaljonom unutar kojeg se nalazi alka",
        dimenzion:null,
        popular:false,
        new_collection:false
        
    },
    {
        
        image : "/public/shop/nakit8.jpeg",
        name : "Alka u srcu",
        new_price : "10,93€",
        category :"Nakit",
        description : "Lančić u srebrenoj boji, s privjeskom na srce unutar kojeg je znak alke",
        dimenzion : "Bižuterija ",
        popular:false,
        new_collection:false
        
    },
    {
        
        image : "/public/shop/nakit9.jpeg",
        name : "Viseće naušnice",
        new_price : "12,93€" ,
        category :"Nakit",
        description : "Naušnice s privjeskom na alku.",
        dimenzion : "Bižuterija",
        popular:false,
        new_collection:false
        
    },
    {
        
        image : "/public/shop/srebreni.jfif",
        name : "Medaljon",
        new_price : "29,73€",
        category:"Nakit",
        description :null,
        dimenzion:null,
        popular:false,
        new_collection:false
        
    },
    {
        
        image : "/public/NewCollection/kip2.jpeg",
        name : "Srcoliko staklo",
        category : "Kip",
        new_price : "50.25€",
        description : "Stakleni predmet, u obliku srca, unutar kojeg je laserskom gravurom, s jedne strane ugraviran znak alke a sa druge strane Gospin lik.",
        dimenzion : "Dolazi u odgovarajućoj kutijici plave boje.",
        popular:false,
        new_collection:true
        
    },
    
    {
        
        image : "/public/NewCollection/privjesak5.jpeg",
        name : "Privjesak plexi",
        category : "Ostali predmeti",
        new_price : "2,10€",
        description : "Privjesak na alkara",
        dimenzion:null,
        popular:false,
        new_collection:true
        
    },
    {
        
        name : "Rećine Alke",
        image : "/public/Popular/nakit6.jpeg" ,
        new_price : "66€" ,
        category : "Nakit",
        description : "Male nsušnice sa motivon alke",
        dimenzion : "Pozlata",
        popular:true,
        new_collection:false
    },
    {
       
       name : "Alkarski momak s leđa",
       image : "/public/Popular/slika.jpeg" ,
       new_price : "69€" ,
       category : "Slike",
       description : "Tehnika ulje na platnu, sinje autorice",
       dimenzion : "Dimenzije : 24x27cm",
       popular:true,
       new_collection:false
 
    },
    {
      
      name : "Velika alka štras",
      image : "/public/Popular/privjesak1.jpeg",
      new_price : "5€" ,
      category : "Ostali predmeti",
      description : "Privjesak za ključe, izrađen od metala.Dolazi u zlatnoj varijanti u narančestoj boji.",
      dimenzion: "Dimenzija : 11cm",
      popular:true,
      new_collection:false
     
     },
     {
         
         name : "Gospa velika Marinović",
         image : "/public/Popular/kip3.jpeg",
         new_price : "66€",
         category : "Kip",
        description : "Statua izrađena od gipsa u bijeloj boji po uzoru Gospinog kipa",
         dimenzion : "Visina statue : 40cm",
         popular:true,
         new_collection:false
     },
     {
        
        image: "/public/NewCollection/botuni.webp" ,
        name : "Šibenski botuni",
        category : "Nakit",
        new_price : "100€",
        description: "Tradicionalni nakit koji su u prošlosti nosili plemići i vojnici nosili na svojim odorama.",
        dimenzion : "Šibenski botuni zlatni",
        popular:false,
        new_collection:true
    },
    {
        
        name : "Naušnice rećine alke",
        image : "/public/NewCollection/nakit10.webp",
        category : "Nakit",
        new_price : "100€",
        description : "Tradicijske rećine remek dijelo u malome.Njihov šarm dodatno naglašuju dodaci poput bisera i koralja.",
        dimenzion : "Zlatne",
        popular:false,
        new_collection:true

    },
    {
        
        name : "Splitske rećine",
        image : "/public/NewCollection/nakit20.webp",
        category : "Nakit",
        new_price: "120€",
        description: "Ovaj nakit pronađen je u 18.stoljeću, a njegov neodoljivi dizajn podsjeća na cvijet od čipke",
        dimenzion : "Splitske naušnice-zlatne",
        popular:false,
        new_collection:true 

    },
    {
        
        name : "Naušnice Ring",
        category : "Nakit",
        image : "/public/NewCollection/nakit4.jpeg",
        new_price : "3,98€",
        description : "Naušnice u zlatnoj boji sa privjeskom alke.",
        dimenzion : "Bižuterija",
        popular:false,
        new_collection:true
    }
   

    
  
  
    

]
module.exports=products

    