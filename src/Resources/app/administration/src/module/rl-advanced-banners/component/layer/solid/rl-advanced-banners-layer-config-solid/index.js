import template from './rl-advanced-banners-layer-config-solid.html.twig';
import './rl-advanced-banners-layer-config-solid.scss';

const { Component } = Shopware;

Component.register('rl-advanced-banners-layer-config-solid', {
    template,

    props: {
        layer: {
            type: Object,
            required: true
        }
    },

    computed: {
        config() {
            return this.layer.config || {};
        }
    }
});
