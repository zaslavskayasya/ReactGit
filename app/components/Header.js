import React from 'react'


class Header extends React.Component{
    render(){
        return(
            <header className="header">
                <div className="header_part">
                    <div className="header_img_wrap">
                        <img  className="header_img" src="./img/react-logo.png"/>
                    </div>
                </div>
                <div className="header_part, header_center_part">
                    <h1 className="header_center_h1"> GitHub </h1>
                    <p className="header_center_text"> Repositories Search App </p>
                </div>
                <div className="header_part">
                    <div className="header_img_wrap">
                        <img className="header_img" src="./img/github.png"/>
                    </div>
                </div>

            </header>

        )
    }
}
export default Header