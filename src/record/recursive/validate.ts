import Record from "@dikac/t-object/record/recursive/record";
import ValidatorType from "../../boolean/validator";
import RecursiveInferArgument from "./infer/argument";
import RecursiveInferReturn from "./infer/return";
import Validator from "../../validator";
import TypeObject from "@dikac/t-object/boolean/object";

export default function validate<
    Validators extends Record<PropertyKey, Validator<unknown>>
>(
    validators : Validators,
    values : RecursiveInferArgument<Validators>
) : RecursiveInferReturn<Validators> {

    let object : RecursiveInferReturn<Validators> = <RecursiveInferReturn<Validators>>{};

    for(let property in validators) {

        const validator = validators[property];
        const value = values[property];

        if(ValidatorType(validator)) {

            // @ts-ignore
            object[property] = validator.validate(value);
            continue;
        }

        if(TypeObject(validator) && TypeObject(value)) {

            // @ts-ignore
            object[property] = validate(validator,  value);
            continue;
        }

        throw new Error(/*PropertyActual(property, */'validator or record of validator'/*, validator + '')*/);
    }

    return  object;
}