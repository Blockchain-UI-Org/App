import styled from 'styled-components';

export const HeroSectionBackgroundImage = styled.div`
    height: 240px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("/img/blog_hero_background.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    /* @todo Media queries here .. */
`;

export const SearchBarWrapper = styled.div`
    position: absolute;
    bottom: 0px;
    max-width: 420px;
    width: 100%;
    margin-bottom: -30px;
`;