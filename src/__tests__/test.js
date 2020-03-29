/* eslint-disable camelcase */
import { filter } from '..';

let array = [
  { id: 1, bp: 100, mp: 0, name: 'water' },
  { id: 2, bp: 65, mp: -98, name: 'methanol' },
  { id: 3, bp: 78, mp: -114, name: 'ethanol' },
  { id: 4, bp: 97, mp: -126, name: 'n-propanol' },
  { id: 5, bp: 118, mp: -90, name: 'n-butanol' },
];

describe('filter', () => {
  it('equals (default)', () => {
    expect(filter(array, { bp: 100 })).toEqual([
      { id: 1, bp: 100, mp: 0, name: 'water' },
    ]);
  });

  it('equals', () => {
    expect(filter(array, { name_equals: 'ethanol' })).toEqual([
      { id: 3, bp: 78, mp: -114, name: 'ethanol' },
    ]);
  });
  it('min', () => {
    expect(filter(array, { bp_min: 80 })).toEqual([
      { id: 1, bp: 100, mp: 0, name: 'water' },
      { id: 4, bp: 97, mp: -126, name: 'n-propanol' },
      { id: 5, bp: 118, mp: -90, name: 'n-butanol' },
    ]);
  });
  it('max', () => {
    expect(filter(array, { bp_max: 80 })).toEqual([
      { id: 2, bp: 65, mp: -98, name: 'methanol' },
      { id: 3, bp: 78, mp: -114, name: 'ethanol' },
    ]);
  });
  it('includes', () => {
    expect(filter(array, { name_includes: 'etha' })).toEqual([
      { id: 2, bp: 65, mp: -98, name: 'methanol' },
      { id: 3, bp: 78, mp: -114, name: 'ethanol' },
    ]);
  });

  it('combined test', () => {
    expect(
      filter(array, { bp_min: 60, bp_max: 100, name_includes: 'anol' }),
    ).toEqual([
      { id: 2, bp: 65, mp: -98, name: 'methanol' },
      { id: 3, bp: 78, mp: -114, name: 'ethanol' },
      { id: 4, bp: 97, mp: -126, name: 'n-propanol' },
    ]);
  });
});
