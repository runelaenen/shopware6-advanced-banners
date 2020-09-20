import template from './sw-cms-el-rl-advanced-banner.html.twig';
import './sw-cms-el-rl-advanced-banner.scss';

const { Mixin } = Shopware;

Shopware.Component.register('sw-cms-el-rl-advanced-banner', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    created() {
        this.createdComponent();
    },

    computed: {
        advancedBanner() {
            return this.element.data.advancedBanner || null;
        },

        previewStyle() {
            return 'height: ' + this.element.config.height.value + ';';
        }
    },

    methods: {
        createdComponent() {
            this.initElementConfig('rl-advanced-banner');
            this.initElementData('rl-advanced-banner');
        },
    }
});
