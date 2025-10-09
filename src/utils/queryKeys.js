export const queryKeys = {
    users : {
        getAll: ['orders'],
        detail : (id) => ['orders', id],
        create : (user) => ['users', user]
    }
}