import ValidatableInvalid from "@dikac/t-validatable/error/invalid";
import Dynamic from "../dynamic";
import Infer from "@dikac/t-message/message/infer";
import Message from "@dikac/t-message/message";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import StrictOmit from "@dikac/t-object/strict-omit";
import New from "@dikac/t-function/new";
import InvalidStringMessageParameters from "./invalid-string-message-parameters";

const defaultError = New(ValidatableInvalid.Parameter);

/**
 * @param validatable
 *
 * @param message
 * message conversion
 * default : {@see JSON.stringify}
 *
 * @param error
 * error object factory
 * default : {@see ValidatableInvalid}
 */

export type InvalidStringMessageParameterArgument<ValidatableType extends Dynamic, Error extends globalThis.Error> =
    ValidatableContainer<ValidatableType> &
    Partial<Message<(validatable: Infer<ValidatableType>) => string>> &
    {error ?: (validatable: ValidatableType, message : string) => Error}
    //{error: (a : ValidatableContainer<ValidatableType> & Message<string>) => Error}

export default function InvalidStringMessageParameter<ValidatableType extends Dynamic>({
        validatable
  } : Pick<InvalidStringMessageParameterArgument<ValidatableType, globalThis.Error>, 'validatable'>
) : globalThis.Error;

export default function InvalidStringMessageParameter<ValidatableType extends Dynamic>({
        validatable,
        message,
  } : StrictOmit<InvalidStringMessageParameterArgument<ValidatableType, globalThis.Error>, 'error'>
) : globalThis.Error;

export default function InvalidStringMessageParameter<ValidatableType extends Dynamic, Error extends globalThis.Error>({
        validatable,
        message,
        error,
  } : Required<InvalidStringMessageParameterArgument<ValidatableType, Error>>
) : Error;

export default function InvalidStringMessageParameter<ValidatableType extends Dynamic, Error extends globalThis.Error>({
      validatable,
      message,
      error,
  } : InvalidStringMessageParameterArgument<ValidatableType, Error|globalThis.Error>
) : Error|globalThis.Error {

    return InvalidStringMessageParameters(validatable, message, error);
}
