import template from './sw-cms-el-config-rl-advanced-banner.html.twig';
import Criteria from 'src/core/data-new/criteria.data';

const { Component, Mixin, Context } = Shopware;
const { EntityCollection } = Shopware.Data;

Component.register('sw-cms-el-config-rl-advanced-banner-slider', {
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
        },
    },

    data() {
        return {
            advancedBanners: null
        };
    },

    methods: {
        createdComponent() {
            this.initElementConfig('rl-advanced-banner-slider');
            this.initElementData('rl-advanced-banner-slider');

            this.advancedBanners = new EntityCollection(
                this.bannerRepository.route,
                this.bannerRepository.entityName,
                Context.api
            );

            const criteria = new Criteria(1, 1000);
            criteria.setIds(this.element.config.advancedBanners.value);

            this.bannerRepository
                .search(criteria, Shopware.Context.api)
                .then((result) => {
                    this.advancedBanners = result;
                });
        },

        onSelectionChange(newCollection) {
            this.advancedBanners = newCollection;
            this.element.config.advancedBanners.value = newCollection.getIds();
            this.$set(this.element.data, 'advancedBanners', newCollection);

            this.$emit('element-update', this.element);
        }
    }
});
