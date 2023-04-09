import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from "class-validator";

export function IsOpeningBeforeClosing(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "isOpeningBeforeClosing",
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: OpeningBeforeClosingConstraint,
        });
    };
}

@ValidatorConstraint({ name: "OpeningBeforeClosing" })
export class OpeningBeforeClosingConstraint
    implements ValidatorConstraintInterface
{
    validate(value: string, args: ValidationArguments) {
        const openingTime = value;
        const closingTime = (args.object as any)["closing_time"];
        if (!openingTime || !closingTime) {
            return true;
        }
        return openingTime < closingTime;
    }

    defaultMessage(args: ValidationArguments) {
        return `Opening time must be before closing time`;
    }
}
