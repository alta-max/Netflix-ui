import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import "./featured.scss"

const Featured = () => {
    return (
        <div className="featured">
            <img src="https://c4.wallpaperflare.com/wallpaper/621/286/348/keanu-reeves-keanu-reeves-parabellum-john-wick-john-wick-hd-wallpaper-preview.jpg" alt="featured" />
            <div className="info">
                <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="info" />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consectetur velit dolorem, repellat neque autem, cupiditate molestias pariatur suscipit itaque dolores ab sunt error at dignissimos hic odit assumenda corporis?
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span></button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
