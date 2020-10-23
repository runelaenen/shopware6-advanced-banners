import template from './rl-advanced-banners-detail-preview-layer-solid.html.twig';
import './rl-advanced-banners-detail-preview-layer-solid.scss';

const { Component, Mixin } = Shopware;

Component.register('rl-advanced-banners-detail-preview-layer-solid', {
    template,

    inject: [
        'defaultCssStyles'
    ],

    mixins: [
        Mixin.getByName('placeholder')
    ],

    props: {
        layer: {
            type: Object,
            required: true
        }
    },

    computed: {
        config() {
            return this.layer.config || {};
        },
        previewStyles() {
            let styles = this.defaultCssStyles(this.layer);

            styles += `background-color: ${this.layer.config.color}`;

            return styles;
        }
    }
});
