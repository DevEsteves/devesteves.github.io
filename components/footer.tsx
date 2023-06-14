type FooterProps = {
    year: number
}

export default function Footer({year}: FooterProps){
    return (
        <div className="footer">
            <footer>{year}</footer>
        </div>
    )
}