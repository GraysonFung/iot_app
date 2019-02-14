import plz from 'pluralize'

// 单数转复数
export default function pluralize(str) {
    return plz.plural(str)
}