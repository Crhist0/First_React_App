import React from "react";
import { StyledButton, StyledNews, StyledShadow } from "./styled";

export const News = (props)=>{
return (
    <StyledNews big>
        <StyledShadow>
        <h3>{props.title}</h3>
        <p>{props.children}</p>
        <div>
        <StyledButton>Ignorar</StyledButton>
        <a href={props.link}><StyledButton link >Ver mais</StyledButton></a>
        </div>
        </StyledShadow>
    </StyledNews>
)
}