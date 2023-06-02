import { InfoContainer, InfoWithIconContainer } from "./styles"
import {ReactNode} from 'react'

interface infoWithIconProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconBg: string
}


export const InfoIcon = ( {icon, text, iconBg  }: infoWithIconProps) => {
  return (
    <InfoContainer>
     <InfoWithIconContainer iconBg={iconBg}>
        {icon}
     </InfoWithIconContainer>
     {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoContainer>
  )
}