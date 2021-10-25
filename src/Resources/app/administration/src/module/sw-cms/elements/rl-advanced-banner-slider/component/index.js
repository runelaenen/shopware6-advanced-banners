import template from './sw-cms-el-rl-advanced-banner-slider.html.twig';
import './sw-cms-el-rl-advanced-banner-slider.scss';

const { Mixin } = Shopware;
const { Criteria } = Shopware.Data;

Shopware.Component.register('sw-cms-el-rl-advanced-banner-slider', {
    template,

    inject: ['repositoryFactory'],

    mixins: [
        Mixin.getByName('cms-element'),
    ],

    data() {
        return {
            activateBannerItem: 0,
        };
    },

    computed: {
        bannerRepository() {
            return this.repositoryFactory.create('rl_ab_banner');
        },

        advancedBanners() {
            return this.element.data.advancedBanners || [];
        },

        previewStyle() {
            return `height: ${this.element.config.height.value};`;
        },

        hasBanners() {
            return this.advancedBanners.length > 0;
        },

        activeBanner() {
            if (this.activateBannerItem >= this.advancedBanners.length || this.activateBannerItem < 0) {
                this.activateBannerItem = 0;
            }

            return this.advancedBanners[this.activateBannerItem];
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('rl-advanced-banner-slider');
            this.initElementData('rl-advanced-banner-slider');
            this.loadBanners();
        },

        loadBanners() {
            const criteria = new Criteria(1, 100);
            criteria.setIds(this.element.config.advancedBanners.value);

            this.bannerRepository
                .search(criteria, Shopware.Context.api)
                .then((result) => {
                    this.$set(this.element.data, 'advancedBanners', result);
                });
        },
    },
});
