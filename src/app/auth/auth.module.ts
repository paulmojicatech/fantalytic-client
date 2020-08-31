import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: LoginComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [LoginComponent]
})
export class AuthModule {}