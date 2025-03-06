import { Component } from '@angular/core';
import { VideoDetails } from '../../models/VideoDetails';
import { VideoComponent } from '../video/video.component';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from '../video-player/video-player.component';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-video-list',
  imports: [VideoComponent, CommonModule, VideoPlayerComponent, HighlightDirective],
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css'
})
export class VideoListComponent {
  videoList: VideoDetails[] = [
    new VideoDetails(
      "Video1", 
      "Java video lecture for placement", 
      "https://www.mypunepulse.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-27-at-2.11.07-PM.jpeg", 
      "/assets/video1.mp4"
    ),
    new VideoDetails(
      "Video2", 
      "Java video lecture for placement", 
      "https://www.mypunepulse.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-27-at-2.11.07-PM.jpeg", 
      "/assets/video2.mp4"
    ),
    new VideoDetails(
      "Video3", 
      "Java video lecture for placement", 
      "https://www.mypunepulse.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-27-at-2.11.07-PM.jpeg", 
      "/assets/video1.mp4"
    ),
    new VideoDetails(
      "Video4", 
      "Java video lecture for placement", 
      "https://www.mypunepulse.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-27-at-2.11.07-PM.jpeg", 
      "/assets/video1.mp4"
    )
  ];

  playVideoFlag: boolean = false;
  playableVideo: VideoDetails = new VideoDetails("", "", "", "");

  handleVideoClick(video: VideoDetails){
    this.playVideoFlag = true;
    this.playableVideo = video;
  }



}
