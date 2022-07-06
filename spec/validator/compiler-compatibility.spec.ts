import TestObject from '../test-object.js';
import TestString from '../test-string.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', ()=>{

    it('writable', () => {

        let test = TestString();
        let validatable = test(1);

        if(validatable.valid) {

            let boolean : boolean = validatable.valid;
            let value : string = validatable.value;
            let message : string = validatable.message;

            validatable.valid = true;
            // @ts-expect-error
            validatable.valid = false;
            validatable.value = '5';
            // @ts-expect-error
            validatable.value = 5;
            validatable.message = 'message';

        } else {

            let boolean : boolean = validatable.valid;
            // @ts-expect-error
            let value : string = validatable.value;
            let number : number = validatable.value;
            let message : string = validatable.message;

            validatable.valid = false;
            // @ts-expect-error
            validatable.valid = true;
            validatable.value = 5;
            // @ts-expect-error
            validatable.value = '5';
            validatable.message = 'message';
        }
    });

    describe('type', () => {

        let test = TestObject();

        it('typed', () => {

            let validatable = test(test);

            if(validatable.valid) {

                let value : object = validatable.value;


                let exact : ReturnType<typeof TestObject> = validatable.value;

                let boolean : boolean = validatable.valid;
                let message : string = validatable.message;

            } else {

                let boolean : boolean = validatable.valid;

                let value : object = validatable.value;

                let number : ReturnType<typeof TestObject> = validatable.value;

                let message : string = validatable.message;
            }
        });

        it('unknown', () => {

            let validatable = test(<unknown>test);

            if(validatable.valid) {

                // @ts-expect-error
                let string : string = validatable.value;

                let value : object = validatable.value;
                // @ts-expect-error
                let exact : TestObject = validatable.value;

                let boolean : boolean = validatable.valid;

                let message : string = validatable.message;

            } else {

                // @ts-expect-error
                let string : string = validatable.value;

                let boolean : boolean = validatable.valid;

                // @ts-expect-error
                let value : object = validatable.value;

                // @ts-expect-error
                let number : TestObject = validatable.value;

                let message : string = validatable.message;
            }
        });

    });
});
