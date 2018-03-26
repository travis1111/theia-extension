
import { injectable, inject } from 'inversify';
import * as http from 'http';
import * as express from 'express';
import { ILogger } from "@theia/core/lib/common";
import { BackendApplicationContribution } from '@theia/core/lib/node';
import { WorkspaceServer } from '@theia/workspace/lib/common/';

@injectable()
export class SwitchWSBackendContribution implements BackendApplicationContribution {
    constructor(
        @inject(WorkspaceServer) protected readonly workspaceServer: WorkspaceServer,
        @inject(ILogger) protected readonly logger: ILogger) {
    }

    configure(app: express.Application) {
        app.get('/switch', (req, res) => {
            await this.workspaceServer.setRoot(rootUri);
            res.send("done!");
        });
    }
}
