import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-exercice2",
  templateUrl: "./exercice2.component.html",
  styleUrls: ["./exercice2.component.css"],
})
export class Exercice2Component implements OnInit {
  public valeur: string;
  @ViewChild("myInput") public inputValue: ElementRef<HTMLInputElement>;

  constructor() {}

  public inputVal() {
    this.valeur = this.inputValue.nativeElement.value;
  }

  ngOnInit() {}
}
