import BodyTmb from "../Components/BodyTmb/BodyTmb";
import * as S from "./styles";

const HomeTemplate = ({
    pageTitle,
    bodyTmbProps,
}) => {
    return (
        <S.HomeTemplateContainer>
            <S.NavBar>
                <S.Title>{pageTitle}</S.Title>
            </S.NavBar>
            <BodyTmb {...bodyTmbProps} />
        </S.HomeTemplateContainer>
    );
};

export default HomeTemplate;