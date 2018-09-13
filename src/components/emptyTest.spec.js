// Must have at least one test file in this directory or Mocha will throw an error.

test('expect 2 + 1 = 3', function() {
    function sum(a, b) {
        return a + b;
    }

    expect(sum(2,1)).toBe(3);
});
