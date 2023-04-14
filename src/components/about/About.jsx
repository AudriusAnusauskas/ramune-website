import React from "react";
import "./about.css";
import Mac from "../../img/RB2.jpg";

export const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Mac} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h2 className="a-title">Apie mane</h2>
        <p className="a-sub">
          Aš esu Ramunė, geriausia pasaulyje tearto kritikė :)
        </p>
        <p className="a-desc">
          Dr. Ramunė Balevičiūtė yra teatro kritikė ir tyrėja, knygų ir
          straipsnių autorė, taip pat knygų ir straipsnių rinktinių sudarytoja,
          leidinio „Teatro žurnalas“ vyriausioji redaktorė. Yra Lietuvos muzikos
          ir teatro akademijos Meno ir mokslo prorektorė. Dėsto, veda teatro
          kritikos seminarus, vadovauja baigiamiesiems darbams, aktyviai
          dalyvauja meno doktorantūros veikloje. Svarbiausios interesų sritys:
          meniniai tyrimai, vaidyba, teatro ir kognityvinio mokslo sąsajos,
          teatras vaikams.
        </p>
      </div>
    </div>
  );
};
