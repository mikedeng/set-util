import { assert, expect } from 'chai';
import { formatDate, objectToArray } from "../src/index";

describe('Exists', () => {
  describe('#formatDate()', () => {
    it('should exists', () => {
      assert.exists(formatDate);
    });
    it('should yield the right formate date', () => {
      assert.equal(formatDate('2019-01-01 01:00:00', 'YYYY-MM-DD HH:mm:ss'), '2019-01-01 01:00:00');
    })
  });

  describe('#objectToArray()', () => {
    it('objectToArray', () => {
      assert.exists(objectToArray);
    });
  });
});