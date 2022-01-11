

function f() {
  console.log( this );
}
let user = {
  g: f.bind(null),
  arrowFunc: () => console.log(this)
};
user.g(); // ?
user.arrowFunc();

// Window {0: Window, window: Window, self: Window, document: document, name: 'John', location: Location, …}
// Window {0: Window, window: Window, self: Window, document: document, name: 'John', location: Location, …}