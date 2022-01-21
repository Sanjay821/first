import { Router } from '@angular/router';
import { PatientService } from './../../service/patient.service';
import { Patient } from './../../class/patient';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-patient',
  templateUrl: './get-patient.component.html',
  styleUrls: ['./get-patient.component.css']
})
export class GetPatientComponent implements OnInit {

  patient: Patient = new Patient();
  patientId?: number;
  show: boolean;
  doctorName?: string;

  constructor(private patientService: PatientService,
              private router: Router) {
   
    this.show = false;
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.patientService.getPatient(this.patientId).subscribe(data => {
      if(data !== null) {
        this.patient = data;
        this.doctorName = this.patient.doc?.name;
        this.show = true;
      }
      else {
        this.router.navigate(['/error']);
      }
    })  
  }
}
