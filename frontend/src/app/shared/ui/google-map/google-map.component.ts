import {Component, Input} from '@angular/core';
import {GoogleMap, MapMarker} from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  templateUrl: 'google-map.component.html',
  standalone: true,
  imports: [GoogleMap, MapMarker],
})

export class GoogleMapComponent {
  @Input() title!: string;
  @Input() lat!: number;
  @Input() lng!: number;
  @Input() mapId!: string;
  private position: google.maps.LatLngLiteral = {lat: this.lat, lng: this.lng};
  private zoom!: number;


  ngOnInit() {
    this.position = {lat: this.lat, lng: this.lng};
    this.zoom = 6;
    this.initMap();
  }

  private async initMap(): Promise<void> {
    try {
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
      const map = new Map(
        document.getElementById(`map-${this.mapId}`) as HTMLElement,
        {
          zoom: 4,
          center: this.position,
          mapId: this.mapId,
        }
      );
      const marker = new AdvancedMarkerElement({
        map: map,
        position: this.position,
        title: this.title,
      });
      console.log(`map ${this.mapId} generated!`)

    } catch (error) {
      console.log(`Error in ${this.initMap.name}: `, error);
    }
  }
    

}