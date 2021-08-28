import { Quiz, CategoryArray  } from "./dataType";

import GeneralGardeningIcon from "../assets/svg/generalGardening.svg";
import IndoorGardeningIcon from "../assets/svg/indoorGardening.svg";
import GardeningDiseasesIcon from "../assets/svg/gardeningDiseases.svg";


export const quizData: Quiz = {
  quizName: "Gardening Quiz",
  category: [
    {
      name: "General Gardening",
      image: GeneralGardeningIcon,
      questions: [
        {
          questionText: "What is the technical term for planting seeds?",
          points: 5,
          options: [
            {
              optionText: "Germinating",
              isRight: false
            },
            {
              optionText: "Xeriscaping",
              isRight: false
            },
            {
              optionText: "Sowing",
              isRight: true
            },
            {
              optionText: "Fertilizing",
              isRight: false
            }
          ]
        },
        {
          questionText:
            "Which of these nutrients do plants not get from the soil?",
          points: 1,
          options: [
            {
              optionText: "Phosphorus",
              isRight: false
            },
            {
              optionText: "Potassium",
              isRight: false
            },
            {
              optionText: "Nitrogen",
              isRight: false
            },
            {
              optionText: "Carbon",
              isRight: true
            }
          ]
        },
        {
          questionText:
            "All of the following plants are from the same family EXCEPT..",
          points: 1,
          options: [
            {
              optionText: "Potatoes",
              isRight: false
            },
            {
              optionText: "Tomatoes",
              isRight: false
            },
            {
              optionText: "Radishes",
              isRight: true
            },
            {
              optionText: "Eggplants",
              isRight: false
            }
          ]
        },
        {
          questionText: "Which of these is a perennial plant?",
          points: 7,
          options: [
            {
              optionText: "Strawberry",
              isRight: true
            },
            {
              optionText: "Watermelon",
              isRight: false
            },
            {
              optionText: "Maize",
              isRight: false
            },
            {
              optionText: "Pea",
              isRight: false
            }
          ]
        },
        {
          questionText:
            "One of these foods is not from the rose family — do you know which one?",
          points: 1,
          options: [
            {
              optionText: "Almonds",
              isRight: false
            },
            {
              optionText: "Grapes",
              isRight: true
            },
            {
              optionText: "Apples",
              isRight: false
            },
            {
              optionText: "Raspberries",
              isRight: false
            }
          ]
        },
        {
          questionText:
            "Which of these insects is not considered beneficial to a garden?",
          points: 1,
          options: [
            {
              optionText: "Grasshoppers",
              isRight: true
            },
            {
              optionText: "Ladybugs",
              isRight: false
            },
            {
              optionText: "Spiders",
              isRight: false
            },
            {
              optionText: "Bumblebees",
              isRight: false
            }
          ]
        },
        {
          questionText: "Which of these is a shade plant?",
          points: 1,
          options: [
            {
              optionText: "Peony",
              isRight: false
            },
            {
              optionText: "Fern",
              isRight: true
            },
            {
              optionText: "Daylily",
              isRight: false
            },
            {
              optionText: "Lavender",
              isRight: false
            }
          ]
        },
        {
          questionText: "Which of these veggies is a cool weather crop?",
          points: 1,
          options: [
            {
              optionText: "Peppers",
              isRight: false
            },
            {
              optionText: "Tomatoes",
              isRight: false
            },
            {
              optionText: "Pumpkin",
              isRight: false
            },
            {
              optionText: "Cauliflower",
              isRight: true
            }
          ]
        },
        {
          questionText:
            "What is the main problem with growing sprouting broccoli?",
          points: 1,
          options: [
            {
              optionText: "Needs very hot summers",
              isRight: false
            },
            {
              optionText: "Takes up a lot of space",
              isRight: true
            },
            {
              optionText: "Easily damaged by frost",
              isRight: false
            },
            {
              optionText: "Difficult to germinate seed",
              isRight: false
            }
          ]
        },
        {
          questionText:
            "In which season is asparagus most often cropped and eaten in the UK?",
          points: 1,
          options: [
            {
              optionText: "Spring",
              isRight: true
            },
            {
              optionText: "Summer",
              isRight: false
            },
            {
              optionText: "Autumn",
              isRight: false
            },
            {
              optionText: "Winter",
              isRight: false
            }
          ]
        },
        {
          questionText:
            "Which of the professionals listed beneath the picture would you expect to make use of the Capsicum plant?",
          points: 1,
          options: [
            {
              optionText: "Accountant",
              isRight: false
            },
            {
              optionText: "Fireman",
              isRight: false
            },
            {
              optionText: "Pilot",
              isRight: false
            },
            {
              optionText: "Policeman",
              isRight: true
            }
          ]
        },
        {
          questionText:
            "The underground, edible parts of the potato plant are correctly referred to as what?",
          points: 1,
          options: [
            {
              optionText: "Bulbs",
              isRight: false
            },
            {
              optionText: "Rhizomes",
              isRight: false
            },
            {
              optionText: "Stolons",
              isRight: false
            },
            {
              optionText: "Tubers",
              isRight: true
            }
          ]
        }
      ]
    },
    {
      name: "Indoor Gardening",
      image: IndoorGardeningIcon,
      questions: [
        {
          questionText:
            "The hardy devil's ivy is one of the most ubiquitous indoor plants in Australia right now, courtesy of its attractive white and green leaves and trailing vines. If you watered it every second day and left it on a sunny windowsill, what can you expect to happen?",
          points: 5,
          options: [
            {
              optionText:
                "It'll thrive! The more water and sun the better for this one",
              isRight: false
            },
            {
              optionText: "It'll produce darker green leaves",
              isRight: false
            },
            {
              optionText:
                "It'll struggle. Shade and just watering when soil is dry is fine",
              isRight: true
            },
            {
              optionText: "It's likely to produce stronger vines",
              isRight: false
            }
          ]
        },
        {
          questionText:
            "Uh-oh!  The tips and edges of the leaves on your favourite plant are turning brown. What’s a possible cause?",
          points: 1,
          options: [
            {
              optionText: "It's got a fungal infection",
              isRight: false
            },
            {
              optionText: "It's too cold",
              isRight: false
            },
            {
              optionText: "It's been over-fertilized",
              isRight: true
            },
            {
              optionText: "It's not getting the right amount of water",
              isRight: false
            }
          ]
        },
        {
          questionText:
            "Native to tropical rainforests in South and Central America, this indoor plant is popular with beginners and office workers. What’s it commonly known as?",
          points: 1,
          options: [
            {
              optionText: "The flag of surrender",
              isRight: false
            },
            {
              optionText: "The bridal rose",
              isRight: false
            },
            {
              optionText: "The Amazonian tulip",
              isRight: false
            },
            {
              optionText: "The peace lily",
              isRight: true
            }
          ]
        },
        {
          questionText:
            "Which mistake do plant experts say probably accounts for more plant deaths than any other single issue?",
          points: 3,
          options: [
            {
              optionText: "A lack of fertilising",
              isRight: false
            },
            {
              optionText: "Incorrect watering",
              isRight: true
            },
            {
              optionText: "Too much air conditioning",
              isRight: false
            },
            {
              optionText: "They've been put in a pot the wrong size",
              isRight: false
            }
          ]
        },
        {
          questionText:
            "Your home has a bunch of different microclimates — and the survival of your indoor plants depend on them. When matching your plant to a microclimate, what are you looking out for?",
          points: 4,
          options: [
            {
              optionText: "Light, heat, shade and airflow",
              isRight: false
            },
            {
              optionText: "Heat, moisture, air humidity and airflow",
              isRight: false
            },
            {
              optionText: "Light, heat, air humidity and airflow",
              isRight: true
            },
            {
              optionText: "Air humidity, light, dryness and airflow",
              isRight: false
            }
          ]
        },
        {
          questionText:
            "Which of these plants should you keep away from pets and toddlers?",
          points: 5,
          options: [
            {
              optionText: "Asparagus fern",
              isRight: false
            },
            {
              optionText: "Cannabis",
              isRight: false
            },
            {
              optionText: "Aloe vera",
              isRight: false
            },
            {
              optionText: "All of the above",
              isRight: true
            }
          ]
        },
        {
          questionText:
            "Plants may not have mouths and lungs like we do, but they do need to breathe. What's the best way of helping them do that?",
          points: 6,
          options: [
            {
              optionText: "Let them go outside for a bit",
              isRight: false
            },
            {
              optionText:
                "Wipe the leaves and consider popping them in the shower",
              isRight: true
            },
            {
              optionText: "Make sure the soil is aerated regularly",
              isRight: false
            },
            {
              optionText: "All of the above",
              isRight: false
            }
          ]
        },
        {
          questionText:
            "If you have a palm plant in the lounge room and the roots are starting to grow out its pot's drainage holes. What do you need to do for the plant?",
          points: 3,
          options: [
            {
              optionText:
                "Let it live free in the wild. That's clearly an outside palm!",
              isRight: false
            },
            {
              optionText: "It's looking for soil and nutrients. Add more dirt!",
              isRight: false
            },
            {
              optionText:
                "It's clearly doing well. Ease up on the water and fertilising!",
              isRight: false
            },
            {
              optionText: "Get a bigger pot!",
              isRight: false
            }
          ]
        },
        {
          questionText:
            "You can grow lots of edible things on a balcony, patio or windowsill — from herbs to tomatoes and even garlic and onion. Which of the following statements isn't true?",
          points: 3,
          options: [
            {
              optionText: "Root vegetables can grow in pots",
              isRight: false
            },
            {
              optionText: "You probably won't need to fertilise as much",
              isRight: true
            },
            {
              optionText:
                "Light-coloured pots are better in sunnier spots than dark-coloured pots",
              isRight: false
            },
            {
              optionText: "Yields can be smaller from plants in pots",
              isRight: false
            }
          ]
        },
        {
          questionText:
            "How well do you know your indoor plant names? What are the common names of these indoor plants?",
          points: 5,
          options: [
            {
              optionText:
                "1. Lemon button fern/Lemon buttons; 2. Green hearts/Marbled hearts; 3. Amazon elephant's Ear; 4. Rainforest Guitar plant",
              isRight: false
            },
            {
              optionText:
                "1. Maidenhair fern; 2. Arrowhead plant; 3. Swiss cheese or Fruit salad plant; 4. Zanzibar gem or ZZ plant",
              isRight: false
            },
            {
              optionText:
                "1. Lemon button fern or Lemon buttons; 2. Arrowhead plant; 3. Amazon elephant's ear; 4. Zanzibar gem or ZZ plant",
              isRight: true
            },
            {
              optionText:
                "1. Lemon button fern or Lemon buttons; 2. Arrowhead plant; 3. Swiss cheese or Fruit salad plant; 4. Zanzibar gem or ZZ plant",
              isRight: false
            }
          ]
        }
      ]
    },
    {
      name: "Plant Diseases",
      image: GardeningDiseasesIcon,
      questions: [
        {
          questionText: "Which disease of plant is known as ring disease?",
          points: 5,
          options: [
            {
              optionText: "Citrus Canker",
              isRight: false
            },
            {
              optionText: "Black arm of cotton",
              isRight: false
            },
            {
              optionText: "Wilt of Potato",
              isRight: true
            },
            {
              optionText: "None of the above",
              isRight: false
            }
          ]
        },
        {
          questionText:
            "Name the disease of plant in which large yellow spot appears on the leaves?",
          points: 5,
          options: [
            {
              optionText: "Bacterial Blight",
              isRight: true
            },
            {
              optionText: "Bacterial Spot",
              isRight: false
            },
            {
              optionText: "Aphids",
              isRight: false
            },
            {
              optionText: "Botrytis",
              isRight: false
            }
          ]
        },
        {
          questionText: "Bunchy top of banana plant disease is caused due to",
          points: 5,
          options: [
            {
              optionText: "Bacteria",
              isRight: false
            },
            {
              optionText: "Fungus",
              isRight: false
            },
            {
              optionText: "Virus",
              isRight: true
            },
            {
              optionText: "None of the above",
              isRight: false
            }
          ]
        },
        {
          questionText:
            "Name a disease of plant in which dark to light brown rot forms around wounded plant tissue?",
          points: 5,
          options: [
            {
              optionText: "Gray Mold",
              isRight: true
            },
            {
              optionText: "Citrus Canker",
              isRight: false
            },
            {
              optionText: "Spider Mites",
              isRight: false
            },
            {
              optionText: "None of the above",
              isRight: false
            }
          ]
        },
        {
          questionText:
            "In which disease of plant white mildew appears typically on underside of leaves?",
          points: 5,
          options: [
            {
              optionText: "Cylindrocladium",
              isRight: false
            },
            {
              optionText: "Angular leaf Spot",
              isRight: false
            },
            {
              optionText: "Black arm of Cotton",
              isRight: false
            },
            {
              optionText: "Downy Mildew",
              isRight: true
            }
          ]
        },
        {
          questionText:
            "Bacterial blight of Rice disease of plant is caused due to which bacteria?",
          points: 5,
          options: [
            {
              optionText: "Pseudomonas bacteria",
              isRight: false
            },
            {
              optionText: "Xanthomonas oryzae bacteria",
              isRight: true
            },
            {
              optionText: "Xanthomonas citri bacteria",
              isRight: false
            },
            {
              optionText: "None of the above",
              isRight: false
            }
          ]
        },
        {
          questionText:
            "In which of the following diseases of plant chlorophyll of the leaves get destroyed and leaves get shrinked?",
          points: 5,
          options: [
            {
              optionText: "Citrus Canker",
              isRight: false
            },
            {
              optionText: "Tundu disease of wheat",
              isRight: false
            },
            {
              optionText: "Mosaic disease of tobacco",
              isRight: true
            },
            {
              optionText: "Rhizoctonia",
              isRight: false
            }
          ]
        },
        {
          questionText:
            "Name the disease of plant in which leaves, branches, fruits all are affected?",
          points: 5,
          options: [
            {
              optionText: "Spider Mites",
              isRight: false
            },
            {
              optionText: "Mealybugs",
              isRight: false
            },
            {
              optionText: "Aphids",
              isRight: false
            },
            {
              optionText: "Citrus Canker",
              isRight: true
            }
          ]
        },
        {
          questionText:
            " Name a disease of plant in which fine webbing occurs on undersides of the leaves?",
          points: 5,
          options: [
            {
              optionText: "Anthracnose",
              isRight: false
            },
            {
              optionText: "spider Mites",
              isRight: true
            },
            {
              optionText: "Mealybugs",
              isRight: false
            },
            {
              optionText: "Rhizoctonia",
              isRight: false
            }
          ]
        },
        {
          questionText:
            "In which disease of plant stem rot at soil line with brown to red lesions?",
          points: 5,
          options: [
            {
              optionText: "Angular leaf Spot",
              isRight: false
            },
            {
              optionText: "Bacterial Blight",
              isRight: false
            },
            {
              optionText: "Bacterial Spot",
              isRight: false
            },
            {
              optionText: "Rhizoctonia",
              isRight: true
            }
          ]
        }
      ]
    }
  ]
};


export const categoryArray: CategoryArray[] = [
  {
    name: "General Gardening",
    image: GeneralGardeningIcon,
    description:
      "Gardening is an ongoing journey of learning, often learning through trial and error. Are you ready to test your basic knowledge?"
  },
  {
    name: "Indoor Gardening",
    image: IndoorGardeningIcon,
    description:
      "Living among a rainforest of lush indoor plants can make a house feel like a home."
  },
  {
    name: "Plant Diseases",
    image: GardeningDiseasesIcon,
    description:
      "Plant diseases are caused due to fungus, virus, and bacteria. Some abiotic factors are also responsible for causing diseases in the plants."
  }
];

// export const categoryArray: CategoryArray[] = Array.from(
//   new Set(quizData.category.map(category =>{ name:category.name, image:category.image}
//     ))
// );
