/**
 * Generated using theia-extension-generator
 */

import { DemoCommandContribution, DemoMenuContribution } from './demo-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";

import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    
    bind(CommandContribution).to(DemoCommandContribution);
    bind(MenuContribution).to(DemoMenuContribution);
    
});