import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ContextService } from '../services/context.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public title: string = 'test';
  public data: any
  
  constructor(public context: ContextService){
    this.context.fetched.subscribe( res => this.data = res )}

  ngOnInit(): void { this.context.fetch() }

}
