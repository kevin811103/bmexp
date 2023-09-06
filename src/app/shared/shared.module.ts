import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
    declarations: [

    ],
    imports: [
        DialogModule,
        ButtonsModule,
    ],
    exports: [
        DialogModule,
        ButtonsModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
