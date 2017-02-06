import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArtistComponent} from "./artist.component";
import {ArtistService} from "./artist.service";
import {ArtistRouting} from "./artist-routing.module";
import {AlbumComponent} from "./album/album.component";

@NgModule({
  imports: [
    CommonModule,
    ArtistRouting
  ],
  declarations: [
    ArtistComponent,
    AlbumComponent
  ],
  providers:[
    ArtistService
  ],
  exports:[
    ArtistComponent
  ]
})
export class ArtistModule { }
