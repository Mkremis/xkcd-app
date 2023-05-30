import { useRouter } from "next/router";
import { createContext, useCallback, useContext } from "react";
import en from "translations/en.json"
import es from  "translations/es.json"

const I18NContext = createContext();
const languages = {en, es}

export function I18NProvider({children}){
const {locale} = useRouter();
const translations = useCallback(
    (key, ...args)=>{
        console.log("args:", args)
        let translation = languages[locale][key];
        if (args.length===0) return translation;
        args.forEach((value, index)=>{
            translation = translation.replace(`\${${index+1}}`, value)
        })
        return translation;
    },[locale]
)

    return <I18NContext.Provider value={{translations}}>{children}</I18NContext.Provider>

}

export function useI18N(){
    const context = useContext(I18NContext);
    if (context === undefined) {
        throw new Error('useI18N must be used within a i18nProvider')
    }
    return context;
}