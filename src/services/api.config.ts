import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class ApiSettingService {
    private a = 'user';
    private domain: string | undefined;
    constructor(private httpClient: HttpClient) {
        this.domain = environment.domain;
    }
    get() {
        return this.httpClient.get(this.domain + this.a);
    }
}