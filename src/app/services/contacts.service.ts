import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Contact from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private apiUrl = "http://localhost:5116/contacts";

  constructor(private http: HttpClient) {}

  addContact(contact: Contact) {
    return this.http.post(this.apiUrl, contact);
  }
}
