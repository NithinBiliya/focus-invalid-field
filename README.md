# focus-invalid-field
angular directive to set focus on first visible invalid field on submitting a form

Demo
--------
[DEMO link](https://nithinbiliya.github.io/focus-invalid-field/)

Installation
-------------
Install using bower -

```
 bower install --save focus-invalid-field
```

Inject the focus.invalid.field module into your module for using the directive - 

```
 angular.module('myApp', ['focus.invalid.field'])
```

Usage
------

Add the focus-invalid-field attribute onto the form tag - 

```
 <form name="myFormNg" novalidate ng-submit="submitTheForm()" focus-invalid-field>
```

Credits
---------
Created module from ideas from -- [Stack Overflow](https://stackoverflow.com/a/20389433/1298824)

[iandotkelly](https://stackoverflow.com/users/832390/iandotkelly) , [roryf](https://stackoverflow.com/users/270/roryf) and [pcatre](https://stackoverflow.com/users/3094399/pcatre)

License
--------
MIT License
