import { Component } from '@angular/core';

@Component({
  selector: 'lib-encryp-lib',
  template: `
    <p>
      encryp-lib works!
    </p>
  `,
  styles: [
  ]
})

export class EncrypLibComponent {
  companyName:string = "eurofins";
  xx:string = "yoyoyo";
  constructor(){}
  encryptRailFence() {
    return "hello i'm custom library";
  }
}
