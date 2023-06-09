import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const LoadIdicator = styled.ActivityIndicator.attrs(({theme}) => ({
    color: theme.colors.brand.purple,
    size: 120
}))``;