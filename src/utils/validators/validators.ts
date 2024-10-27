export const requiredFields = (value: string) => {
    if (value) return undefined
    else return 'Поле обязательное'

}


export const maxLengthCreator = (max: number) => (value: string)=> {

        if (value.length > max) return `максимум ${max} символов`
        else return undefined

}