import fetch from '../config/fetch';

export const cityGuess = () => fetch('/v1/cities', {
  type: 'guess'
});
