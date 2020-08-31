import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [NavComponent, ProfileComponent],
    exports: [
        NavComponent
    ]
})
export class SharedModule {

}