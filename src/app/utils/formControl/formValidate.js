export const validate = values => {
    const errors = {};
    const fields = [
        'email',
        'phone',
        'password',
    ];

    fields.forEach((field, index) => {
        if (!values[field]) errors[field] = 'Поле обязательно для заполнения!';
        if (values[field] && index === 0) {
            errors[field] = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                values[field]
            )
                ? 'Некорректный email!'
                : undefined;
        }
        if (values[field] && index === 2) {
            errors[
                field
                ] = !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).[0-9a-zA-Z!@#$%^&]/g.test(
                values[field]
            )
                ? 'Пароль должен содержать строчные и заглавные латинские буквы и цифры!'
                : undefined;
            if (values[field] && index > 4 && !errors[field]) {
                errors[field] =
                    values[field].length < 8
                        ? 'Пароль должен быть не короче 8 символов!'
                        : undefined;
            }
        }
    });

    if (!values.agreement) {
        errors.agreement = true;
    }
    if (!values.role) {
        errors.role = true;
    }

    return errors;
};