import React, { useState, useEffect } from 'react';
import './CSS/Products.css';
import { FaShoppingCart } from "react-icons/fa";
import img1 from './images/Philately/Books/1.jpg';
import img2 from './images/Philately/Books/2.jpg';
import img3 from './images/Philately/Books/3.jpg';
import img4 from './images/Philately/Books/4.jpg';
import img5 from './images/Philately/Books/5.jpg';
import img6 from './images/Philately/Books/6.jpg';
import img7 from './images/Philately/Books/7.jpg';
import img8 from './images/Philately/Books/8.jpg';
import img9 from './images/Philately/Books/9.jpg';
import img10 from './images/Philately/Calenders/1.jpg';
import img11 from './images/Philately/Calenders/2.jpg';
import img12 from './images/Philately/Calenders/3.jpg';
import img13 from './images/Philately/Calenders/4.jpg';
import img14 from './images/Philately/covers/1.jpeg';
import img15 from './images/Philately/covers/2.jpeg';
import img16 from './images/Philately/covers/3.jpeg';
import img17 from './images/Philately/covers/4.jpeg';
import img18 from './images/Philately/covers/5.jpeg';
import img19 from './images/Philately/covers/6.jpeg';
import img20 from './images/Philately/covers/7.jpeg';
import img21 from './images/Philately/covers/8.jpeg';
import img22 from './images/Philately/covers/9.jpeg';
import img23 from './images/Philately/covers/10.jpeg';
import img24 from './images/Philately/covers/11.jpeg';
import img25 from './images/Philately/covers/12.jpeg';
import img26 from './images/Philately/covers/13.jpeg';
import img27 from './images/Philately/covers/14.jpeg';
import img28 from './images/Philately/covers/15.jpeg';
import img29 from './images/Philately/covers/16.jpeg';
import img30 from './images/Philately/full-sheets/1.jpeg';
import img31 from './images/Philately/full-sheets/2.jpeg';
import img32 from './images/Philately/full-sheets/3.jpeg';
import img33 from './images/Philately/full-sheets/4.jpeg';
import img34 from './images/Philately/full-sheets/5.jpeg';
import img35 from './images/Philately/full-sheets/6.jpeg';
import img36 from './images/Philately/full-sheets/7.jpeg';
import img37 from './images/Philately/full-sheets/8.jpeg';
import img38 from './images/Philately/full-sheets/9.jpeg';
import img39 from './images/Philately/full-sheets/10.jpeg';
import img40 from './images/Philately/full-sheets/11.jpeg';
import img41 from './images/Philately/full-sheets/12.jpeg';
import img42 from './images/Philately/full-sheets/13.jpeg';
import img43 from './images/Philately/full-sheets/14.jpeg';
import img44 from './images/Philately/full-sheets/15.jpeg';
import img45 from './images/Philately/full-sheets/16.jpeg';
import img46 from './images/Philately/full-sheets/17.jpeg';
import img47 from './images/Philately/full-sheets/18.jpeg';
import img48 from './images/Philately/full-sheets/19.jpeg';
import img49 from './images/Philately/full-sheets/20.jpeg';
import img50 from './images/Philately/full-sheets/21.jpeg';
import img51 from './images/Philately/full-sheets/22.jpeg';
import img52 from './images/Philately/full-sheets/23.jpeg';
import img53 from './images/Philately/full-sheets/24.jpeg';
import img54 from './images/Philately/full-sheets/25.jpeg';
import img55 from './images/Philately/full-sheets/26.jpeg';
import img56 from './images/Philately/full-sheets/27.jpeg';
import img57 from './images/Philately/full-sheets/28.jpeg';
import img58 from './images/Philately/full-sheets/29.jpeg';
import img59 from './images/Philately/full-sheets/30.jpeg';
import img60 from './images/Philately/full-sheets/31.jpeg';
import img61 from './images/Philately/full-sheets/32.jpeg';
import img62 from './images/Philately/full-sheets/33.jpeg';
import img63 from './images/Philately/full-sheets/34.jpeg';
import img64 from './images/Philately/full-sheets/35.jpeg';
import img65 from './images/Philately/full-sheets/36.jpeg';
import img66 from './images/Philately/full-sheets/37.jpeg';
import img67 from './images/Philately/full-sheets/38.jpeg';
import img68 from './images/Philately/full-sheets/39.jpeg';
import img69 from './images/Philately/full-sheets/40.jpeg';
import img70 from './images/Philately/full-sheets/41.jpeg';
import img71 from './images/Philately/full-sheets/42.jpeg';
import img72 from './images/Philately/full-sheets/43.jpeg';
import img73 from './images/Philately/full-sheets/44.jpeg';
import img74 from './images/Philately/full-sheets/45.jpeg';
import img75 from './images/Philately/full-sheets/46.jpeg';
import img76 from './images/Philately/full-sheets/47.jpeg';
import img77 from './images/Philately/full-sheets/48.jpeg';
import img78 from './images/Philately/full-sheets/49.jpeg';
import img79 from './images/Philately/full-sheets/50.jpeg';
import img80 from './images/Philately/full-sheets/51.jpeg';
import img81 from './images/Philately/full-sheets/52.jpeg';
import img82 from './images/Philately/full-sheets/53.jpeg';
import img83 from './images/Philately/full-sheets/54.jpeg';
import img84 from './images/Philately/full-sheets/55.jpeg';
import img85 from './images/Philately/full-sheets/56.jpeg';
import img86 from './images/Philately/full-sheets/57.jpeg';
import img87 from './images/Philately/full-sheets/58.jpeg';
import img88 from './images/Philately/full-sheets/59.jpeg';
import img89 from './images/Philately/full-sheets/60.jpeg';
import img90 from './images/Philately/full-sheets/61.jpeg';
import img91 from './images/Philately/full-sheets/62.jpeg';
import img92 from './images/Philately/full-sheets/63.jpeg';
import img93 from './images/Philately/full-sheets/64.jpeg';
import img94 from './images/Philately/full-sheets/65.jpeg';
import img95 from './images/Philately/full-sheets/66.jpeg';
import img96 from './images/Philately/full-sheets/67.jpeg';
import img97 from './images/Philately/full-sheets/68.jpeg';
import img98 from './images/Philately/full-sheets/69.jpeg';
import img99 from './images/Philately/full-sheets/70.jpeg';
import img100 from './images/Philately/full-sheets/71.jpeg';
import img101 from './images/Philately/full-sheets/72.jpeg';
import img102 from './images/Philately/full-sheets/73.jpeg';
import img103 from './images/Philately/full-sheets/74.jpeg';
import img104 from './images/Philately/full-sheets/75.jpeg';
import img105 from './images/Philately/full-sheets/76.jpeg';
import img106 from './images/Philately/full-sheets/77.jpeg';
import img107 from './images/Philately/full-sheets/78.jpeg';
import img108 from './images/Philately/full-sheets/79.jpeg';
import img109 from './images/Philately/full-sheets/80.jpeg';
import img110 from './images/Philately/full-sheets/81.jpeg';
import img111 from './images/Philately/full-sheets/82.jpeg';
import img112 from './images/Philately/mini-sheets/1.jpeg';
import img113 from './images/Philately/mini-sheets/2.jpeg';
import img114 from './images/Philately/mini-sheets/3.jpeg';
import img115 from './images/Philately/mini-sheets/4.jpeg';
import img116 from './images/Philately/mini-sheets/5.jpeg';
import img117 from './images/Philately/mini-sheets/6.jpeg';
import img118 from './images/Philately/mini-sheets/7.jpeg';
import img119 from './images/Philately/mini-sheets/8.jpeg';
import img120 from './images/Philately/mini-sheets/9.jpeg';
import img121 from './images/Philately/mini-sheets/10.jpeg';
import img122 from './images/Philately/mini-sheets/11.jpeg';
import img123 from './images/Philately/mini-sheets/12.jpeg';
import img124 from './images/Philately/mini-sheets/13.jpeg';
import img125 from './images/Philately/mini-sheets/14.jpeg';
import img126 from './images/Philately/mini-sheets/15.jpeg';
import img127 from './images/Philately/mini-sheets/16.jpeg';
import img128 from './images/Philately/mini-sheets/17.jpeg';
import img129 from './images/Philately/mini-sheets/18.jpeg';
import img130 from './images/Philately/mini-sheets/19.jpeg';
import img131 from './images/Philately/mini-sheets/20.jpeg';
import img132 from './images/Philately/sheetlet/1.jpeg';
import img133 from './images/Philately/sheetlet/2.jpeg';
import img134 from './images/Philately/sheetlet/3.jpeg';
import img135 from './images/Philately/sheetlet/4.jpeg';
import img136 from './images/Philately/sheetlet/5.jpeg';
import img137 from './images/Philately/sheetlet/6.jpeg';
import img138 from './images/Philately/sheetlet/7.jpeg';
import img139 from './images/Philately/sheetlet/8.jpeg';
import img140 from './images/Philately/sheetlet/9.jpeg';
import img141 from './images/Philately/sheetlet/10.jpeg';
import img142 from './images/Philately/sheetlet/11.jpeg';
import img143 from './images/Philately/sheetlet/12.jpeg';
import img144 from './images/Philately/sheetlet/13.jpeg';
import img145 from './images/Philately/sheetlet/14.jpeg';
import img146 from './images/Philately/souvenir_sheets/1.jpeg';
import img147 from './images/Philately/souvenir_sheets/2.jpeg';
import img148 from './images/Philately/souvenir_sheets/3.jpeg';
import img149 from './images/Philately/souvenir_sheets/4.jpeg';
import img150 from './images/Philately/souvenir_sheets/5.jpeg';
import img151 from './images/Philately/souvenir_sheets/6.jpeg';
import img152 from './images/Philately/souvenir_sheets/7.jpeg';
import img153 from './images/Philately/souvenir_sheets/8.jpeg';
import img154 from './images/Philately/souvenir_sheets/9.jpeg';
import img155 from './images/Philately/souvenir_sheets/10.jpeg';
import img156 from './images/Philately/souvenir_sheets/11.jpeg';
import img157 from './images/Philately/souvenir_sheets/12.jpeg';
import img158 from './images/Philately/souvenir_sheets/13.jpeg';
import img159 from './images/Philately/souvenir_sheets/14.jpeg';
import img160 from './images/Philately/souvenir_sheets/15.jpeg';
import img161 from './images/Philately/souvenir_sheets/16.jpeg';
import img162 from './images/Philately/souvenir_sheets/17.jpeg';
import img163 from './images/Philately/souvenir_sheets/18.jpeg';
import img164 from './images/Philately/souvenir_sheets/19.jpeg';
import img165 from './images/Gangajals/1.jpeg';
import img166 from './images/Gangajals/2.jpeg';
import img167 from './images/Gangajals/3.jpeg';


// Define product data with specific counts for each category and subcategory
const productData = {
  "Philately": {
    "Books": {
      count: 9,
      items: [
        { name: "Philately Collection Book Vol.1", price: 45, image: img1 },
        { name: "Stamp Encyclopedia", price: 55, image: img2 },
        { name: "Rare Stamps Guide", price: 40, image: img3},
        { name: "Collector's Handbook", price: 35, image: img4 },
        { name: "Postal History Book", price: 50, image: img5},
        { name: "Beginner's Guide to Stamps", price: 30, image: img6 },
        { name: "World Stamps Encyclopedia", price: 65, image: img7 },
        { name: "Indian Postal Stamps", price: 45, image: img8 },
        { name: "Commemorative Stamps Album", price: 55, image: img9 }
      ]
    },
    "Calenders": {
      count: 4,
      items: [
        { name: "2025 Stamps Calendar", price: 25, image: img10 },
        { name: "Historical Stamps Calendar", price: 30, image: img11 },
        { name: "Postal Heritage Calendar", price: 28, image: img12 },
        { name: "Rare Collections Calendar", price: 32, image: img13 }
      ]
    },
    "Covers": {
      count: 16,
      items: [
          { name: "First Day Cover - National Birds", price: 15 , image: img14},
          { name: "Special Cover - Independence Day", price: 18 , image: img15},
          { name: "Commemorative Cover - Famous Personalities", price: 20, image: img16 },
          { name: "Limited Edition Cover - Landmarks", price: 25 , image: img17},
          { name: "First Day Cover - Wildlife Series", price: 15 , image: img18},
          { name: "Special Cover - Republic Day", price: 18 , image: img19},
          { name: "Commemorative Cover - Freedom Fighters", price: 20 , image: img20},
          { name: "Limited Edition Cover - Heritage Sites", price: 25 , image: img21},
          { name: "First Day Cover - Endangered Species", price: 15 , image: img22},
          { name: "Special Cover - Army Day", price: 18 , image: img23},
          { name: "Commemorative Cover - Scientists", price: 20 , image: img24},
          { name: "Limited Edition Cover - Monuments", price: 25 , image: img25},
          { name: "First Day Cover - Marine Life", price: 15 , image: img26},
          { name: "Special Cover - Air Force Day", price: 18 , image: img27},
          { name: "Commemorative Cover - Leaders", price: 20 , image: img28},
          { name: "Limited Edition Cover - Forts", price: 25 , image: img29}
        
      ]
    },
    "agarbatti":{
      count: 10,
      items:[
        {name:"jasmine", price:20},
        {name:"sandal", price:20},
        {name:"rose", price:20}
      ]
    },

    "Full Sheets": {
      count: 82,
      items: [
        { name: "First Day Cover - National Birds", price: 15, image: img30 },
        { name: "Special Cover - Independence Day", price: 18, image: img31 },
        { name: "Commemorative Cover - Famous Personalities", price: 20, image: img32},
        { name: "Limited Edition Cover - Landmarks", price: 25, image: img33 },
        { name: "First Day Cover - Wildlife Series", price: 15, image: img34 },
        { name: "Special Cover - Republic Day", price: 18, image: img35 },
        { name: "Commemorative Cover - Freedom Fighters", price: 20, image: img36 },
        { name: "Limited Edition Cover - Heritage Sites", price: 25, image: img37 },
        { name: "First Day Cover - Endangered Species", price: 15, image: img38 },
        { name: "Special Cover - Army Day", price: 18, image: img39 },
        { name: "Commemorative Cover - Scientists", price: 20, image: img40 },
        { name: "Limited Edition Cover - Monuments", price: 25, image: img41 },
        { name: "First Day Cover - Marine Life", price: 15, image: img42 },
        { name: "Special Cover - Air Force Day", price: 18, image: img43 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img44 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img45 },
        { name: "First Day Cover - National Birds", price: 15, image: img46 },
        { name: "Special Cover - Independence Day", price: 18, image: img47 },
        { name: "Commemorative Cover - Famous Personalities", price: 20, image: img48 },
        { name: "Limited Edition Cover - Landmarks", price: 25, image: img49 },
        { name: "First Day Cover - Wildlife Series", price: 15, image: img50 },
        { name: "Special Cover - Republic Day", price: 18, image: img51 },
        { name: "Commemorative Cover - Freedom Fighters", price: 20, image: img52 },
        { name: "Limited Edition Cover - Heritage Sites", price: 25, image: img53 },
        { name: "First Day Cover - Endangered Species", price: 15, image: img54 },
        { name: "Special Cover - Army Day", price: 18, image: img55 },
        { name: "Commemorative Cover - Scientists", price: 20, image: img56 },
        { name: "Limited Edition Cover - Monuments", price: 25, image: img57 },
        { name: "First Day Cover - Marine Life", price: 15, image: img58 },
        { name: "Special Cover - Air Force Day", price: 18, image: img59 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img60 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img61 },
        { name: "First Day Cover - National Birds", price: 15, image: img62 },
        { name: "Special Cover - Independence Day", price: 18, image: img63 },
        { name: "Commemorative Cover - Famous Personalities", price: 20, image: img64 },
        { name: "Limited Edition Cover - Landmarks", price: 25, image: img65 },
        { name: "First Day Cover - Wildlife Series", price: 15, image: img66 },
        { name: "Special Cover - Republic Day", price: 18, image: img67 },
        { name: "Commemorative Cover - Freedom Fighters", price: 20, image: img68 },
        { name: "Limited Edition Cover - Heritage Sites", price: 25, image: img69 },
        { name: "First Day Cover - Endangered Species", price: 15, image: img70 },
        { name: "Special Cover - Army Day", price: 18, image: img71 },
        { name: "Commemorative Cover - Scientists", price: 20, image: img72 },
        { name: "Limited Edition Cover - Monuments", price: 25, image: img73 },
        { name: "First Day Cover - Marine Life", price: 15, image: img74 },
        { name: "Special Cover - Air Force Day", price: 18, image: img75 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img76 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img77 },
        { name: "First Day Cover - National Birds", price: 15, image: img78 },
        { name: "Special Cover - Independence Day", price: 18, image: img79 },
        { name: "Commemorative Cover - Famous Personalities", price: 20, image: img80 },
        { name: "Limited Edition Cover - Landmarks", price: 25, image: img81 },
        { name: "First Day Cover - Wildlife Series", price: 15, image: img82 },
        { name: "Special Cover - Republic Day", price: 18, image: img83 },
        { name: "Commemorative Cover - Freedom Fighters", price: 20, image: img84 },
        { name: "Limited Edition Cover - Heritage Sites", price: 25, image: img85 },
        { name: "First Day Cover - Endangered Species", price: 15, image: img86 },
        { name: "Special Cover - Army Day", price: 18, image: img87 },
        { name: "Commemorative Cover - Scientists", price: 20, image: img88 },
        { name: "Limited Edition Cover - Monuments", price: 25, image: img89 },
        { name: "First Day Cover - Marine Life", price: 15, image: img90 },
        { name: "Special Cover - Air Force Day", price: 18, image: img91 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img92 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img93 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img94 },    
        { name: "Commemorative Cover - Famous Personalities", price: 20, image: img95 },
        { name: "Limited Edition Cover - Landmarks", price: 25, image: img96 },
        { name: "First Day Cover - Wildlife Series", price: 15, image: img97 },
        { name: "Special Cover - Republic Day", price: 18, image: img98 },
        { name: "Commemorative Cover - Freedom Fighters", price: 20, image: img99 },
        { name: "Limited Edition Cover - Heritage Sites", price: 25, image: img100 },
        { name: "First Day Cover - Endangered Species", price: 15, image: img101 },
        { name: "Special Cover - Army Day", price: 18, image: img102 },
        { name: "Commemorative Cover - Scientists", price: 20, image: img103 },
        { name: "Limited Edition Cover - Monuments", price: 25, image: img104 },
        { name: "First Day Cover - Marine Life", price: 15, image: img105 },
        { name: "Special Cover - Air Force Day", price: 18, image: img106 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img107 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img108 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img109 },                      
        { name: "Limited Edition Cover - Forts", price: 25, image: img110 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img111 }   
      ]
    },
    "Mini Sheets": {
      count: 20,
      items:[
        { name: "Commemorative Cover - Leaders", price: 20, image: img112 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img113 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img114 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img115 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img116 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img117 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img118 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img119 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img120 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img121},
        { name: "Commemorative Cover - Leaders", price: 20, image: img122 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img123 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img124 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img125 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img126 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img127 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img128 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img129 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img130 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img131 }
      ]
    },
    "Sheetlets": {
      count: 14,
      items: [
      { name: "Commemorative Cover - Leaders", price: 20, image: img132 },
      { name: "Limited Edition Cover - Forts", price: 25, image: img133 },
      { name: "Commemorative Cover - Leaders", price: 20, image: img134 },
      { name: "Limited Edition Cover - Forts", price: 25, image: img135 },
      { name: "Commemorative Cover - Leaders", price: 20, image: img136 },
      { name: "Limited Edition Cover - Forts", price: 25, image: img137 },
      { name: "Commemorative Cover - Leaders", price: 20, image: img138 },
      { name: "Limited Edition Cover - Forts", price: 25, image: img139 },
      { name: "Commemorative Cover - Leaders", price: 20, image: img140 },
      { name: "Limited Edition Cover - Forts", price: 25, image: img141 },
      { name: "Commemorative Cover - Leaders", price: 20, image: img142 },
      { name: "Limited Edition Cover - Forts", price: 25, image: img143 },
      { name: "Commemorative Cover - Leaders", price: 20, image: img144 },
      { name: "Limited Edition Cover - Forts", price: 25, image: img145 }    ]
    },
    "Souvenir Sheets": {
      count: 19,
      items: [
        { name: "Commemorative Cover - Leaders", price: 20, image: img146 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img147 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img148 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img149 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img150 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img151 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img152 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img153 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img154 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img155 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img156 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img157 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img158 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img159 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img160 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img161 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img162 },
        { name: "Limited Edition Cover - Forts", price: 25, image: img163 },
        { name: "Commemorative Cover - Leaders", price: 20, image: img164 }
      ]
    }
  },
  "Ganga Jal": {
    count: 3,
    items: [
      { name: "Pure Ganga Jal - 100ml", price: 25, image: img165 },
      { name: "Holy Ganga Water with Brass Container", price: 45, image: img166 },
      { name: "Premium Ganga Jal - Gift Pack", price: 60, image: img167 }
    ]
  }
};

// Generate products from the defined data
const generateProducts = () => {
  const products = [];
  let id = 1;
  
  // Process Philately products with subcategories
  Object.entries(productData.Philately).forEach(([subCategory, subCategoryData]) => {
    subCategoryData.items.forEach((item, index) => {
      products.push({
        id: id++,
        name: item.name,
        price: item.price,
        category: "Philately",
        subCategory: subCategory,
        image: item.image || `/api/placeholder/400/300`,
        isNew: index < 2, // Mark first two items as new
        isFeatured: index % 5 === 0 // Feature every 5th item
      });
    });
  });
  
  // Process Ganga Jal products
  productData["Ganga Jal"].items.forEach((item, index) => {
    products.push({
      id: id++,
      name: item.name,
      price: item.price,
      category: "Ganga Jal",
      image: item.image || `/api/placeholder/400/300`,
      isNew: index === 0,
      isFeatured: index === 1
    });
  });
  
  return products;
};

const Products = ({ addToCart }) => {
  // State for products and pagination
  const [products] = useState(generateProducts());
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoadErrors, setImageLoadErrors] = useState({});

  // Log product counts on initial load for debugging
  useEffect(() => {
    console.log("Total products generated:", products.length);
    
    // Log count by category and subcategory
    const countsByCategory = {};
    products.forEach(product => {
      const category = product.category;
      const subCategory = product.subCategory || 'default';
      
      if (!countsByCategory[category]) {
        countsByCategory[category] = {};
      }
      
      if (!countsByCategory[category][subCategory]) {
        countsByCategory[category][subCategory] = 0;
      }
      
      countsByCategory[category][subCategory]++;
    });
    
    console.log("Products by category and subcategory:", countsByCategory);
  }, [products]);

  // Simulate image loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Get unique categories and their subcategories
  const categories = ["All", ...new Set(products.map(product => product.category))];
  
  // Create a mapping of categories to their subcategories
  const subCategoriesMap = {};
  categories.forEach(category => {
    if (category !== "All") {
      const subcategories = ["All", ...new Set(
        products
          .filter(product => product.category === category && product.subCategory)
          .map(product => product.subCategory)
      )];
      
      if (subcategories.length > 1) { // Only add if there are actual subcategories
        subCategoriesMap[category] = subcategories;
      }
    }
  });

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory("All");
    setCurrentPage(1); // Reset to first page when changing filters
  };

  // Handle image error
  const handleImageError = (productId, imagePath) => {
    setImageLoadErrors(prev => ({
      ...prev,
      [productId]: true
    }));
    console.log(`Image failed to load: ${imagePath}`);
  };

  // Filter products based on selected category and subcategory
  const filteredProducts = products.filter(product => {
    if (selectedCategory === "All") return true;
    if (product.category !== selectedCategory) return false;
    if (!product.subCategory || selectedSubCategory === "All") return true;
    return product.subCategory === selectedSubCategory;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="products-container">
      <h1>Our Products</h1>
      
      {/* Category filter controls */}
      <div className="filter-controls">
        <div className="category-filter">
          <p>Filter by category:</p>
          <div className="category-buttons">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Subcategory selection */}
        {selectedCategory !== "All" && subCategoriesMap[selectedCategory] && (
          <div className="subcategory-filter">
            <p>Filter by subcategory:</p>
            <div className="category-buttons">
              {subCategoriesMap[selectedCategory].map(subCategory => (
                <button
                  key={subCategory}
                  onClick={() => {
                    setSelectedSubCategory(subCategory);
                    setCurrentPage(1);
                  }}
                  className={`category-btn ${selectedSubCategory === subCategory ? 'active' : ''}`}
                >
                  {subCategory}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Product count information */}
      <div className="product-count">
        Showing {filteredProducts.length > 0 ? indexOfFirstItem + 1 : 0}-{Math.min(indexOfLastItem, filteredProducts.length)} of {filteredProducts.length} products
      </div>

      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading products...</p>
        </div>
      ) : (
        <>
          {/* Products grid */}
<div className="products-grid">
  {currentItems.map(product => (
    <article 
      key={product.id} 
      className={`card ${product.isNew ? 'new' : ''} ${product.isFeatured ? 'featured' : ''}`}
      data-badge={product.isNew ? 'NEW' : product.isFeatured ? 'FEATURED' : ''}
    >
      {/* Vertical category name */}
      <div className="card__name">{product.name}</div>
      
      {/* Product Image with lazy loading and error handling */}
      <img 
        src={imageLoadErrors[product.id] ? '/api/placeholder/400/300' : product.image}
        alt={product.name}
        className="card__img"
        loading="lazy"
        onError={(e) => {
          handleImageError(product.id, product.image);
          e.target.src = "/api/placeholder/400/300"; // Fallback image
        }}
      />
      
      
      <div className="product-category">
        {product.subCategory && `${product.subCategory}`}
      </div>
      
      <div className="card__precis">
        <div className="card__preci">
          {/* You can add an old price here if available */}
          {product.oldPrice && (
            <span className="card__preci--before">₹{product.oldPrice}</span>
          )}
          <span className="card__preci--now">₹{product.price}</span>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="card__icon"
          title="Add to Cart"
        >
           <FaShoppingCart />

        </button>
      </div>
    </article>
  ))}
</div>

{/* Pagination */}
{totalPages > 1 && (
  <div className="pagination">
    <button 
      onClick={() => paginate(currentPage - 1)}
      disabled={currentPage === 1}
      className="pagination-btn"
    >
      &laquo; Prev
    </button>
    
    {Array.from({ length: totalPages }, (_, i) => {
      const pageNumber = i + 1;
      
      // First page
      if (pageNumber === 1) {
        return (
          <button
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            className={`pagination-btn ${currentPage === pageNumber ? 'active' : ''}`}
          >
            {pageNumber}
          </button>
        );
      }
      
      // Last page
      if (pageNumber === totalPages) {
        return (
          <button
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            className={`pagination-btn ${currentPage === pageNumber ? 'active' : ''}`}
          >
            {pageNumber}
          </button>
        );
      }
      
      // Pages around current page
      if (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2) {
        return (
          <button
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            className={`pagination-btn ${currentPage === pageNumber ? 'active' : ''}`}
          >
            {pageNumber}
          </button>
        );
      }
      
      // First ellipsis (between page 1 and nearby pages)
      if (pageNumber === 2 && currentPage > 4) {
        return <span key={`ellipsis-1`} className="pagination-ellipsis">...</span>;
      }
      
      // Last ellipsis (between nearby pages and last page)
      if (pageNumber === totalPages - 1 && currentPage < totalPages - 3) {
        return <span key={`ellipsis-2`} className="pagination-ellipsis">...</span>;
      }
      
      return null;
    })}
    
    <button 
      onClick={() => paginate(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="pagination-btn"
    >
      Next &raquo;
    </button>
  </div>

          )}
        </>
      )}
    </div>
  );
};

export default Products;