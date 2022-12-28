import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';
import { Estudiantes } from './models/compartido/compartido.module';

@Pipe({
  name: 'conversor'
})
export class ConversorPipe implements PipeTransform {

  transform(valor: Estudiantes, ...args: unknown[]): string {
    return valor.Nombre + ' ' + valor.Apellido;
  }

}
