import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class AddressService {
    constructor(private http: HttpClient) {}

    private extractData(res: Response) {
        let body = res;
        return body || { };
    }

    getAddressFromZipCode(cep): Observable<any> {
        return this.http.get('https://viacep.com.br/ws/' + cep + '/json/').pipe(
        map(this.extractData));
    }
}