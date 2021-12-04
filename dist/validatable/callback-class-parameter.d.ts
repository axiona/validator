import CallbackClassParameters from "./callback-class-parameters";
import Value from "@dikac/t-value/value";
import Validation from "@dikac/t-boolean/validation/validation";
import Argument from "@dikac/t-function/argument/argument";
import Message from "@dikac/t-message/message";
import ValidatableParameter from "../message/function/validatable-parameter";
import Guard from "@dikac/t-boolean/validation/guard";
import Dynamic from "../value/validatable";
/**
 * assemble {@see Dynamic} from value,
 * callback validation, and callback message
 *
 * this contain multiple class and function implementation
 *
 * function implementation version offer
 * more accurate type
 */
/**
 * class type
 */
/**
 * class object argument
 */
declare type CallbackClassParameterArgument<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown, Arguments extends unknown[] = unknown[], Boolean extends boolean = boolean> = Value<ValueType> & Readonly<Argument<Arguments>> & Message<ValidatableParameter<ValueType, MessageType, Dynamic<ValueType, Boolean> & Partial<Argument<Arguments>>>>;
export declare type CallbackClassParameterArgumentValidation<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown, Arguments extends unknown[] = unknown[], Boolean extends boolean = boolean> = CallbackClassParameterArgument<ValueType, Type, MessageType, Arguments, Boolean> & Validation<[ValueType, ...Arguments], Boolean>;
export declare type CallbackClassParameterArgumentGuard<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown, Arguments extends unknown[] = unknown[], Boolean extends boolean = boolean> = CallbackClassParameterArgument<ValueType, Type, MessageType, Arguments, Boolean> & Guard<ValueType, Type, Arguments>;
/**
 * class object argument
 */
/**
 * main implementation
 *
 */
/**
 * destructure argument version
 */
/**
 * destructure argument version
 */
export default class CallbackClassParameter<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown, Arguments extends unknown[] = unknown[], Boolean extends boolean = boolean> extends CallbackClassParameters<ValueType, MessageType, Arguments, Boolean> {
    constructor({ value, validation, message, argument }: CallbackClassParameterArgumentValidation<ValueType, Type, MessageType, Arguments, Boolean> | CallbackClassParameterArgumentGuard<ValueType, Type, MessageType, Arguments, Boolean>);
}
export {};
