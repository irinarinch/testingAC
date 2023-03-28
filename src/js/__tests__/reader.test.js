import read from '../reader';

jest.mock('../reader');
let data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

test('resolve', () => {
  expect.assertions(1);

  return read(data).then((buffer) => {
    expect(buffer).toBe(buffer);
  });
});

test('reject', () => {
  expect.assertions(1);

  data = 4;

  return expect(read()).rejects.toThrow(
    'not a string',
  );
});
