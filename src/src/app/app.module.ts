import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './homepage/sidebar/sidebar.component';
import { TopNavigationComponent } from './homepage/top-navigation/top-navigation.component';
import { FirstColumnComponent } from './homepage/first-column/first-column.component';
import { SecondColumnComponent } from './homepage/second-column/second-column.component';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import { StatisticsComponent } from './statistics/statistics.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    SidebarComponent,
    FirstColumnComponent,
    SecondColumnComponent,
    LayoutComponent,
    StatisticsComponent,
    TransactionHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
