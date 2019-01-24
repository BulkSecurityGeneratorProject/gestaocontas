import { NgModule } from '@angular/core';

import { GestaocontasSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GestaocontasSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GestaocontasSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GestaocontasSharedCommonModule {}
