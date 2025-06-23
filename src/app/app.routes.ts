import { Routes } from '@angular/router';
import { SuccessComponent } from './Pages/Success/success/success.component';
import { RegisterationComponent } from './Pages/Registeration/registeration/registeration.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./Pages/Registeration/registeration/registeration.component').then(m => m.RegisterationComponent),
        title: 'Form'
    },
    {
        path: 'success',
        loadComponent: () => import('./Pages/Success/success/success.component').then(m => m.SuccessComponent),
        title: 'Success'
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./Pages/dashboard/dashboard/dashboard.component').then(m => m.DashboardComponent)  
    }
];
