import React from 'react'

const Coin = ({name,web_pages,country,stateprovince}) => {
    return (
        <div>
            <div className="coin-conrainer">
                <div className="coin-row">
                    <div className="coin">
                        <h1>{name}</h1>
                        <p className="coin-symbol">{web_pages}</p>
                        <p className="country">{country}</p>
                    </div>
                    <div className="coin-data">
                        <p className="coin-price">{stateprovince}</p>
                        {/* <p className="coin-volume">{}</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coin
