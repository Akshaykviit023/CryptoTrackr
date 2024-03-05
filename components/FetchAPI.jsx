

const FetchAPI = () => {
    fetch(`https://api.coingecko.com/api/v3/search/trending`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data.coins.length);
    })
  return (
    <div>

    </div>
  )
}

export default FetchAPI