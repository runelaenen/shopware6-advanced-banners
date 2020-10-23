import template from './rl-advanced-banners-layer-config-text.html.twig';
import './rl-advanced-banners-layer-config-text.scss';

const { Component } = Shopware;

Component.register('rl-advanced-banners-layer-config-text', {
    template,

    inject: [
        'repositoryFactory'
    ],

    props: {
        layer: {
            type: Object,
            required: true
        }
    },

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
        uploadTag() {
            return `rl-advanced-banners-layer-config-text-media-${this.layer.id}`;
        },
        mediaRepository() {
            return this.repositoryFactory.create('media');
        }
    },

    created() {
        if (this.config.mediaId.length === 0) {
            return;
        }

        this.isLoading = true;
        this.mediaRepository.get(this.config.mediaId, Shopware.Context.api).then((mediaItem) => {
            this.media = mediaItem;
            this.isLoading = false;
        });
    },

    methods: {
        onSetMedia([mediaItem]) {
            this.$set(this.config, 'mediaId', mediaItem.id);
            this.media = mediaItem;
        },

        successfulUpload(media) {
            this.$set(this.config, 'mediaId', media.targetId);

            this.mediaRepository.get(media.targetId, Shopware.Context.api).then((mediaItem) => {
                this.media = mediaItem;
            });
        },

        removeMedia() {
            this.$set(this.config, 'mediaId', null);
            this.media = null;
        }
    }
});
