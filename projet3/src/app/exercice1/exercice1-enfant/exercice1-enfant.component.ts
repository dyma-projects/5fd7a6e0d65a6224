import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public compteur: number;
  @Output() private majCompteur: EventEmitter<any> = new EventEmitter();
  // @Output() private compteurMoins: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  addOne() {
    this.compteur++;
    this.majCompteur.emit({ value: this.compteur });
  }

  decreaseOne() {
    this.compteur--;
    this.majCompteur.emit({ value: this.compteur });
  }
}
