import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  get url(): string { return this._url; }
  set url(url: string) {
    this._url = (url && url.trim()) || false;
  }
  private _url;

  @Input()
  get ville(): string { return this._ville; }
  set ville(ville: string) {
    this._ville = (ville && ville.trim()) || '<no ville set>';
  }
  private _ville = '';

  @Input()
  get prix(): string { return this._prix; }
  set prix(prix: string) {
    this._prix = (prix && prix.trim()) || '<no prix set>';
  }
  private _prix = '';

  @Input()
  get options(): string[] { return this._options; }
  set options(options: string[]) {
    this._options = (options) || [];
  }
  private _options = [];

  @Input()
  get libelle(): string { return this._libelle; }
  set libelle(libelle: string) {
    this._libelle = (libelle && libelle.trim()) || '<no libelle set>';
  }
  private _libelle = '';
}
