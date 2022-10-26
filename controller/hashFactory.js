const jsSHA = require("jssha");

class HashFactory{
    create(hashType){
        if(!hashType){
            return new Error("hash göndermek zorundasın")
        }
        let shaObj;
        if(hashType==="CSHAKE128"){
            shaObj = new CSHAKE128();
        }
        return shaObj
    }


}
class CSHAKE128{
    constructor(){}
    generate(longUrl){
        const shaObj = new jsSHA("CSHAKE128", "TEXT", {
            customization: { value: longUrl, format: "TEXT" },
        });
        return shaObj.getHash("HEX", { outputLen: 24 });
    }
}

exports.HashFactory = HashFactory;