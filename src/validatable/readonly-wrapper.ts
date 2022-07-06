import InferMessage from '@alirya/message/message/infer.js';
import InferValue from '@alirya/value/value/infer.js';
import Validatable from './validatable.js';
import InferValidatable from '@alirya/validatable/boolean/infer.js';
import Value from '@alirya/value/value.js';
import Message from '@alirya/message/message.js';
import ValidatableInterface from '@alirya/validatable/validatable.js';

/**
 * read only wrapper for {@link Message}, {@link Value} and {@link ValidatableInterface}
 */

export interface ReadonlyWrapperType<
    ValueType extends Value,
    MessageType extends Message,
    ValidatableType extends ValidatableInterface,
> extends Readonly<Validatable<
        InferValue<ValueType>,
        InferMessage<MessageType>,
        InferValidatable<ValidatableType>
>> {
    readonly valueContainer: ValueType;
    readonly messageContainer: MessageType;
    readonly validatableContainer: ValidatableType;
}

export class ReadonlyWrapperParameters<
    ValueType extends Value,
    MessageType extends Message,
    ValidatableType extends ValidatableInterface,
>
    implements ReadonlyWrapperType<ValueType, MessageType, ValidatableType>
{
    constructor(
        readonly valueContainer: ValueType,
        readonly messageContainer: MessageType,
        readonly validatableContainer: ValidatableType,
    ) {
    }

    get valid() : InferValidatable<ValidatableType> {

        return <InferValidatable<ValidatableType>>this.validatableContainer.valid;
    }


    get value() : InferValue<ValueType> {

        return <InferValue<ValueType>> this.valueContainer.value;
    }

    get message(): InferMessage<MessageType> {

        return <InferMessage<MessageType>> this.messageContainer.message;
    }
}



/**
 * read only wrapper for {@link Message}, {@link Value} and {@link ValidatableInterface}
 */

export class ReadonlyWrapperParameter<
    ValidatableType extends Validatable
> extends ReadonlyWrapperParameters<ValidatableType, ValidatableType, ValidatableType>{

    constructor(public validatable : ValidatableType) {

        super(validatable, validatable, validatable);
    }
}




namespace ReadonlyWrapper {
    export const Parameters = ReadonlyWrapperParameters;
    export const Parameter = ReadonlyWrapperParameter;
    export interface Type<
        ValueType extends Value,
        MessageType extends Message,
        ValidatableType extends ValidatableInterface
    > extends ReadonlyWrapperType<
        ValueType,
        MessageType,
        ValidatableType
    > {}
}
export default ReadonlyWrapper;
