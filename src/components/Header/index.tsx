import { ContainerHeader, ImageHeader } from "./styles";
import LogoImg from '../../assets/logoimg.png';

export default function Header() {
    return (
        <ContainerHeader>
            <ImageHeader source={LogoImg} />
        </ContainerHeader>    
    )
}