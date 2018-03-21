import { injectable, inject } from "inversify";
import { WorkspaceService } from '@theia/workspace/browser/lib/workspace-service';
import { WorkspaceService0 } from '@theia/workspace/browser/workspace-service';
import { WorkspaceService1 } from '@theia/workspace/lib/workspace-service';
import { WorkspaceService2 } from '@theia/workspace/workspace-service';
import { WorkspaceService3 } from '@theia/workspace-service';
import URI from '@theia/core/lib/common/uri';
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";

export const DemoCommand = {
    id: 'Demo.command',
    label: "Shows a message"
};

@injectable()
export class DemoCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
        @inject(WorkspaceService) protected readonly workspaceService: WorkspaceService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(DemoCommand, {
            execute: () => this.workspaceService.close()
        });
    }
}

@injectable()
export class DemoMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: DemoCommand.id,
            label: 'Say Hello'
        });
    }
}