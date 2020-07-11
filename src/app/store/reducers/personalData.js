import normalizePhone from '../../utils/formControl/normalizePhone';

const initialState = {
    formName: 'gamerData',
    formFields: [
        {
            name: 'email',
            label: 'Почта',
            type: 'email',
            normalize: [],
            btnLabel: 'Изменить'
        },

        {
            name: 'phone',
            label: 'Телефон',
            type: 'tel',
            normalize: [normalizePhone],
            btnLabel: 'Изменить'
        },

        {
            name: 'password',
            label: 'Пароль',
            type: 'password',
            normalize: [],
            btnLabel: 'Изменить'
        },

        {
            name: 'payment',
            label: 'Кошелек Vertour',
            type: 'text',
            normalize: [],
            btnLabel: 'Способы оплаты'
        }
    ]
};

export function personalData(state = initialState) {
    return state;
}