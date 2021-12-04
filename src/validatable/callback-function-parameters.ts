import Value from "@dikac/t-value/value";
import BaseValidatable from "@dikac/t-validatable/validatable";
import Static from "./static";
import Message from "@dikac/t-message/message";
import Simple from "./simple";
import CallbackClassParameters from "./callback-class-parameters";
import ValidatableType from "./validatable";
import StaticParameters from "../message/function/static-parameters";
import SimpleParameters from "../message/function/simple-parameters";
import Validation from "@dikac/t-boolean/function/validation";
import Guard from "@dikac/t-boolean/function/guard";


/**
 * assemble {@see Validatable} from value,
 * callback validation, and callback message
 *
 * this contain multiple class and function implementation
 *
 * function implementation version offer
 * more accurate type
 */

export type CallbackFunctionType<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown
    > =
    Simple<ValueType, Type, Readonly<Value<ValueType> & BaseValidatable & Message<MessageType>>>

//
// /**
//  * guard
//  *
//  * @param value
//  * @param validation
//  * @param message
//  * @param argument
//  * @constructor
//  */
// export default function CallbackFunctionParameters<
//     ValueType = unknown,
//     Type extends ValueType = ValueType,
//     MessageType = unknown,
//     Argument extends unknown[] = unknown[],
// >(
//     value : ValueType,
//     validation : (value:ValueType, ...extra: Argument)=>value is Type,
//     message : (value:ValueType, message: boolean, ...extra: Argument)=> MessageType,
//     argument : Argument,
// ) : CallbackFunctionType<ValueType, Type, MessageType>
//
// /**
//  * boolean
//  *
//  * @param value
//  * @param validation
//  * @param message
//  * @param argument
//  * @constructor
//  */
// export default function CallbackFunctionParameters<
//     ValueType = unknown,
//     Type extends ValueType = ValueType,
//     MessageType = unknown,
//     Argument extends unknown[] = unknown[],
// >(
//     value : Type,
//     validation : (value:ValueType, ...extra: Argument)=>boolean,
//     message : (value:ValueType, message: boolean, ...extra: Argument)=> MessageType,
//     argument : Argument,
// ) : CallbackFunctionType<ValueType, Type, MessageType>
//
// /**
//  * guard
//  *
//  * @param value
//  * @param validation
//  * @param message
//  * @constructor
//  */
// export default function CallbackFunctionParameters<
//     ValueType = unknown,
//     Type extends ValueType = ValueType,
//     MessageType = unknown,
// >(
//     value : ValueType,
//     validation : (value:ValueType)=>value is Type,
//     message : (value:ValueType, message: boolean)=> MessageType,
// ) : CallbackFunctionType<ValueType, Type, MessageType>
//
// /**
//  * boolean
//  *
//  * @param value
//  * @param validation
//  * @param message
//  * @constructor
//  */
// export default function CallbackFunctionParameters<
//     ValueType = unknown,
//     Type extends ValueType = ValueType,
//     MessageType = unknown,
// >(
//     value : Type,
//     validation : (value:ValueType)=>boolean,
//     message : (value:ValueType, message: boolean)=> MessageType,
// ) : CallbackFunctionType<ValueType, Type, MessageType>
//
//
// /**
//  * simple
//  */
// export default function CallbackFunctionParameters<
//     Allow = unknown,
//     Expectation extends Allow = Allow,
//     Validatable extends ValidatableType<Allow> = ValidatableType<Allow>,
// >(
//     value : Allow,
//     validation : (value:Allow)=>boolean,
//     message : (value:Allow, message: boolean)=> Infer<Validatable>,
// ) : Readonly<Simple<Allow, Expectation, Validatable>>

/**
 * simple validation
 * @param value
 * @param validation
 * @param message
 * @param argument
 * @constructor
 */
export default function CallbackFunctionParameters<
    Allow = unknown,
    Expectation extends Allow = Allow,
    Message = unknown,
>(
    value : Allow,
    validation : Guard<Allow, Expectation>,
    message : SimpleParameters<Allow, Expectation, Message>,
) : Readonly<Simple<Allow, Expectation, ValidatableType<Allow, Message>>>

/**
 * simple guard
 * @param value
 * @param validation
 * @param message
 * @param argument
 * @constructor
 */
export default function CallbackFunctionParameters<
    Allow = unknown,
    Expectation extends Allow = Allow,
    Message = unknown,
>(
    value : Allow,
    validation : Validation<[Allow]>,
    message : SimpleParameters<Allow, Expectation, Message>,
) : Readonly<Simple<Allow, Expectation, ValidatableType<Allow, Message>>>

/**
 * simple argument validation
 * @param value
 * @param validation
 * @param message
 * @param argument
 * @constructor
 */
export default function CallbackFunctionParameters<
    Allow = unknown,
    Expectation extends Allow = Allow,
    Message = unknown,
    Arguments extends unknown[] = unknown[],
>(
    value : Allow,
    validation : Guard<Allow, Expectation, Arguments>,
    message : SimpleParameters<Allow, Expectation, Message, Arguments>,
    argument : Arguments,
) : Readonly<Simple<Allow, Expectation, ValidatableType<Allow, Message>>>

/**
 * simple argument guard
 * @param value
 * @param validation
 * @param message
 * @param argument
 * @constructor
 */
export default function CallbackFunctionParameters<
    Allow = unknown,
    Expectation extends Allow = Allow,
    Message = unknown,
    Arguments extends unknown[] = unknown[],
>(
    value : Allow,
    validation : Validation<[Allow, ...Arguments]>,
    message : SimpleParameters<Allow, Expectation, Message, Arguments>,
    argument : Arguments,
) : Readonly<Simple<Allow, Expectation, ValidatableType<Allow, Message>>>



/**
 * static
 */
// export default function CallbackFunctionParameters<
//     Allow = unknown,
//     Expectation extends Allow = Allow,
//     Allowed extends boolean = boolean,
//     Expected extends boolean = boolean,
//     Message = unknown,
// >(
//     value : Allow,
//     validation : (value:Allow)=>Allowed|Expected,
//     message : StaticParameters<Allow, Expectation, Allowed, Expected, Message>,
// ) : Readonly<Static<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, Message>>>



/**
 * static validation
 */
export default function CallbackFunctionParameters<
    Allow = unknown,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Message = unknown,
>(
    value : Allow,
    validation : Validation<[Allow], Allowed|Expected>,
    message : StaticParameters<Allow, Expectation, Allowed, Expected, Message>,
) : Readonly<Static<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, Message>>>
/**
 * static guard
 */
export default function CallbackFunctionParameters<
    Allow = unknown,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Message = unknown,
>(
    value : Allow,
    validation : Guard<Allow, Expectation>,
    message : StaticParameters<Allow, Expectation, Allowed, Expected, Message>,
) : Readonly<Static<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, Message>>>



/**
 * static validation argument
 */
export default function CallbackFunctionParameters<
    Allow = unknown,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Message = unknown,
    Arguments extends unknown[] = unknown[],
>(
    value : Allow,
    validation : Validation<[Allow, ...Arguments], Allowed|Expected>,
    message : StaticParameters<Allow, Expectation, Allowed, Expected, Message, Arguments>,
    argument : Arguments,
) : Readonly<Static<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, Message>>>
/**
 * static guard argument
 */
export default function CallbackFunctionParameters<
    Allow = unknown,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    Message = unknown,
    Arguments extends unknown[] = unknown[],
>(
    value : Allow,
    validation : Guard<Allow, Expectation, Arguments>,
    message : StaticParameters<Allow, Expectation, Allowed, Expected, Message, Arguments>,
    argument : Arguments,
) : Readonly<Static<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, Message>>>



export default function CallbackFunctionParameters<
    Allow = unknown,
    Expectation extends Allow = Allow,
    Allowed extends boolean = boolean,
    Expected extends boolean = boolean,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[]
>(
    value : Allow,
    validation : Validation<[Allow, ...Arguments], Allowed|Expected>,
    // message : (value:Allow, valid: Allowed|Expected, ...extra: Arguments)=> Message,
    message : StaticParameters<Allow, Expectation, Allowed, Expected, Message, Arguments>,
    argument : Arguments|[] = [],
) : Readonly<Static<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, Message>>> {

    // return {
    //     value,
    //     message : message(value, true, ...argument ),
    //     valid : true
    // } as Static<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, Message>>

    return new CallbackClassParameters(value, validation, message, argument) as Static<Allow, Expectation, Allowed, Expected, ValidatableType<Allow, Message>>;
}
