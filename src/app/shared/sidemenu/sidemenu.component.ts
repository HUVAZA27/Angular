import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SidemenuComponent {

public menuItems = routes
  .map((routes) => routes.children ?? []) 
      .flat()
      .filter((route) => route && route.path)
      .filter((route) => !route.path?.includes(':'));
  constructor() {
    // const dashbordRoutes = routes
    //   .map((routes) => routes.children ?? [])
    //   .flat()
    //   .filter((route) => route && route.path)
    //   .filter((route) => !route.path?.includes(':'));

    // console.log(dashbordRoutes);
  }
}
