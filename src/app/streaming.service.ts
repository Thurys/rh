import { Injectable } from '@angular/core';
import { VideoStream } from './video-stream';

@Injectable({
  providedIn: 'root'
})
export class StreamingService {
  url = 'http://rory.286.expert/api/v1';

  constructor() { }

  async getCurrentFile(): Promise<VideoStream | undefined> {
    const data = await fetch(this.url);

    return await data.json() ?? {};
  }
}
