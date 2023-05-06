const {MongoClient}=require('mongodb');

var M_URL="mongodb+srv://mentors:g3B6BHDIHc2WhORL@cluster0.jqwifq9.mongodb.net/assignmentor";
module.exports={
    selectedDb:{},
    async connect(){
        try{
            const client=await MongoClient.connect(M_URL);
            this.selectedDb=client.db('assignmentor');
            console.log('connection is established')
        }
        catch (err){
            console.error(err);
        }
    }
}
