import Image1 from '../../images/1.svg';
import Image2 from '../../images/2.svg';
import Image3 from '../../images/3.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimitted transactions without getting charged any fees',
    buttonLabel: 'Get started',
    imgStart: false,
    img: Image1,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText:false
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Login to your computer at any time',
    description: 'We have you covered no matter where you are located. All you need is an internet conntection and a phone or computer',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: Image2,
    alt: 'Deposit rank',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Premium Bank',
    headline: 'Creating an acoount is extremely easy',
    description: 'Get everything set up and ready in under 10 minutes. All you need to do is add yout information and you are ready to go',
    buttonLabel: 'Start Now',
    imgStart: false,
    img: Image3,
    alt: 'Files',
    dark: false,
    primary: false,
    darkText: true
};


// require('../../images/1.svg')