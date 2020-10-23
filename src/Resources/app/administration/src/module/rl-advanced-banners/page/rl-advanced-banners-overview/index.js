import template from './rl-advanced-banners-overview.html.twig';

const utils = Shopware.Utils;

const {Component} = Shopware;
const {Criteria} = Shopware.Data;

Shopware.Component.register('rl-advanced-banners-overview', {
    template,

    inject: ['repositoryFactory'],

    data() {
        return {
            isLoading: false,
            criteria: null,
            repository: null,
            items: null,
            term: this.$route.query ? this.$route.query.term : null,
            showCreateModal: false,
            createModalLoading: false,
            createBannerTitle: ""
        };
    },

    metaInfo() {
        return {
            title: this.$createTitle()
        };
    },

    computed: {
        columns() {
            return [
                {
                    property: 'technicalName',
                    dataIndex: 'technicalName',
                    label: 'rl-advanced-banners.list.technicalName',
                    routerLink: 'rl.advanced.banners.detail',
                }, {
                    property: 'createdAt',
                    dataIndex: 'createdAt',
                    label: 'rl-advanced-banners.list.createdAt',
                    routerLink: 'rl.advanced.banners.detail',
                }
            ];
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.getList();
        },

        getList() {
            this.repository = this.repositoryFactory.create('rl_ab_banner');

            this.criteria = new Criteria();
            this.criteria.addSorting(Criteria.sort('createdAt', 'ASC'));

            if (this.term) {
                this.criteria.setTerm(this.term);
            }

            this.isLoading = true;

            const context = {...Shopware.Context.api};

            return this.repository.search(this.criteria, context).then((result) => {
                this.total = result.total;
                this.items = result;
                this.isLoading = false;
            });
        },

        onSearch(term) {
            this.criteria.setTerm(term);
            this.$route.query.term = term;
            this.$refs.listing.doSearch();
        },

        onDelete(option) {
            this.$refs.listing.deleteItem(option);

            this.repository.search(this.criteria, {...Shopware.Context.api, inheritance: true}).then((result) => {
                this.total = result.total;
                this.items = result;
            });
        },

        onDuplicate(item) {
            this.isLoading = true;

            this.repository.clone(item.id, Shopware.Context.api).then((result) => {
                this.repository.get(result.id, Shopware.Context.api)
                    .then((banner) => {
                        banner.technicalName = banner.technicalName + ' ' + this.$tc('rl-advanced-banners.list.duplicatedBanner');
                        this.repository.save(banner, Shopware.Context.api).then(() => {
                            this.$nextTick(function () {
                                this.$router.push({
                                    name: 'rl.advanced.banners.detail',
                                    params: {
                                        id: banner.id
                                    }
                                });
                            });
                        });
                    }).catch(() => {
                    this.isLoading = false;
                });
            });
        },

        onRefresh() {
            this.getList();
        },

        createNewBanner() {
            this.createModalLoading = true;

            let banner = this.repository.create();
            banner.technicalName = this.createBannerTitle;

            return this.repository.save(banner, Shopware.Context.api).then((result) => {
                this.showCreateModal = false;
                this.$nextTick(function () {
                    this.$router.push({
                        name: 'rl.advanced.banners.detail',
                        params: {
                            id: banner.id
                        }
                    });
                });
            });
        }
    }
});
