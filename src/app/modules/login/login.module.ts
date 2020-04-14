import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

import { SideMenuModule } from '../../components/side-menu/side-menu.module';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
];

@NgModule({
    declarations: [LoginComponent],
    imports: [
        RouterModule.forChild(routes),
        SideMenuModule
    ],
    exports: [
        RouterModule,
        LoginComponent
    ]
})
export class LoginModule {

}