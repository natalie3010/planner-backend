const getPermissions = function() {
    const userPermissions = {
        supply: {
            'read:any': ['*']
        },
        demand: {
            'read:any': ['*']
        },
        dashboard: {
            'read:any': ['*']
        }
    }
    
    const recruiterPermissions = Object.assign(
        userPermissions, 
        {
            supply: Object.assign(
                userPermissions.supply,
                {
                    'update:any': ['*'],
                    'delete:any': ['*'],
                }   
            )
        }
    );
    
    const managerPermissions = Object.assign(
        userPermissions, 
        {
            demand: Object.assign(
                userPermissions.demand,
                {
                    'update:any': ['*'],
                    'delete:any': ['*'],
                }   
            )
        }
    );
    
    const adminPermissions = Object.assign(recruiterPermissions, managerPermissions, {
        user: {
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*'],
        },
    });

    return {
        user: userPermissions,
        recruiter: recruiterPermissions,
        manager: managerPermissions,
        admin: adminPermissions
    };
};

let applicationAccessControlDefinition = null;

export const getApplicationAccessControlDefinition = function() {
    if(applicationAccessControlDefinition === null) {
        applicationAccessControlDefinition = getPermissions();
    }
    return applicationAccessControlDefinition;
}