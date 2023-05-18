import { useState,useEffect } from "react";
import image1 from '../../assets/sathik1.jpg';
import image2 from '../../assets/jainjose2.jpg';
import image3 from '../../assets/basha1.jpg';
import image4 from '../../assets/basha2.jpg';
import image5 from '../../assets/insta3.jpg';
import image6 from '../../assets/insta4.jpg';
import image7 from '../../assets/insta5.jpg';
import image8 from '../../assets/insta6.jpg';
import image9 from '../../assets/WhatsApp1.jpg';
import image10 from '../../assets/WhatsApp2.jpg';
import image11 from '../../assets/BnPushpha.jpg';
import image12 from '../../assets/newwardrobe.jpg';
import image13 from '../../assets/mirrorside.jpg';
import image14 from '../../assets/bedfront.jpg';
import image15 from '../../assets/studyarea.jpg';
import image16 from '../../assets/windowseating.png';

const TryOut=()=>{
    // const [limage, setLImage]=useState([]);
    // useEffect(()=>{
        // const iArray=[
        //     "https://drive.google.com/uc?id=11yzYJ4OOJj4v220p7chNyzyS21hD7oqR",
        //     "https://drive.google.com/uc?id=1S4Q3-kxevrYC_GjY1HSyqOAl1rokYHYR",
        //     "https://drive.google.com/uc?id=1M6DbGSo7bTOXvuHyuUuiTl16rk9LAanA",
        //     "https://drive.google.com/uc?id=1jH7FO5ebe_X4tCy-LK66JGT9R5HTzxrY",
        //     "https://drive.google.com/uc?id=1hbER8o2tZeqS-PBiFRYokH-cPsPtjUPD",
        //     "https://drive.google.com/uc?id=1XVLJmxjbWVwKExYeM_B7nd4gLcTYk1wJ",
        //     "https://drive.google.com/uc?id=18H01iugfe5hw1IOLXVC1ZI9qmvVrphJT",
        //     "https://drive.google.com/uc?id=1ITXxzfE35L8vFmFffYdCT-hZQEhm7CX9",
        //     "https://drive.google.com/uc?id=1ZF298hN0pE7ft6QwgvngedWgY5__QQfi",
        //     "https://drive.google.com/uc?id=1Wh-3jnW4NWcKHf55BO05V2g5-9BaoG0Y",
        //     "https://drive.google.com/uc?id=1Y1yOrU5Mlg260lNJ065DYdwGSHOZi6Jg",
        //     "https://drive.google.com/uc?id=19phVHTabll8XiSPfP0nZxqv_5_BOrFoM",
        //     "https://drive.google.com/uc?id=1_JBBfFf6tEojpgx9KC-xVc7zVg9ziNV0",
        //     "https://drive.google.com/uc?id=1WPMfbDZzaMmmphB8oo55gf08tQX1cZtk",
        //     "https://drive.google.com/uc?id=1kRboOMO2NQdlso46sQizJmICvojMFw9I",
        //     "https://drive.google.com/uc?id=1ZkQqdS6uRnNBpA_kWZXE-_hg19m72UtJ"
        // ];
        // const iArray=["https://v1.tailwindcss.com/img/card-top.jpg" ]
        // const iArray=[
        //     image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,
        //     image15,image16
        // ]
        //   iArray.map(i=>setLImage((prev)=>{
        //     return(
        //       [...prev, i]
        //     )
        //   })
        //   )
        // },[])

const projCards =[

    {
        id:1,
        title:"The Sunset",
        image:[
            // limage[0]
            image1
        ],
        details:"lorumn snfiusdgngaf gwfiosaifgbigcaoifncwe afgievobinwafegfia"
    },
    {
        id:2,
        title:"The Moon",
        image:[
            // limage[1]
            image2
        ],
        details:"lorumn snfiusdgngaf gwfiosaifgbigcaoifncwe afgievobinwafegfia"
    },
    {
        id:3,
        title:"The Star",
        image:[
            // limage[2],limage[3]
            image3,image4
          ],
        details:"lorumn snfiusdgngaf gwfiosaifgbigcaoifncwe afgievobinwafegfia"
    },
    {
        id:4,
        title:"The Sun",
        image:[
            // limage[4],limage[5],limage[6],limage[7]
            image5,image6,image7,image8
        ],
        details:"lorumn snfiusdgngaf gwfiosaifgbigcaoifncwe afgievobinwafegfia"
    },
    {
        id:5,
        title:"The Pic",
        image:[
            // limage[8],limage[9]
            image9,image10
        ],
        details:"lorumn snfiusdgngaf gwfiosaifgbigcaoifncwe afgievobinwafegfia"
    },
    {
    id:6,
    title:"The 2",
    image:[
            // limage[10]
            image11
        ],
        details:"lorumn snfiusdgngaf gwfiosaifgbigcaoifncwe afgievobinwafegfia"
    },
    {
    id:7,
    title:"The",
    image:[
            // limage[11],limage[12],limage[13],limage[14]
            image12,image13,image14,image15,image16
        ],
        details:"lorumn snfiusdgngaf gwfiosaifgbigcaoifncwe afgievobinwafegfia"
    }
]
return projCards;
}
export default TryOut;