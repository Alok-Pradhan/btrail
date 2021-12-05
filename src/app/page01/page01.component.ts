import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-page01',
  templateUrl: './page01.component.html',
  styleUrls: ['./page01.component.css']
})
export class Page01Component implements OnInit, OnDestroy {

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
@ViewChild('fileInput', { static: false }) el: ElementRef | undefined;
imageUrl: any = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4Ui8-aKNWj9bB8P5rLObzIRt30lQ-wpIOg&usqp=CAU";

playAudio(){
  
  let audio = new Audio();
  // 
  audio.src = "http://www.schillmania.com/projects/soundmanager2/demo/mpc/audio/CHINA_1.mp3";
  audio.load();
  audio.play();
  
}
}
