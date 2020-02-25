import { Routes, RouterModule } from '@angular/router';

/* Layouts */
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';

/* Components */

const appRoutes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        data: {title: 'Profiles'},
        children: [
          { path: '',
            component: null,
            pathMatch: 'full'
          },
        ]
    },
    {
      path: 'profile/:id',
      component: AppLayoutComponent,
      data: {title: 'Profile:'},
      children: [
        { path: '',
          component: null,
          pathMatch: 'full',
        },
      ]
  },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
