import basic from '../../assets/basic.jpg';
import standard from '../../assets/standard.jpg';
import premium from '../../assets/permium.jpg';
const priceCards =[
    {
        id:1,
        title:"Basic",
        msg:"price may vary depending on no. of floors",
        duplicatPrice:"1899 ",
        price:1799,
        details:["RCC framed structure", 
        " Basic materials", "RCC foundation & roof"],
        imagePrice: basic
    },
    {
        id:2,
        title:"Standard",
        msg:"price may vary depending on no. of floors",
        duplicatPrice:"2199 ",
        price:2099,
        details:["All features in basic package", "Free Smart Home Automation", "Free Organic Terrace Gardening"],
        imagePrice:standard
    },
    {
        id:3,
        title:"Premium",
        msg:"price may vary depending on no. of floors",
        duplicatPrice:"2399 ",
        price:2299,
        details:["All features in standard package",
        "Granite flooring",
        "Premium quality materials"],
        imagePrice:premium
    },
    
];

export default priceCards;