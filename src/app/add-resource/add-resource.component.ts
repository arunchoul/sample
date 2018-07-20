import { Component, OnInit } from '@angular/core';
import { Form, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.css']
})
export class AddResourceComponent implements OnInit {

  details = {
      
      nameOfTheResource : "",
      adharNumber : "",
      panNumber : "",
      mobile : "",
      email : "",
      cEmail : "",
      dob : "",
      currentCTC : "",
      expectedCTC : "",
      noticePeriod : "",
      currentCompany : "",
      employerName : "",
      location : "",
      modeOfEmployment : "",
      experience : "",
      relevantExperience : "",
      domainExperience : "",
      primarySkill : "",
      secondarySkill : "",
      comments : "",
      uploadResume : ""
  
  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit(value:any){
    
    this.details.nameOfTheResource = value.nameOfTheResource;
    this.details.adharNumber = value.adharNumber;
    this.details.panNumber = value.panNumber;
    this.details.mobile = value.mobile;
    this.details.email = value.email;
    this.details.cEmail = value.cEmail;
    this.details.dob = value.dob;
    this.details.currentCTC = value.currentCTC;
    this.details.employerName = value.employerName;
    this.details.location = value.location;
    this.details.modeOfEmployment = value.modeOfEmployment;
    this.details.experience = value.experience;
    this.details.relevantExperience = value.relevantExperience;
    this.details.domainExperience = value.domainExperience;
    this.details.primarySkill = value.primarySkill;
    this.details.secondarySkill = value.secondarySkill;
    this.details.comments = value.comments;
    this.details.uploadResume = value.uploadResume;
    console.log(this.details);
  }

}
