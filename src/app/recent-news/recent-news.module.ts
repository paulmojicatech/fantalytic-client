import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { RecentNewsComponent } from './components/recent-news/recent-news.component';


const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: RecentNewsComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [RecentNewsComponent]
})
export class RecentNewsModule {}