
import React from "react";
import slika from "../Popular/slika.jpeg"
import privjesak1 from "../Popular/privjesak1.jpeg"
import kip3 from "../Popular/kip3.jpeg"
import nakit6 from "../Popular/nakit6.jpeg"
const data = [
  

    {
       id : 1,
       name : "Rećine Alke",
       image : nakit6 ,
       new_price : "66€" ,
       category : "Nakit"
   },
   {
      id : 2 ,
      name : "Alkarski momak s leđa",
      image : slika ,
      new_price : "69€" ,
      category : "Slika"

   },
   {
     id : 3 ,
     name : "Velika alka štras",
     image : privjesak1,
     new_price : "5€" ,
     category : "Ostali predmeti"
    
    },
    {
        id : 4 ,
        name : "Gospa velika Marinović",
        image : kip3,
        new_price : "66€",
        category : "Kip"
    }




]
export default data


