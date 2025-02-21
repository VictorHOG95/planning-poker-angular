import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  imports: [],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.css',
})
export class SplashScreenComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      const labels = document.querySelectorAll('.logo-label');
      labels.forEach((label, index) => {
        setTimeout(() => {
          label.classList.add('active');
        }, (index + 1) * 400); // Agrega una diferencia de tiempo entre cada palabra
      });
    });

    setTimeout(() => {
      const splash = document.getElementById('app-splash-screen');
      if (splash) {
        splash.classList.add('splash-hide'); // Agrega la animación

        setTimeout(() => {
          splash.style.display = 'none'; // Oculta el elemento después de la animación
        }, 1000);
      }
    }, 2500);
  }
}
