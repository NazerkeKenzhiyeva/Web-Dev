import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'albums', component: AlbumsComponent },
  {path: 'albums/:id', component: AlbumDetailComponent, title: 'Album detail page'},
  { path: 'albums/:id/photos', component: AlbumPhotosComponent, title: 'Album detail photo page' }

  //{ path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to home by default
  //{ path: '**', component: HomeComponent } // Catch-all route (optional)
];

/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}*/
