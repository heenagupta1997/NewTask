import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { FirstColumnComponent } from './first-column/first-column.component';
import { SecondColumnComponent } from './second-column/second-column.component';

@NgModule({
  declarations: [
    SidebarComponent,
    TopNavigationComponent,
    FirstColumnComponent,
    SecondColumnComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomepageModule { }
