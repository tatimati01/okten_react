import Joi from "joi";

export const CarValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-zА-яёЁіІїЇ]{1,20}$')).required().messages({
        'string.pattern.base':'Лише великі і малі літери, мінімально 1, максимально 20.',
        'string.empty':'Це поле не може бути пустим.'
    }),
    price: Joi.number().min(0).max(1000000).messages({
        'number.empty':'Це поле не може бути пустим.',
        'number.base':'Ціна може бути від 0 до 1 000 000. Тільки цифри.'
    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages( {
        'number.empty':'Це поле не може бути пустим.',
        'number.base':'Рік може бути від 1900 до поточного. Тільки цифри.',
        'number.min':'Рік може бути від 1900 до поточного.',
        'number.max':'Рік може бути від 1900 до поточного.'
    })
});
