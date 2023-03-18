import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContactsService } from './services/contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name!: string;
  email!: string;
  subject!: string;
  message!: string;

  constructor(
    private contactsService: ContactsService,
    private toastService: ToastrService
  ) {}

  sendMessage() {
    if (!this.name || !this.email || !this.subject || !this.message) {
      this.toastService.error('Falta preencher todos os campos', 'Erro');
      // this.toastService.info('Nome: ' + this.name + ', Email: ' + this.email  + ", Assunto: "  + this.subject + ', Mensagem: ' + this.message, 'Sucesso')
    } else {
      // this.toastService.info('Nome: ' + this.name + ', Email: ' + this.email  + ", Assunto: "  + this.subject + ', Mensagem: ' + this.message, 'Sucesso')


      this.contactsService
        .addContact({
          Name: this.name,
          Email: this.email,
          Subject: this.subject,
          Message: this.message,
        })
        .subscribe(() => {
          this.toastService.success('Mensagem enviada', 'Sucesso');
          this.name = '';
          this.email = '';
          this.subject = '';
          this.message = '';
        });
    }
  }
}
