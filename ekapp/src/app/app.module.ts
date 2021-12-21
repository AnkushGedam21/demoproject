import { FlyingHeroesPipe, FlyingHeroesImpurePipe } from './flying-heroes.pipe';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipeExample } from './customPipe.pipe';
import { DonComponent } from './don/don.component';
import { FlyingHerosComponentComponent } from './flying-heros-component/flying-heros-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DonComponent,
    CustomPipeExample,
    FlyingHerosComponentComponent,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
