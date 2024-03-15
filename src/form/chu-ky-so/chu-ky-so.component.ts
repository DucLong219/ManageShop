import { Component } from '@angular/core';
import * as crypto from 'crypto';
// const crypto = require('crypto')
import * as forge from 'node-forge';
@Component({
  selector: 'app-chu-ky-so',
  templateUrl: './chu-ky-so.component.html',
  styleUrls: ['./chu-ky-so.component.scss']
})
export class ChuKySoComponent {

  publicKey!: string;
  privateKey!: string;

  fileToHash!: File;
  hashedValue!: string;

  encrypted !:string;
  decrypted !:string;

  generateRSAKeyPair(): void {
    const keyPair = forge.pki.rsa.generateKeyPair({ bits: 2048 });

    this.publicKey = forge.pki.publicKeyToPem(keyPair.publicKey);
    this.privateKey = forge.pki.privateKeyToPem(keyPair.privateKey);
  }

  onFileChange(event: any): void {
    this.fileToHash = event.target.files[0];
  }

  hashFile(): void {
    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      const fileContent = fileReader.result as string;
      const md = forge.md.sha256.create();
      md.update(fileContent);
      this.hashedValue = md.digest().toHex();
    };

    fileReader.readAsText(this.fileToHash);
    // console.log(fileReader.readAsText(this.fileToHash),'fileReader.readAsText(this.fileToHash);');
    
    
   
  }
  encode(data: string) {
    const publicKey = forge.pki.publicKeyFromPem(this.publicKey);
    this.encrypted = forge.util.encode64(publicKey.encrypt(data));
  }

  decode(encryptedData: string) {
    const privateKey = forge.pki.privateKeyFromPem(this.privateKey);
    this.decrypted = privateKey.decrypt(forge.util.decode64(encryptedData));
  }
}
