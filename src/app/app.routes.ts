import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { authGuard } from './Guards/auth.guard';
import { LifecycleMethodsComponent } from './components/lifecycle-methods/lifecycle-methods.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "employees",
        component: EmployeesComponent,
        canActivate: [authGuard]
    },
    {
        path: "lifecyclemethods",
        component: LifecycleMethodsComponent,
        data: {count:1}
    },
    {
        path: "**",
        component: NotFoundComponent
    }
];
