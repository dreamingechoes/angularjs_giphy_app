# AngularJS Giphy App

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.14.0.

## About

This is an example of an AngularJS webapp example for consume Giphy's API. Made with AngularJS, Grunt and Yeoman.

## Original author

Iván González, *a.k.a* [dreamingechoes](https://github.com/dreamingechoes)

## Install dependencies

First thing you we'll need is have `node.js` installed on your system. If you don't have it, go to [https://nodejs.org](https://nodejs.org) and install it. After that, we have to install Yeoman, and in order to do that, execute the following instruction on your terminal (maybe you'll need to execute it as a root user):

```sh
user@computer:~$ npm install -g yo
```

The `-g` flag tells `node.js` to install Yeoman globally on your system. It's very important to use this flag because if we don't specify, it's going to be installed locally in the folder you are and you won't be able to run it as a command. Then, let's install [generator-angular](https://www.npmjs.com/package/generator-angular), which is a Yeoman generator that scaffolds out a frontend web app:

```sh
user@computer:~$ npm install -g generator-angular
```

Due to we're going to use `sass`, we have to install `compass` too. Follow the steps of the official web [here](http://compass-style.org/install/). Finally, let's install `grunt` and `bower`:

```sh
user@computer:~$ npm install -g grunt
user@computer:~$ npm install -g bower
```

## Getting Started

To start using this AngularJS Giphy App, you only have to do:

```sh
user@computer:~$ git clone git@github.com:dreamingechoes/angularjs_giphy_app.git
user@computer:~$ cd angularjs_giphy_app
user@computer:/angularjs_giphy_app$ grunt
user@computer:/angularjs_giphy_app$ grunt serve
```

## Testing

Running `grunt test` will run the unit tests with karma.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License

**AngularJS Giphy App** is released under the [MIT License](http://www.opensource.org/licenses/MIT).
