import { gql } from 'apollo-boost';


const getItemsQuery = gql`
{
    items {
        id
        name
        description
        voiceNote 
        qrImage
        noOfScans
        place {
            name
        }
    
      
        
    }
}
`;
const getItemsImagesQuery = gql`
{
    itemsImages {
        id
        image1
        altr1
        image2
        altr2
        image3
        altr3
        image4
        altr4
        image5
        altr5
        
    }
}
`;
const getCategoryQuery = gql`
{
    Categories {
        id
       name
        
    }
}
`;

const getPlacesCatQuery = gql`
{
    PlacesCat {
        id
       rank
       place {
           name
       }
       category {
           name
       }
        
    }
}
`;

const getPlacesQuery = gql`
{
    places {
        id
        name
        address
        dates
        fees
        image
        map

        
    }
}
`;
const getPlacesImagesQuery = gql`
{
    placesImages {
        id
        image1
        altr1
        image2
        altr2
        image3
        altr3 
        place {
            id 
            name
        }
        
    }
}
`;







const addItemMutation = gql` 
mutation AddItem(
    $name: String!,
    $description: String!,
    $voiceNote: String!,
    $qrImage: String!,
    $noOfScans: String!,
    $placeId: ID!){
        addItem(
        name: $name,
        description: $description,
        voiceNote: $voiceNote,
        qrImage: $qrImage,
        noOfScans: $noOfScans,
        placeId: $placeId){
        name 
        id
        
    }
        
}
`;

const addCategoryMutation = gql`
mutation AddCategory(
    $name: String!){
        addCategory(name: $name){
            name
            id
        }
    }
     

`;
const addItemImagesMutation = gql`
mutation AddItemImages(
    $image1: String!,
    $altr1: String!,
    $image2: String!,
    $altr2: String!,
    $image3: String!,
    $altr3: String!,
    $image4: String!,
    $altr4: String!,
    $image5: String!, 
    $altr5: String!,
    $itemId: String!
      ){
        addItemImages(
            image1: $image1
            altr1: $altr1
            image2: $image2
            altr2: $altr2
            image3: $image3
            altr3: $altr3
            image4: $image4
            altr4: $altr4
            image5: $image5
            altr5: $altr5
            itemId: $itemId
            
            ){
            image1
            
        }
    }
     

`;


const addPlaceMutation = gql`
mutation AddPlace(
    $name: String!, 
    $address: String!,
    $dates: String!,
    $fees:  String!,
    $image: String!,
    $map:   String!
    
    ){
        addPlace(
            name: $name
            address: $address
            dates: $dates
            fees: $fees
            image: $image
            map: $map
            
            ){
            name
            address
            dates
            fees
            image
            map
            
        }
    }
     
`;

const addPlaceImagesMutation = gql`
mutation AddPlaceImages(
    $image1: String!,
    $altr1: String!,
    $image2: String!,
    $altr2: String!,
    $image3: String!,
    $altr3: String!,
    $placeId: ID!,
    
    ){
        addPlaceImages(
            image1: $image1
            altr1: $altr1
            image2: $image2
            altr2: $altr2
            image3: $image3
            altr3: $altr3
            placeId: $placeId
            
            ){
            image1
            

        }
    }
     

`;
 




const addPlaceCatMutation = gql`
mutation AddPlaceCat(
    $rank: String!,
    $placeId: ID!,
    $catId: ID!
    ){
        addPlaceCat(
            rank: $rank
            placeId: $placeId
            catId : $catId
            ){
            rank
         
            
        }
    }
     

`;

 
const deleteCatMutation = gql`
mutation DeleteCategory(
    $id: ID!
    ){
        
        deleteCategory(
           
                id: $id
                  
                
            ){
               id
            
        
    }
}

    


`;








export {
    getItemsQuery,
    getItemsImagesQuery,
    getCategoryQuery,
    getPlacesCatQuery,
    getPlacesQuery,
    getPlacesImagesQuery,

    addItemMutation,
    addCategoryMutation,
    addItemImagesMutation,
    addPlaceCatMutation,
    addPlaceMutation,
    addPlaceImagesMutation,

    deleteCatMutation
        };
