import React from 'react'
import './Signin.css'
import coinbase from '../images/coinbase.png'
import triangle from '../images/triangle.png'
import downArrow from '../images/down-arrow.svg'

const Signin = () => {
    return (
        <div className="signin-wrapper">
            <nav>
                <div className="left-side">
                    <div>
                        <img src={coinbase} alt="coinbase" />
                    </div>
                </div>

                <div className="right-side">
                    <div className="triangle">
                        <img src={triangle} alt="triangle-element" />
                    </div>
                    <ul>
                        <li className="product">
                            <a href="#">Products</a> <span><img src={downArrow} alt="down-arrow" /></span>
                            <div>
                                <ul>
                                    <li>Buy/Sell Digital Currency</li>
                                    <li>Coinbase Pro</li>
                                    <li>Coinbase Prime</li>
                                    <li>Developer Platform</li>
                                    <li>Coinbase Commerce</li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Prices</a></li>
                        <li><a href="#">Sign in</a></li>
                        <li><button>Sign up</button></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Signin
