import { FlexContainer } from "@site/src/shared/style";
import { device } from "@site/src/theme/AppThemes/Theme";
import styled from "styled-components";

export const LibraryOptionsFlexContainerWrapper = styled(FlexContainer)`
    margin-top: 20px;
    @media ${device.tablet} {
        margin-top: 15px;
        justify-content: center;
    }
`;