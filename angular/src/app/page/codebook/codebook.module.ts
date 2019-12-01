import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {CodebookComponent} from './codebook.component';
import {CodebookStandardComponent} from './codebook-standard/codebook-standard.component';
import {CodebookStandardAddComponent} from './codebook-standard-add/codebook-standard-add.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [ CodebookComponent, CodebookStandardComponent, CodebookStandardAddComponent],
  exports: [ CodebookComponent, CodebookStandardComponent, CodebookStandardAddComponent],
  entryComponents: [ CodebookStandardAddComponent],
})
export class CodebookModule { }
