beforeEach(() => console.log('OUTER beforeEach'));

describe('scoped', () => {
  beforeAll(() => console.log('INNER beforeAll'));
  test('', () => console.log('INNER test'));
});

/*
INNER beforeAll
OUTER beforeEach
INNER test
 */
