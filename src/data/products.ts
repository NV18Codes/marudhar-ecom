import aampakImg from "@/assets/products/aampak.jpg";
import anardanaGoliImg from "@/assets/products/anardana-goli.jpg";
import mukhwasMixImg from "@/assets/products/mukhwas-mix.jpg";
import panCandyImg from "@/assets/products/pan-candy.jpg";
import chatpatAmlaImg from "@/assets/products/chatpat-amla.jpg";
import imliLadduImg from "@/assets/products/imli-laddu.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  weight: string;
  nutritionalValue: {
    calories: string;
    protein: string;
    carbohydrates: string;
  };
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Aampak",
    category: "Khatta Meetha Range",
    description: "A delightful mix of dried mango pulp blended with unique spices — sweet, tangy, and irresistible.",
    price: 199,
    weight: "195g",
    nutritionalValue: {
      calories: "314.08 Kcal",
      protein: "2.10g",
      carbohydrates: "76.42g"
    },
    image: aampakImg
  },
  {
    id: "2",
    name: "Anardana Goli",
    category: "Khatta Meetha Range",
    description: "Premium pomegranate candy with a perfect balance of sweet and tangy flavors.",
    price: 179,
    weight: "180g",
    nutritionalValue: {
      calories: "298.50 Kcal",
      protein: "1.80g",
      carbohydrates: "72.30g"
    },
    image: anardanaGoliImg
  },
  {
    id: "3",
    name: "Royal Mukhwas Mix",
    category: "Mukhwas Range",
    description: "An exquisite blend of aromatic mouth fresheners for a refreshing after-meal experience.",
    price: 249,
    weight: "200g",
    nutritionalValue: {
      calories: "325.00 Kcal",
      protein: "3.50g",
      carbohydrates: "68.20g"
    },
    image: mukhwasMixImg
  },
  {
    id: "4",
    name: "Pan Candy",
    category: "Candy Range",
    description: "Traditional betel leaf flavored candy that captures the essence of Indian pan.",
    price: 159,
    weight: "150g",
    nutritionalValue: {
      calories: "280.00 Kcal",
      protein: "1.20g",
      carbohydrates: "69.50g"
    },
    image: panCandyImg
  },
  {
    id: "5",
    name: "Chatpat Amla",
    category: "Khatta Meetha Range",
    description: "Tangy Indian gooseberry pieces with a perfect blend of spices for a healthy treat.",
    price: 189,
    weight: "175g",
    nutritionalValue: {
      calories: "265.00 Kcal",
      protein: "2.80g",
      carbohydrates: "65.40g"
    },
    image: chatpatAmlaImg
  },
  {
    id: "6",
    name: "Imli Laddu",
    category: "Khatta Meetha Range",
    description: "Sweet and sour tamarind balls that melt in your mouth with every bite.",
    price: 169,
    weight: "160g",
    nutritionalValue: {
      calories: "295.00 Kcal",
      protein: "1.90g",
      carbohydrates: "71.20g"
    },
    image: imliLadduImg
  }
];

export const categories = [
  "All Products",
  "Khatta Meetha Range",
  "Mouth Freshener Range",
  "Mukhwas Range",
  "Candy Range"
];
