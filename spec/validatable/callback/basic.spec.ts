import CallbackFunction from "../../../dist/validatable/callback";
import TestMessage from "./test-message";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('class', function () {

    describe('parameter', function () {

        it("valid", () => {

            let wrapper = new CallbackFunction.Class.Parameter({}, (v)=>typeof v === "object", TestMessage);

            expect(wrapper.valid).toBeTrue()
            expect(wrapper.value).toEqual({})
            expect(wrapper.message).toBe('type:object, valid:true')
        });

        it("invalid", () => {

            let wrapper = new CallbackFunction.Class.Parameter('str', (v)=>typeof v === "object", TestMessage);

            expect(wrapper.valid).toBeFalse()
            expect(wrapper.value).toBe('str')
            expect(wrapper.message).toBe('type:string, valid:false')
        });

    });
});
