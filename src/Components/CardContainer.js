import React, { Component } from "react";
import { Grid, Card } from "semantic-ui-react";
import CommentSection from "./Comments";

// this.props = this.bind(props)
// import CardExampleCardProps from "./Cards.js";
  
// const extra = (
//   <a href="#">
//     <Icon name='user' />
//     16 Friends
//   </a>
// )

export default class GridExampleContainer extends Component {

render() {
  const dataObj = {
    author: "Tamago Tamatown",
    description:"The TamaTown Tama-Go is an international Tamagotchi release which was released in August 2010 in the US and Australia. It combines elements of the Tamagotchi Plus Color with the Tamagotchi Music Star.",
    content: "https://images-na.ssl-images-amazon.com/images/I/61ckvT1HNpL._AC_SL1073_.jpg",
    created: new Date(),
    group: "vpet"
  
    // meta:'Friend',
    // extra={extra}
  };
  const dataObj1 = {
    ...dataObj,
    author: "Digimon Digivice 20th",
    description:"Bandai Digimon Digivice 20th Anniversary Edition Digital Monster Zubamon Gold Color Version.",
    content: "https://images-na.ssl-images-amazon.com/images/I/61uWc026vrL._AC_.jpg",
    group: "vpet"

  };
  const dataObj2 = {
    ...dataObj,
    author: "Gotta Go Flamingo",
    description:"Sherbet is an interactive, toilet-trained flamingo who loves to sing, dance, chat back, eat, and poop – on the toilet! Feed Sherbet his Flamingo Food and watch his neck wiggle as he gobbles it all down. When Sherbet’s gotta go, he’ll let you know by signing his catchy song! Place him on the toilet and watch him poop into the bowl.",
    content: "https://target.scene7.com/is/image/Target/GUEST_a8e1411f-194a-476a-8dae-6762bf7534ae?fmt=webp&wid=1400&qlt=80",
    group: "toy"

  };
  const dataObj3 = {
    ...dataObj,
    author: "Food Play Set",
    description:"Healthy pretend play: Melissa & doug food groups wooden play food is a sturdy wooden food set that features items from the 5 food groups for healthy pretend play; it includes watermelon, milk, cheese, fish, eggs, and more",
    content: "https://cdn.shopify.com/s/files/1/2332/6885/products/play_food_205_3_550x.jpg?v=1594214681",
    group: "toy"

  };
  const dataObj4 = {
    ...dataObj,
    author: "Violet Willow Doll",
    description:"Collect the Rainbow of fashion dolls with Rainbow High. Violet Willow is dressed in purple from head to toe. She has gorgeous features and beautiful hair.",
    content: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6419/6419749_sd.jpg;maxHeight=640;maxWidth=550",
    group: "toy"

  };
  const dataObj5 = {
    ...dataObj,
    author: "Lilo and Stitch Figure Set",
    description:"Figure set featuring all main characters from Disney's Lilo & Stich. Play with your favorite friends anytime!",
    content: "https://images-na.ssl-images-amazon.com/images/I/61CGuflrUyL._AC_SL1000_.jpg",
    group: "figure"

  };
  const dataObj6 = {
    ...dataObj,
    author: "Demon Slayer Zenitsu Figure",
    description:"Zenitsu as he prepares to draw his Nichirin Blade. This figure fully showcases Zenitsu's charm and character, from the folds in the clothes that show movement, to the vibrant painting in the clothes and hair.",
    content: "https://cdn.shopify.com/s/files/1/0323/2851/5643/products/0_Demon-Slayer-Agatsuma-Zenitsu-PVC-Action-Figures-Thunderclap-and-Flash-Effect-Anime-Kimetsu-no-Yaiba-Figurine_1296x.jpg?v=1603715789",
    group: "figure"

  };
  const dataObj7 = {
    ...dataObj,
    author: "Naruto Shippuden Sasuke Figure",
    description:"Sasuke and his sword and Rinnegan Eye stare down the enemy and prepare to defend Konoha.",
    content: "https://cdn.shopify.com/s/files/1/0014/2648/9388/products/banpresto-pvc-scale-figures-naruto-shippuden-sasuke-uchiha-grandista-nero-figure-13323380916268_900x900.jpg?v=1572395076",
    group: "figure"

  };
  const dataObj8 = {
    ...dataObj,
    author: "Infrared Connection Palm Device",
    description:"Connect to your tamagotchi connects and send them gifts! Works with Tamagotchi Connectio V3 and later models.",
    content: "https://upload.wikimedia.org/wikipedia/commons/8/89/Treo700p.png",
    group: "accessory"

  };
  const dataObj9 = {
    ...dataObj,
    author: "Figure Storage Box",
    description:"Beautiful Storage box to store and display figures. Reflects UV rays so that the colors do not fade",
    content: "https://i5.walmartimages.com/asr/33f53e80-f368-4f9e-aa23-b0bd2853a117_1.0bf1f2cfdcd2404471e7aa3eca923b3c.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
    group: "accessory"

  };
  const dataObj10 = {
    ...dataObj,
    author: "iBloom Torte Squishy Chocolate Cake",
    description:"Super popular AMAZING quality Sacher Torte Squishy by iBloom Japan. Soft and slow rising.",
    content: "  https://cdn.shopify.com/s/files/1/0118/5710/0857/products/sacherchoc_398a18be-fa50-4ac3-9ea0-3ed3044e8af7_1024x1024.jpg?v=1589956917",
    group: "toy"

  };

  const multipleObjects = [
    dataObj,
    dataObj1,
    dataObj2,
    dataObj3,
    dataObj4,
    dataObj5,
    dataObj6,
    dataObj7,
    dataObj8,
    dataObj9,
    dataObj10
  ];
  // TODO
  // replace multipleObjects with an array of data from the SQL call
  const commentSection = ()=>(
    <>
    <CommentSection/>
    </>
  )
  const groupName = this.props.content;
  const filterCards =(data) => data.filter(obj => obj.group === groupName);
  const postData = groupName === "home" ? multipleObjects : filterCards(multipleObjects);



  const generateCards = (obj) => (
      <Grid.Column>
        <Card
          image={obj.content}
          header={obj.author}
          description={obj.description}
          extra = {commentSection()}
        />
      </Grid.Column>
    );


  const CardColumns = (arrayOfData) => {
    const holder = [];
    for (let i = 0; i < arrayOfData.length; i++){
      holder.push(generateCards(arrayOfData[i]));
  };
  return holder;
  };

return (
  <>
    <Grid container columns={3}>
      {CardColumns(postData)}
    </Grid>
  </>
  );
};
};
