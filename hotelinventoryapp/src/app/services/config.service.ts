import { Inject, Injectable } from '@angular/core';
import { RouteConfigToken } from './routeConfig.service';
import RouteConfig from './routerConfig';

@Injectable({
  providedIn: 'any',
})
export class ConfigService {
  constructor(@Inject(RouteConfigToken) private configToken: RouteConfig) {
    console.log('ConfigService');
    console.log(this.configToken)
  }
}
