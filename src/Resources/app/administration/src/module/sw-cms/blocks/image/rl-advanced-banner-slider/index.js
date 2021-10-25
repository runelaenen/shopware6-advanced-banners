import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'rl-advanced-banner-slider',
    label: 'sw-cms.blocks.image.rlAdvancedBannerSlider.label',
    category: 'image',
    component: 'sw-cms-block-rl-advanced-banner-slider',
    previewComponent: 'sw-cms-preview-rl-advanced-banner-slider',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        banner: 'rl-advanced-banner-slider',
    },
});
