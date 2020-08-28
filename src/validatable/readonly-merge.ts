import Message from "@dikac/t-message/message";
import InferMessage from "@dikac/t-message/message/infer";
import Value from "@dikac/t-value/value";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import InferValidatable from "@dikac/t-validatable/boolean/infer";
import InferValue from "@dikac/t-value/value/infer";
import Validatable from "./validatable";

/**
 * merge {@link Value}, {@link Message} and {@link ValidatableInterface}
 */
export default class ReadonlyMerge<
    ValueT extends Value,
    MessageT extends Message,
    ValidatableT extends ValidatableInterface,
>
implements
    Readonly<Validatable<
        InferValue<ValueT>,
        InferMessage<MessageT>,
        InferValidatable<ValidatableT>
    >>
{
    constructor(
         readonly valueContainer: ValueT,
         readonly messageContainer: MessageT,
         readonly validatableContainer: ValidatableT,
    ) {
    }

    get valid() : InferValidatable<ValidatableT> {

        return <InferValidatable<ValidatableT>>this.validatableContainer.valid;
    }

    get value() : InferValue<ValueT> {

        return <InferValue<ValueT>> this.valueContainer.value;
    }

    get message(): InferMessage<MessageT> {

        return <InferMessage<MessageT>> this.messageContainer.message;
    }
}