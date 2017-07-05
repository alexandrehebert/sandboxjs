Function.prototype.compose = function(next) {
  return context => next(this.call(this, context));
};

const square = i => i * i;
const increment = i => ++i;
const oppose = i => -i;

const process = square
  .compose(increment)
  .compose(oppose);

console.log(process(2));
