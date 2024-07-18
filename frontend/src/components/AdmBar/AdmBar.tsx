import "./style"
import { StyledLogoutButton, StyledNavBar, StyledLink } from "./style";
import BoschLogo from "../../assets/BoschLogo.png"
import LogoutIcon from "../../assets/sair.png"
import { useNavigate } from "react-router-dom";

export const AdmBar = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        /*falta a lógica do logout*/
        navigate('/')
    }

    return(
        <>
            <StyledNavBar>
                <img src={BoschLogo} alt="" style={{width: "150px"}} />
                <div style={
                    {
                        display: 'flex',
                        gap: "30px"
                    }
                }>
                    <StyledLink href="#">Perfil</StyledLink>
                    <StyledLink href="#">Adicionar Usuário</StyledLink>
                    <StyledLink href="#">Turmas</StyledLink>
                    <StyledLink href="#">Matérias</StyledLink>
                    <StyledLogoutButton onClick={handleLogout}>
                        <img src={LogoutIcon} alt="logout"/>
                    </StyledLogoutButton>
                </div>
            </StyledNavBar>
        </>
    )
}