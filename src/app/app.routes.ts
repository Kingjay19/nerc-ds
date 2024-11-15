import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
export const routes: Routes = [
    {
        path: '', 
        component: FormComponent,
        title: 'Login Page'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard Page'
    }
];