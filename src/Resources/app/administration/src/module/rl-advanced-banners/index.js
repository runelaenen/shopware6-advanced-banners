import './acl';

import './component/rl-advanced-banners-detail-sidebar';
import './component/rl-advanced-banners-detail-layer';
import './component/rl-advanced-banners-detail-preview';

import './component/layer/rl-advanced-banners-layer-default-config';

import './component/layer/text/rl-advanced-banners-layer-config-text';
import './component/layer/text/rl-advanced-banners-detail-preview-layer-text';

import './component/layer/solid/rl-advanced-banners-layer-config-solid';
import './component/layer/solid/rl-advanced-banners-detail-preview-layer-solid';

import './component/layer/button/rl-advanced-banners-layer-config-button';
import './component/layer/button/rl-advanced-banners-detail-preview-layer-button';

import './component/layer/image/rl-advanced-banners-layer-config-image';
import './component/layer/image/rl-advanced-banners-detail-preview-layer-image';

import './page/rl-advanced-banners-detail';
import './page/rl-advanced-banners-overview';

Shopware.Module.register('rl-advanced-banners', {
    type: 'plugin',
    name: 'Advanced Banners',
    title: 'Advanced Banners',
    color: '#0071d2',
    icon: 'default-object-puzzle-piece',

    routes: {
        overview: {
            component: 'rl-advanced-banners-overview',
            path: 'overview',
            meta: {
                privilege: 'rl_ab_banner.viewer',
            },
        },
        detail: {
            component: 'rl-advanced-banners-detail',
            path: 'detail/:id',
            props: {
                default: (route) => {
                    return {
                        advancedBannerId: route.params.id,
                    };
                },
            },
            meta: {
                privilege: 'rl_ab_banner.viewer',
            },
        },
    },

    navigation: [{
        label: 'Advanced Banners',
        color: '#0071d2',
        path: 'rl.advanced.banners.overview',
        icon: 'default-object-puzzle-piece',
        parent: 'sw-content',
        privilege: 'rl_ab_banner.viewer',
    }],
});
