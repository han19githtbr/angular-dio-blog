import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCardBlogComponent } from './small-card-blog/small-card-blog.component';



@NgModule({
  declarations: [
    SmallCardBlogComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SmallCardBlogComponent
  ],
})
export class SmallCardModule { }
