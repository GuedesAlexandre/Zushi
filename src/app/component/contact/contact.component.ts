import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  serviceID = "service_x150wjp";
  templateID = "template_19tkneu";

  

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      objet: new FormControl(''),
      mail: new FormControl(''),
      msg: new FormControl('')
    });
  }

  sendmail(): void {
    emailjs.init("e6FlcKhB09eh89q1U");

    const param = {
      sujet: this.contactForm.get("objet")?.value,
      message: this.contactForm.get("msg")?.value,
      mail: this.contactForm.get("mail")?.value
    }

    if (param.sujet === "" || param.message === "" || param.mail === "") {
      alert("Veuillez remplir tous les champs.");
      return;
    } else {

      emailjs.send("service_x150wjp","template_19tkneu", param)
          .then(res => {
            alert("Le mail à bien été envoyé.");
          })

          .catch(error => {
            alert("Erreur d'envoi.");
          })
    }
  }

}