Shopware.Service('privileges').addPrivilegeMappingEntry({
    category: 'permissions',
    parent: null,
    key: 'rl_ab_banner',
    roles: {
        viewer: {
            privileges: [
                'rl_ab_banner:read',
            ],
            dependencies: [],
        },
        editor: {
            privileges: [
                'rl_ab_banner:read',
                'rl_ab_banner:update',
            ],
            dependencies: [
                'rl_ab_banner:viewer',
            ],
        },
        creator: {
            privileges: [
                'rl_ab_banner:create',
            ],
            dependencies: [
                'rl_ab_banner:viewer',
                'rl_ab_banner:editor',
            ],
        },
        deleter: {
            privileges: [
                'rl_ab_banner:delete',
            ],
            dependencies: [
                'rl_ab_banner:viewer',
            ],
        },
    },
});
