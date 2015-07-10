# Constance

Create constants with ease. Inspired by React's `keyMirror` module, Constance accepts an object and mirrors the keys onto their values. Constance also allows you to prefix and postfix constants, either to provide proper namespacing or cut down on the verbosity of writing out constants. Constance works with arrays too.

```sh
npm install constance
```

```js
var constance = require('constance');

var methods = ['save', 'update', 'validate'];

// normal
var events = constance(methods);
/* => {
  save: 'save',
  update: 'update',
  validate: 'validate'
} */

// prefixing
var hooks = constance('pre_', methods); 
/* => {
	save: 'pre_save',
	update: 'pre_update',
	validate: 'pre_validate'	
} */

// postfixing
var actions = constance(methods, '_action');
/* => {
	save: 'save_action',
	update: 'update_action',
	validate: 'validate_action'	
} */
```

## Contributing

We can always have more tests: if you find a bug, create an issue or be **fabulous** and fix the problem and write the tests up yourself in a coherent pull request.

Run tests with the `npm test` command.

Follow me on [Twitter](http://chrisandrejewski.com/twitter) for updates or just for the lolz and please check out my other [repositories](https://github.com/andrejewski) if I have earned it. I thank you for reading.

