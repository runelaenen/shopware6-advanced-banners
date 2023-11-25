import template from './rl-advanced-banners-detail-preview.html.twig';
import './rl-advanced-banners-detail-preview.scss';

import defaultCssStyles from '../../service/default-css-styles';

const { Component, Mixin } = Shopware;

Component.register('rl-advanced-banners-detail-preview', {
    template,

    provide: {
        defaultCssStyles,
    },

    mixins: [
        Mixin.getByName('placeholder'),
    ],

    props: {
        advancedBanner: {
            type: Object,
            required: true,
        },

        isCmsPreview: {
            type: Boolean,
            required: false,
            default: false,
        },
    },

    computed: {
        layers() {
            if (this.advancedBanner.data && this.advancedBanner.data.layers) {
                return this.advancedBanner.data.layers;
            }
            return this.advancedBanner.translated.data.layers;
        },
    },
});
