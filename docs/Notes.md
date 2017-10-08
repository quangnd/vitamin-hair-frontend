# Notes while working

### Add bootstrap 4 (beta) with Webpack 

- *Install bootrap* `npm install --save bootstrap@4.0.0-beta`
- *Install jquery* `npm install --save jquery`
- *Add plugin to Webpack*
```
  plugins: [
    ...
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
        // In case you imported plugins individually, you must also require them here:
        Util: "exports-loader?Util!bootstrap/js/dist/util",
        Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
        ...
      })
    ...
  ]
```
- *Import to index.js to use*
```
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
```
- If the error ocurred in Webpack while build, add this code follow
```
{
  test: /\.css$/,
  loader: 'style-loader!css-loader'
},
```
- [See bootstrap document for detail.](https://getbootstrap.com/docs/4.0/getting-started/webpack/)

### Updating...
