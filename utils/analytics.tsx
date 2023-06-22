import ReactGA4 from 'react-ga4'

const measurement_id = process.env.GA_ID

function initializeAnalytics(){
    ReactGA4.initialize(`${measurement_id}`);
    if(typeof window !== "undefined"){
      ReactGA4.send({ hitType: "pageview", page: window.location.pathname});
    }
    
     const logEvent = (category: string, action: string) => {
      if (category && action) {
        ReactGA4.event({ category, action })
      }
    }
    
     const logException = (description: string, fatal: boolean = false) => {
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