import Link from "next/link"
import { Button } from "./ui/button";
const CoinsList = ({ coinsList, onCoinClick }) => {
    const handleCoinClick = (coin) => {
        if (onCoinClick) {
          onCoinClick(coin);
        }
      };
  return (
    <div>
        {
            coinsList && coinsList.slice(0,10).map((coin, index) => (
                <div key={index}>
                    <Link href={{ pathname: '/', query: `${coin.id}` }}><Button variant="link" onClick={() => handleCoinClick(coin.id)}>{coin.id}</Button></Link>
                </div>
            ))
        }
    </div>
  )
}

export default CoinsList