import {CallbackParameters} from '../../dist/callback.js';
import String from '@axiona/string/boolean/string.js';
import MessageString from '@axiona/string/assert/string/string.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

const callback = CallbackParameters<unknown, string, string>(
    String,
    (value, valid: boolean) : string => MessageString.Parameters(valid, value)
);

it('valid', function () {

    const validatable = callback('str');
    expect(validatable.valid).toBeTrue();
    expect(validatable.value).toBe('str');
});

it('invalid', function () {

    const validatable = callback(1);
    expect(validatable.valid).toBeFalse();
    expect(validatable.value).toBe(1);
});

