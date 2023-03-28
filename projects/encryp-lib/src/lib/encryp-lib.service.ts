import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncrypLibService {
  constructor() { }
  encode(msg:string, rails:number){
    return "bshvae";
    //this.fence(msg.length, rails).map((i) => msg[i]).join("");
  }
  decode(msg:string, rails:number){
    return "bhavesh";
    // const fen = this.fence(msg.length, rails);
    // const dec = Array(msg.length);
    // msg.split("").forEach((c, i) => dec[fen[i]] = c);
    // return dec.join("");
  };
  fence(length:number, rails:number) {
    const cycle_len = 2 * rails - 2;
    return Array.from({ length: rails }).flatMap((_, r) =>
        Array.from({ length }, (_, i) => i).filter((i) =>
            i % cycle_len === r || i % cycle_len === cycle_len - r
        )
    );
  }
}