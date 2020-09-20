import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'rl-advanced-banner',
    label: 'sw-cms.elements.rlAdvancedBanner.label',
    component: 'sw-cms-el-rl-advanced-banner',
    configComponent: 'sw-cms-el-config-rl-advanced-banner',
    previewComponent: 'sw-cms-el-preview-rl-advanced-banner',
    defaultConfig: {
        advancedBanner: {
            source: 'static',
            value: null,
            required: true,
            entity: {
                name: 'rl_ab_banner'
            }
        },
        height: {
            source: 'static',
            value: '340px'
        },
    }
});
