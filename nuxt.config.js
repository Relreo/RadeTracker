import colors from 'vuetify/es5/util/colors'

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - RadeTracker',
        title: 'RadeTracker',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        [
            '@nuxtjs/firebase',
            {
                config: {
                    apiKey: 'AIzaSyB5bNEyfzAfweR9ASQu3v4nwLzS-1LEtGk',
                    authDomain: 'rade-campaign-tracker.firebaseapp.com',
                    databaseURL: 'https://rade-campaign-tracker-default-rtdb.firebaseio.com',
                    projectId: 'rade-campaign-tracker',
                    storageBucket: 'rade-campaign-tracker.appspot.com',
                    messagingSenderId: '1095266979845',
                    appId: '1:1095266979845:web:3191a87336cd909b9d8c6c',
                    measurementId: 'G-H0VFYZZXYE',
                },
                services: {
                    auth: {
                        persistence: 'local', // default
                        initialize: {
                            onAuthStateChangedAction: 'onAuthStateChangedAction',
                            subscribeManually: false,
                        },
                        ssr: false, // default
                    },
                    database: true,
                },
            },
        ],
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
            },
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}
