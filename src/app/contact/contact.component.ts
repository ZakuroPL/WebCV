import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
  ){}

  emailForm:FormGroup = this.formBuilder.group({
    name:  ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    message: ['', [Validators.required, Validators.minLength(20)]],
  });

  // wrongEmail = false
  // wrongName = false
  // wrongMessage = false
  isSended:boolean = false
  isClicked:boolean = false;
  isErrorSend:boolean = false;
  isProcessing:boolean = false;
  ngOnInit(): void {
  }
  get f() { return this.emailForm.controls; }
  sendButton(){
    this.isErrorSend = false;
    this.isClicked = true;
    if(this.emailForm.invalid) return;
    this.isProcessing = true;
    var formData: any = new FormData();
    formData.append("name", this.emailForm.get('name').value)
    formData.append("email", this.emailForm.get('email').value)
    formData.append("message", this.emailForm.get('message').value)
    this.apiService.sendEmail(formData).subscribe(
      data => {
        this.isProcessing = false;
        this.isSended = true;
      },
      error => {
        this.isErrorSend = true;
        this.isClicked = false;
        this.isProcessing = false;
      }
    );
  }
}
