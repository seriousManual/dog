export default function createAction(type, ...parameters) {
  return Object.assign({}, {type}, ...parameters);
}