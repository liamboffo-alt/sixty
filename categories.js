/*
 * Sixty — category data.
 *
 * Categories rotate in this order, one per day, starting on launch day (#1).
 * Each answer is one line: "Display Name|alias|alias".
 * Matching ignores case, accents, punctuation, spaces and a leading "The/A/An",
 * so aliases only need to cover genuinely different names (e.g. "Holland").
 * If two answers share an alias (e.g. "Adams"), typing it twice gets both.
 */
window.SIXTY_CATEGORIES = [
  {
    id: 'us-states', title: 'US States', emoji: '🗽', tag: 'Geography',
    blurb: 'All 50 of them. How many can you name in a minute?',
    answers: `
Alabama
Alaska
Arizona
Arkansas
California
Colorado
Connecticut
Delaware
Florida
Georgia
Hawaii
Idaho
Illinois
Indiana
Iowa
Kansas
Kentucky
Louisiana
Maine
Maryland
Massachusetts
Michigan
Minnesota
Mississippi
Missouri
Montana
Nebraska
Nevada
New Hampshire
New Jersey
New Mexico
New York
North Carolina
North Dakota
Ohio
Oklahoma
Oregon
Pennsylvania
Rhode Island
South Carolina
South Dakota
Tennessee
Texas
Utah
Vermont
Virginia
Washington|Washington State
West Virginia
Wisconsin
Wyoming`
  },
  {
    id: 'nfl-teams', title: 'NFL Teams', emoji: '🏈', tag: 'Sports',
    blurb: 'All 32 franchises. Nickname or city both count.',
    answers: `
Arizona Cardinals|Cardinals|Arizona
Atlanta Falcons|Falcons|Atlanta
Baltimore Ravens|Ravens|Baltimore
Buffalo Bills|Bills|Buffalo
Carolina Panthers|Panthers|Carolina
Chicago Bears|Bears|Chicago
Cincinnati Bengals|Bengals|Cincinnati
Cleveland Browns|Browns|Cleveland
Dallas Cowboys|Cowboys|Dallas
Denver Broncos|Broncos|Denver
Detroit Lions|Lions|Detroit
Green Bay Packers|Packers|Green Bay
Houston Texans|Texans|Houston
Indianapolis Colts|Colts|Indianapolis
Jacksonville Jaguars|Jaguars|Jags|Jacksonville
Kansas City Chiefs|Chiefs|Kansas City
Las Vegas Raiders|Raiders|Las Vegas
Los Angeles Chargers|Chargers|LA Chargers
Los Angeles Rams|Rams|LA Rams
Miami Dolphins|Dolphins|Miami
Minnesota Vikings|Vikings|Minnesota
New England Patriots|Patriots|Pats|New England
New Orleans Saints|Saints|New Orleans
New York Giants|Giants|NY Giants
New York Jets|Jets|NY Jets
Philadelphia Eagles|Eagles|Philadelphia|Philly
Pittsburgh Steelers|Steelers|Pittsburgh
San Francisco 49ers|49ers|Niners|San Francisco
Seattle Seahawks|Seahawks|Seattle
Tampa Bay Buccaneers|Buccaneers|Bucs|Tampa Bay|Tampa
Tennessee Titans|Titans|Tennessee
Washington Commanders|Commanders|Washington`
  },
  {
    id: 'pixar-films', title: 'Pixar Feature Films', emoji: '🎬', tag: 'Pop Culture',
    blurb: 'Every Pixar feature from Toy Story (1995) to today.',
    answers: `
Toy Story
A Bug's Life
Toy Story 2|Toy Story Two
Monsters, Inc.|Monsters Incorporated
Finding Nemo
The Incredibles
Cars
Ratatouille
WALL-E
Up
Toy Story 3|Toy Story Three
Cars 2|Cars Two
Brave
Monsters University
Inside Out
The Good Dinosaur
Finding Dory
Cars 3|Cars Three
Coco
Incredibles 2|The Incredibles 2|Incredibles Two
Toy Story 4|Toy Story Four
Onward
Soul
Luca
Turning Red
Lightyear
Elemental
Inside Out 2|Inside Out Two
Elio
Hoppers
Toy Story 5|Toy Story Five`
  },
  {
    id: 'taylor-swift-albums', title: 'Taylor Swift Studio Albums', emoji: '🎤', tag: 'Music',
    blurb: 'Original studio albums (Taylor’s Versions count too). Can you go 12 for 12?',
    answers: `
Taylor Swift|Debut|Self Titled|Self-Titled
Fearless|Fearless Taylors Version
Speak Now|Speak Now Taylors Version
Red|Red Taylors Version
1989|1989 Taylors Version|Nineteen Eighty Nine
Reputation|Rep
Lover
Folklore
Evermore
Midnights
The Tortured Poets Department|TTPD|Tortured Poets
The Life of a Showgirl|Life of a Showgirl|Showgirl`
  },
  {
    id: 'elements', title: 'Chemical Elements', emoji: '⚗️', tag: 'Science',
    blurb: '118 on the periodic table. Full names only, no symbols.',
    answers: `
Hydrogen
Helium
Lithium
Beryllium
Boron
Carbon
Nitrogen
Oxygen
Fluorine
Neon
Sodium
Magnesium
Aluminium|Aluminum
Silicon
Phosphorus
Sulfur|Sulphur
Chlorine
Argon
Potassium
Calcium
Scandium
Titanium
Vanadium
Chromium
Manganese
Iron
Cobalt
Nickel
Copper
Zinc
Gallium
Germanium
Arsenic
Selenium
Bromine
Krypton
Rubidium
Strontium
Yttrium
Zirconium
Niobium
Molybdenum
Technetium
Ruthenium
Rhodium
Palladium
Silver
Cadmium
Indium
Tin
Antimony
Tellurium
Iodine
Xenon
Caesium|Cesium
Barium
Lanthanum
Cerium
Praseodymium
Neodymium
Promethium
Samarium
Europium
Gadolinium
Terbium
Dysprosium
Holmium
Erbium
Thulium
Ytterbium
Lutetium
Hafnium
Tantalum
Tungsten
Rhenium
Osmium
Iridium
Platinum
Gold
Mercury
Thallium
Lead
Bismuth
Polonium
Astatine
Radon
Francium
Radium
Actinium
Thorium
Protactinium
Uranium
Neptunium
Plutonium
Americium
Curium
Berkelium
Californium
Einsteinium
Fermium
Mendelevium
Nobelium
Lawrencium
Rutherfordium
Dubnium
Seaborgium
Bohrium
Hassium
Meitnerium
Darmstadtium
Roentgenium
Copernicium
Nihonium
Flerovium
Moscovium
Livermorium
Tennessine
Oganesson`
  },
  {
    id: 'europe-countries', title: 'Countries of Europe', emoji: '🏰', tag: 'Geography',
    blurb: 'Sovereign states in Europe, including Kosovo and the microstates. (Turkey and the Caucasus aren’t counted.)',
    answers: `
Albania
Andorra
Austria
Belarus
Belgium
Bosnia and Herzegovina|Bosnia|Bosnia Herzegovina
Bulgaria
Croatia
Cyprus
Czechia|Czech Republic
Denmark
Estonia
Finland
France
Germany
Greece
Hungary
Iceland
Ireland|Republic of Ireland|Eire
Italy
Kosovo
Latvia
Liechtenstein
Lithuania
Luxembourg
Malta
Moldova
Monaco
Montenegro
Netherlands|Holland
North Macedonia|Macedonia
Norway
Poland
Portugal
Romania
Russia
San Marino
Serbia
Slovakia
Slovenia
Spain
Sweden
Switzerland
Ukraine
United Kingdom|UK|Great Britain|Britain|England
Vatican City|Vatican|Holy See`
  },
  {
    id: 'nba-teams', title: 'NBA Teams', emoji: '🏀', tag: 'Sports',
    blurb: 'All 30 teams. Nickname or city both count.',
    answers: `
Atlanta Hawks|Hawks|Atlanta
Boston Celtics|Celtics|Boston
Brooklyn Nets|Nets|Brooklyn
Charlotte Hornets|Hornets|Charlotte
Chicago Bulls|Bulls|Chicago
Cleveland Cavaliers|Cavaliers|Cavs|Cleveland
Dallas Mavericks|Mavericks|Mavs|Dallas
Denver Nuggets|Nuggets|Denver
Detroit Pistons|Pistons|Detroit
Golden State Warriors|Warriors|Golden State|Dubs
Houston Rockets|Rockets|Houston
Indiana Pacers|Pacers|Indiana
Los Angeles Clippers|Clippers|LA Clippers
Los Angeles Lakers|Lakers|LA Lakers
Memphis Grizzlies|Grizzlies|Grizz|Memphis
Miami Heat|Heat|Miami
Milwaukee Bucks|Bucks|Milwaukee
Minnesota Timberwolves|Timberwolves|Wolves|Minnesota
New Orleans Pelicans|Pelicans|Pels|New Orleans
New York Knicks|Knicks|New York|NY Knicks
Oklahoma City Thunder|Thunder|OKC|Oklahoma City
Orlando Magic|Magic|Orlando
Philadelphia 76ers|76ers|Sixers|Philadelphia|Philly
Phoenix Suns|Suns|Phoenix
Portland Trail Blazers|Trail Blazers|Blazers|Portland
Sacramento Kings|Kings|Sacramento
San Antonio Spurs|Spurs|San Antonio
Toronto Raptors|Raptors|Toronto
Utah Jazz|Jazz|Utah
Washington Wizards|Wizards|Washington`
  },
  {
    id: 'pokemon-gen1', title: 'Original 151 Pokémon', emoji: '⚡', tag: 'Pop Culture',
    blurb: 'Generation 1, from Bulbasaur to Mew. Gotta name ’em all.',
    answers: `
Bulbasaur
Ivysaur
Venusaur
Charmander
Charmeleon
Charizard
Squirtle
Wartortle
Blastoise
Caterpie
Metapod
Butterfree
Weedle
Kakuna
Beedrill
Pidgey
Pidgeotto
Pidgeot
Rattata
Raticate
Spearow
Fearow
Ekans
Arbok
Pikachu
Raichu
Sandshrew
Sandslash
Nidoran ♀|Nidoran|Nidoran F|Nidoran Female
Nidorina
Nidoqueen
Nidoran ♂|Nidoran|Nidoran M|Nidoran Male
Nidorino
Nidoking
Clefairy
Clefable
Vulpix
Ninetales
Jigglypuff
Wigglytuff
Zubat
Golbat
Oddish
Gloom
Vileplume
Paras
Parasect
Venonat
Venomoth
Diglett
Dugtrio
Meowth
Persian
Psyduck
Golduck
Mankey
Primeape
Growlithe
Arcanine
Poliwag
Poliwhirl
Poliwrath
Abra
Kadabra
Alakazam
Machop
Machoke
Machamp
Bellsprout
Weepinbell
Victreebel
Tentacool
Tentacruel
Geodude
Graveler
Golem
Ponyta
Rapidash
Slowpoke
Slowbro
Magnemite
Magneton
Farfetch'd
Doduo
Dodrio
Seel
Dewgong
Grimer
Muk
Shellder
Cloyster
Gastly
Haunter
Gengar
Onix
Drowzee
Hypno
Krabby
Kingler
Voltorb
Electrode
Exeggcute
Exeggutor
Cubone
Marowak
Hitmonlee
Hitmonchan
Lickitung
Koffing
Weezing
Rhyhorn
Rhydon
Chansey
Tangela
Kangaskhan
Horsea
Seadra
Goldeen
Seaking
Staryu
Starmie
Mr. Mime|Mister Mime
Scyther
Jynx
Electabuzz
Magmar
Pinsir
Tauros
Magikarp
Gyarados
Lapras
Ditto
Eevee
Vaporeon
Jolteon
Flareon
Porygon
Omanyte
Omastar
Kabuto
Kabutops
Aerodactyl
Snorlax
Articuno
Zapdos
Moltres
Dratini
Dragonair
Dragonite
Mewtwo
Mew`
  },
  {
    id: 'beatles-songs', title: 'Beatles Songs', emoji: '🎸', tag: 'Music',
    blurb: 'Over 100 of the Fab Four’s best-known songs are in play.',
    answers: `
Hey Jude
Let It Be
Yesterday
Come Together
Something
Here Comes the Sun
Help!
A Hard Day's Night
I Want to Hold Your Hand
She Loves You
Love Me Do
Please Please Me
Twist and Shout
All You Need Is Love
Yellow Submarine
Eleanor Rigby
Penny Lane
Strawberry Fields Forever|Strawberry Fields
Lucy in the Sky with Diamonds
With a Little Help from My Friends
Sgt. Pepper's Lonely Hearts Club Band|Sgt Pepper|Sergeant Pepper's Lonely Hearts Club Band
A Day in the Life
Get Back
The Long and Winding Road
Across the Universe
Blackbird
While My Guitar Gently Weeps
Ob-La-Di, Ob-La-Da|Obladi Oblada
Back in the U.S.S.R.|Back in the USSR
Helter Skelter
Revolution
Paperback Writer
Day Tripper
We Can Work It Out
Ticket to Ride
Eight Days a Week
Can't Buy Me Love
I Feel Fine
Michelle
Norwegian Wood
In My Life
Nowhere Man
Drive My Car
Girl
Taxman
Here, There and Everywhere
Good Day Sunshine
Tomorrow Never Knows
Got to Get You into My Life
And I Love Her
If I Fell
All My Loving
I Saw Her Standing There
From Me to You
Octopus's Garden
Maxwell's Silver Hammer
I Want You (She's So Heavy)|I Want You
Golden Slumbers
Carry That Weight
The End
Because
Oh! Darling
Don't Let Me Down
The Ballad of John and Yoko
Lady Madonna
Hello, Goodbye
I Am the Walrus
Magical Mystery Tour
The Fool on the Hill
Fixing a Hole
Getting Better
She's Leaving Home
When I'm Sixty-Four|When Im 64
Lovely Rita
Being for the Benefit of Mr. Kite!|Mr Kite
Within You Without You
Dear Prudence
Happiness Is a Warm Gun
Julia
Rocky Raccoon
Birthday
Mother Nature's Son
Hey Bulldog
I'm Only Sleeping
Rain
You've Got to Hide Your Love Away
I've Just Seen a Face
Act Naturally
Two of Us
Dig a Pony
I've Got a Feeling
Free as a Bird
Now and Then
Old Brown Shoe
Martha My Dear
Glass Onion
Savoy Truffle
Piggies
Sun King
Mean Mr. Mustard
Polythene Pam
She Came In Through the Bathroom Window
Things We Said Today
No Reply
I'll Follow the Sun
Run for Your Life
Think for Yourself
The Word
Doctor Robert
For No One
She Said She Said
And Your Bird Can Sing
Baby You're a Rich Man
I Should Have Known Better
Tell Me Why
Words of Love
Rock and Roll Music
Money (That's What I Want)|Money
Ask Me Why
P.S. I Love You|PS I Love You`
  },
  {
    id: 'dog-breeds', title: 'Dog Breeds', emoji: '🐕', tag: 'Animals',
    blurb: 'About 90 popular breeds (plus the famous doodles) are in play.',
    answers: `
Labrador Retriever|Labrador|Lab
Golden Retriever|Golden
German Shepherd|Alsatian
French Bulldog|Frenchie
Bulldog|English Bulldog|British Bulldog
Poodle|Standard Poodle|Toy Poodle
Beagle
Rottweiler|Rottie
Dachshund|Wiener Dog|Sausage Dog
Yorkshire Terrier|Yorkie
Boxer
Siberian Husky|Husky
Corgi|Pembroke Welsh Corgi|Welsh Corgi
Great Dane
Doberman|Doberman Pinscher|Dobermann
Shih Tzu
Chihuahua
Pug
Border Collie
Australian Shepherd|Aussie
Cavalier King Charles Spaniel|Cavalier|King Charles Spaniel
Cocker Spaniel
Springer Spaniel|English Springer Spaniel
Bernese Mountain Dog|Bernese
Pomeranian
Boston Terrier
Havanese
Shetland Sheepdog|Sheltie
Maltese
Bichon Frise|Bichon
Schnauzer|Miniature Schnauzer
Basset Hound
Bloodhound
Greyhound
Whippet
Italian Greyhound
Weimaraner
Vizsla
German Shorthaired Pointer|Pointer
Dalmatian
Saint Bernard|St Bernard
Newfoundland|Newfie
Mastiff|English Mastiff
Bullmastiff
Cane Corso
Akita
Shiba Inu|Shiba
Chow Chow|Chow
Shar Pei
Samoyed
Alaskan Malamute|Malamute
Collie|Rough Collie
Old English Sheepdog
Bull Terrier
Pit Bull|Pitbull|American Pit Bull Terrier
Staffordshire Bull Terrier|Staffy|Staffie
Jack Russell Terrier|Jack Russell
West Highland Terrier|Westie|West Highland White Terrier
Scottish Terrier|Scottie
Cairn Terrier
Airedale Terrier|Airedale
Wheaten Terrier|Soft Coated Wheaten Terrier
Irish Setter
English Setter
Irish Wolfhound
Afghan Hound
Borzoi
Saluki
Basenji
Rhodesian Ridgeback
Belgian Malinois|Malinois
Papillon
Pekingese
Lhasa Apso
Cockapoo
Labradoodle
Goldendoodle
Chinese Crested
Xoloitzcuintli|Xolo
Leonberger
Great Pyrenees
Portuguese Water Dog
Brittany|Brittany Spaniel
Keeshond
Schipperke
Australian Cattle Dog|Blue Heeler|Heeler
Anatolian Shepherd
Coonhound
Beauceron
Bedlington Terrier
Boykin Spaniel
Chesapeake Bay Retriever
Flat-Coated Retriever
Maltipoo
Puggle`
  },
  {
    id: 'africa-countries', title: 'Countries of Africa', emoji: '🌍', tag: 'Geography',
    blurb: 'All 54 sovereign African nations. This one is tough.',
    answers: `
Algeria
Angola
Benin
Botswana
Burkina Faso
Burundi
Cabo Verde|Cape Verde
Cameroon
Central African Republic|CAR
Chad
Comoros
DR Congo|Democratic Republic of the Congo|DRC|Congo Kinshasa|Zaire
Republic of the Congo|Congo|Congo Brazzaville
Djibouti
Egypt
Equatorial Guinea
Eritrea
Eswatini|Swaziland
Ethiopia
Gabon
Gambia
Ghana
Guinea
Guinea-Bissau
Ivory Coast|Cote d'Ivoire
Kenya
Lesotho
Liberia
Libya
Madagascar
Malawi
Mali
Mauritania
Mauritius
Morocco
Mozambique
Namibia
Niger
Nigeria
Rwanda
Sao Tome and Principe|Sao Tome
Senegal
Seychelles
Sierra Leone
Somalia
South Africa
South Sudan
Sudan
Tanzania
Togo
Tunisia
Uganda
Zambia
Zimbabwe`
  },
  {
    id: 'mlb-teams', title: 'MLB Teams', emoji: '⚾', tag: 'Sports',
    blurb: 'All 30 clubs. Nickname or city both count.',
    answers: `
Arizona Diamondbacks|Diamondbacks|D-backs|Arizona
Athletics|A's|Oakland Athletics|Oakland A's|Oakland|Sacramento
Atlanta Braves|Braves|Atlanta
Baltimore Orioles|Orioles|O's|Baltimore
Boston Red Sox|Red Sox|Boston
Chicago Cubs|Cubs
Chicago White Sox|White Sox
Cincinnati Reds|Reds|Cincinnati
Cleveland Guardians|Guardians|Cleveland
Colorado Rockies|Rockies|Colorado
Detroit Tigers|Tigers|Detroit
Houston Astros|Astros|Houston
Kansas City Royals|Royals|Kansas City
Los Angeles Angels|Angels|LA Angels|Anaheim
Los Angeles Dodgers|Dodgers|LA Dodgers
Miami Marlins|Marlins|Miami
Milwaukee Brewers|Brewers|Milwaukee
Minnesota Twins|Twins|Minnesota
New York Mets|Mets
New York Yankees|Yankees|Yanks
Philadelphia Phillies|Phillies|Philadelphia
Pittsburgh Pirates|Pirates|Pittsburgh
San Diego Padres|Padres|San Diego
San Francisco Giants|Giants|San Francisco
Seattle Mariners|Mariners|Seattle
St. Louis Cardinals|Cardinals|St Louis|Saint Louis
Tampa Bay Rays|Rays|Tampa Bay
Texas Rangers|Rangers|Texas
Toronto Blue Jays|Blue Jays|Jays|Toronto
Washington Nationals|Nationals|Nats|Washington`
  },
  {
    id: 'simpsons-characters', title: 'Simpsons Characters', emoji: '🍩', tag: 'Pop Culture',
    blurb: 'About 75 Springfield residents are in play.',
    answers: `
Homer Simpson|Homer
Marge Simpson|Marge
Bart Simpson|Bart
Lisa Simpson|Lisa
Maggie Simpson|Maggie
Abe Simpson|Grampa Simpson|Grandpa Simpson|Abe|Grampa|Grandpa
Mona Simpson|Mona
Ned Flanders|Ned|Flanders
Maude Flanders|Maude
Rod Flanders|Rod
Todd Flanders|Todd
Mr. Burns|Montgomery Burns|Burns
Waylon Smithers|Smithers
Moe Szyslak|Moe
Barney Gumble|Barney
Lenny Leonard|Lenny
Carl Carlson|Carl
Apu Nahasapeemapetilon|Apu
Krusty the Clown|Krusty
Sideshow Bob
Sideshow Mel
Milhouse Van Houten|Milhouse
Nelson Muntz|Nelson
Ralph Wiggum|Ralph
Chief Wiggum|Clancy Wiggum|Wiggum
Principal Skinner|Seymour Skinner|Skinner
Edna Krabappel|Mrs Krabappel|Krabappel
Groundskeeper Willie|Willie
Otto Mann|Otto
Martin Prince|Martin
Comic Book Guy
Patty Bouvier|Patty
Selma Bouvier|Selma
Dr. Hibbert|Julius Hibbert|Hibbert
Dr. Nick|Dr Nick Riviera
Reverend Lovejoy|Lovejoy
Helen Lovejoy|Helen
Mayor Quimby|Quimby
Kent Brockman
Troy McClure
Lionel Hutz
Fat Tony
Snake
Jimbo Jones|Jimbo
Kearney
Dolph
Professor Frink|Frink
Cletus
Hans Moleman|Moleman
Disco Stu
Gil
Duffman
Bumblebee Man
Lunchlady Doris|Doris
Superintendent Chalmers|Chalmers
Itchy
Scratchy
Santa's Little Helper
Snowball
Rainier Wolfcastle|McBain
Miss Hoover|Ms Hoover
Agnes Skinner|Agnes
Jasper
Crazy Cat Lady|Cat Lady
Sherri
Terri
Uter
Wendell
Lou
Artie Ziff
Herb Powell|Uncle Herb
Kang
Kodos
Blinky
Hank Scorpio
Marvin Monroe
Database
Luann Van Houten
Kirk Van Houten`
  },
  {
    id: 'orchestra-instruments', title: 'Orchestra Instruments', emoji: '🎻', tag: 'Music',
    blurb: 'Instruments you would find in a symphony orchestra.',
    answers: `
Violin
Viola
Cello|Violoncello
Double Bass|Bass|Contrabass|Upright Bass|String Bass
Harp
Flute
Piccolo
Oboe
English Horn|Cor Anglais
Clarinet
Bass Clarinet
Bassoon
Contrabassoon|Double Bassoon
French Horn|Horn
Trumpet
Trombone
Bass Trombone
Tuba
Timpani|Kettle Drum|Kettledrums
Snare Drum|Snare
Bass Drum
Cymbal|Cymbals|Crash Cymbals
Triangle
Xylophone
Glockenspiel
Marimba
Vibraphone
Tubular Bells|Chimes
Tambourine
Castanets
Gong|Tam-tam
Wood Block
Celesta|Celeste
Piano
Organ|Pipe Organ
Harpsichord
Saxophone|Sax
Cornet`
  },
  {
    id: 'us-presidents', title: 'US Presidents', emoji: '🏛️', tag: 'History',
    blurb: '45 people have been president. Last names work, and for a shared name (Adams, Bush…) type it twice.',
    answers: `
George Washington|Washington
John Adams|Adams
Thomas Jefferson|Jefferson
James Madison|Madison
James Monroe|Monroe
John Quincy Adams|Adams|JQA
Andrew Jackson|Jackson
Martin Van Buren|Van Buren
William Henry Harrison|Harrison
John Tyler|Tyler
James K. Polk|Polk|James Polk
Zachary Taylor|Taylor
Millard Fillmore|Fillmore
Franklin Pierce|Pierce
James Buchanan|Buchanan
Abraham Lincoln|Lincoln|Abe Lincoln
Andrew Johnson|Johnson
Ulysses S. Grant|Grant|Ulysses Grant
Rutherford B. Hayes|Hayes|Rutherford Hayes
James Garfield|Garfield
Chester Arthur|Arthur|Chester A Arthur
Grover Cleveland|Cleveland
Benjamin Harrison|Harrison
William McKinley|McKinley
Theodore Roosevelt|Roosevelt|Teddy Roosevelt|TR
William Howard Taft|Taft
Woodrow Wilson|Wilson
Warren G. Harding|Harding|Warren Harding
Calvin Coolidge|Coolidge
Herbert Hoover|Hoover
Franklin D. Roosevelt|Roosevelt|FDR|Franklin Roosevelt
Harry Truman|Truman|Harry S Truman
Dwight Eisenhower|Eisenhower|Ike|Dwight D Eisenhower
John F. Kennedy|Kennedy|JFK|John Kennedy
Lyndon B. Johnson|Johnson|LBJ|Lyndon Johnson
Richard Nixon|Nixon
Gerald Ford|Ford
Jimmy Carter|Carter
Ronald Reagan|Reagan
George H. W. Bush|Bush|George Bush|Bush Sr
Bill Clinton|Clinton
George W. Bush|Bush|Bush Jr|Dubya
Barack Obama|Obama
Donald Trump|Trump
Joe Biden|Biden`
  },
  {
    id: 'us-state-capitals', title: 'US State Capitals', emoji: '🗺️', tag: 'Geography',
    blurb: 'Fifty capitals. Harder than you think.',
    answers: `
Montgomery
Juneau
Phoenix
Little Rock
Sacramento
Denver
Hartford
Dover
Tallahassee
Atlanta
Honolulu
Boise
Springfield
Indianapolis
Des Moines
Topeka
Frankfort
Baton Rouge
Augusta
Annapolis
Boston
Lansing
Saint Paul|St Paul
Jackson
Jefferson City
Helena
Lincoln
Carson City
Concord
Trenton
Santa Fe
Albany
Raleigh
Bismarck
Columbus
Oklahoma City
Salem
Harrisburg
Providence
Columbia
Pierre
Nashville
Austin
Salt Lake City
Montpelier
Richmond
Olympia
Charleston
Madison
Cheyenne`
  },
  {
    id: 'nhl-teams', title: 'NHL Teams', emoji: '🏒', tag: 'Sports',
    blurb: 'All 32 teams. Nickname or city both count.',
    answers: `
Anaheim Ducks|Ducks|Anaheim
Boston Bruins|Bruins|Boston
Buffalo Sabres|Sabres|Buffalo
Calgary Flames|Flames|Calgary
Carolina Hurricanes|Hurricanes|Canes|Carolina
Chicago Blackhawks|Blackhawks|Chicago
Colorado Avalanche|Avalanche|Avs|Colorado
Columbus Blue Jackets|Blue Jackets|Columbus
Dallas Stars|Stars|Dallas
Detroit Red Wings|Red Wings|Detroit
Edmonton Oilers|Oilers|Edmonton
Florida Panthers|Panthers|Florida
Los Angeles Kings|Kings|LA Kings
Minnesota Wild|Wild|Minnesota
Montreal Canadiens|Canadiens|Habs|Montreal
Nashville Predators|Predators|Preds|Nashville
New Jersey Devils|Devils|New Jersey
New York Islanders|Islanders|Isles
New York Rangers|Rangers
Ottawa Senators|Senators|Sens|Ottawa
Philadelphia Flyers|Flyers|Philadelphia|Philly
Pittsburgh Penguins|Penguins|Pens|Pittsburgh
San Jose Sharks|Sharks|San Jose
Seattle Kraken|Kraken|Seattle
St. Louis Blues|Blues|St Louis|Saint Louis
Tampa Bay Lightning|Lightning|Bolts|Tampa Bay
Toronto Maple Leafs|Maple Leafs|Leafs|Toronto
Utah Mammoth|Mammoth|Utah|Utah Hockey Club
Vancouver Canucks|Canucks|Vancouver
Vegas Golden Knights|Golden Knights|Vegas
Washington Capitals|Capitals|Caps|Washington
Winnipeg Jets|Jets|Winnipeg`
  },
  {
    id: 'harry-potter-characters', title: 'Harry Potter Characters', emoji: '🪄', tag: 'Pop Culture',
    blurb: 'Over 80 witches, wizards, creatures and Muggles are in play.',
    answers: `
Harry Potter|Harry
Hermione Granger|Hermione|Granger
Ron Weasley|Ron|Ronald Weasley
Albus Dumbledore|Dumbledore|Albus
Severus Snape|Snape|Severus
Rubeus Hagrid|Hagrid
Lord Voldemort|Voldemort|Tom Riddle|You Know Who|He Who Must Not Be Named
Draco Malfoy|Draco
Lucius Malfoy|Lucius
Narcissa Malfoy|Narcissa
Minerva McGonagall|McGonagall|Professor McGonagall
Sirius Black|Sirius
Remus Lupin|Lupin|Remus
Peter Pettigrew|Pettigrew|Wormtail
Bellatrix Lestrange|Bellatrix
Neville Longbottom|Neville
Luna Lovegood|Luna
Ginny Weasley|Ginny
Fred Weasley|Fred
George Weasley|George
Percy Weasley|Percy
Bill Weasley|Bill
Charlie Weasley|Charlie
Molly Weasley|Molly|Mrs Weasley
Arthur Weasley|Arthur|Mr Weasley
Cedric Diggory|Cedric
Cho Chang|Cho
Dobby
Kreacher
Winky
Hedwig
Crookshanks
Scabbers
Fawkes
Buckbeak
Fluffy
Nagini
Aragog
Dolores Umbridge|Umbridge
Gilderoy Lockhart|Lockhart
Quirinus Quirrell|Quirrell|Professor Quirrell
Horace Slughorn|Slughorn
Mad-Eye Moody|Alastor Moody|Moody
Barty Crouch Sr|Barty Crouch|Mr Crouch
Barty Crouch Jr
Filius Flitwick|Flitwick
Pomona Sprout|Professor Sprout|Sprout
Sybill Trelawney|Trelawney
Argus Filch|Filch
Mrs. Norris
Madam Pomfrey|Poppy Pomfrey|Pomfrey
Madam Hooch|Rolanda Hooch|Hooch
Cornelius Fudge|Fudge
Rufus Scrimgeour|Scrimgeour
Kingsley Shacklebolt|Kingsley|Shacklebolt
Nymphadora Tonks|Tonks
Viktor Krum|Krum
Fleur Delacour|Fleur
Gellert Grindelwald|Grindelwald
Aberforth Dumbledore|Aberforth
Vernon Dursley|Vernon|Uncle Vernon
Petunia Dursley|Petunia|Aunt Petunia
Dudley Dursley|Dudley
James Potter|James
Lily Potter|Lily
Seamus Finnigan|Seamus
Dean Thomas|Dean
Lavender Brown|Lavender
Parvati Patil|Parvati
Padma Patil|Padma
Oliver Wood|Oliver
Vincent Crabbe|Crabbe
Gregory Goyle|Goyle
Moaning Myrtle|Myrtle
Nearly Headless Nick|Nick
Peeves
Griphook
Garrick Ollivander|Ollivander
Xenophilius Lovegood|Xenophilius
Mundungus Fletcher|Mundungus|Dung
Fenrir Greyback|Greyback
Rita Skeeter|Skeeter
Colin Creevey|Colin
Teddy Lupin
Lee Jordan
Ernie Macmillan|Ernie
Hannah Abbott|Hannah
Grawp
Firenze
Dennis Creevey
Igor Karkaroff|Karkaroff
Olympe Maxime|Madame Maxime`
  },
  {
    id: 'fast-food-chains', title: 'Fast Food Chains', emoji: '🍔', tag: 'Food',
    blurb: 'Burgers, tacos, chicken, coffee and more. Over 60 chains are in play.',
    answers: `
McDonald's|Mickey Ds|Maccas
Burger King|BK
Wendy's
Taco Bell
KFC|Kentucky Fried Chicken
Subway
Chick-fil-A|Chickfila
Popeyes
Domino's
Pizza Hut
Papa John's
Little Caesars
Arby's
Sonic
Dairy Queen|DQ
Jack in the Box
Carl's Jr.
Hardee's
In-N-Out|In and Out
Five Guys
Shake Shack
Whataburger
Culver's
White Castle
Krystal
Chipotle
Qdoba
Del Taco
Panda Express
Panera Bread|Panera
Jimmy John's
Jersey Mike's
Firehouse Subs
Quiznos
Wingstop
Buffalo Wild Wings|BWW|B Dubs
Raising Cane's|Canes
Zaxby's
Bojangles
Church's Chicken|Church's
El Pollo Loco
Starbucks
Dunkin'|Dunkin Donuts
Tim Hortons|Tim Hortons|Timmies
Krispy Kreme
Long John Silver's
Checkers|Rally's
Steak 'n Shake|Steak and Shake
Moe's Southwest Grill|Moe's
Baskin-Robbins
A&W|AW
Nando's
Greggs
Pret a Manger|Pret
Sbarro
Auntie Anne's
Cinnabon
Jollibee
Freddy's
Smashburger
The Habit Burger|Habit
Crumbl
Dutch Bros
Noodles & Company|Noodles
Sweetgreen
Cava
Portillo's
Taco John's
Wienerschnitzel
Captain D's`
  },
  {
    id: 'car-brands', title: 'Car Brands', emoji: '🚗', tag: 'Misc',
    blurb: 'Makes past and present, from Acura to Volvo.',
    answers: `
Toyota
Honda
Ford
Chevrolet|Chevy
BMW
Mercedes-Benz|Mercedes|Benz
Audi
Volkswagen|VW
Porsche
Ferrari
Lamborghini|Lambo
Maserati
Alfa Romeo|Alfa
Fiat
Lancia
Bugatti
Bentley
Rolls-Royce|Rolls
Aston Martin
Jaguar|Jag
Land Rover|Range Rover
McLaren
Lotus
Mini
Vauxhall
Opel
Peugeot
Renault
Citroën
Volvo
Saab
Skoda
SEAT
Cupra
Tesla
Rivian
Lucid
Dodge
Jeep
Chrysler
Ram
Cadillac
Buick
GMC
Lincoln
Pontiac
Oldsmobile
Saturn
Plymouth
Mercury
Hummer
DeLorean
Nissan
Datsun
Infiniti
Mazda
Subaru
Mitsubishi
Lexus
Acura
Suzuki
Isuzu
Daihatsu
Scion
Hyundai
Kia
Genesis
BYD
Geely
NIO
Polestar
Koenigsegg
Pagani
Smart
Dacia
Tata
Mahindra
Alpine
Maybach
Fisker
Morgan`
  },
  {
    id: 'americas-countries', title: 'Countries of the Americas', emoji: '🌎', tag: 'Geography',
    blurb: 'All 35 nations of North, Central and South America and the Caribbean.',
    answers: `
Antigua and Barbuda|Antigua
Argentina
Bahamas
Barbados
Belize
Bolivia
Brazil
Canada
Chile
Colombia
Costa Rica
Cuba
Dominica
Dominican Republic
Ecuador
El Salvador
Grenada
Guatemala
Guyana
Haiti
Honduras
Jamaica
Mexico
Nicaragua
Panama
Paraguay
Peru
Saint Kitts and Nevis|St Kitts and Nevis|St Kitts|Saint Kitts
Saint Lucia|St Lucia
Saint Vincent and the Grenadines|St Vincent and the Grenadines|St Vincent|Saint Vincent
Suriname
Trinidad and Tobago|Trinidad
United States|USA|US|America|United States of America
Uruguay
Venezuela`
  },
  {
    id: 'olympic-sports', title: 'Summer Olympic Sports', emoji: '🏅', tag: 'Sports',
    blurb: 'Sports on the Summer Olympic program, including the newcomers added for LA 2028.',
    answers: `
Archery
Athletics|Track and Field|Track
Badminton
Basketball|3x3 Basketball
Boxing
Canoeing|Canoe|Kayaking|Kayak|Canoe Kayak
Cycling|BMX|Mountain Biking
Diving
Equestrian|Horse Riding|Dressage|Show Jumping
Fencing
Field Hockey|Hockey
Football|Soccer
Golf
Gymnastics
Handball
Judo
Modern Pentathlon|Pentathlon
Rowing
Rugby|Rugby Sevens
Sailing
Shooting
Skateboarding
Sport Climbing|Climbing|Rock Climbing
Surfing
Swimming
Table Tennis|Ping Pong
Taekwondo
Tennis
Triathlon
Volleyball
Beach Volleyball
Water Polo
Weightlifting
Wrestling
Breaking|Breakdancing
Artistic Swimming|Synchronized Swimming
Baseball
Softball
Karate
Lacrosse
Cricket
Squash
Flag Football`
  },
  {
    id: 'disney-princesses', title: 'Official Disney Princesses', emoji: '👑', tag: 'Pop Culture',
    blurb: 'The 13 members of the official Disney Princess lineup.',
    answers: `
Snow White
Cinderella
Aurora|Sleeping Beauty|Briar Rose
Ariel|The Little Mermaid
Belle
Jasmine
Pocahontas
Mulan
Tiana
Rapunzel
Merida
Moana
Raya`
  },
  {
    id: 'shakespeare-plays', title: 'Shakespeare Plays', emoji: '🎭', tag: 'Literature',
    blurb: 'All 38 plays in the canon. For a play in parts (Henry VI…), type the title once for each part.',
    answers: `
All's Well That Ends Well
Antony and Cleopatra
As You Like It
The Comedy of Errors
Coriolanus
Cymbeline
Hamlet
Henry IV, Part 1|Henry IV|Henry 4|Henry the Fourth
Henry IV, Part 2|Henry IV|Henry 4|Henry the Fourth
Henry V|Henry 5|Henry the Fifth
Henry VI, Part 1|Henry VI|Henry 6|Henry the Sixth
Henry VI, Part 2|Henry VI|Henry 6|Henry the Sixth
Henry VI, Part 3|Henry VI|Henry 6|Henry the Sixth
Henry VIII|Henry 8|Henry the Eighth
Julius Caesar
King John
King Lear|Lear
Love's Labour's Lost|Loves Labors Lost
Macbeth|The Scottish Play
Measure for Measure
The Merchant of Venice
The Merry Wives of Windsor
A Midsummer Night's Dream
Much Ado About Nothing
Othello
Pericles
Richard II|Richard 2|Richard the Second
Richard III|Richard 3|Richard the Third
Romeo and Juliet
The Taming of the Shrew
The Tempest
Timon of Athens
Titus Andronicus
Troilus and Cressida
Twelfth Night
The Two Gentlemen of Verona
The Two Noble Kinsmen
The Winter's Tale`
  },
  {
    id: 'fruits', title: 'Fruits', emoji: '🍓', tag: 'Food',
    blurb: 'Over 75 fruits are in play, from everyday to exotic. Plurals are fine.',
    answers: `
Apple
Banana
Orange
Grape
Strawberry
Blueberry
Raspberry
Blackberry
Cranberry
Cherry
Peach
Pear
Plum
Apricot
Nectarine
Mango
Pineapple
Papaya|Pawpaw
Kiwi|Kiwifruit
Watermelon
Cantaloupe
Honeydew
Melon
Lemon
Lime
Grapefruit
Tangerine
Clementine
Mandarin
Satsuma
Blood Orange
Pomelo
Yuzu
Kumquat
Pomegranate
Fig
Date
Coconut
Avocado
Tomato
Olive
Passion Fruit
Dragon Fruit|Pitaya
Lychee|Litchi
Guava
Persimmon
Quince
Gooseberry
Elderberry
Mulberry
Boysenberry
Huckleberry
Cloudberry
Lingonberry
Acai
Currant|Blackcurrant|Redcurrant
Starfruit|Carambola
Jackfruit
Durian
Rambutan
Mangosteen
Longan
Plantain
Tamarind
Breadfruit
Soursop|Guanabana
Cherimoya|Custard Apple
Feijoa
Loquat
Jujube
Kiwano|Horned Melon
Physalis|Cape Gooseberry|Ground Cherry
Ackee
Salak|Snake Fruit
Ugli Fruit
Marionberry
Goji Berry|Goji`
  },
  {
    id: 'one-name-musicians', title: 'One-Name Musicians', emoji: '🎶', tag: 'Music',
    blurb: 'Artists known by a single name, like Adele and Prince. Over 90 are in play.',
    answers: `
Adele
Beyoncé
Rihanna
Madonna
Prince
Cher
Drake
Shakira
Sting
Bono
Eminem
Usher
Pink|P!nk
Lizzo
Lorde
Sia
Seal
Moby
Björk
Enya
Selena
Aaliyah
Brandy
Monica
Ciara
Kesha|Ke$ha
Halsey
Rosalía
Raye
SZA
Dido
Duffy
Nelly
Ludacris
Pitbull
Future
Logic
Common
Nas
Tyga
Akon
Ne-Yo
T-Pain
Shaggy
Sisqó
Ginuwine
Tyrese
Ashanti
Mýa|Mya
Fergie
Jewel
Tiffany
JoJo
Lulu
Donovan
Liberace
Falco
Sade
Yanni
Avicii
Marshmello
Skrillex
Tiësto
Diplo
Grimes
Kehlani
Khalid
Zayn
Tinashe
Normani
Lisa
Jennie
Rosé
Jisoo
Jungkook
Elvis
Morrissey
Slash
Flea
Rakim
Coolio
Ice-T|Ice T
Mabel
Labrinth
Stormzy
Dave
Tems
Wizkid
Davido
Rema
Ozuna
Maluma
Anitta
Sevdaliza
Mika
Robyn
Kelis
Nico
Charo`
  },
  {
    id: 'world-cup-winners', title: 'FIFA World Cup Winners', emoji: '🏆', tag: 'Sports',
    blurb: 'Every nation that has won the men’s World Cup. Only 8, so go for perfect.',
    answers: `
Brazil
Germany|West Germany
Italy
Argentina
France
Uruguay
England
Spain`
  },
  {
    id: 'asia-countries', title: 'Countries of Asia', emoji: '🏯', tag: 'Geography',
    blurb: 'All 49 Asian nations, from Japan to Yemen, including Turkey, Russia and the Caucasus.',
    answers: `
Afghanistan
Armenia
Azerbaijan
Bahrain
Bangladesh
Bhutan
Brunei
Cambodia
China
East Timor|Timor-Leste
Georgia
India
Indonesia
Iran
Iraq
Israel
Japan
Jordan
Kazakhstan
Kuwait
Kyrgyzstan
Laos
Lebanon
Malaysia
Maldives
Mongolia
Myanmar|Burma
Nepal
North Korea
Oman
Pakistan
Palestine
Philippines
Qatar
Russia
Saudi Arabia
Singapore
South Korea|Korea
Sri Lanka
Syria
Taiwan
Tajikistan
Thailand
Turkey|Turkiye
Turkmenistan
United Arab Emirates|UAE|Emirates
Uzbekistan
Vietnam
Yemen`
  }
];

/*
 * Par: what a solid player names in 60 seconds. Scores are judged against par, not against
 * the size of the list, so a hard day (Shakespeare) and an easy one (car brands) feel equally fair.
 * Rough guide: an easy, fast-to-type category with a big list sits around 16-18; a short or
 * hard-to-recall list sits around 5-10. Tune these once you see real players' scores.
 */
(function () {
  const PAR = {
    'us-states': 18, 'nfl-teams': 14, 'pixar-films': 12, 'taylor-swift-albums': 8, 'elements': 14,
    'europe-countries': 16, 'nba-teams': 13, 'pokemon-gen1': 15, 'beatles-songs': 10, 'dog-breeds': 14,
    'africa-countries': 10, 'mlb-teams': 12, 'simpsons-characters': 12, 'orchestra-instruments': 12,
    'us-presidents': 12, 'us-state-capitals': 10, 'nhl-teams': 11, 'harry-potter-characters': 14,
    'fast-food-chains': 15, 'car-brands': 18, 'americas-countries': 14, 'olympic-sports': 14,
    'disney-princesses': 8, 'shakespeare-plays': 7, 'fruits': 18, 'one-name-musicians': 10,
    'world-cup-winners': 5, 'asia-countries': 13,
  };
  window.SIXTY_CATEGORIES.forEach((c) => { if (!c.par && PAR[c.id]) c.par = PAR[c.id]; });
})();
