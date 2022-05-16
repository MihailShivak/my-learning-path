import {Component, Input, OnInit} from '@angular/core';
import { Card } from '../app.component';

@Component({
   selector: 'app-card',
   templateUrl: './card.component.html',
   // interpolation: ['{{','}}'],
   // template: `
   //    <div>
   //       <h1>CardComponent</h1>
   //       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, suscipit provident. Aut dicta nam assumenda recusandae sapiente ab necessitatibus, eos modi consectetur in numquam illum, repellendus culpa atque quibusdam blanditiis.</p>
   //    </div>
   // `,
})
export class CardComponent implements OnInit {

   @Input() card: Card
   @Input() index: number

   title = 'My Card Title'
   text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quae, accusantium, dolore doloribus officiis ea modi explicabo nostrum sequi maxime ratione est ipsam deleniti suscipit! Similique dignissimos id autem! Sit dicta magnam enim, ipsam mollitia beatae, reiciendis natus molestias magni perspiciatis sequi, aliquid minus voluptatum! Molestias dolorum pariatur, error aspernatur repellat recusandae blanditiis illum numquam cum iste saepe perferendis eveniet, hic maxime ipsum fugit laborum explicabo expedita esse voluptas non aut? Expedita sunt maxime voluptatum eum magnam dolore tempore ratione incidunt quas, necessitatibus, saepe provident eaque veritatis nesciunt nobis numquam voluptatibus? Quaerat est adipisci nostrum delectus corrupti non nihil vitae!'
   // ngOnInit(){
   //    setTimeout(() => {
   //       this.title = 'Angular'
   //    }, 3000)
   // }
   ngOnInit(){
      
   }
   change(){
      this.title = 'Title is changed'
   }
   onInput(value:any){
      // const value = event.target.value
      this.title = value
   }
   changeHandler(){
      console.log(this.title)
   }
}

