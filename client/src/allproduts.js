import React from "react";
import kip from "../src/assents/shop/kip.jpeg"
import kip1 from "../src/assents/shop/kip1.jpeg"
import kip4 from "../src/assents/shop/kip4.jpeg"
import kip5 from "../src/assents/shop/kip5.jpeg"
import kip6 from "../src/assents/shop/kip6.jpeg"
import kip8 from "../src/assents/shop/kip8.jpg"
import kip11 from "../src/assents/shop/kip11.jpg"
import kip12 from "../src/assents/shop/kip12.jpg"
import alkamomak from "../src/assents/shop/alkamomak.jpg"
import kip2 from "../src/components/NewCollections/kip2.jpeg"
import slika1 from "../src/assents/shop/slika1.jpeg"
import slika2 from "../src/assents/shop/slika2.jpeg"
import slika3 from "../src/assents/shop/slika3.jpeg"
import slika4 from "../src/assents/shop/slika4.jpeg"
import slika5 from "../src/assents/shop/slika5.jpeg"
import slika6 from "../src/assents/shop/slika6.jfif"
import slika7 from "../src/assents/shop/slika7.jfif"
import slika8 from "../src/assents/shop/slika8.jfif"
import slika9 from "../src/assents/shop/slika9.jpg"
import slika10 from "../src/assents/shop/slika10.jfif"
import magnet from "../src/assents/shop/magnet.jpeg"
import magnet1 from "../src/assents/shop/magnet1.jpeg"
import magnet2 from "../src/assents/shop/magnet2.jpeg"
import magnet3 from "../src/assents/shop/magnet3.jpeg"
import magnet4 from "../src/assents/shop/magnet4.jpeg"
import magnet5 from "../src/assents/shop/magnet5.jfif"
import magnet6 from "../src/assents/shop/magnet6.jpg"
import magnet7 from "../src/assents/shop/magnet7.jpg"
import magnet18 from "../src/assents/shop/magnet18.jpg"
import magnet19 from "../src/assents/shop/magnet19.jpg"
import magnet10 from "../src/assents/shop/magnet10.jpg"
import moda from "../src/assents/shop/moda.jpeg"
import moda1 from "../src/assents/shop/moda1.jpeg"
import moda2 from "../src/assents/shop/moda2.jpeg"
import moda3 from "../src/assents/shop/moda3.jpeg"
import moda4 from "../src/assents/shop/moda4.jpeg"
import moda5 from "../src/assents/shop/moda5.jpeg"
import moda6 from "../src/assents/shop/moda6.jpg"
import moda10 from "../src/assents/shop/moda10.jpg"
import bičve from "../src/assents/shop/bičve.jfif"
import hajduk from "../src/assents/shop/hajduk.png"
import naki10 from "../src/assents/shop/naki10.webp"
import nakit from "../src/assents/shop/nakit.jpeg"
import nakit3 from "../src/assents/shop/nakit3.jpeg"
import nakit5 from '../src/assents/shop/nakit5.jpeg'
import nakit7 from "../src/assents/shop/nakit7.jpeg"
import nakit8 from "../src/assents/shop/nakit8.jpeg"
import nakit9 from "../src/assents/shop/nakit9.jpeg"
import images from "../src/assents/shop/images.jfif"
import  ima from "../src/assents/shop/ima.jfif"



const allproduct = [
    {
        id : 11,
        image : kip,
        name : "Vertikalno staklo",
        new_price : "46,45€",
        category:"Kip"
    },
    {
        id : 12,
        image : kip1,
        name : "Kamena alka na staklu",
        new_price : "15,93€",
        category:"Kip"
    },
    {
        id : 13,
        image : kip4 ,
        name : "Vrličanka i momak" ,
        new_price : "59,09€",
        category:"Kip"
    },
    {
        id : 14,
        image: kip5,
        name : "Alkar na konju",
        new_price : "199,08€",
        category:"Kip"
    },
    {
        id : 15,
        image : kip6 ,
        name : "Alkar" ,
        new_price : "199,45€",
        category:"Kip"
    },
    {
        id : 16,
        image : kip8 ,
        name : "Edek i alkari" ,
        new_price : "257,45€",
        category:"Kip"
    },
    {
        id : 17,
        image : kip11 ,
        name : "Alkarski momak" ,
        new_price : "862,75€",
        category:"Kip"
    },
    {
        id : 18,
        image : kip12 ,
        name : "Alkarski momak" ,
        new_price : "869,45€",
        category:"Kip"
    },
    {
        id : 19,
        image : alkamomak ,
        name : "Alkar i momak" ,
        new_price : "59,73€",
        category:"Kip"
    },
    {
        id : 20,
        image : kip2,
        name : "Kip gospe",
        new_price : "200,93€",
        category:"Kip"
    },
    {
        id : 21,
        image : slika1,
        name : "Ulje na platnu",
        new_price : "199,03€",
        category:"Slike"
    },
    {
        id : 22,
        image : slika2,
        name : "Pirografija arambaša",
        new_price : "159,93€",
        category:"Slike"
    },
    {
        id : 23,
        image : slika3,
        name : "Opanci",
        new_price : "200,93€",
        category:"Slike"
    },
    {
        id : 24,
        image : slika4,
        name : "Procesija",
        new_price : "130,94€",
        category:"Slike"
    },
    {
        id : 25,
        image : slika5,
        name : "Alkar na konju",
        new_price : "230,93€",
        category:"Slike"
    },
    {
        id : 26,
        image : slika6,
        name : "Portal grada",
        new_price : "10,43€",
        category:"Slike"
    },
    {
        id : 27,
        image : slika7,
        name : "Alkar sikirica",
        new_price : "29,30€",
        category:"Slike"
    },
    {
        id : 28,
        image : slika8,
        name : "Grafika Gospa",
        new_price : "30,93€",
        category:"Slike"
    },
    {
        id : 29,
        image : slika9,
        name : "Grafika Marko Gugić",
        new_price : "20,93€",
        category:"Slike"
    },
    {
        id : 30,
        image : slika10,
        name : "Portal alkar",
        new_price : "10,93€",
        category:"Slike"
    },
    {
        id : 31,
        image : magnet,
        name : "Magnet reljef kit",
        new_price : "2,93€",
        category:"Magneti" 
    }, {
        id : 32,
        image : magnet1,
        name : "Magnet pleksiglas",
        new_price : "1,93€",
        category:"Magneti" 

    }, {
        id : 33,
        image : magnet2,
        name : "Brački kamem kit",
        new_price : "2,90€",
        category:"Magneti" 
    }, {
        id : 34,
        image : magnet3,
        name : "Magnet alka",
        new_price : "2,93€",
        category:"Magneti" 
    }, {
        id : 35,
        image : magnet4,
        name : "Motiv grada",
        new_price : "2,93€",
        category:"Magneti" 
    }, {
        id : 36,
        image : magnet5,
        name : "Motiv Gospa bijela",
        new_price : "2,93€",
        category:"Magneti" 
    }, {
        id : 37,
        image : magnet6,
        name : "Motiv magarac",
        new_price : "3,95€",
        category:"Magneti" 
    }, {
        id : 38,
        image : magnet7,
        name : "Motiv crkva",
        new_price : "2,93€",
        category:"Magneti" 
    }, {
        id : 39,
        image : magnet18,
        name : "alkar Sikirica zlatni",
        new_price : "3,93€",
        category:"Magneti" 
    },
     {
        id : 40,
        image : magnet19,
        name : "Alka bakrena",
        new_price : "1,93€",
        category:"Magneti" 
    },
    {
        id : 41,
        image : magnet10,
        name : "Motiv Gospa dekupaž",
        new_price : "2,93€",
        category:"Magneti" 
    },
    {
        id : 42,
        image : moda,
        name : "Majica alkarić",
        new_price : "12,93€",
        category:"Moda"
    },
    {
        id : 43,
        image : moda1,
        name : "Majica štikla",
        new_price : "12,93€",
        category:"Moda"
    },
    {
        id : 44,
        image : moda2,
        name : "Maske bijele",
        new_price : "10,93€",
        category:"Moda"
    },
    {
        id : 45,
        image : moda3,
        name : "Maske bijele",
        new_price : "10,93€",
        category:"Moda"
    },
    {
        id : 46,
        image : moda4,
        name : "Polo majica",
        new_price : "12,93€",
        category:"Moda"
    },
    {
        id : 47,
        image : moda5,
        name : "Kr bijela alka",
        new_price : "19,73€",
        category:"Moda"
    },
    {
        id : 48,
        image : moda6,
        name : "Torba",
        new_price : "39,93€",
        category:"Moda"
    },
    {
        id : 49,
        image : moda10,
        name : "Kaput motiv alka",
        new_price : "358,93€",
        category:"Moda"
    },
    {
        id : 50,
        image : bičve,
        name : "Sokne mini",
        new_price : "19,93€",
        category:"Moda"
    },
    {
        id : 51,
        image : hajduk,
        name : "Kr majica i torba alka",
        new_price : "30,93€",
        category:"Moda"
    },
    {
        id : 52,
        image : naki10,
        name : "Konavoke",
        new_price : "124,93€",
        category :"Nakit"
    },
    {
        id : 53,
        image : nakit,
        name : "Lančić srebreni mini",
        new_price : "10,93€",
        category :"Nakit"
    },
    {
        id : 54,
        image : nakit3,
        name : "Konac srebreni",
        new_price : "7,93€",
        category :"Nakit"
    },
    {
        id : 55,
        image : nakit5,
        name : "Srebreni ring",
        new_price : "9,93€" ,
        category :"Nakit"
    },
    {
        id : 56,
        image : nakit7,
        name : "Medoljon alka",
        new_price : "10,93€",
        category :"Nakit"
    },
    {
        id : 57,
        image : nakit8,
        name : "Alka u srcu",
        new_price : "10,93€",
        category :"Nakit"
    },
    {
        id : 58,
        image : nakit9,
        name : "Viseće naušnice",
        new_price : "12,93€" ,
        category :"Nakit"
    },
    {
        id : 59,
        image : images,
        name : "Konavle sa biseron",
        new_price : "125,93€",
        category :"Nakit"
    },
    {
        id : 60,
        image : ima,
        name : "Splicke rećine",
        new_price : "120,93€",
        category :"Nakit"
    },
    {
        id : 61,
        image : hajduk,
        name : "Kr majica i torba alka",
        new_price : "30,93€",
        category :"Nakit"
        
    },
  
  
    

]
  





export default allproduct