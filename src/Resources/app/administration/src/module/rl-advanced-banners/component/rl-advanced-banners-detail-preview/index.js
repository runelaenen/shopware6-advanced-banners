import template from './rl-advanced-banners-detail-preview.html.twig';
import './rl-advanced-banners-detail-preview.scss';

import defaultCssStyles from '../../service/default-css-styles';

const { Component, Mixin } = Shopware;

Component.register('rl-advanced-banners-detail-preview', {
    template,

    mixins: [
        Mixin.getByName('placeholder')
    ],

    provide: {
        defaultCssStyles
    },

    props: {
        advancedBanner: {
            type: Object,
            required: true
        },

        isCmsPreview: {
            type: Boolean,
            required: false,
            default: false
        }
    }
});
