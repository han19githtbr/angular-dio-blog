import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBlogComponent } from './menu-blog/menu-blog.component';



@NgModule({
  declarations: [
    MenuBlogComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenuBlogComponent
  ],
})
export class MenuModule { }
