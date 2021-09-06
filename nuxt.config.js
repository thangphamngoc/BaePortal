module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'nuxt-auth',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Nuxt.js project'
            }
        ],
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
            },
            // {
            //     rel: 'stylesheet',
            //     href: 'assets/css/style.css'
            // },
        ],

    },
    css: ['~/assets/css/style.css'],
    /*
     ** Customize the progress bar color
     */
    loading: {
        color: '#3B8070'
    },

    /*
     ** Build configuration
     */
    build: {
        postcss: {
            plugins: {
                "postcss-custom-properties": false
            }
        },
        /*
         ** Run ESLint on save
         */
        extend(config, {
            isDev,
            isClient
        }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    plugins: ['~/plugins/axios', '~/plugins/global.js'],

    modules: ['@nuxtjs/axios', '@nuxtjs/auth'],

    axios: {
        baseURL: 'http://127.0.0.1:9998/api',
        // debug: process.env.DEBUG || false,
        proxyHeaders: false,
        credentials: false,
    },

    auth: {
        strategies: {
            local: {
                // scheme: 'refresh',
                // token: {
                //     property: 'data.accessToken',
                //     maxAge: 1800,
                //     global: true,
                //     // type: 'Bearer'
                // },
                // refreshToken: {
                //     property: 'data.refreshToken',
                //     data: 'data.refreshToken',
                //     maxAge: 60 * 60 * 24 * 30
                // },
                // user: {
                //     property: 'user',
                //     // autoFetch: true
                // },
                endpoints: {
                    login: {
                        url: 'auth/login',
                        method: 'post',
                        propertyName: 'data.accessToken'
                    },
                    refresh: {
                        url: 'auth/refreshtoken',
                        method: 'post',
                        propertyName: 'data.refreshToken'
                    },
                    user: {
                        url: 'account/me',
                        method: 'get',
                        propertyName: 'data'
                    },
                    tokenRequired: true,
                    logout: false
                }
            },
            watchLoggedIn: true,
            redirect: {
                login: '/login',
                logout: '/',
                callback: '/login',
                home: '/'
            }
        }
    }
}