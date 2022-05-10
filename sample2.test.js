beforeEach(() => console.log('OUTER beforeEach'));

test('', () => console.log('OUTER test'));

describe('scoped', () => {
  beforeAll(() => console.log('INNER beforeAll'));
  test('', () => console.log('INNER test'));
});
