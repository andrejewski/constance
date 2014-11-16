Constance
=========

Create constants with ease. Inspired by React's `keyMirror` module, Constance accepts an object and mirrors the keys onto their values. Constance also allows you to prefix and postfix constants, either to provide proper namespacing or cut down on the verbosity of writing out constants. Constance works with arrays too.

```js
var constance = require('constance');

var methods = ['save', 'update', 'validate'];

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

### Use Case

I created this module while working with Facebook's Flux architecture. `keyMirror` does an okay job, but without the option to prefix and postfix, action types were getting verbose and inconsistent.
