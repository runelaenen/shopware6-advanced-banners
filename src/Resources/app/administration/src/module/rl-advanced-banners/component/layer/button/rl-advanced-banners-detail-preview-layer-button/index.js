import template from './rl-advanced-banners-detail-preview-layer-button.html.twig';
import './rl-advanced-banners-detail-preview-layer-button.scss';

const { Component, Mixin } = Shopware;

Component.register('rl-advanced-banners-detail-preview-layer-button', {
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
        previewClasses() {
            return ['rl-advanced-banners-detail-preview-layer-button__text'];
        },
        previewStyles() {
            let styles = this.defaultCssStyles(this.layer);

            styles += 'display: flex;';
            switch (this.layer.config.buttonAlignX) {
                case 'left':
                    styles += 'justify-content: flex-start;';
                    break;
                case 'center':
                    styles += 'justify-content: center;';
                    break;
                case 'right':
                    styles += 'justify-content: flex-end;';
                    break;
                default:
                    break;
            }
            switch (this.layer.config.buttonAlignY) {
                case 'top':
                    styles += 'align-items: flex-start;';
                    break;
                case 'center':
                    styles += 'align-items: center;';
                    break;
                case 'bottom':
                    styles += 'align-items: flex-end;';
                    break;
                default:
                    break;
            }

            return styles;
        }
    }
});
