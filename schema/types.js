const graphql = require('graphql');



const Item = require('../models/item');
const Place = require('../models/place');
const Category = require('../models/category');


const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLList
    
} = graphql;



const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLID },
        email: { type: GraphQLString},
        password: { type: GraphQLString},
        
    })
});

const ItemType = new GraphQLObjectType({
    name: "Item",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        voiceNote: { type: GraphQLString},
        qrImage: { type: GraphQLString},
        noOfScans: { type: GraphQLString},
        place: {
            type: PlaceType,
            resolve(parent, args){
                return Place.findById(parent.placeId);
            }
        }

    })
});

const ItemImagesType = new GraphQLObjectType({
    name: "ItemImages",
    fields: () => ({
        id: { type: GraphQLID },
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
        item: {
            type: ItemType,
        resolve(parent, args){
            return Item.findById(parent.itemId);
        }
    }

    })
});

const PlaceType = new GraphQLObjectType({
    name: "Place",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        address: { type: GraphQLString },
        dates: { type: GraphQLString },
        fees: { type: GraphQLString},
        image: { type: GraphQLString },
        map: { type: GraphQLString},
        items: {
            type: new GraphQLList(ItemType),
            resolve(parent, args){
                return Item.find({ placeId: parent.id });
            }

        }

    })
});


const PlaceImagesType = new GraphQLObjectType({
    name: "PlaceImages",
    fields: () => ({
        id: { type: GraphQLID },
        image1: { type: GraphQLString },
        altr1: { type: GraphQLString },
        image2: { type: GraphQLString },
        altr2: { type: GraphQLString },
        image3: { type: GraphQLString },
        altr3: { type: GraphQLString },
        place: {
            type: PlaceType,
        resolve(parent, args){
            return Place.findById(parent.placeId);
        }
    }

    })
});


const PlaceCatType = new GraphQLObjectType({
    name: "PlaceCat",
    fields: () => ({
        id: { type: GraphQLID },
        rank: { type: GraphQLString },
        place: {
            type: PlaceType,
        resolve(parent, args){
            return Place.findById(parent.placeId);
        }
      },
        category: {
            type: CategoryType, 
        resolve(parent, args){
            return Category.findById(parent.catId);
        }
    }

    })
});

const CategoryType = new GraphQLObjectType({
    name: "Category",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString }
        

    })
});

module.exports = {
    UserType,
    ItemType,
    ItemImagesType,
    PlaceType,
    PlaceImagesType,
    PlaceCatType,
    CategoryType
}