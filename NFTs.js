const NFTs = [];

function mintNFT(_name, _eyeColor, _shirtType, _bling) {
  const NFT = {
    "name": _name,
    "eyecolor": _eyeColor,
    "shirtType": _shirtType,
    "bling": _bling
  };
  NFTs.push(NFT);
  console.log("Minted: " + _name);
}

function listNFTs() {
  for (var i = 0; i < NFTs.length; i++) {
    console.log("\nID: \t\t\t"+(i+1));
    console.log("Name:   \t\t"+NFTs[i].name);
    console.log("EyeColour: \t"+NFTs[i].eyecolor);
    console.log("Shirt Type: "+NFTs[i].shirtType);
    console.log("Bling:  \t\t"+NFTs[i].bling);
  }
}

function getTotalSupply() {
  console.log("\n"+NFTs.length);
}

mintNFT("Bob", "Black", "Hoodie", "Silver Chain");
mintNFT("Jhon", "Brown", "Hoodie", "Gold Chain");
mintNFT("Deez", "Blue", "Hoodie", "Glasses");
mintNFT("Nats", "Red", "Hoodie", "Ring");
listNFTs();
getTotalSupply();
