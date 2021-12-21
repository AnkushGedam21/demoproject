import { Hero } from './../Heroes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flying-heros-component',
  templateUrl: './flying-heros-component.component.html',
  styleUrls: ['./flying-heros-component.component.css']
})
export class FlyingHerosComponentComponent implements OnInit {
heroes:Hero[]=[];
canFly=true;

  constructor() { 
    this.reset();
  }


  ngOnInit(): void {
  }
  addHero(name:string){
    name=name.trim();
    if(!name){return;}
    this.canFly = !this.canFly;
    const hero={name,canFly:this.canFly}
    this.heroes.push(hero)
   
  }

  reset(){
    
    this.heroes=[]
  }

}
