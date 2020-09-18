import React,{useContext,useCallback} from 'react';
import {
    Container,
    Wrapper,
    FirstSection,
    SecondSection,
    Logo,
    MainWrapper,
    StoreName
} from './styles';
import { useLocation ,useRouteMatch} from 'react-router-dom';
import Router from './router';
import Loader from '../../components/loader';
import MainContext from '../../services/main_context';


const AuthView : React.FC = () => {
    const {pathname} = useLocation();
    const {AUTH_STATUS} = useContext(MainContext);
    const {path} = useRouteMatch();
    
    const getOffset = useCallback(() => {
        return pathname === `${path}/signup`;
    },[path,pathname])
    return (
            <MainWrapper>
                {AUTH_STATUS === 'LOADING' && <Loader/>}
                <Wrapper active={getOffset()}>
                    <FirstSection>
                        <Logo>
                            <use xlinkHref="/sprite.svg#logo"></use>
                        </Logo>
                        <StoreName>free.pick</StoreName>
                    </FirstSection>
                    <SecondSection active={getOffset()}>
                        <Container>
                            <Router/>
                        </Container>
                    </SecondSection>
                    <FirstSection style={{flexDirection: 'column-reverse'}}>
                        <Logo >
                            <use xlinkHref="/sprite.svg#logo"></use>
                        </Logo>
                        <StoreName style={{marginBottom: 20,marginTop: '20vh'}}>free.pick</StoreName>
                    </FirstSection>
                </Wrapper>
            </MainWrapper>
    );
} 

export default React.memo(AuthView);