// <button onClick="myClick">Click</button>

function myClick(this: HTMLButtonElement) {
  this.disabled = true;
}