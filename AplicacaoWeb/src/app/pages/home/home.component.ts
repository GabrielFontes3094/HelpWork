import { Component } from '@angular/core';
import { HomeHeaderComponent } from "./homeContent/Header/home-header/home-header.component";
import { RouterModule } from '@angular/router';
import { HomeContentComponent } from "./homeContent/home-content/home-content.component";
import { HomeMenuComponent } from "./homeContent/home-menu/home-menu.component";
import { HomeHeaderfixedComponent } from "./homeContent/Header/home-headerfixed/home-headerfixed.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeaderComponent, RouterModule, HomeContentComponent, HomeMenuComponent, HomeHeaderfixedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
