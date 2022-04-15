/* eslint-disable no-unused-vars */
const actions = {
    onAuthStateChangedAction(ctx, { authUser, claims }) {
        if (!authUser) {
            // claims = null
            // Perform logout operations
        } else {
            // Do something with the authUser and the claims object...
        }
    },
}
