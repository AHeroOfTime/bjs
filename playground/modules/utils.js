const last = 'rodriguez';
const middle = 'epic';

export function returnHi(name) {
  return `hi ${name} ${last}`;
}

const first = 'aaron';
// named exports {} - can have as many as we want
export { last, middle };
export default first;
