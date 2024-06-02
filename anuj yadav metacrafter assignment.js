const NFTs = [];
function mintNFTs(name,surname,eyecolor,mobile_no,address){
    const NFT = 
    {
        "name" : name,
        "surname" : surname,
        "eyecolor" : eyecolor,
        "mobile_no" : mobile_no,
        "address" :address
    };
    NFTs.push(NFT);
    console.log ("minted NFTs: "+name);
}
function bucketNFTs()
{
    for(let i = 0;i<NFTs.length;i++)
    {
        console.log("\nNumber is : " , i+1);
        console.log("NFTs name is : " ,NFTs[i]["name"]);
        console.log("Surname is : " , NFTs[i]["surname"]);
        console.log("Eyecolor is : " , NFTs[i]["eyecolor"]);
        console.log("Mobile Number is : " , NFTs[i]["mobile_no"]);
        console.log("Address is : " , NFTs[i]["address"]);
    }
}
function count()
{
    console.log("\nNumber of NFTs is : " , NFTs.length);
}
mintNFTs("GAURAV","garg","black","7845693210","punjab");
mintNFTs("ANUJ","yadav","blue","8147814528","rewari");
mintNFTs("RAGHAV","bajaj","brown","9574861320","Karnal");
mintNFTs("HARSH","kumar","green","7741528963","Kanpur");
mintNFTs("PARAG","bajaj","red","978541236","Karnal");
mintNFTs("Mayank","sharma","black","8528745632","bihar");
bucketNFTs();
count();