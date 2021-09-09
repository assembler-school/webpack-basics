/* A file called module-b.js that contains a javascript
module that makes use of the JQuery library
(JQuery must be imported via webpack not manually)
 */


export const setTitle = (title) => {

  $("h1").text(title);
}