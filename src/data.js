import { GiWeightLiftingUp, GiSplitBody, GiChestArmor } from "react-icons/gi";
import { MdModelTraining } from "react-icons/md";
import { GoChevronRight } from "react-icons/go";
import testimony1 from "./images/2d-dummy.png";
import testimony2 from "./images/3d-dummy.png";
import fTestimony from "./images/female-dummy.png";

export const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Plans",
    path: "/plans",
  },
  {
    name: "Media",
    path: "/media",
  },
  {
    name: "Experts",
    path: "/experts",
  },
];

export const faqData = [
  {
    id: "q1",
    question: "How often should I workout?",
    answer:
      "25mins of higher intensity cardio workout 2-3times/week. And 2-3times strength training per week",
    source: "Source: mayoclinic.org",
  },
  {
    id: "q2",
    question: "What's the best time to workout?",
    answer:
      "The best time to work out is in the afternoon and evening. In the afternoon and evening, your reaction time is at its quickest, which is important for exercises like high-intensity interval training (HIIT), or speed work on the treadmill. The late afternoon is also the time when your heart rate and blood pressure are lowest, which decreases your chance of injury while improving performance.",
    source: "Source: healthline.com",
  },
  {
    id: "q3",
    question: "How long should my workout be?",
    answer:
      "The ideal workout duration can vary significantly depending on the person, their goals, their preferences, and the exercise type. For weightlifting and bodyweight strength training, 45–60 minutes per session may suffice. Meanwhile, cardiovascular and calisthenic training may be better if performed for 30–60 minutes. That being said, you can also choose shorter or longer increments — with these exercises, how many benefits you’ll reap may depend more on the total weekly volume",
    source: "Source: healthline.com",
  },
  {
    id: "q4",
    question: "Do I need a warmup before I workout?",
    answer:
      "Warming up helps prepare your body for aerobic activity. A warmup gradually revs up your cardiovascular system by raising your body temperature and increasing blood flow to your muscles. Warming up may also help reduce muscle soreness and lessen your risk of injury.",
    source: "Source: mayoclinic.org",
  },
  {
    id: "q5",
    question: "Cardio, Strength training or both",
    answer:
      "By combining strength training and cardio, you can get the best of both worlds: fat loss and muscle gain. It’s going to take a little more time to incorporate both, but it’s time well spent if you want less fat and more muscle. You can’t totally rely on the number on the scale to track your weight loss if you’re strength training and incorporating cardio, because muscle has greater density than fat. Doing both will help improve your mental and heart health.",
    source: "Source: greatist.com"
    },
  {
    id: "q6",
    question: "Does weight helps in strength training?",
    answer:
    "Strength training is any type of exercise that involves your own body weight or equipment to build muscle mass, endurance, and strength. There are many types of strength training, such as bodyweight exercises, lifting weights, or circuit training.",
    source: "Source: healthline.com"
  },
];

export const amenitiesData = [
  {
    id: "a1",
    icon: <GoChevronRight />,
    info: "24-Hour Access",
  },
  {
    id: "a2",
    icon: <GoChevronRight />,
    info: "Free Classes",
  },
  {
    id: "a3",
    icon: <GoChevronRight />,
    info: "Private Showers",
  },
  {
    id: "a4",
    icon: <GoChevronRight />,
    info: "24-Hour Security",
  },
  {
    id: "a5",
    icon: <GoChevronRight />,
    info: "HDTVs",
  },
  {
    id: "a6",
    icon: <GoChevronRight />,
    info: "Vitamins/Supplements",
  },
];

export const amenitiesData2 = [
  {
    icon: <GoChevronRight />,
    id: "a01",
    info: "Classes",
  },
  {
    icon: <GoChevronRight />,
    id: "a02",
    info: "Health-Plan Discounts",
  },
  {
    icon: <GoChevronRight />,
    id: "a03",
    info: "Wellness Programs",
  },
  {
    icon: <GoChevronRight />,
    id: "a04",
    info: "Convenient Parking",
  },
  {
    icon: <GoChevronRight />,
    id: "a05",
    info: "Private Restrooms",
  },
  {
    icon: <GoChevronRight />,
    id: "a06",
    info: "WorldWide Club Access",
  },
];

export const testimonialsData = [
  {
    id: "1",
    name: "Jonathan George",
    imageSource: testimony1,
    text: "I've been working with Fitnesty since 2022. My goal initially was to lose weight. So far as of September 2022 I have lost 31 lbs and a total of 11.5 inches.This is all down to Fitnesty and their vast knowledge of fitness and dietary needs.During this time I have had a couple minor injuies to deal with and Fitnesty was able to adjust my program immediately and direct me to the proper professionals to help in my recovery. Looking forward to continuing to work with them in the future. Thanks Fitnesty!",
  },
  {
    id: "2",
    name: "Akinde Temitope",
    imageSource: fTestimony,
    text: "I also want to note that Adeola is a fabulous trainer, just the right combination of push and encouragement. She's very adaptive to the materials and space at hand, as well as our individual needs.",
  },
  {
    id: "3",
    name: "Barry Williams",
    text: "Our trainer, Joel, is fantastic. We really enjoy your service, and working out with Joel has done wonders for us!! Thanks so much!",
    imageSource: testimony2,
  },
];

export const ProgramData = [
  {
    id: "p1",
    titleIcon: <GiWeightLiftingUp />,
    title: `Strenght/Free-weights`,
    text: "Free weights such as dumbbells and medicine balls are better training for sports and for life. We can create much more specificity of training by using free weights than machines. Machines build muscles that you use primarily in the gym.",
    path: "/programs/001",
  },
  {
    id: "p2",
    titleIcon: <GiSplitBody />,
    title: "Functional Training",
    text: "Functional fitness training is a training that readies your body for daily activities. These exercises equip you for the most important type of physical fitness, the kind that preps you for real-life, daily living stuff like bending, twisting, lifting, loading, pushing, pulling, squatting and hauling",
    path: "/programs/002",
  },
  {
    id: "p3",
    titleIcon: <GiChestArmor />,
    title: "Cardio",
    text: "Cardio also known as aerobic training, is any form of exercise that elevates the heart rate due to the repeated contraction of muscles while utilizing the aerobic & even, at times, the anaerobic energy system. In layman’s terms, cardio training is any activity that elevates the heart rate and breathing rate.",
    path: "/programs/003",
  },
  {
    id: "p4",
    titleIcon: <MdModelTraining />,
    title: "Training and Coaching Services",
    text: "Sharing knowledge, teaching of skills, encouraging trainer's attitudinal and behavioral change, supporting the individual's progress in the field by listening, questioning and challenging respectfully.",
    path: "/programs/004",
  },
];
