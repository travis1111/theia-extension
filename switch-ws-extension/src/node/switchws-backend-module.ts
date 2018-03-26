

import { ContainerModule } from 'inversify';
import { BackendApplicationContribution } from '@theia/core/lib/node';
import { SwitchWSBackendContribution } from './switchws-backend-contribution';

export default new ContainerModule(bind => {
    bind(BackendApplicationContribution).to(SwitchWSBackendContribution);
});

