import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  userDetailUrl = 'http://localhost:3000/userDetails'

  trustDetails = 'http://localhost:3000/trustIdeas'

  registerDetails =' http://localhost:3000/registerUser'

  userFeedBack = ' http://localhost:3000/userComments'

  donationDetails = 'http://localhost:3000/donationDetails'

  api = 'http://localhost:8080/'

 

loginUser(data:any){
  return this.http.get(this.userDetailUrl, data)
  
}

createUser(data:any){
   this.http.post(`${this.userDetailUrl}`, data);
   console.log('data',data)   
}

trustDetail(){
   return this.http.get(this.trustDetails)
}
getTrustDetails(id:any){
  return this.http.get(`${this.trustDetails}/${id}`)
}
registerUser(user:any){
  return this.http.post(`${this.registerDetails}`,user)
}
userComments(user:any){
  return this.http.post(`${this.userFeedBack}`,user)
}

donatersDetails(donaters:any){
   return this.http.post(`${this.donationDetails}`,donaters)
}

getDonatersDetails(){
  return this.http.get(this.donationDetails)
}

generateOtp(){
 
  return this.http.get(`${this.api}`);
}

updatedonatorsDetail(donatorsObj: any) {
  return this.http.put(`${this.donationDetails}/${donatorsObj.id}`, donatorsObj)
}

}
