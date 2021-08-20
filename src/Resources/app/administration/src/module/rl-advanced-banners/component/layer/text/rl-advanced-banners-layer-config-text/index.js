import template from './rl-advanced-banners-layer-config-text.html.twig';
import './rl-advanced-banners-layer-config-text.scss';

const { Component } = Shopware;

Component.register('rl-advanced-banners-layer-config-text', {
    template,

    inject: [
        'repositoryFactory'
    ],

    props: {
        layer: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            isLoading: false
        };
    },

    computed: {
        config() {
            return this.layer.config || {};
        },
    },
});
