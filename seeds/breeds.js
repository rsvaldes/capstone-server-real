
exports.seed = function(knex, Promise) {
  return knex('breeds').del()
    .then(function () {
      return knex('breeds').insert([
        {
          name: 'Affenpinscher',
          picture:'https://cdn.pixabay.com/photo/2016/06/06/13/21/dog-1439386_960_720.jpg',
          description:'Affenpinschers have a distinct appearance that some associate with terriers. They are different from terriers, however, in that they are actually part of the pinscher-schnauzer of group 2 in the FCI classification and so often get along with other dogs and pets. They are active, adventurous, curious, and stubborn, but they are also fun-loving and playful. The breed is confident, lively, affectionate towards family members and is also very protective of them. This loyal little dog enjoys being with its family. It needs consistent, firm training since some can be quite difficult to housebreak. This type of dog easily becomes bored, so training should be varied. The affenpinscher has a terrier-like personality.          Affenpinschers are somewhat territorial when it comes to their toys and food, so they are not recommended for homes with very small children. This dog is mostly quiet, but can become very excited if attacked or threatened, and shows no fear toward any aggressor.',
          lifespan:'11.4 years',
          size:'6.5-13.2 lbs & 9-12 in'
        },
        {
          name: 'Afghan Hound',
          picture:'https://cdn.pixabay.com/photo/2015/05/03/00/30/afghan-750640_960_720.jpg',
          description:'The temperament of the typical Afghan Hound can be aloof and dignified, but happy and clownish when it\'s playing. This breed, as is the case with many sighthounds, has a high prey drive and may not get along with small animals. The Afghan Hound can be a successful competitor in dog agility trials as well as an intuitive therapy dog and companion. Genomic studies have pointed to the Afghan Hound as one of the oldest of dog breeds. The breed has a reputation among some dog trainers of having a relatively slow obedience intelligence as defined by author Stanley Coren in The Intelligence of Dogs. Although seldom used today for hunting in Europe and America where they are popular, Afghan hounds are frequent participants in lure coursing events and are also popular in the sport of conformation showing.',
          lifespan:'12 Years',
          size:'44-60 lb & 24-29 in'
        },
        {
          name: 'Airedale Terrier',
          picture:'https://cdn.pixabay.com/photo/2016/12/01/13/26/airedale-1875288_960_720.jpg',
          description:'The Airedale, a breed with a hypoallergenic coat, can be used as a working dog and also as a hunting dog. Airedales exhibit some herding characteristics as well, and have a propensity to chase animals. They have no problem working with cattle and livestock. However, an Airedale that is not well trained will agitate and annoy the animals. The Airedale Terrier, like most terriers, has been bred to hunt independently. As a result, the dog is very intelligent, independent, strong-minded, stoic, and can sometimes be stubborn. If children and Airedale are both trained correctly, Airedales can be an excellent choice for a family dog. Airedales can do well with cats and other small animals, especially when they are raised with them.',
          lifespan:'11.5 Years',
          size:'42-55 lb & 23-24 in'
        },
        {
          name: 'Akita',
          picture:'https://cdn.pixabay.com/photo/2017/07/24/15/07/akita-2534986_960_720.jpg',
          description:'The Akita is generally seen as territorial about its property, and can be reserved with strangers. It is sometimes described as feline in its actions; it is not unusual for an Akita to clean its face after eating, to preen its kennel mate, and to be fastidious in the house. They are known to be intolerant of other dogs of the same sex, as stated in the AKC breed standard. Since it is a large, powerful dog, the Akita is not considered a breed for a first time dog owner. The breed has been targeted by some countries\' breed-specific legislation as a dangerous dog. The Akita is a large, strong, independent and dominant dog.A dog with the correct Akita temperament should be accepting of non-threatening strangers, yet protective of their family when faced with a threatening situation. As a breed they should be good with children; it is said that the breed has an affinity for children. Not all Akitas will necessarily have the same temperament. Akitas tend to take a socially dominant role with other dogs, and thus caution must be used in situations when Akitas are likely to be around other dogs, especially unfamiliar ones. In particular, Akitas tend to be less tolerant of dogs of the same sex.For this reason, Akitas, unless highly socialized, are not generally well-suited for off-leash dog parks. The Akita is said to be careful, courageous, fearless, and intelligent. Sometimes spontaneous, it needs a confident, consistent handler, without which the dog will be very wilful and may become very aggressive to other dogs and animals.',
          lifespan:'10-15 Years',
          size:'70-130 lb & 24-28 in'
        },
        {
          name: 'Alaskan Malamute',
          picture:'https://cdn.pixabay.com/photo/2015/10/20/09/17/dog-997448_960_720.jpg',
          description:'Malamutes, like other Northern and sled dog breeds, can have a high prey drive, due to their origins and breeding. This may mean in some cases they will chase smaller animals, including other canines, as well as rabbits, squirrels, and cats; however, this has been difficult to document in detail beyond anecdotal, observational data and many Malamute owners have observed varying levels of prey drive between individual dogs. While Malamutes are, as a general rule, particularly amicable around people and can be taught to tolerate smaller pets, it is necessary to be mindful of them around smaller animals and small children. Malamutes are very fond of people, a trait that makes them particularly sought-after family dogs, but unreliable watchdogs. Malamutes are nimble around furniture and smaller items, making them ideal house dogs, provided they get plenty of time outdoors meeting their considerable exercise requirements. If they are year-round outdoor dogs, letting them play in a baby pool filled with cold water in summer keeps them cool. In the winter, they love snow.',
          lifespan:'10.7 Years',
          size:'75-85 lb & 23-25 in'
        },
        {
          name: 'American English Coonhound',
          picture:'https://get.pxhere.com/photo/outdoor-dog-animal-pet-model-mammal-hound-weimaraner-posing-hunting-dog-holland-dogs-fun-happy-animals-vertebrate-series-greyhound-harrier-dog-breed-pointer-dog-like-mammal-carnivoran-american-foxhound-english-foxhound-french-spaniel-german-shorthaired-pointer-braque-d-auvergne-old-danish-pointer-pachon-navarro-braque-francais-english-coonhound-bracco-italiano-1113793.jpg',
          description:'English Coonhounds tend to be quiet in the house, and require regular exercise to keep in prime condition. English Coonhounds love to nest and usually make good house pets. They have a high prey drive, and will go after small animals unless trained otherwise. Because of this, they are not usually recommended for households with small pets unless they have been raised around small animals. They are generally good with children and tend to be very loyal dogs that feel the need to please their owners. Like most puppies they can be quite inquisitive and destructive therefore needed training early on is highly recommended. Like all coonhounds, English are generally good natured and very sociable dogs. Skittishness or aggression is considered a defect according to UKC breed standards. They are strong willed, if not stubborn, and require more patience in training than other breeds. Young dogs are usually extremely active and playful and desirous of human attention in addition to requiring plenty of exercise. English Coonhounds are incessant nesters and should be avoided by people who do not wish to have dogs on couches and beds. They make excellent family pets as they have been bred for hunting purposes to coexist amiably within a pack. English Coonhounds also make adequate watch dogs as they possess extremely loud hound mouths characterized by melodious, drawn out bawls and short, explosive chops.',
          lifespan:'11.5 Years',
          size:'40-65 lb & 21-27 in'
        },
        {
          name: 'American Eskimo Dog',
          picture:'https://cdn.pixabay.com/photo/2015/04/27/14/11/american-eskimo-dog-742010_960_720.jpg',
          description:'The American Eskimo is an affectionate, loving dog. The breed is easy to train and they are excellent with children because of the dog\'s high intelligence and its willingness to please. American Eskimos often rank among the top scorers in obedience trials. They like to work. Naturally wary of strangers, once properly introduced, they become friends. American Eskimos are highly intelligent, inquisitive and love to investigate. Without enough mental and physical exercise, they can become hyperactive and high-strung, spinning in circles. They are not always recommended for first-time dog owners.',
          lifespan:'12-15 Years',
          size:'18-35 lb & 15-20 in'
        },
        {
          name:'Boston Terrier',
          picture: 'https://cdn.pixabay.com/photo/2015/02/12/17/52/canine-634020_960_720.jpg',
          description: 'Boston is a gentle breed that typically has a strong, happy-go-lucky, and friendly personality with a merry sense of humour. Bostons are generally eager to please their owner and can be easily trained. They can be very protective of their owners, which may result in aggressive and territorial behavior toward other pets and strangers. The breed requires only a minimal amount of grooming. Both females and males are generally quiet and bark only when necessary,though early training in this regard is essential. Their usually sensible attitude towards barking makes them excellent choices for apartment dwellers. They enjoy being around people, get along well with children, the elderly, other canines, and non-canine pets, if properly socialized.',
          lifespan: '11-13 years',
          size: '15–25 lb & 9–15 in'
        },
        {
          name:'German Shepherd',
          picture: 'https://cdn.pixabay.com/photo/2013/12/22/10/57/german-shepherd-232393_960_720.jpg',
          description: 'German Shepherds are moderately active dogs and are described in breed standards as self-assured. The breed is marked by a willingness to learn and an eagerness to have a purpose. They are curious, which makes them excellent guard dogs and suitable for search missions. They can become over-protective of their family and territory, especially if not socialized correctly. They are not inclined to become immediate friends with strangers. German Shepherds are highly intelligent and obedient, as well as being protective of their owners.',
          lifespan: '9-13 Years',
          size: '49-88 lb & 22-26 in'
        },
        {
          name:'Boxer',
          picture: 'https://cdn.pixabay.com/photo/2016/09/13/09/13/animals-1666775_960_720.jpg',
          description: 'Boxers are a bright, energetic and playful breed and tend to be very good with children. They are patient and spirited with children but also protective, making them a popular choice for families. They are active, strong dogs and require adequate exercise to prevent boredom-associated behaviors such as chewing, digging, or licking. Boxers have earned a slight reputation of being "headstrong," which can be related to inappropriate obedience training. Owing to their intelligence and working breed characteristics, training based on corrections often has limited usefulness. Boxers, like other animals, typically respond better to positive reinforcement techniques such as clicker training, an approach based on operant conditioning and behaviorism, which offers the dog an opportunity to think independently and to problem-solve.',
          lifespan: '9-15 Years',
          size: '55-71 lb & 21-25 in'
        },
        {
          name:'English Bulldog',
          picture: 'https://cdn.pixabay.com/photo/2017/08/25/21/52/english-bulldog-2681531_960_720.jpg',
          description: 'According to the American Kennel Club (AKC), a Bulldog\'s disposition should be "equable and kind, resolute, and courageous (not vicious or aggressive), and demeanor should be pacific and dignified. These attributes should be countenanced by the expression and behavior".Breeders have worked to reduce/remove aggression from these dogs. Most have a friendly, patient nature. Bulldogs are recognized as excellent family pets because of their tendency to form strong bonds with children. Generally, Bulldogs are known for getting along well with children, other dogs, and pets.',
          lifespan: '10-11 Years',
          size: '40-55 lb & 12-16 in'
        },
        {
          name:'Coton de Tulear',
          picture: 'https://cdn.pixabay.com/photo/2017/06/19/02/33/coton-de-tulear-2417968_960_720.jpg',
          description: 'The Coton is a playful, affectionate, intelligent breed. Although generally quiet, it can become very vocal - grunting, barking, and making other noises when having fun. Cotons are known to have a habit of jumping up and walking on their hind legs to please people. Most Cotons love meeting new people and are very curious in new situations. Cotons are easy to train as they are very eager to please. Cotons love to swim, run, and play. They adapt well to any kind of living environment. A common trait of the Coton de Tulear behavior is to come alive in the evening.',
          lifespan: '14-16 Years',
          size: '7.7-13 lb & 9-12 in'
        },

      ]);
    })
    .then(function(){
      return knex.raw("SELECT setval('breeds_id_seq', (SELECT MAX(id) FROM breeds))");
    });
};
