export const applicationAccessControlDefinition = {
    user: {
        supply: {
            'read:any': ['*']
        },
        demand: {
            'read:any': ['*']
        },
        dashboard: {
            'read:any': ['*']
        }
    },
    recruiter: {
        supply: {
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*'],
        },
        demand: {
            'read:any': ['*'],
        },
        dashboard: {
            'read:any': ['*']
        }
    },
    manager: {
        supply: {
            'read:any': ['*']
        },
        demand: {
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*'],
        },
        dashboard: {
            'read:any': ['*']
        }
    },
    admin: {
        supply: {
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*'],
        },
        demand: {
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*'],
        },
        user: {
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*'],
        },
        dashboard: {
            'read:any': ['*']
        }
    }
};