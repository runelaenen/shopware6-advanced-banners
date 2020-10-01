import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'rl-advanced-banner-slider',
    label: 'sw-cms.elements.rlAdvancedBannerSlider.label',
    component: 'sw-cms-el-rl-advanced-banner-slider',
    configComponent: 'sw-cms-el-config-rl-advanced-banner-slider',
    previewComponent: 'sw-cms-el-preview-rl-advanced-banner-slider',
    defaultConfig: {
        advancedBanners: {
            source: 'static',
            value: [],
            required: true,
            entity: {
                name: 'product',
                criteria: new Shopware.Data.Criteria()
            }
        },
        height: {
            source: 'static',
            value: '340px'
        },
    }
});
