import en from './en';
import cn from './cn';
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
export default {
    en: {
      ...en,
      ...enLocale
    },
    cn: {
      ...cn,
      ...zhLocale
    }
}
