module.exports = {
    entry: './main.ts',
    output: {
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader", // Do not use "use" here
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules"
        ]
    }
};