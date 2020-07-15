import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header.component';
import { HighlightsComponent } from './components/highlights/hightlights.component';
import { ChartComponent } from './components/chart/chart.component';
import { VoteboardComponent } from './components/voteboard/voteboard.component';
import { VerifyCodeComponent } from './components/voteboard/verify/verify-code.component';
import { BallotComponent } from './components/voteboard/ballot/ballot.component';
import { TotalVotesComponent } from './components/highlights/total-votes/total-votes.component';
import { LiveSessionComponent } from './components/highlights/live-sessions/live-sessions.component';
import { ElectionTypeComponent } from './components/election-type/election-type.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HighlightsComponent,
    ChartComponent,
    VoteboardComponent,
    VerifyCodeComponent,
    BallotComponent,
    TotalVotesComponent,
    LiveSessionComponent,
    ElectionTypeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ChartsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
