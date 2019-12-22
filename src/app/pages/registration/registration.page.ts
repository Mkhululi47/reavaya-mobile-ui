import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../../shared/services/user.service';
import { UserDto } from '../../shared/models/userdto.model';

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.page.html',
  styleUrls: ['registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  RegistrationForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService) {}

  ngOnInit() {
    this.RegistrationForm = this.formBuilder.group({
      username: ['username', Validators.required],
        idNumber: ['id_number', Validators.required],
        firstName: ['first_name', Validators.required],
        lastName: ['last_name', Validators.required],
        emailAddress: ['email_address', Validators.required],
        cellNumber: ['cell_number', Validators.required],
        password: ['password', Validators.required],
        confirmPassword: ['confirm_password', Validators.required],
    });
  }

    register(form: {
        value: {
            username: any;
            idNumber: any;
            firstName: any;
            lastName: any;
            emailAddress: any;
            cellNumber: any;
            password: any;
            confirmPassword: any;
        };
    }) {
        this.submitted = true;
    // stop here if form is invalid
    if (this.RegistrationForm.invalid) {
      return;
        }

    const username = form.value.username;
        const idNumber = form.value.idNumber;
        const firstName = form.value.firstName;
        const lastName = form.value.lastName;
        const cellNumber = form.value.cellNumber;
        const emailAddress = form.value.emailAddress;
        const password = form.value.password;
        const confirmPassword = form.value.confirmPassword;

        if (password !== confirmPassword) {
            return;
        }

        let user = new UserDto(username, idNumber, firstName, lastName, cellNumber, emailAddress, password, true);
        console.log(user);
        this.loading = true;
    this.userService.registration(user)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/home']);
          console.log(data);
          this.router.navigate(['/']);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }
}

