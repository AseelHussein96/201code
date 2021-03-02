 # HTML offers web authors three ways for specifying lists of information. All lists must contain one or more list elements. Lists may contain −

 − An unordered list. This will list items using plain bullets.ul

 − An ordered list. This will use different schemes of numbers to list your items. ol 

− A definition list. This arranges your items in the same way as they are arranged in a dictionary. dl 

### HTML unorder list : 
> Unordered HTML List. An unordered list starts with the *ul* tag. Each list item starts with the *li* tag.
Unordered HTML List - Choose List Item Marker. The CSS list-style-type property is used to define the style of the list.
Nested HTML Lists. Note: A list item *li* can contain a new list, and other HTML elements, like images and links, etc.

### HTML order list :
 > HTML ordered list is used for listing items that are marked with numbers. It starts with the <ol> tag. This tag comes in pairs, the content is written between opening <ol> and closing </ol> tags.

Each item in the ordered list starts with opening <li> tag and ends with </li> closing tag.
 
 ### HTML defition order : 

 > HTML Description List or Definition List displays elements in definition form like in dictionary. The <dl>, <dt> and <dd> tags are used to define description list. <dl> tag defines the description list.

 ### box : 
 All HTML elements can be considered as boxes. The CSS Box Model In CSS, the term "box model" is used when talking about design and layout. The CSS box model is essentially a box that wraps around every HTML element.
 You can also create coloured boxes in CSS, where the background of the box has a different colour from the rest of the page. Another visual effect that can be used is to make the box cast a shadow. That's it. The procedure for creating a rectangular box around your text/images with CSSis, as you can see, very simple.

# JAVASCRIPTS: 
> JavaScript ("JS" for short) is a full-fledged dynamic programming language that can add interactivity to a website. It was invented by Brendan Eich (co-founder of the Mozilla project, the Mozilla Foundation, and the Mozilla Corporation).

JavaScript is versatile and beginner-friendly. With more experience, you'll be able to create games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more!

JavaScript itself is relatively compact, yet very flexible. Developers have written a variety of tools on top of the core JavaScript language, unlocking a vast amount of functionality with minimum effort. These include:

- Browser Application Programming Interfaces (APIs) built into web browsers, providing functionality such as dynamically creating HTML and setting CSS styles; collecting and manipulating a video stream from a user's webcam, or generating 3D graphics and audio samples.
- Third-party APIs that allow developers to incorporate functionality in sites from other content providers, such as Twitter or Facebook.
- Third-party frameworks and libraries that you can apply to HTML to accelerate the work of building sites and applications.
### script : 
The <script> element either contains scripting statements, or it points to an external script file through the src attribute. Common uses for JavaScript are image manipulation, form validation, and dynamic changes of content. 
> Language basics crash course: 
1 - Variables : Variables are containers that store values. You start by declaring a variable with the var (less recommended, dive deeper for the explanation) or the let keyword.
 JavaScript variables can hold numbers like 100 and text values like "John Doe".In programming, text values are called text strings.JavaScript can handle many types of data, but for now, just think of numbers and strings.
Strings are written inside double or single quotes. Numbers are written without quotes.
f you put a number in quotes, it will be treated as a text string.
 
 2 - Comment: are meaningful way to deliver message. It is used to add information about the code, warnings or suggestions so that end user can easily interpret the code. The JavaScript comment is ignored by the JavaScript engine i.e. embedded in the browser.Advantages of JavaScript comments.
 3 -Array : An array is a single variable in JavaScript that is used to store various elements. When we want to store a list of elements and access them through a single variable, it is often used. Unlike many other languages where an array is a various variable reference, there is a single variable in the JavaScript array that stores various elements.
 ### EXperssion in javascripts : 
 An expression is any valid unit of code that resolves to a value.

Every syntactically valid expression resolves to some value but conceptually, there are two types of expressions: with side effects for example: those that assign value to a variable and those that in some sense evaluate and therefore resolve to a value.

The expression x = 7 is an example of the first type. This expression uses the = operator to assign the value seven to the variable x. The expression itself evaluates to seven.

The code 3 + 4 is an example of the second expression type. This expression uses the + operator to add three and four together without assigning the result, seven, to a variable.

JavaScript has the following expression categories:

- Arithmetic: evaluates to a number, for example 3.14159. *Generally uses arithmetic operators.*
- String: evaluates to a character string, for example, "Fred" or "234". *Generally uses string operators.*
- Logical: evaluates to true or false. *Often involves logical operators.*
- Primary expressions: Basic keywords and general expressions in JavaScript.
- Left-hand-side expressions: Left values are the destination of an assignment.

 ## switch statement
switch statements do the same task that else if statements do. But use switch statements when conditions are more. In that case, switch statements perform better than else if statements.
witch evaluates the expression and checks whether it matches with any case. If it matches with any case then statements within that case construct are executed followed by break statement. break statement makes sure that no more case statement gets executed. In case if the expression doesn't match any case value then default case is executed.

There could be any number of statements. No curly braces is needed inside case construct. Also you can omit the break statement in the default construct if default is the last statement within switch.
> Note: Check that I have dropped the break statement for the default case construct. It will work fine but try to put the default statement above case 1 and see the result. Also try this program removing all the break statements.

* case value can be any number, character or string. Keep this in mind. 