import { assert, expect } from 'chai';
import { formatDate, objectToArray } from "../src/index";

describe('Exists', () => {
  describe('#formatDate()', () => {
    it('should exists', () => {
      assert.exists(formatDate);
    });

    it('test the first param', () => {
      assert.equal(formatDate(null), '');
      assert.equal(formatDate(undefined), '');
      assert.equal(formatDate(''), '');
      assert.equal(formatDate('2019-01-01 01:00:00'), '2019-01-01 01:00:00');
    })

    it('test the second param', () => {
      assert.equal(formatDate('2019-01-01 01:00:00', ''), '2019-01-01 01:00:00');
      assert.equal(formatDate('2019-01-01 01:00:00', 'YYYY'), '2019');
      assert.equal(formatDate('2019-01-01 01:00:00', 'YYYY-MM'), '2019-01');
      assert.equal(formatDate('2019-01-01 01:00:00', 'YYYY-MM-DD'), '2019-01-01');
      assert.equal(formatDate('2019-01-01 01:00:00', 'YYYY-MM-DD HH:mm:ss'), '2019-01-01 01:00:00');
    });

    it('test the third param', () => {
      assert.equal(formatDate(null, ''), '');
      assert.equal(formatDate('', ''), '');
      assert.equal(formatDate('', '', '--'), '--');
      assert.equal(formatDate('', '', '无'), '无');
    })

    // it('should yield the right formate date', () => {
    //   assert.equal(formatDate('','' , '--'), '--');
    //   assert.equal(formatDate('2019-01-01 01:00:00'), '2019-01-01 01:00:00');
    //   assert.equal(formatDate('2019-01-01 01:00:00', 'YYYY-MM-DD HH:mm:ss'), '2019-01-01 01:00:00');
    // })
  });

  describe('#objectToArray()', () => {
    it('objectToArray', () => {
      assert.exists(objectToArray);
    });
  });
});