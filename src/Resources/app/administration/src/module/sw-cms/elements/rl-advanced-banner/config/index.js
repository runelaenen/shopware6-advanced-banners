import Criteria from 'src/core/data-new/criteria.data';
import template from './sw-cms-el-config-rl-advanced-banner.html.twig';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-config-rl-advanced-banner', {
    template,

    inject: ['repositoryFactory'],

    mixins: [
        Mixin.getByName('cms-element')
    ],

    created() {
        this.createdComponent();
    },

    computed: {
        bannerRepository() {
            return this.repositoryFactory.create('rl_ab_banner');
        }
    },

    methods: {
        createdComponent() {
            this.initElementConfig('rl-advanced-banner');
            this.initElementData('rl-advanced-banner');
        },

        onOptionSelect(bannerId) {
            if (!bannerId) {
                this.element.config.advancedBanner.value = null;
                this.$set(this.element.data, 'advancedBannerId', null);
                this.$set(this.element.data, 'advancedBanner', null);
            } else {
                this.bannerRepository.get(bannerId, Shopware.Context.api, new Criteria()).then((banner) => {
                    this.element.config.advancedBanner.value = bannerId;
                    this.$set(this.element.data, 'advancedBannerId', banner);
                    this.$set(this.element.data, 'advancedBanner', banner);
                });
            }

            this.$emit('element-update', this.element);
        }
    }
});
