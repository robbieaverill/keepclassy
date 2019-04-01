# Keeping SilverStripe classy! 🕶

![Travis (.org)](https://img.shields.io/travis/silverstripe/silverstripe-framework.svg)
![Codacy coverage](https://img.shields.io/codacy/coverage/59d607d0e311408885e418004068ea58.svg)
![2.0 AA](https://img.shields.io/badge/WCAG-2.0%20AA-green.svg)

This developer module will examine the classes in your CMS DOM (Document Object Model) and give you
useful notifications to ensure that your class names remain classy (BEM compatible), as well as out-of-the-box analysis
of accessibility issues with common things like colour contrast, aria labels, and DOM structure. The module is super
lightweight and can be installed alongside SilverStripe Debugbar.

**You want a TL;DR?** It's a little difficult to explain how this works, so you're best to install it and have a go to get the idea.

## Installation

```
composer require --dev robbieaverill/silverstripe-keepclassy
``` 

Ensure you `?flush` in your browser after installation.

## Use

Navigate around in your CMS. When incompatible class names are found in your DOM, a console warning will be
shown highlighting both the element name, and the affected element object. If you run this with SilverStripe Debugbar
you will get this information in the debug bar console instead. In this case you can easily click on the item to add
a breakpoint for the element being added to your DOM.

The easiest way to see this module in action is to click on a page in your CMS site tree, since this is often where
most modules will take effect via form field modification in SiteTree instances.

Whenever any of the following accessibility issues are found, they will be reported to the console as a warning:

* Colour contrast not meeting WCAG 2.0 AA standards (background vs foreground colour for text)
* Button padding relative to text size
* Missing or incorrect ARIA tags for screenreaders
* Semantically incorrect markup structure (e.g. headers in the wrong order, or wrong element names used)
* Non interactive elements acting as buttons without appropriate `role` and keyboard accessibility attributes
* Text size too small
* Images without alternative text attributes

## Requirements

* SilverStripe ^4.0
* A modern browser that supports flexbox
* Optional: SilverStripe Debugbar

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


## Userguide

* [Userguide](docs/en/index.md)
```

## License

This module is licensed under [the DBAD license](https://dbad-license.org/)(🤥):

```
# DON'T BE A DICK PUBLIC LICENSE

> Version 1.1, December 2016

> Copyright (C) 2019 Robbie Averill

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document.

> DON'T BE A DICK PUBLIC LICENSE
> TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

1. Do whatever you like with the original work, just don't be a dick.

   Being a dick includes - but is not limited to - the following instances:

 1a. Outright copyright infringement - Don't just copy this and change the name.
 1b. Selling the unmodified original with no work done what-so-ever, that's REALLY being a dick.
 1c. Modifying the original work to contain hidden harmful content. That would make you a PROPER dick.

2. If you become rich through modifications, related works/services, or supporting the original work,
share the love. Only a dick would make loads off this work and not buy the original work's
creator(s) a pint.

3. Code is provided with no warranty. Using somebody else's code and bitching when it goes wrong makes
you a DONKEY dick. Fix the problem yourself. A non-dick would submit the fix back.

Note that the GIF included is not part of the license of this software, and was obtained via https://giphy.com/gifs/convert-printable-gifprint-6b9QApjUesyOs
```

## Contributing

We welcome all contributions for bugfixes and new features in the form of pull requests.

Feel free to fork and do whatever you want with this module.

## Tests

I haven't written any.

## Disclaimer

This module is obviously a joke for april fools day. Install it anyway though.
