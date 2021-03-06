//first.test.js
test('My first test', () => {
    expect(Math.max(1, 5, 10)).toBe(10);
});
test('toEqual with objects', () => {
    expect({ foo: 'foo', subObject: { baz: 'baz' } })
        .toEqual({ foo: 'foo', subObject: { baz: 'baz' } });  // Ок
    expect({ foo: 'foo', subObject: { num: 0 } })
        .toEqual({ foo: 'foo', subObject: { baz: 'baz' } });  // А вот так ошибка.
});

test('toEqual with arrays', () => {
    expect([11, 19, 5]).toEqual([11, 19, 5]); // Ок
    expect([11, 19, 5]).toEqual([11, 19]); // Ошибка
});
const arr = ['apple', 'orange', 'banana'];
expect(arr).toContain('banana');
expect(new Set(arr)).toContain('banana');
expect('apple, orange, banana').toContain('banana');
expect([{a: 1}, {b: 2}]).toContainEqual({a: 1});

// tests/product.test.js
const productFilter = require('./ProductFilter');

const products = [
    { name: 'onion', price: 12 },
    { name: 'tomato', price: 26 },
    { name: 'banana', price: 29 },
    { name: 'orange', price: 38 }
];

test('Test product filter by range', () => {
    const FROM = 15;
    const TO = 30;
    const filteredProducts = productFilter.byPriceRange(products, FROM, TO);

    expect(filteredProducts).toHaveLength(2);
    expect(filteredProducts).toContainEqual({ name: 'tomato', price: 26 });
    expect(filteredProducts).toEqual([{ name: 'tomato', price: 26 }, { name: 'banana', price: 29 }]);
    expect(filteredProducts[0].price).toBeGreaterThanOrEqual(FROM);
    expect(filteredProducts[1].price).toBeLessThanOrEqual(TO);
    expect(filteredProducts).not.toContainEqual({ name: 'orange', price: 38 });
});
