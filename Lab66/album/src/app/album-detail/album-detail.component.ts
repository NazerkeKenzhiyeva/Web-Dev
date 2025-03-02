import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlbumClass} from '../album-class';
import {AlbumsService} from '../albums.service';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router'
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album!: AlbumClass;
  loaded: boolean;
  isEditing: boolean = false;
  editedTitle = '';

  constructor(private route: ActivatedRoute,
              private albumsService: AlbumsService,
              private location: Location,
              private router: Router) {
    this.loaded = false;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const albumID = Number(params.get('id'));
      

      this.loaded = false;
      this.albumsService.getAlbum(albumID).subscribe((album: AlbumClass) => {
        this.album = album;
        this.loaded = true;
        this.editedTitle = album.title;
      });
    });
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  saveTitle() {
    this.albumsService.updateAlbum(this.album.id, this.album).subscribe(() => {
      alert('Album title updated successfully!');
      this.isEditing = false;
    });
  }

    

  goBack() {
    this.router.navigate(['/albums']);
  }
}
