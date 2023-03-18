import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.colors.base.gray600};
`;

export const Text = styled.Text`
    color: ${({theme}) => theme.colors.base.gray100};
    font-size: ${({theme}) => theme.font_size.lg};
`;

export const ContainerForm = styled.View`
    flex-direction: row;
    margin-top: -30px;
    margin-bottom: 42px;
    gap: 4px;
    padding: 0 24px;
`;

export const InputStyled = styled.TextInput`
    flex: 1;
    height: 54px;
    background-color: ${({theme}) => theme.colors.base.gray600};
    color: ${({theme}) => theme.colors.base.gray100};
    padding: 16px;
    border-radius: 6px;
    font-size: ${({theme}) => theme.font_size.lg}px;
`;

export const Button = styled.TouchableOpacity`
    width: 54px;
    height: 54px;
    background-color: ${({theme}) => theme.colors.brand.blueDark};
    border-radius: 6px;
    
    align-items: center;
    justify-content: center;
`;

