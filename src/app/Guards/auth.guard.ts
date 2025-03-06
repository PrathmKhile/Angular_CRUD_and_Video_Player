import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  if(isLoggedIn == "true"){
    let router = inject(Router);
    router.navigate(["/"]);
    return false;
  }
  
  return true;
};
