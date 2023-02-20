import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
} from "class-validator";

@ValidatorConstraint({ name: "phone", async: false })
export class PhoneValidator implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments) {
        // Regular expression for validating Uzbekistan phone numbers
        const phoneRegex = /^\+998[34579][012345789]\d{7}$|^\+998[12468]\d{8}$/;
        /*
        This regular expression matches phone numbers in Uzbekistan that follow one of two patterns:

        ^\+998[34579][012345789]\d{7}$ matches mobile phone numbers that start with either +9983, +9984, +9985, +9987, or +9989, followed by a valid second digit, and then followed by any seven digits.
        ^\+998[12468]\d{8}$ matches landline telephone numbers that start with +9981, +9982, +9986, or +9988, followed by any eight digits.
        Please note that this regular expression assumes that the phone numbers are entered in the international format, starting with the country code +998. If the phone numbers are entered in a different format, the regular expression would need to be updated accordingly.
        */
        if (!value) {
            // Value is not provided, validation should be skipped
            return true;
        }

        if (typeof value !== "string") {
            // Value is not a string, validation should fail
            return false;
        }

        if (!phoneRegex.test(value)) {
            // Value does not match the phone number format for Uzbekistan, validation should fail
            return false;
        }

        return true;
    }

    defaultMessage(args: ValidationArguments) {
        return "Phone number is not valid!";
    }
}
