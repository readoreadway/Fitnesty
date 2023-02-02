

import Trainer1 from "./images/Trainer1.jpg"
import Trainer2 from "./images/Trainer2.jpg"
import Trainer3 from "./images/TrainerF.jpg"
import Trainer4 from "./images/Trainer3.jpg"
import Trainer6 from "./images/TrainerF2.jpg"
import Trainer5 from "./images/Trainer4.jpg"

export const plans = [
  {
    id: "p1",
    title: "Silver Package",
    desc: "This is for beginners who need consistent help.",
    price: 49.99,
    features: [
      { feature: "First feature", Available: true },
      { feature: "Second feature", Available: true },
      { feature: "Third feature", Available: true },
      { feature: "Fourth feature", Available: true },
      { feature: "Fifth feature", Available: true },
      { feature: "Sixth feature", Available: false },
      { feature: "Seventh feature", Available: false },
      { feature: "Eighth feature", Available: false },
      { feature: "Ninth feature", Available: false },
      { feature: "Tenth feature", Available: false },
    ],
  },

  {
    id: "p2",
    title: "Gold Package",
    desc: "This is for beginners who knows what they're doing.",
    price: 70.00,
    features: [
      { feature: "First feature", Available: true },
      { feature: "Second feature", Available: true },
      { feature: "Third feature", Available: true },
      { feature: "Fourth feature", Available: true },
      { feature: "Fifth feature", Available: true },
      { feature: "Sixth feature", Available: true },
      { feature: "Seventh feature", Available: true },
      { feature: "Eighth feature", Available: false },
      { feature: "Ninth feature", Available: false },
      { feature: "Tenth feature", Available: false },
    ],
  },

  {
    id: "p3",
    title: "Plaitinum Package",
    desc: "This package is for those who need home service.",
    price: 89.99,
    features: [
      { feature: "First feature", Available: true },
      { feature: "Second feature", Available: true },
      { feature: "Third feature", Available: true },
      { feature: "Fourth feature", Available: true },
      { feature: "Fifth feature", Available: true },
      { feature: "Sixth feature", Available: true },
      { feature: "Seventh feature", Available: true },
      { feature: "Eighth feature", Available: true },
      { feature: "Ninth feature", Available: true },
      { feature: "Tenth feature", Available: true },
    ],
  },
];

export const Trainers = [
  {
    id: "T1",
    name: "Harry Mike",
    image: Trainer1,
    job: "Cardio Trainer",
    socials:['https://www.instagram.com/', 'https://www.facebook.com/', 'https://www.linkedin.com/']
  },
  {
    id: "T2",
    name: "Desmond Harvey",
    image: Trainer2,
    job: "Physique Trainer",
    socials:['https://www.instagram.com/', 'https://www.facebook.com/', 'https://www.linkedin.com/']
  },
  {
    id: "T3",
    name: "Grace Bielsa",
    image: Trainer3,
    job: "Lifestyle Trainer",
    socials:['https://www.instagram.com/', 'https://www.facebook.com/', 'https://www.linkedin.com/']
  },
  {
    id: "T4",
    name: "Nelson Gabriel",
    image: Trainer4,
    job: "Aerobic Trainer",
    socials:['https://www.instagram.com/', 'https://www.facebook.com/', 'https://www.linkedin.com/']
  },
  {
    id: "T5",
    name: "Mikel Potter",
    image: Trainer5,
    job: "Performance Trainer",
    socials:['https://www.instagram.com/', 'https://www.facebook.com/', 'https://www.linkedin.com/']
  },
  {
    id: "T6",
    name: "Mead Leao",
    image: Trainer6,
    job: "Speed Trainer",
    socials:['https://www.instagram.com/', 'https://www.facebook.com/', 'https://www.linkedin.com/']
  },
]
