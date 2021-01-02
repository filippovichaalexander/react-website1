import React from 'react';
import Icon1 from '../../images/4.svg';
import Icon2 from '../../images/5.svg';
import Icon3 from '../../images/6.svg';
import {ServicesContainer,ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon,ServicesH2, ServicesP} from './ServicesElements';


const Services = () => {
    return ( 
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce you fees and increase your overall revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Platform</ServicesH2>
                    <ServicesP>You can access our online platform anywhere in the world</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium beefits</ServicesH2>
                    <ServicesP>Unlock our special membership card thet returnes 5% cash back</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
     );
}
 
export default Services;