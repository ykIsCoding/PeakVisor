import { Component, OnInit, ViewChild,AfterContentInit, ElementRef, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { CanvasComponent } from '../canvas/canvas.component';

@Component({
  selector: 'app-video-background',
  standalone: true,
  imports: [CanvasComponent],
  providers: [],
  templateUrl: './video-background.component.html',
  styleUrls: ['./video-background.component.css']
})

export class VideoBackground implements OnDestroy, AfterViewInit {

  @Input() src:string = ""
  @ViewChild('vid') videoplayer?:ElementRef;
  isPlaying:boolean = false
  
  
  toggleVideo(event: any) {
    this.videoplayer?.nativeElement.play();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit():void {
    try{
      const vid = this.videoplayer?.nativeElement
      vid.muted = true
      if(!this.isPlaying){
        vid.play().then((r:any)=>{
          
          this.isPlaying = true
        }).catch((e:any)=>{
          vid.play()
        })
      }
    }catch(e){
      console.log(e)
    }
  }

  ngOnDestroy(): void {
    try{
    const vid = this.videoplayer?.nativeElement

    if (!vid.paused && this.isPlaying) {
      vid.pause();
      this.isPlaying = false
      vid.removeAttribute('src'); // empty source
      vid.load()
  }
    
  
    }catch(e){

}}

}