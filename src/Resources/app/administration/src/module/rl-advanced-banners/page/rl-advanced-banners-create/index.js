import template from './rl-advanced-banners-create.html.twig';
import './rl-advanced-banners-create.scss';

const { Component } = Shopware;

Component.extend('rl-advanced-banners-create', 'rl-advanced-banners-detail', {
    template,

    data() {
        return {
            newId: null
        };
    },

    methods: {
        createdComponent() {
            if (!Shopware.State.getters['context/isSystemDefaultLanguage']) {
                Shopware.Context.api.languageId = Shopware.Context.api.systemLanguageId;
            }

            this.advancedBanner = this.bannerRepository.create(Shopware.Context.api);
            this.newId = this.advancedBanner.id;

            this.isLoading = false;
        },

        saveFinish() {
            this.isSaveSuccessful = false;
            this.$router.push({ name: 'rl.advanced.banners.detail', params: { id: this.newId } });
        },

        onSave() {
            this.$super('onSave');
        }
    }
});
