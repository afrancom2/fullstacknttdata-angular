import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {ThousandDirective} from "../utils/ThousandDirective";
import {LoginService} from "../services/login.services";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ThousandDirective
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  options: { value: string; label: string }[] = [];
  @ViewChild('errorModal') errorModal!: ElementRef;
  errorMessage: string = '';

  form: FormGroup;

  private http : HttpClient = inject(HttpClient);

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private dataService: DataService,
  ) {
    this.form = this.fb.group({
      documentType: ['', Validators.required],
      documentNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(14)]],
    });
  }

  ngOnInit(): void {
    this.http.get<{ value: string; label: string }[]>('assets/documentTypes.json').subscribe(
      (data) => {
        this.options = data;
      },
      (error) => {
        console.error('Error al cargar las opciones:', error);
      }
    );
  }

  onSubmit() {
    const formValue = this.form.value;
    formValue.documentNumber = formValue.documentNumber.replace(/,/g, '');
    this.loginService.getData(formValue.documentNumber).subscribe({
      next: (response) => {
        this.dataService.setData(response);
        Swal.fire({
          title: '¡Bienvenido!',
          text: 'Has iniciado sesión con éxito.',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.form.reset();
        Swal.fire({
          title: 'Error de inicio de sesión',
          text: 'Usuario o contraseña incorrectos.',
          icon: 'error',
          confirmButtonText: 'Intentar de nuevo',
        });
      }
    })
  }

}
