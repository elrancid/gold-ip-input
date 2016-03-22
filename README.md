
<!---

This README is automatically generated from the comments in these files:
gold-ip-input.html

Edit those files, and our readme bot will duplicate them over here!
Edit this file, and the bot will squash your changes :)

-->

[![Build Status](https://travis-ci.org/elrancid/gold-ip-input.svg?branch=master)](https://travis-ci.org/elrancid/gold-ip-input)

_[Demo and API Docs](https://elements.polymer-project.org/elements/gold-ip-input)_


##&lt;gold-ip-input&gt;


`gold-ip-input` is a single-line text field with Material Design styling
for entering an IP address value. As the user types, the number will be
formatted by adding a dot every 3 digits.

    <gold-ip-input></gold-ip-input>

It may include an optional label, which by default is "IP address".

    <gold-ip-input label="IP"></gold-ip-input>

### Validation

The input can detect whether an IP address is valid.

The input can be automatically validated as the user is typing by using
the `auto-validate` and `required` attributes. For manual validation, the
element also has a `validate()` method, which returns the validity of the
input as well sets any appropriate error messages and styles.

See `Polymer.PaperInputBehavior` for more API docs.

### Styling

See `Polymer.PaperInputContainer` for a list of custom properties used to
style this element.
