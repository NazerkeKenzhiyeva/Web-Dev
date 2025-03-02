import { Injectable } from '@angular/core';
import {AlbumClass } from './album-class';
import {PhotosClass } from './photos-class';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
      constructor(private client: HttpClient) { }
  
      getAlbums(): Observable<AlbumClass[]> {
        return this.client.get<AlbumClass[]>('https://jsonplaceholder.typicode.com/albums');
      }
    
      getAlbum(id: number): Observable<AlbumClass> {
        return this.client.get<AlbumClass>(`https://jsonplaceholder.typicode.com/albums/${id}`);
      }
      getAlbumPhoto(id: number): Observable<PhotosClass> {
        return this.client.get<PhotosClass>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
      }
      getPhotosByAlbum(albumId: number): Observable<PhotosClass[]> {
        return this.client.get<PhotosClass[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
      }
      updateAlbum(id: number, updatedAlbum: AlbumClass): Observable<AlbumClass> {
        return this.client.put<AlbumClass>(`https://jsonplaceholder.typicode.com/albums/${id}`, updatedAlbum);
      }
      deleteAlbum(id: number): Observable<void> {
        return this.client.delete<void>(`https://jsonplaceholder.typicode.com/albums/${id}`);
      }
      
      
      
  
}