import { Component } from '@angular/core';

export interface Card{
  title: string,
  text: string,
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle = true

  cards: Card[] = [
    {title: 'Card 1', text: 'this is card number one'},
    {title: 'This Card is second', text: 'this is card number two'},
    {title: 'this is card 3', text: 'this is card number three'},
  ]

  toggleCards(){
    this.toggle = !this.toggle
  }
}
