function TestString() {
    return function (value) {
        return {
            valid: typeof value === "string",
            value: value,
            message: 'message'
        };
    };
}
const test = TestString();
const result = test(1) /* as Static<number, string, false, true>*/;
if (result.valid) {
    const string = result.value;
    // @ts-expect-error
    const number = result.value;
}
else {
    // @ts-expect-error
    const string = result.value;
    const number = result.value;
}
export {};
//
//
//
//
//
//
//
//
//
//
//
//
// import ValidatableEqual from "@dikac/t-boolean/validatable/equal-parameters";
// import Simple from "./simple";
// import Dynamic from "./message/function/validatable-parameters";
// import EqualMessage from "@dikac/t-boolean/assert/string/equal-parameters";
//
//
//
// /**
//  * {@template Base} type which can be handled by implmentation
//  * {@template Type} valid value type
//  */
//
// function EqualParameters<
//     Base = unknown,
//     Type = unknown,
//     MessageType = unknown,
//     >(
//     compare : Type,
//     message : Dynamic<Base, MessageType, [Type]>,
// ) : Simple<Base, Type, Validatable<Base, MessageType>>
//
// function EqualParameters<
//     Base = unknown,
//     Type = unknown,
//     >(
//     compare : Type,
// ) : Simple<Base, Type, Validatable<Base, string>>
//
// function EqualParameters<
//     Base = unknown,
//     Type = unknown,
//     MessageType = unknown,
//     >(
//     compare : Type,
//     message : Dynamic<Base, MessageType|string, [Type]> = EqualMessage,
// ) : Simple<Base, Type, Validatable<Base, MessageType|string>> {
//
//     return function (value)  {
//
//         return ValidatableEqual(value, compare, message);
//
//     } as Simple<Base, Type, Validatable<Base, MessageType>>
// }
//
//
// let validator = EqualParameters<number, 1>(1,  EqualMessage)
//
// let equal = validator(2);
//
// if(equal.valid) {
//
//     let specific : 1 = equal.value;
//     let number : number = equal.value;
//     let unknown : unknown = equal.value;
//
// } else {
//
//     let specific : 2 = equal.value;
//     let number : number = equal.value;
//     let unknown : unknown = equal.value;
// }
//# sourceMappingURL=validator.js.map