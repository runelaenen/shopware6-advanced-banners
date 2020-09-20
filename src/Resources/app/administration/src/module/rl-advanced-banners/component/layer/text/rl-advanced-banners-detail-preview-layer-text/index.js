import template from './rl-advanced-banners-detail-preview-layer-text.html.twig';
import './rl-advanced-banners-detail-preview-layer-text.scss';

const { Component, Mixin } = Shopware;
const { Criteria } = Shopware.Data;
const utils = Shopware.Utils;

Component.register('rl-advanced-banners-detail-preview-layer-text', {
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
        },
    },

    computed: {
        config() {
            return this.layer.config || {};
        },
       previewClasses() {
            let classes = ['rl-advanced-banners-detail-preview-layer-text__text'];

            return classes;
        },
        previewStyles() {
            let styles = this.defaultCssStyles(this.layer);

            styles += 'display: flex;';
            switch (this.layer.config.textAlignX) {
                case "left":
                    styles += 'justify-content: flex-start;';
                    break;
                case "center":
                    styles += 'justify-content: center;';
                    break;
                case "right":
                    styles += 'justify-content: flex-end;';
                    break;
            }
            switch (this.layer.config.textAlignY) {
                case "top":
                    styles += 'align-items: flex-start;';
                    break;
                case "center":
                    styles += 'align-items: center;';
                    break;
                case "bottom":
                    styles += 'align-items: flex-end;';
                    break;
            }

            return styles;
        }
    },
});
