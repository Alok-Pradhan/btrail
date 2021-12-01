import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  // constructor(private subscription: Subscription){}
  public subscription : Subscription = new Subscription();
 
  public dateNow = new Date();
  
    public dDay = new Date('Dec 29 1999 00:00:00');
    milliSecondsInASecond = 1000;
    hoursInADay = 24;
    minutesInAnHour = 60;
    SecondsInAMinute  = 60;

    public timeDifference: any;
    public secondsToDday: any;
    public minutesToDday: any;
    public hoursToDday: any;
    public daysToDday: any;

    private getTimeDifference () {
      this.timeDifference =  new  Date().getTime() - this.dDay.getTime() ;
      this.allocateTimeUnits(this.timeDifference);
  }

private allocateTimeUnits (timeDifference: any) {
      this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
      this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
      this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
      this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
}

ngOnInit() {
  console.log(this.dateNow)
  this.subscription = interval(1000)
      .subscribe(x => { this.getTimeDifference(); });
}

ngOnDestroy() {
 this.subscription.unsubscribe();
}
 
}
