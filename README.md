# design-patterns

## Creational<hr />
### Factory
### Abstract Factory
### Builder
### Singleton

## Structural<hr />
## Behavioral<hr />
### Obervational

    
<br /><br />
---

*Configuring the project through Webpack*
-----------------------------------------
* Initialize the project folder through `npm init`. This initializes the folder with **package.json** file.
* Install 'webpack', 'webpack-cli' & 'webpack-dev-server' packages - all as dev dependencies.<br />
    `npm i -D webpack webpack-cli webpack-dev-server`
* Create `src` folder and `index.js` & `index.html` files inside it. Webpack 4 require src folder.
* Inside **package.json** under *scripts*, add 
    - `"build": "webpack",`<br />
    `"start": "webpack-dev-server"`
* Now, running `npm run build` creates a **dist** folder and a **main.js** file inside it which is generated by webpack. But there is no .html files present. We need to manually configure webpack for that.
* Install 'html-webpack-plugin' and 'html-loader' as dev dependencies.<br />
    `npm i -D html-webpack-plugin html-loader`
* Create a file named `webpack.config.js` in the project folder.
* Inside the 'webpack.config.js', write:
    ```javascript
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    module.exports = {
        module: {
            rules: [
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader",
                            options: { minimize: true }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            })
        ]
    }
    ```
    This sets up the webpack to detect any *.html* files and use 'html-loader' to parse them. In the plugins array, we create the HtmlWebpackPlugin. The *template* defines the location of the index.html file and *filename* defines the output which is stored in **dist** folder.

