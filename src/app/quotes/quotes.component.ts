import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes=[
          new Quotes(1,'Life is just a chance to grow a soul.',' A. Powell Davies',new Date(2019,3,14)),
          new Quotes(2,'Only a life lived for others is a life worthwhile.',' Albert Einstein', new Date(2018,9,14)),
          new Quotes(3,'Expect nothing, live frugally on surprise.','Alice Walker',new Date(2018,5,14)),
          new Quotes(4,'Because I have loved life, I shall have no sorrow to die.',' Amelia Burr',new Date(2018,7,14)),
          new Quotes(5,'People living deeply have no fear of death.','Anais Nin',new Date(2018,10,14)),
        
  ]
  addNewQuote(quotes){
    let quoteLength = this.quotes.length;
    quotes.id=quoteLength+1;
    quotes.completeDate = new Date(quotes.completeDate)
    this.quotes.push(quotes)

}
  deleteQuote(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
        
        if(toDelete){
            this.quotes.splice(index,1)
        }
      }
    }
toogleDetails(index){
    this.quotes[index].description = !this.quotes[index].description;
}

  constructor() { }

  ngOnInit() {
  }

}
