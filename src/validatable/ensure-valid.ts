import Validatable from './validatable.js';
import InvalidStringMessage from './error/invalid-string-message.js';
import Expectation from '../subject/expectation.js';


export function EnsureValidParameters<
    ValidatableType extends Validatable = Validatable
>(
    validatable : ValidatableType,
    error : (validatable: ValidatableType)=>Error = InvalidStringMessage.Parameters
) : Validatable<Expectation<ValidatableType>, ValidatableType['message'], true> & Omit<ValidatableType, 'valid'|'value'> {

    if(!validatable.valid) {

        throw error(validatable);
    }

    return validatable as Validatable<Expectation<ValidatableType>, ValidatableType['message'], true> & Omit<ValidatableType, 'valid'|'value'>;
}

export type EnsureValidArgument<ValidatableType extends Validatable> = {
    validatable : ValidatableType,
    error ?: (validatable: ValidatableType)=>Error
};

export function EnsureValidParameter<
    ValidatableType extends Validatable = Validatable
>(  {
        validatable,
        error = InvalidStringMessage.Parameters
} : EnsureValidArgument<ValidatableType>) : Validatable<Expectation<ValidatableType>, ValidatableType['message'], true> & Omit<ValidatableType, 'valid'|'value'> {

    return EnsureValidParameters(validatable, error);
}

namespace EnsureValid {
    export const Parameters = EnsureValidParameters;
    export const Parameter = EnsureValidParameter;
    export type Argument<ValidatableType extends Validatable> = EnsureValidArgument<ValidatableType>;
}
export default EnsureValid;