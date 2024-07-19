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
                    <StyledLink to={`/profile/${localStorage.getItem("id")}`}>Perfil</StyledLink>
                    <StyledLink to={"/signup"}>Adicionar Usuário</StyledLink>
                    <StyledLink to={"/classes"}>Turmas</StyledLink>
                    <StyledLink to={"/subjects"}>Matérias</StyledLink>
                    <StyledLogoutButton onClick={handleLogout}>
                        <img src={LogoutIcon} alt="logout"/>
                    </StyledLogoutButton>
                </div>
            </StyledNavBar>
        </>
    )
}