import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uyuj8a6",
        "template_fs551dc",
        formRef.current,
        "UoysERpzMdhj2g8p0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          {/* <h2 className="c-title">Pabendraukime</h2> */}
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +370(687)27843
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              ramune.baleviciute@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Aušrinės 21, Vilnius, LT08402, Lietuva
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            Jei turite klausimų ar pasiūlymų, užpildykite formą žemiau:
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Vardas" name="user_name" />
            <input type="text" placeholder="Tema" name="user_subject" />
            <input
              type="text"
              placeholder="El. pašto adresas"
              name="user_email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
            <textarea rows="5" placeholder="Žinutė" name="message"></textarea>
            <button>Submit</button>
            <div className="c-thankyou">{done && " Thank you!"}</div>
          </form>
        </div>
      </div>
    </div>
  );
};
