const graphql = require('graphql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const Item = require('../models/item');
const ItemImages = require('../models/itemImages');
const Place = require('../models/place');
const PlaceImages = require('../models/placeImages');
const PlaceCat = require('../models/placeCat');
const Category = require('../models/category');
const User = require('../models/user');

const {
    UserType,
    ItemType,
    ItemImagesType,
    PlaceType,
    PlaceImagesType,
    PlaceCatType,
    CategoryType
} = require('./types');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
} = graphql;



// ---------- Query ---------- //

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {

        login: {
            type: UserType,
            args: {
                 email: { type: GraphQLString},
                 password: { type: GraphQLString}

             },
            resolve(parent, args){
                return User.findOne({ email: args.email })
              .then(user => {
                if (user) {
                  return bcrypt
                    .compare(args.password, user.password)
                    .then(isValid => {
                      if (!isValid) {
                        throw new Error( "password Incrrect" );
                      } else {
                        const token = jwt.sign(
                          { name: user.name, id: user.id },
                          "mySecret"
                        );
                        return user;
                      }
                    })
                    .catch(e => e);
                } else {
                  throw new Error( "email Incorrect" );
                }
              })
              .catch(e => e);
          }
        
              
            
            
            
        },

        // ---------- Return User and all Users ---------- //

        


        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return User.findById(args.id);
            }
        },
       
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                return User.find({});
            }
        },
        // ---------- Return Item and all Items ---------- //
        item: {
            type: ItemType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return Item.findById(args.id);
            }
        },
       
        items: {
            type: new GraphQLList(ItemType),
            resolve(parent, args){
                return Item.find({});
            }
        },
        // ---------- Return itemImages and all ItemsImages ---------- //
        itemImages: {
            type: ItemImagesType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return ItemImages.findById(args.id);
            }
        },
        itemsImages: {
            type: new GraphQLList(ItemImagesType),
            resolve(parent, args){
                return ItemImages.find({});
            }
        },
        // ---------- Return Place and all Places ---------- //
        place: {
            type: PlaceType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return Place.findById(args.id);
            }
        },
        places: {
            type: new GraphQLList(PlaceType),
            resolve(parent, args){
                return Place.find({});
            }
        },
        // ---------- Return PlaceImages and all PlacesImages ---------- //
        placeImages: {
            type: PlaceImagesType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return PlaceImages.findById(args.id);
            }
        },
        placesImages: {
            type: new GraphQLList(PlaceImagesType),
            resolve(parent, args){
                return PlaceImages.find({});
            }
        },
        // ---------- Return PlaceCat and all PlacesCat ---------- //
        PlaceCat: {
            type: PlaceCatType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return PlaceCat.findById(args.id);
            }
        },
        PlacesCat: {
            type: new GraphQLList(PlaceCatType),
            resolve(parent, args){
                return PlaceCat.find({});
            }
        },
        // ---------- Return Category and all Categories ---------- //
        Category: {
            type: CategoryType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return Category.findById(args.id);
            }
        },
        Categories: {
            type: new GraphQLList(CategoryType),
            resolve(parent, args){
                return Category.find({});
            }
        },
    }
});

// ---------- Mutation ---------- //

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {

        addUser: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }, 
                       },
            resolve(parent, args){
                return bcrypt
                .hash(args.password, 10)
               .then(hash => {
               args.password = hash;
                let user = new User({
                    email: args.email,
                    password: args.password
                });
                return user.save();
            })
            }
        
        },
        
        addItem: {
            type: ItemType,
            args: {
                name: { type: GraphQLString },
                description: { type: GraphQLString },
                voiceNote: { type: GraphQLString},
                qrImage: { type: GraphQLString},
                noOfScans: { type: GraphQLInt},
                placeId: {type: GraphQLID}
            },
            resolve(parent, args, req){
                /*if(!req.isAuth) {
                    throw new Error('Unauthenticated!');
                  }
            */
                let item = new Item({
                    name: args.name,
                    description: args.description,
                    voiceNote: args.voiceNote,
                    qrImage: args.qrImage,
                    noOfScans: args.noOfScans,
                    placeId: args.placeId
                });
                return item.save();
            }
        },
       addItemImages: {
            type: ItemImagesType,
            args: {
                image1: { type: GraphQLString },
                 altr1: { type: GraphQLString },
                 image2: { type: GraphQLString },
                 altr2: { type: GraphQLString },
                 image3: { type: GraphQLString },
                 altr3: { type: GraphQLString },
                 image4: { type: GraphQLString },
                 altr4: { type: GraphQLString },
                 image5: { type: GraphQLString },
                 altr5: { type: GraphQLString },
                 itemId: { type: GraphQLString },
            },
            resolve(parent, args, req){
                /*if(!req.isAuth) {
                    throw new Error('Unauthenticated!');
                  }    */            
                let itemImages = new ItemImages({
                    image1: args.image1,
                    altr1: args.altr1,
                    image2: args.image2,
                    altr2: args.altr2,
                    image3: args.image3,
                    altr3: args.altr3,
                    image4: args.image4,
                    altr4: args.altr4,
                    image5: args.image5,
                    altr5: args.altr5,
                    itemId: args.itemId
                    
                });
                return itemImages.save();
            },
            
        },
        addPlace: {
            type: PlaceType,
            args: {
                name: { type: GraphQLString },
                address: { type: GraphQLString },
                dates: { type: GraphQLString },
                fees: { type: GraphQLInt},
                image: { type: GraphQLString },
                map: { type: GraphQLString} 
           },
           resolve(parent, args, req){
           /* if(!req.isAuth) {
                throw new Error('Unauthenticated!');
              }*/
                let place = new Place({
                    name: args.name,
                    address: args.address,
                    dates: args.dates,
                    fees: args.fees,
                    image: args.image,
                    map: args.map,
                });
                return place.save();
            }
        },
        addPlaceImages: {
            type: PlaceImagesType,
            args: {
                image1: { type: GraphQLString },
                altr1: { type: GraphQLString },
                image2: { type: GraphQLString },
                altr2: { type: GraphQLString },
                image3: { type: GraphQLString },
                altr3: { type: GraphQLString },
                placeId: { type: GraphQLString },
           },
           resolve(parent, args, req){
           /* if(!req.isAuth) {
                throw new Error('Unauthenticated!');
              }     */           
            let placeImages = new PlaceImages({
                    image1: args.image1,
                    altr1: args.altr1,
                    image2: args.image2,
                    altr2: args.altr2,
                    image3: args.image3,
                    altr3: args.altr3,
                    placeId: args.placeId
                });
                return placeImages.save();
            }
        }, 
        addPlaceCat: {
            type: PlaceCatType,
            args: {
                rank: { type: GraphQLInt },
                placeId: { type: GraphQLString },
                catId: { type: GraphQLString },
            },
            resolve(parent, args, req){
               /* if(!req.isAuth) {
                    throw new Error('Unauthenticated!');
                  }*/
                let placeCat = new PlaceCat({
                    rank: args.rank,
                    placeId: args.placeId,
                    catId: args.catId
                    
                });
                return placeCat.save();
            }
        }, 
        addCategory: {
            type: CategoryType,
            args: {
                name: { type: GraphQLString }
            },
            resolve(parent, args, req){
               /* if(!req.isAuth) {
                    throw new Error('Unauthenticated!');
                  } */
                let category = new Category({
                    name: args.name,
                    
                });
                return category.save();
            }
        },
        
    }
});







module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});