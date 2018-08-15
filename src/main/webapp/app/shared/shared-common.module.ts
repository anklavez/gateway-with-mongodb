import { NgModule } from '@angular/core';

import { GatewaWithMongoDbSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GatewaWithMongoDbSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GatewaWithMongoDbSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GatewaWithMongoDbSharedCommonModule {}
