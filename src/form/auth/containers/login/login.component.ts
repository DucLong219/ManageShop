import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/base-component';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent extends BaseComponent implements OnInit {
    ngOnInit() {
    console.log(this.breadcrumbs, 'breadcrumbs');

    }
}
