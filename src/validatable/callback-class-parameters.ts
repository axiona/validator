import Validatable from "./validatable";
import MemoizeAccessor from "@alirya/object/function/memoize-accessor";
import Validation from "@alirya/boolean/validation/validation";
import ValidationFunction from "@alirya/boolean/function/validation";
import Argument from "@alirya/function/argument/argument";
import ValidatableParameters from "../message/function/validatable-parameters";


/**
 * class type
 */


/**
 * assemble {@see Validatable} from value,
 * callback validation, and callback message
 *
 * this contain multiple class and function implementation
 *
 * function implementation version offer
 * more accurate type
 */

/**
 * main implementation
 *
 */
export type CallbackClassType<
    ValueType = unknown,
    MessageType = unknown,
    Arguments extends unknown[]= unknown[],
    Boolean extends boolean = boolean
> =
    Validatable<ValueType, MessageType> &
    Validation<[ValueType, ...Arguments], Boolean> &
    Argument<Arguments>

/**
 * main implementation
 *
 */
export default class CallbackClassParameters<
    ValueType = unknown,
    MessageType = unknown,
    Arguments extends unknown[] = unknown[],
     Boolean extends boolean = boolean
    > implements CallbackClassType<ValueType, MessageType, Arguments, Boolean> {

    /**
     *
     * @param value
     * value to be validated by {@param validation}
     *
     * @param validation
     *
     * @param messageFactory
     * to generate message
     *
     * @param argument
     */
    constructor(
        value : ValueType,
        validation : ValidationFunction<[ValueType], Boolean>,
        messageFactory : ValidatableParameters<ValueType, MessageType, [], Boolean>,
    )
    constructor(
        value : ValueType,
        validation : ValidationFunction<[ValueType, ...Arguments], Boolean>,
        messageFactory : ValidatableParameters<ValueType, MessageType, Arguments, Boolean>,
        argument : Arguments,
    )
    constructor(
        readonly value : ValueType,
        readonly validation : ValidationFunction<[ValueType, ...Arguments], Boolean>,
        readonly messageFactory : ValidatableParameters<ValueType, MessageType, Arguments, Boolean>,
        readonly argument : Arguments = ([] as Arguments|[] as Arguments),
    ) {

    }

    @MemoizeAccessor()
    get valid() : Boolean {

        return this.validation(this.value, ...this.argument) as Boolean;
    }

    @MemoizeAccessor()
    get message() : MessageType {

        return this.messageFactory(this.value, this.valid, ...(this.argument as Arguments));
    }
}
