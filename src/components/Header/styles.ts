import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ContainerHeader = styled(SafeAreaView)`
    width: 100%;
    height: 173px;
    background-color: ${({theme}) => theme.colors.base.gray700};
    align-items: center;
    justify-content: center;
`;

export const ImageHeader = styled.Image`

`;

