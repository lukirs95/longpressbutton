[![DeepScan grade](https://deepscan.io/api/teams/14358/projects/17488/branches/401713/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=14358&pid=17488&bid=401713)

# Long Press Button Module

A lightwight Long Press Button Module that let you turn everything on your Homepage into an press & hold button.

## INSTALL

For the use as module you can import this module via npm.

    npm install longpressbutton

## DEMO

You can see this module in action on https://lucas-kirsche.de/longpressbutton/demo

## USAGE

Use this module in 3 different ways.

### simple

Just import the minified es5 library into you're HTML document, and every element with a parameter set to **data-longpress=_time-in-ms_** will fire a "longpress"-event after clicking it the given amount of time.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="./longpressbutton/dist/longpressbutton-min.js" defer></script>
        <title>EXAMPLE</title>
    </head>
    <body>
        <button data-longpress="2000">PRESS 2s</button>
    </body>
    </html>

Access the event by either set the onclick event directly in the html

    <button data-longpress="2000" onclick="console.log('clicked!')">PRESS 2s</button>

or listen to the **longpress**-event in a javascript.

    document.querySelector('button').addEventListener('longpress', (event) => { console.log('clicked!')});

### module

If you want to pack the module with your own project, you have to import this module and call **lpButton.init()**. This function searches the whole document for elements with a **data-longpress=_time-in-ms_** attribute.

    import {lpButton} from 'longpressbutton';

    lpButton.init();

For a specific search scope, just pass the top element as argument to the init function.

    lpButton.init(HTMLElement);

### module with dynamic DOM-Elements

In case you have dynamic elements which are created by your script use this module class directly.

    import {lpButton} from 'longpressbutton';

    const customElement = document.createElement('button');

    customElement.addEventListener('longpress', (event) => { cosole.log(event) });

    lpButton.newButton(customElement, 1000); //returns the customElement

    document.append(customElement);

Just make sure to link the longpressbutton.css.

## CSS

Per default this module comes with a animation while pressing. You can specify your own stylings by overriding the classes.

Every longpress button element has a **.lpb-button** class and gets a child element with a **.lpb-loader** class. This element gets a **.lpb-loading** class while pressing and a **.lpb-loaded** class on timer expiration until a css keyframe animation ends.
