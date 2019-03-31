# Keeping SilverStripe classy!

When installed, this developer module will examine the classes in your CMS DOM (Document Object Model) and give you
useful notifications to ensure that your class names remain classy (BEM compatible). The module is super lightweight and
can be installed alongside SilverStripe Debugbar.

It's a little difficult to explain how this works, so you're best to install it and have a go to get the idea.

## Installation

```
composer require --dev robbieaverill/silverstripe-keepclassy
``` 

## Use

Navigate around in your CMS. When incompatible class names are found in your DOM, a console warning will be
shown highlighting both the element name, and the affected element object. If you run this with SilverStripe Debugbar
you will get this information in the debug bar console instead. In this case you can easily click on the item to add
a breakpoint for the element being added to your DOM.

The easiest way to see this module in action is to click "Pages" in your CMS, since this is often where most modules
will take effect via form field modification in SiteTree instances.

## Configuration

By default, this module will only look at third party modules that modify the CMS DOM elements, not the core modules.
This is entirely compatible with the core SilverStripe JavaScript Injector, which is often in charge of directing DOM
modifications (e.g. via React form generation).

You can enable this module for core modules as well either by whitelisting them, or enabling for all:

```yaml
RobbieAverill\KeepClassy\CoatCheck:
  # Optional: define a module whitelist
  module_whitelist:
    - silverstripe/cms
    - silverstripe/admin
  # Optional: define a module blacklist
  module_blacklist:
    - silverstripe/versioned-admin
    - somemodule/i-dont-care-about
   # Blanket rule: enable for all modules (overrides whitelist and blacklist configuration)
   all_modules: true
   # Blanket rule: disable for all modules (overrides whitelist and blacklist configuration)
   all_modules: false
```


