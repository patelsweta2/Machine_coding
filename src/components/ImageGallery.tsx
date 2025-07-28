import { useState } from 'react'

const ImageGallery = () => {
    const ImageGal = [{ id: 1, image: "https://tse3.mm.bing.net/th/id/OIP.g1m0K7yumfwkc_ub224a4AHaE7?pid=Api&P=0&h=180" }, { id: 2, image: "http://www.zastavki.com/pictures/1920x1200/2012/Animals_Cats_Beautiful_kitten_033169_.jpg" }, { id: 3, image: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" }, { id: 4, image: "https://tse3.mm.bing.net/th/id/OIP.TzP2op3lkhlTh6oOHamacAHaHa?pid=Api&P=0&h=180"}]
    const [images] = useState(ImageGal);
    const [currentImg,setCurrentImg] = useState('');

    const handleCurrentImg = (img:string) => {
        setCurrentImg(img)
    }

    return (
        <div> 
            <div style={{display:"flex",flexDirection:"row",gap:"10px",flexWrap:"wrap", justifyContent:"center", alignItems:"center", marginTop:"100px"}}>
            <h3>Select Image</h3>
            {images.map((img) => <button onClick={() => handleCurrentImg(img.image)} key={img.id}><img  src={img.image} style={{width:"150px",height:"150px",objectFit:"cover",borderRadius:"8px", cursor:"pointer"}}/></button>)}
            </div>
            {currentImg && (
                <div style={{marginTop:'20px',display:"flex",flexDirection:"row",gap:"10px",flexWrap:"wrap", justifyContent:"center", alignItems:"center"}}>
                    {/* <h3>Selected Image</h3> */}
                    <img src={currentImg} alt='selected' style={{width:"400px",height:"300px",objectFit:"cover",borderRadius:"8px"}}/>
                </div>
            )}
        </div>
    )
}

export default ImageGallery