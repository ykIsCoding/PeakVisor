import { Component, OnInit, ViewChild,AfterContentInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-video-background',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './video-background.component.html',
  styleUrls: ['./video-background.component.css']
})

export class VideoBackground implements AfterContentInit {

  @Input() src:string = ""
  @ViewChild('vid',{ static: true }) videoplayer: any;
  
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
      
      try{
        this.videoplayer.nativeElement.muted = true
        this.videoplayer.nativeElement.play()
      }catch(e){
        console.log(e)
      }
  }

}