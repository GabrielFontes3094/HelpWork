import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-headerfixed',
  standalone: true,
  imports: [],
  templateUrl: './home-headerfixed.component.html',
  styleUrls: ['./home-headerfixed.component.scss']
})
export class HomeHeaderfixedComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log(window.scrollY); // Debug para ver se está funcionando
    this.isVisible = window.scrollY > 5;
  }
  
}
