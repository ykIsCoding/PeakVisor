import { Component, OnInit, ViewChild,AfterContentInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})

export class VideoComponent implements AfterContentInit{

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
