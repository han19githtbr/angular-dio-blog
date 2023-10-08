import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './components/menu/menu.module';
import { BigCardModule } from './components/big-card/big-card.module';
import { SmallCardModule } from './components/small-card/small-card.module';
import { BigTitleModule } from './components/big-title/big-title.module';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    BigCardModule,
    SmallCardModule,
    BigTitleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
