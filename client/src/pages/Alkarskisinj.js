import React from 'react'
import {Carousel} from "react-bootstrap"
import Alkarskisinj2 from "../assents/Alkarskisinj.jpg"
import Alkarskisinj1 from "../assents/Alkarskisinj1.jpg"
import Alka1 from "../assents/Alka1.jpg"
import Alka2 from "../assents/Alka2.jpg"
import Alka3 from "../assents/Alka3.jpg"
import "../stays/Alkarskisinj.css"

function Alkarskisinj() {
  return (
    <>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Alkarskisinj2}
          alt="First slide"
        />
        <Carousel.Caption>
          <p >Sinj je grad smješten u središtu Dalmacije, u dolini rijeke Cetine,na sjeverozapadnom rubu Sinjskog polja podno starog Grada,poporišta čuvene Bitke 1715.godine.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Alkarskisinj1}
          alt="Second slide"
        />
        <Carousel.Caption>
        <p>Dani glada Sinja , tzv.Dani alke i Velike Gospe održavaju se od 7.-15.8 u spomen na bitku gdje su se sinjani junački oduprili osmalijskim osvajačima.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Alka1}
          alt='Third Slide'
        />
        <Carousel.Caption>
          <p>
          U čast svoje nebeske zaštitnice kao vječni zavjet poštovanja i odanosti utemeljili su vitešku igru Alku.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Alka2}
          alt='Four Slide'
        />
        <Carousel.Caption>
          <p>
           Sinjska Alka je živi spomenen na junaštvo i pobjedu u kojem alkari, na konju u punom trku gađaju željeznu alku obješenu na konopu preko trkališta.
          </p>
          <p>Ono što je čini jedinstvenom i našim je priroda same viteške igre i njeni sudionici,odore,oružje- odraz je skladnog prožimanja različitih kulturnih utjecaja.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Alka3}
          alt='Five Slide'
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



    </>
  )
}

export default Alkarskisinj