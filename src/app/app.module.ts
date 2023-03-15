import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DeedListComponent } from './deed-list/deed-list.component';
import { DeedDetailComponent } from './deed-detail/deed-detail.component';
import { DeedSubmissionComponent } from './deed-submission/deed-submission.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListItemComponent } from './deed-list/list-item/list-item.component';
import { FiltersComponent } from './deed-list/filters/filters.component';
import { PaginationComponent } from './deed-list/pagination/pagination.component';
import { FiltersTopComponent } from './deed-list/filters-top/filters-top.component';
import { DeedService } from './deed.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './deed-detail/map/map.component';
import { DeedDescriptionComponent } from './deed-detail/deed-description/deed-description.component';
import { TimelineComponent } from './deed-detail/timeline/timeline.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './home/slider/slider.component';
import { FeaturedStoriesExpandedComponent } from './home/featured-stories-expanded/featured-stories-expanded.component';
import { FeaturedStoriesComponent } from './home/featured-stories/featured-stories.component';
import { ThreeColumnsComponent } from './home/three-columns/three-columns.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { TiledImagesComponent } from './home/tiled-images/tiled-images.component';
import { NewsletterComponent } from './home/newsletter/newsletter.component';
import { IconListComponent } from './home/icon-list/icon-list.component';
import { InstagramComponent } from './home/instagram/instagram.component';
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MultiSelectModule} from "primeng/multiselect";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DeedListComponent,
    DeedDetailComponent,
    DeedSubmissionComponent,
    ListItemComponent,
    FiltersComponent,
    PaginationComponent,
    FiltersTopComponent,
    HomeComponent,
    MapComponent,
    DeedDescriptionComponent,
    TimelineComponent,
    FooterComponent,
    SliderComponent,
    FeaturedStoriesExpandedComponent,
    FeaturedStoriesComponent,
    ThreeColumnsComponent,
    CategoriesComponent,
    TiledImagesComponent,
    NewsletterComponent,
    IconListComponent,
    InstagramComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ToastModule,
    SharedModule,
    MultiSelectModule
  ],
  providers: [HeaderComponent, DeedService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
