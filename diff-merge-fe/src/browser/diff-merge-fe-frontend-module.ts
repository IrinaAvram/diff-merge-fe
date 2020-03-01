import { ContainerModule } from 'inversify';
import { DiffMergeFeWidget } from './diff-merge-fe-widget';
import { DiffMergeFeContribution } from './diff-merge-fe-contribution';
import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';

export default new ContainerModule(bind => {
    bindViewContribution(bind, DiffMergeFeContribution);
    bind(FrontendApplicationContribution).toService(DiffMergeFeContribution);
    bind(DiffMergeFeWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: DiffMergeFeWidget.ID,
        createWidget: () => ctx.container.get<DiffMergeFeWidget>(DiffMergeFeWidget)
    })).inSingletonScope();
});
