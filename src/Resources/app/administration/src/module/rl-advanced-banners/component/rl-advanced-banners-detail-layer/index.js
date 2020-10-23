import template from './rl-advanced-banners-detail-layer.html.twig';
import './rl-advanced-banners-detail-layer.scss';

const { Component, Mixin } = Shopware;

Component.register('rl-advanced-banners-detail-layer', {
    template,

    mixins: [
        Mixin.getByName('placeholder')
    ],

    props: {
        layer: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            showLayerConfig: false
        };
    },

    created() {
        if (Array.isArray(this.layer.config)) {
            this.$set(this.layer, 'config', {});
        }
    },

    computed: {
        configExists() {
            return (`rl-advanced-banners-layer-config-${this.layer.type}`) in this.$options.components;
        }
    },

    methods: {
        onLayerRemove() {
            this.$emit('remove-layer', this.layer);
        },

        onLayerConfig() {
            this.showLayerConfig = true;
        },

        onConfigModalClose() {
            this.showLayerConfig = false;
        }
    }
});
