import React, { Component } from "react"
import "./homePage.css"
import ReactPlayer from "react-player"

export default class HomePage extends Component {


    render() {
        return (
            <div id="box">
                <ReactPlayer className="boxen" id="boxen1" url='https://www.youtube.com/watch?v=k65s1-1TVGQ&list=PL7atuZxmT9570U87GhK_20NcbxM43vkom&index=17' playing />
                <div id="campaignBox">
                    <div className="boxen" id="boxen2"></div>
                    <div className="boxen" id="boxen3"></div>
                </div>
            </div>
        )
    }
}