import { Component } from '@angular/core';
import { HomeHeaderComponent } from "./homeContent/home-header/home-header.component";
import { RouterModule } from '@angular/router';
import { HomeContentComponent } from "./homeContent/home-content/home-content.component";
import { HomeMenuComponent } from "./homeContent/home-menu/home-menu.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeaderComponent, RouterModule, HomeContentComponent, HomeMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
