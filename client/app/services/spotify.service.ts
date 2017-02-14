//Inject a service as dependency we need injectable
import {Injectable} from "@angular/core";
//http module
import {Http} from '@angular/http';
//Observable through reactive extensions so we want to import map operator to map the data
import 'rxjs/add/operator/map';

import {Observable} from "rxjs/Rx";

@Injectable()
export class SpotifyService {
  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;

  constructor(private http: Http) {
    console.log("Spotify Service Initialized...");
  }

  //TODO Check if search is not empty string
  searchMusic(str: string, type = 'artist') {
      this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type;
      return this.http.get(this.searchUrl).map(res => res.json());
  }

  getArtist(id:string) {
    this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
    return this.http.get(this.artistUrl).map(res => res.json());
  }

  getAlbums(artistId:string) {
    this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId +'/albums';
    return this.http.get(this.albumsUrl).map(res => res.json());
  }

  getAlbum(id:string) {
    this.albumUrl = 'https://api.spotify.com/v1/albums/' + id;
    return this.http.get(this.albumUrl).map(res => res.json());
  }

}
