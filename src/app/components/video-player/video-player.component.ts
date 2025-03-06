import { Component, ElementRef, Input, SimpleChanges, viewChild, ViewChild } from '@angular/core';
import { VideoDetails } from '../../models/VideoDetails';

@Component({
  selector: 'app-video-player',
  imports: [],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent {
 @Input() videoDetails = new VideoDetails("", "", "", "");
 @ViewChild("video1") videoElementRef!: ElementRef;
 @Input() a! :string;
 @Input() b! :string;
 @Input() c! :string;
 @Input() d! :string;


 ngOnChanges(changes: SimpleChanges){
  console.log(changes);
  if(changes["videoDetails"]){
    this.videoElementRef?.nativeElement.load();  
  }
 }

 ngOnInit(){
  console.log("ngOnInit called");
 }
}
