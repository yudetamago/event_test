import { ethers } from 'ethers';
import { ERC721__factory as ERC721Factory } from "../typechain";

const main = async () => {
    const url = 'url'
    const address = 'address'
    const provider = new ethers.providers.JsonRpcProvider(url);
    const erc721Factory = ERC721Factory.connect(address, provider)
    const erc721 = await erc721Factory.deployed()
    const filter = erc721.filters.Transfer()
    const from = 1
    const to = 'latest'
    const events = await erc721.queryFilter(
        filter,
        from,
        to
    )
    for (let i = 0; i < events.length; i++) {
        console.log(events[i].args.tokenId)
    }
}

main().then()

