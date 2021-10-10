import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import ValidatableInterface from "@dikac/t-validatable/validatable";

/**
 * extended {@see ValidatableInterface} with added {@see Message}
 * and {@see Value} for {@see Validator} result
 */
type Validatable<
    Base = unknown,
    MessageType = unknown,
    Boolean extends boolean = boolean
> = Message<MessageType> &
    Value<Base> &
    ValidatableInterface<Boolean>;

export default Validatable;
