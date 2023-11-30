import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { provideMockStore } from '@ngrx/store/testing';

describe('LoginComponent', () => {

    let loginComponent: LoginComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
    declarations: [LoginComponent],
    imports: [HttpClientTestingModule, SharedModule],
    providers: [provideMockStore({})],
  });
  const fixture = TestBed.createComponent(LoginComponent);
  loginComponent = fixture.componentInstance;
});

  it ('should create login component', () => {
    
    expect(loginComponent).toBeTruthy();
  });

  it('Se deben marcar todos los campos del formulario como "touched" si este es invalido', () => {
    loginComponent.login();
    expect(loginComponent.emailControl.touched).toBeTrue();
    expect(loginComponent.passwordControl.touched).toBeTrue();
  });
});