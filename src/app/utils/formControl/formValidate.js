export const validate = values => {
    const errors = {};
    const fields = [
        'name',
        'surname',
        'email',
        'phone',
        'login',
        'password',
        'repeatPass'
    ];

    fields.forEach((field, index) => {
        if (!values[field]){
            switch(index){
                case 0:
                    errors[field] = 'Укажите имя!';
                    break;

                case 1:
                    errors[field] = 'Укажите фамилию!';
                    break;

                case 2:
                    errors[field] = 'Укажите email!';
                    break;

                case 3:
                    errors[field] = 'Укажите телефон!';
                    break;

                case 4:
                    errors[field] = 'Укажите логин!';
                    break;

                case 5:
                    errors[field] = 'Укажите пароль!';
                    break;

                default:
                    errors[field] = 'Введите пароль еще раз!';
            }
        }

        if (values[field] && index === 2) {
            errors[field] = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                values[field]
            )
                ? 'Некорректный email!'
                : undefined;
        }

        if(values[field] && index ===3){
            errors[field] = values[field].length < 16
                ? 'Некорректный номер телефона!'
                : undefined;
        }

        if (values[field] && index === 5) {
            errors[
                field
                ] = !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).[0-9a-zA-Z!@#$%^&]/g.test(
                values[field]
            )
                ? 'Пароль должен содержать строчные и заглавные латинские буквы и цифры!'
                : undefined;
            if (values[field] && !errors[field]) {
                errors[field] =
                    values[field].length < 8
                        ? 'Пароль должен быть не короче 8 символов!'
                        : undefined;
            }
        }

        if(values[field] && index === 6){
            errors[field] =
                (values[field] !== values['password'])
                    ? 'Не совпадает с указанным в предыдущем поле'
                    : undefined;
        }
    });

    if (!values.agreement) {
        errors.agreement = true;
    }

    return errors;
};