import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api'
import {InMemoryDataService} from './in-memory-data.service'

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        HttpClientModule,
        HttpClientInMemoryWebApiModule,
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}


// 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
