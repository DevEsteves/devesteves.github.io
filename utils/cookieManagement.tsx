import CookieConsent from 'react-cookie-consent';


export default function CookieManagement(){
    return(
        <CookieConsent
            style={{border: '10%'}}
            buttonText="Eu concordo">
            <div className='cookie-consent'>
                Nós usamos cookies e outras tecnologias
                semelhantes para melhorar a sua experiência em nossos serviços, personalizar
                publicidade e recomendar conteúdo de seu interesse. Ao utilizar nossos serviços,
                você concorda com tal monitoramento.
            </div>
        </CookieConsent>
    )
}