export default function handler(req, res) {
  // get the tokenId from query params
  const tokenId = req.query.tokenId;
  const image_url =
    "https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/";

  res.status(200).json({
    name: "Crypto Dev #" + tokenId,
    description: "crypto Dev is a collection of developers in crypto",
    image: image_url + tokenId + ".svg",
  });
}
