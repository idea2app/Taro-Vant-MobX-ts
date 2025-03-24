export default {
    plugins: {
        "@tailwindcss/postcss": {},
        /**
         * only for HTML 5 and TailWind CSS 4
         * @see {@link https://tw.icebreaker.top/docs/quick-start/v4#%E5%BC%80%E5%8F%91-h5}
         */
        "postcss-preset-env": {
            browsers: ['last 3 versions', 'Android >= 4.1', 'ios >= 8'],
            stage: 0,
            features: {
                'nesting-rules': true,
                'custom-properties': true,
                'cascade-layers': true
            },
            preserve: true,
        },
    }
}