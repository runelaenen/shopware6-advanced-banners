import template from './rl-advanced-banners-detail-preview-layer-image.html.twig';
import './rl-advanced-banners-detail-preview-layer-image.scss';

const { Component, Mixin } = Shopware;

Component.register('rl-advanced-banners-detail-preview-layer-image', {
    template,

    inject: [
        'repositoryFactory',
        'defaultCssStyles'
    ],

    mixins: [
        Mixin.getByName('placeholder')
    ],

    data() {
        return {
            media: null,
            isLoading: false
        };
    },

    computed: {
        config() {
            return this.layer.config || {};
        },
        mediaRepository() {
            return this.repositoryFactory.create('media');
        },
        previewClasses() {
            const classes = ['rl-advanced-banners-detail-preview-layer-image__image'];
            if (this.config.mediaMode === 'contain') {
                classes.push('bs-contain');
            }
            if (this.config.mediaMode === 'cover') {
                classes.push('bs-cover');
            }
            return classes;
        },
        backgroundStyle() {
            let styles = this.defaultCssStyles(this.layer);
            styles += `background-image: url('${this.media.url}');`;
            styles += `background-position: ${this.config.mediaPositionX} ${this.config.mediaPositionY};`;
            styles += `background-repeat: ${this.config.mediaRepeat};`;

            return styles;
        }
    },

    watch: {
        config: {
            handler() {
                this.loadMedia();
            },
            immediate: true,
            deep: true
        }
    },


    methods: {
        loadMedia() {
            if (this.config.mediaId.length === 0) {
                return;
            }
            if (this.media && this.media.id === this.config.mediaId) {
                return;
            }

            this.isLoading = true;
            this.mediaRepository.get(this.config.mediaId, Shopware.Context.api).then((mediaItem) => {
                this.media = mediaItem;
                this.isLoading = false;
            });
        }
    },

    props: {
        layer: {
            type: Object,
            required: true
        }
    }
});
