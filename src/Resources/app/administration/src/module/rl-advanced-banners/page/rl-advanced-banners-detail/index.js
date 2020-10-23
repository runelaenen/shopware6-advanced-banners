import template from './rl-advanced-banners-detail.html.twig';
import './rl-advanced-banners-detail.scss';

const { Component, Mixin } = Shopware;
const { Criteria } = Shopware.Data;

Component.register('rl-advanced-banners-detail', {
    template,

    inject: [
        'repositoryFactory'
    ],

    mixins: [
        Mixin.getByName('notification'),
        Mixin.getByName('placeholder')
    ],

    shortcuts: {
        'SYSTEMKEY+S': 'onSave',
        ESCAPE: 'onCancel'
    },

    props: {
        advancedBannerId: {
            type: String
        }
    },

    watch: {
        advancedBannerId() {
            this.loadEntityData();
        }
    },

    data() {
        return {
            advancedBanner: null,
            isLoading: false,
            isSaveSuccessful: false
        };
    },

    metaInfo() {
        return {
            title: this.$createTitle(this.identifier)
        };
    },

    computed: {
        identifier() {
            return this.placeholder(this.advancedBanner, 'name');
        },

        bannerRepository() {
            return this.repositoryFactory.create('rl_ab_banner');
        },

        tooltipSave() {
            const systemKey = this.$device.getSystemKey();

            return {
                message: `${systemKey} + S`,
                appearance: 'light'
            };
        },

        tooltipCancel() {
            return {
                message: 'ESC',
                appearance: 'light'
            };
        },

        defaultCriteria() {
            const criteria = new Criteria(this.page, this.limit);
            criteria.setTerm(this.term);

            return criteria;
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.loadEntityData();
        },

        loadEntityData() {
            this.isLoading = true;

            this.bannerRepository.get(this.advancedBannerId, Shopware.Context.api, this.defaultCriteria)
                .then((banner) => {
                    this.advancedBanner = banner;
                    if (!this.advancedBanner.data) {
                        this.$set(this.advancedBanner, 'data', { layers: [] });
                    }
                    if (!this.advancedBanner.data.layers) {
                        this.$set(this.advancedBanner.data, 'layers', []);
                    }

                    this.isLoading = false;
                }).catch(() => {
                    this.isLoading = false;
                });
        },

        saveFinish() {
            this.isSaveSuccessful = false;
        },

        saveOnLanguageChange() {
            return this.onSave();
        },

        abortOnLanguageChange() {
            return this.bannerRepository.hasChanges(this.advancedBanner);
        },

        onChangeLanguage() {
            this.loadEntityData();
        },

        onSave() {
            this.isSaveSuccessful = false;
            this.isLoading = true;

            return this.bannerRepository.save(this.advancedBanner, Shopware.Context.api).then(() => {
                this.loadEntityData();
                this.isLoading = false;
                this.isSaveSuccessful = true;
            }).catch((exception) => {
                this.createNotificationError({
                    title: this.$tc('global.default.error'),
                    message: this.$tc('rl-advanced-banners.detail.messageSaveError')
                });
                this.isLoading = false;
                throw exception;
            });
        },

        onCancel() {
            this.$router.push({ name: 'rl.advanced.banners.overview' });
        }
    }
});
