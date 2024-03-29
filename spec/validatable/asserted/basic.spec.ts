import IsObject from '@axiona/object/boolean/object.js';
import Asserted from '../../../dist/validatable/asserted.js';
import CallbackFunction from '../../../dist/validatable/callback.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

function TestMessage (value, valid) {
    return 'type:' + typeof value + ', valid:' + (valid ? 'true' : 'false');
}

describe('invalid', function () {

    const subject = CallbackFunction.Parameters(1, IsObject, TestMessage, []);
    const callback = new Asserted(subject);

    it('check value', () => {
        try {
            const data = callback.value;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });

    it('check message', () => {

        expect(callback.message).toBe('type:number, valid:false');
    });

});


describe('valid', function () {

    const subject = CallbackFunction.Parameters({}, IsObject, TestMessage, []);
    const callback = new Asserted(subject);

    it('check value', () => {
        expect(callback.valid).toBeTrue();
        expect(callback.value).toEqual({});
        expect(callback.message).toBe('type:object, valid:true');
    });
});


