import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FeedResultModel} from './feed-result.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlickerService {

  constructor(private httpClient: HttpClient) { }

  public getPublicFeed(tags: string[]): Observable<FeedResultModel[]> {
    const tagsQuery = tags  ? `&tags=${tags.join(',')}` : '';
    return this.httpClient.jsonp<FeedResultModel[]>(environment.flickerPublicPhotoApiUrl + tagsQuery, 'jsoncallback')
      .pipe(
        catchError(this.handleError),
        map(data => {
          return (data as any).items.map((i: any) => {
            return {title: i.title, author: i.author, mediaUrl: i.media.m, tags: i.tags, link: i.link};
          });
        }));
  }

  handleError(err): any {
    console.log(err.message);
    alert('Something went wrong');
  }
}

