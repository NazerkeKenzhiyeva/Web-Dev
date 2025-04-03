import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Интерфейс для типизации данных альбома
export interface Album {
  title: string;
  description: string;
  releaseDate: string;
}

export interface Photo {
  src: string;
  alt: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'http://localhost:54611/home';  // Ваш URL API для альбомов
  private photosUrl = 'http://localhost:54611/photos';  // Новый URL для получения фотографий альбомов

  constructor(private http: HttpClient) {}

  // Получаем все альбомы
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);  // Возвращаем Observable с типом Album[]
  }

  // Получаем детали конкретного альбома по его ID
  getAlbumDetails(albumId: string): Observable<Album> {
    return this.http.get<Album>(`${this.apiUrl}/${albumId}`);  // Путь с параметром альбома
  }

  // Получаем фотографии альбома по ID
  getAlbumPhotos(albumId: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.photosUrl}/${albumId}`);  // Путь с параметром альбома
  }
}

