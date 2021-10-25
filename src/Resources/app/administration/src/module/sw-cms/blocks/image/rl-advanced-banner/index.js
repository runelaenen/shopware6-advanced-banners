import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'rl-advanced-banner',
    label: 'sw-cms.blocks.image.rlAdvancedBanner.label',
    category: 'image',
    component: 'sw-cms-block-rl-advanced-banner',
    previewComponent: 'sw-cms-preview-rl-advanced-banner',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        banner: 'rl-advanced-banner',
    },
});
