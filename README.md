# scoped beforeAll runs before top-level forEach in the absence of top-level test

## Steps to Reproduce:
1. `npm ci`
2. `npm run test1`
3. `npm run test2`

### Output of test1:

```
INNER beforeAll
OUTER beforeEach
INNER test
```

**NOTE:** `INNER beforeAll` appears _before_ `OUTER beforeEach`.
This behavior isn't correct, according to the
[docs](https://jestjs.io/docs/setup-teardown#scoping). Outer should
always run before inner.

### Output of test2
```
OUTER beforeEach
OUTER test
INNER beforeAll
OUTER beforeEach
INNER test
```

**NOTE:** `INNER beforeAll` appears _after_ `OUTER beforeEach`.
This behavior is correct.
