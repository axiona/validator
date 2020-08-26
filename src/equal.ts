import AmbiguousInterface from "./validatable/ambiguous";
import Value from "@dikac/t-value/value";
import Replace from "./validatable/replace";
import Simple from "./simple";
import Validatable from "./validatable/validatable";
import ValidatableEqual from "./validatable/equal";
import ValidatableInterface from "@dikac/t-validatable/validatable";

/**
 * {@template Base} type which can be handled by implmentation
 * {@template Type} valid value type
 */
export default class Equal<
    Base = unknown,
    Type extends Base = Base,
    MessageT = unknown,
> implements Simple<Base, Type, Validatable<Base, MessageT>> {

    constructor(
        public value : Type,
        public message : <Argument extends Base>(argument: Value<[Base, Type]> & ValidatableInterface) => MessageT
    ) {

    }

    validate<Argument extends Type>(value : Argument) : Replace<Argument, true, Validatable<Base, MessageT>>;
    validate<Argument extends Base>(value : Argument) : AmbiguousInterface<Base, Argument, Type, false, true, Validatable<Base, MessageT>>;
    validate<Argument extends Base>(value : Argument) : AmbiguousInterface<Base, Argument, Type, false, true, Validatable<Base, MessageT>> {

        return ValidatableEqual(value, this.value, this.message);
    }

}

