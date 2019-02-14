import plz from 'pluralize'

// 复数转单数
export default function singularize(str) {
    return plz.singular(str)
}