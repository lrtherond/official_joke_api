const assert = require('node:assert/strict');
const test = require('node:test');
const { jokeById } = require('./handler');

test('should render the joke with an id of 1', () => {
    assert.deepEqual(
        jokeById(1),
        {
            "id": 1,
            "type": "general",
            "setup": "What did the fish say when it hit the wall?",
            "punchline": "Dam."
        },
    );
});

test('should return undefined with an invalid id', () => {
    assert.equal(jokeById('one'), undefined);
    assert.equal(jokeById('1'), undefined);
    assert.equal(jokeById(), undefined);
});
