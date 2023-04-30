ADS(Annadatho Sukhibhava)

Data Modelling

    Help farmers to know their regioanl crops and their soil health in cultivation.
    Also helps in selling the crops with the absence of middleman.
    Gives complete cultivation guidence from scratch. 

#Register
    User(Farmer)
    Buyer


#User(Farmer)
  Name:
  Phone:
  District:
  Taluq :

#Buyers
  Name:
  Email:
  StoreName :

#Admin
  Name:
  Password :
  Crud opertaions
  (Add and removal of crops)

#Crops(ShortTerm,LongTerm)([{}])
  Name :
  Requirements: 
  Duration :
  Pros & Cons :
  WeatherPredictions : 


 #

#Auction
  CropName :
  AuctionValue :



User 
    mobile
    password 
    role - [admin, farmer, buyer]

FamerDetail
    userId
    districtId
    talukId  

BuyerDetail
    userId 
    name
    isApproved 

Crop 
    name 
    procedure
    stateIds: []
    districtId: []
    talukIds: []
    
state 
    name 

district
    name
    stateId

taluq
    name
    districtId 

Auction
    name 
    startDatetime
    endDateTime
    cropId 
    basePrice 

Bidding
    auctionId 
    buyerId 
    price 
