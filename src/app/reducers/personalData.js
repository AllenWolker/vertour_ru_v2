import normalizePhone from '../utils/formControl/normalizePhone';

export const SWITCH_ON_FIELD = 'SWITCH_ON_FIELD';

const initialState = {
    formName: 'gamerData',
    formFields: [
        {
            name: 'email',
            label: 'Почта',
            placeholder: 'vertour@gmail.com',
            type: 'email',
            disabled: false,
            normalize: [],
            btnLabel: 'Изменить'
        },

        {
            name: 'phone',
            label: 'Телефон',
            placeholder: '+7 (978) 123 36 69',
            type: 'tel',
            disabled: false,
            normalize: [normalizePhone],
            btnLabel: 'Изменить'
        },

        {
            name: 'password',
            label: 'Пароль',
            placeholder: '*****************',
            type: 'password',
            disabled: false,
            normalize: [],
            btnLabel: 'Изменить'
        },

        {
            name: 'payment',
            label: 'Кошелек Vertour',
            placeholder: '532 руб.',
            type: 'text',
            disabled: false,
            normalize: [],
            btnLabel: 'Способы оплаты'
        }
    ]
};

export function personalData(state = initialState, action) {
    switch (action.type) {
        case SWITCH_ON_FIELD:
            return { ...state, formFields: action.payload};

        default:
            return state;
    }
}