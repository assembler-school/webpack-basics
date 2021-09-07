/* A file called module-b.js that contains a javascript module that makes use of the JQuery library (JQuery must be imported via webpack not manually)
 */
export function jq() {
  $('body').append('<h1>Hello Webpacker!</h1>');
}