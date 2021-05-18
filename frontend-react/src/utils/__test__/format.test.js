import currencyFormat from '../format';

test('renders learn react link', () => {

  expect(currencyFormat(5000)).toEqual('$5,000.00');
});
