
/** @type {import('next').NextConfig} */
const nextConfig ={
    reactStrictMode:true,
    images:{
        domains:['imgs.xkcd.com']
    },
    i18n:{
        locales:['en', 'es'],
        defaultLocale: 'en'
    }
    // con la configuracion de i18n, Next crea las siguientes rutas automaticamente
    // comic/123 --> 'en' (defaultLocale en ingles)
    // es/comic/123 --> 'es' (ruta para español)
}
module.exports = nextConfig;