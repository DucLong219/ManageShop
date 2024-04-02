import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import * as crypto from 'crypto';
// const crypto = require('crypto')
import * as forge from 'node-forge';
import { saveAs } from 'file-saver';
import * as fs from 'fs';
import * as path from 'path';
import * as NodeRSA from 'node-rsa';
import { BaseComponent } from 'src/base-component';
@Component({
  selector: 'app-chu-ky-so',
  templateUrl: './chu-ky-so.component.html',
  styleUrls: ['./chu-ky-so.component.scss']
})
export class ChuKySoComponent extends BaseComponent {

  publicKey!: forge.pki.rsa.PublicKey;
  privateKey!: forge.pki.rsa.PrivateKey;
  publicKeyPem!: any;
  privateKeyPem!: any;
  selectedFile!: any;
  selectedFile2!: any;
  selectedFile3!: any;
  selectedFile4!: any;
  hashValue!: string;
  hashValue2!: string;
  hashValue3!: string;
  hashValue4!: string;

  encrypted !: string;
  decrypted !: string;
  imageUrl!: any
  fileContent!: string

  generateRSAKeyPair(sign?: any): void {
    const keyPair = forge.pki.rsa.generateKeyPair({ bits: 2048 });
    this.publicKey = keyPair.publicKey;
    this.privateKey = keyPair.privateKey;
    this.publicKeyPem = forge.pki.publicKeyToPem(this.publicKey);
    this.privateKeyPem = forge.pki.privateKeyToPem(this.privateKey);
  }

  onFileSelected(event: any, type?: number) {
    const file: File = event.target.files[0];
    if (file && this.isValidFileType(file)) {
      switch (type) {
        case 1:
          this.selectedFile = file;
          this.encryptData(this.hashValue, this.publicKey)
          break;
        case 2:
          this.selectedFile2 = file;
          this.encryptData(this.hashValue2, this.publicKey)
          break;
        case 3:
          this.selectedFile3 = file;
          this.encryptData(this.hashValue3, this.publicKey)
          break;
        case 4:
          this.selectedFile4 = file;
          this.encryptData(this.hashValue4, this.publicKey)
          break;
        default:
          break;
      }

    } else {
      this.selectedFile = null;
      this.selectedFile2 = null;
      this.selectedFile3 = null;
      this.selectedFile4 = null;
      console.log('Invalid file. Please select an image, docx, or pdf file.');
    }
  }
  isValidFileType(file: File): boolean {
    const allowedTypes = ['image/jpeg', 'image/png', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf', 'text/plain'];
    return allowedTypes.includes(file.type);
  }
  async hashFile(type?: number) {
    switch (type) {
      case 1:
        if (!this.selectedFile) {
          alert('No file selected');
          return;
        }
        const data = await this.readFile(this.selectedFile);
        const hash = this.hashData(data);
        this.hashValue = hash;
        break;
      case 2:
        if (!this.selectedFile2) {
          alert('No file selected');
          return;
        }
        const data2 = await this.readFile(this.selectedFile2);
        const hash2 = this.hashData(data2);
        this.hashValue2 = hash2;
        break;
      case 3:
        if (!this.selectedFile3) {
          alert('No file selected');
          return;
        }
        const data3 = await this.readFile(this.selectedFile3);
        const hash3 = this.hashData(data3);
        this.hashValue3 = hash3;
        break;
      case 4:
        if (!this.selectedFile4) {
          alert('No file selected');
          return;
        }
        const data4 = await this.readFile(this.selectedFile4);
        const hash4 = this.hashData(data4);
        this.hashValue4 = hash4;
        break;
      default:
        break;
    }

  }

  private readFile(file: File): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as ArrayBuffer);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }

  hashData(data: ArrayBuffer): string {
    const md = forge.md.sha256.create();
    const uint8Array = new Uint8Array(data);
    const byteString = Array.prototype.map.call(uint8Array, (byte: number) => {
      return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('');
    md.update(byteString);
    const hash = md.digest();
    const encodedHash = forge.util.encode64(hash.getBytes());
    return encodedHash;
  }
  encryptData(data: any, publicKey: forge.pki.rsa.PublicKey) {
    const encryptedData = publicKey.encrypt(data);
    this.encrypted = forge.util.encode64(encryptedData);
    this.fileContent = this.encrypted;
  }
  decryptData(data: any, privateKey: forge.pki.rsa.PrivateKey) {
    const encryptedBytes = forge.util.decode64(data);
    this.decrypted = privateKey.decrypt(encryptedBytes);
  }
  verifySign(key?: number) {
    switch (key) {
      case 1:
        if (this.decrypted === this.hashValue2) {
          alert('Xác nhận chữ ký thành công');
        } else {
          alert('Xác nhận chữ ký thất bại');
        }
        break;
      case 2:
        if (this.decrypted === this.hashValue2) {
          alert('Xác nhận hợp đồng thành công');
        } else {
          alert('Xác nhận hợp đồng thất bại');
        }
        break;
      default:
        break;
    }
  }
}
