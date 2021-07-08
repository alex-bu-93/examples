import { NgModule }                   from '@angular/core';
import { Pipe, PipeTransform }        from '@angular/core';
import { HttpErrorResponse }          from '@angular/common/http';
import { Observable, of }             from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';

interface WithLoading {
  isLoading: boolean;
  errMessage?: string;
  status?: string;
  response?: any;
}

@Pipe({name: 'withLoading'})
export class WithLoadingPipe<T = any> implements PipeTransform {
  transform(val: Observable<T>): Observable<WithLoading> {
    return val?.pipe(
      map(response => ({isLoading: false, response})),
      startWith({isLoading: true}),
      catchError(({error, message, status}: HttpErrorResponse) => of({
        isLoading: false,
        errMessage: error || message,
        status: status && `${status}`
      }))
    );
  }
}

@NgModule({
  declarations: [WithLoadingPipe],
  exports: [WithLoadingPipe]
})
export class WithLoadingPipeModule {
}
