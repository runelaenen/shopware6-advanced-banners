import template from './rl-advanced-banners-layer-config-button.html.twig';
import './rl-advanced-banners-layer-config-button.scss';

const {Component, Mixin} = Shopware;
const {Criteria} = Shopware.Data;
const utils = Shopware.Utils;

Component.register('rl-advanced-banners-layer-config-button', {
    template,

    inject: [
        'repositoryFactory',
    ],

    props: {
        layer: {
            type: Object,
            required: true
        },
    },

    data() {
        return {
            isLoading: false,
            buttonVariantList: [
                {
                    id: 'primary',
                    name: this.$tc('sw-text-editor-toolbar.link.buttonVariantPrimary')
                },
                {
                    id: 'secondary',
                    name: this.$tc('sw-text-editor-toolbar.link.buttonVariantSecondary')
                },
                {
                    id: 'primary-sm',
                    name: this.$tc('sw-text-editor-toolbar.link.buttonVariantPrimarySmall')
                },
                {
                    id: 'secondary-sm',
                    name: this.$tc('sw-text-editor-toolbar.link.buttonVariantSecondarySmall')
                }
            ],
            buttonTargetList: [
                {
                    id: '_self',
                    name: this.$tc('rl-advanced-banners.layer.button.buttonTargetList.self')
                },
                {
                    id: '_blank',
                    name: this.$tc('rl-advanced-banners.layer.button.buttonTargetList.blank')
                }
            ]
        };
    },

    computed: {
        config() {
            return this.layer.config || {};
        },
    },

    methods: {}
});
