import template from './rl-advanced-banners-layer-default-config.html.twig';
import './rl-advanced-banners-layer-default-config.scss';

const { Component } = Shopware;

Component.register('rl-advanced-banners-layer-default-config', {
    template,

    props: {
        layer: {
            type: Object,
            required: true
        },
    },

    computed: {
        config() {
            return this.layer.config || {};
        }
    },
});
