import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SplashScreenComponent } from './modulos/inicio/splash-screen/splash-screen.component'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SplashScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'planning-poker-angular';
}
