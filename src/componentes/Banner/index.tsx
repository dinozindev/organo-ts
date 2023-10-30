import './Banner.css'

// a interrogação indica que essa propriedade é opcional, portanto, caso não seja informada, o componente ainda assim é renderizado. 
interface BannerProps {
    source: string;
    altText?: string;
}

const Banner = ({ source, altText }: BannerProps) => {
    // JSX
    return (
        <header className="banner">
            <img src={source} alt={altText} />
            {/* <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/> */}
        </header>
    )
}

export default Banner;