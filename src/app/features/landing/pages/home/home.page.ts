import { Component } from '@angular/core';
import { LINKS } from '../../../../routes/links';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html'
})
export class HomePage {
  protected readonly links = LINKS;
}
