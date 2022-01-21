import { Doctor } from './../class/doctor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  
  constructor(private httpClient: HttpClient) { }


  createDoctor(doctor: Doctor): Observable<Object> {
    console.log(doctor);
    return this.httpClient.post(`http://localhost:8282/doctor/adddoctor`, doctor);
    console.log("outside docotr")
  }

  getDoctorName(): Observable<string[]> {
    return this.httpClient.get<string[]>(`http://localhost:8282/doctor/getdoctor`); 
  }

  getDoctor(name?: string): Observable<Doctor> {
    return this.httpClient.get<Doctor>(`http://localhost:8282/doctor/getdoctorbyname/`+name); 
  }

  getAllSpecialization(): Observable<string[]> {
    return this.httpClient.get<string[]>(`http://localhost:8282/doctor/getdoctorspec`); 
  }
}
