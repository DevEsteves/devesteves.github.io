import ReactGA4 from 'react-ga4'

const measurement_id = process.env.ga_id

function initializeAnalytics(){
    ReactGA4.initialize(`${measurement_id}`);
    if(typeof window !== "undefined"){
      ReactGA4.send({ hitType: "pageview", page: window.location.pathname});
      console.log('test')
    }
    
     const logEvent = (category = '', action = '') => {
      if (category && action) {
        ReactGA4.event({ category, action })
      }
    }
    
     const logException = (description = '', fatal = false) => {
      if (description) {
        ReactGA4.gtag('event', 'exception', {
          description,
          fatal  // set to true if the error is fatal
        })
      }
    }
}

function Analytics(){
    return(
        <>
           {initializeAnalytics()}
        </>
    )
}

export default Analytics;