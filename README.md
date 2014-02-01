# GLG-Sass-workshop #

## Overview ##

This repo is meant to go along with a discussion (outlined below). The master branch includes all of the comments and notes for the presenter, and the starter branch is for attendees to work through in stages witht the presenter.

## Outline of Discussion ##

1. project file structure overview
2. SCSS Syntax & Features
	- Selector Scoping
		* Nesting rules makes the inner rule apply to the outer rule.
		* Only nest when you need to specify the parent(s). Otherwise, you’re outputting more code than needed. Also, be careful when grouping parent selectors. Be mindful and consider how much code will be output.
		* Why? DRY, of course.
		* see output to compare
		* (add some of your own styles to try it out)
	- @import
		* allows you to import other files
		* separating styles into organized files keeps everything clean and easy to find
		* (see examples in project)
	- Variables
		* Variables allow you to assign and reuse values.
		* Assigning values as variables allows you to reuse those values as many times as you want. If you ever need to make a global change, you only have to do it in one place.
		* (add some of your own, don’t have to be colors)
	- Mixins
		* outputs a block of code
		* can pass in arguments
		* when you want to reuse code but slightly alter it with arguments (buttons w/similar styles but different colors, for example)
		* don’t @include a mixin if you can @extend (less output code)
		* see clearfix mixin example
		* try it out by adding one of your own and pass arguments through it
			1. create a mixin (cta_arrow) that adds styles to the See details links
			2. for the argument, pass through a variable for font-size
	- @extend
		* lets one selector inherit the styles of another selector
		* when you want to reuse styles but not use the same class
		* one selector can use styles from another selector and have styles of it’s own
		* will help keep code output minimal (see output)
		* add some styles to .sched-for-term and @extend those styles to .new
	- Placeholder Selectors: %foo
		* write code to reuse
		* kind of like a mixin
		* also called “silent classes” b/c they won’t be output until you @extend them
		* better to extend a placeholder selector instead of a class selector
		* great for theming b/c they won’t get output unless they’re called
		* So what’s the difference between a mixin and placeholder? Why not always use placeholders if they dont’ get output?
			1. cannot pass arguments through placeholders to generate content-specific css
			2. to limit css output, use placeholders unless you need to pass arguments
			3. http://www.sitepoint.com/sass-mixin-placeholder/?utm_content=buffer44979&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer
		* client-side theme example (see themes partials)
			1. JS adds class to body
			2. by adding theme class around placeholders, only uses the placeholder that has the parent theme class
			3. can add as many placeholders within that specific theme file and use them throughout entire main scss file
	- Variable Defaults: !default
		* You can assign a value to a variable if it doesn’t already have a value by adding !default at the end of the value. If the variable is already assigned, it will use that value and not the !default.
		* example: http://robots.thoughtbot.com/sass-default
		* can set variable defaults when passing through mixin or function as argument
	- Functions
		* functions return a value, and you can also pass in arguments (unlike mixins, which return code)
		* use when you want to return a value
		* calculate and reuse
		* create your own or use out-of-the-box functions from sass (http://sass-lang.com/documentation/Sass/Script/Functions.html)
		* see px-to-em() and nestedEm() in _tools.scss
	- Operations
		* Number
		* Boolean
		* Color
		* String
		* see existing functions in _tools.scss
	- Interpolating
		* sets selectors and property names as variables
	- @each
		* lists
		* create a mixin that uses the cat gif imgs as icons in the footer (markup is already there with class names). Steps:
			1. create and call the mixin
			2. add a list of all the colors
			3. add @each to add styles that get reused for each one
			4. use interpolation to switch out the class names based on the items in the list
			5. use interpolation to switch out the background image based on items in the list
			6. add remaining styles that need to be reused for all
	- @for
		* http://hugogiraudel.com/2013/08/08/advanced-sass-list-functions/
		* see _grid example
		* see Josh’s example
	- @while
		* http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_9
	- @if
	- @media
	- @debug
	- @warn
