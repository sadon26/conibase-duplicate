import React from 'react'
import './Signin.css'
import coinbase from '../images/coinbase.png'
import triangle from '../images/triangle.png'
import downArrow from '../images/down-arrow.svg'
import arrowInBox from '../images/arrow-in-box.png'
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <div className="signin-wrapper">
            <nav>
                <div className="left-side">
                    <div>
                        <Link to="/"><img src={coinbase} alt="coinbase" /></Link>
                    </div>
                </div>

                <div className="right-side">

                    <ul>
                        <li className="product">
                            <div className="triangle">
                                <img src={triangle} alt="triangle-element" />
                            </div>
                            <a href="#">Products <span><img src={downArrow} alt="down-arrow" /></span></a>
                            <div className="product-dropdown">
                                <ul>
                                    <li>Buy/Sell Digital Currency </li>
                                    <li>Coinbase Pro <span><img src={arrowInBox} /></span></li>
                                    <li>Coinbase Prime <span><img src={arrowInBox} /></span></li>
                                    <li>Developer Platform <span><img src={arrowInBox} /></span></li>
                                    <li>Coinbase Commerce <span><img src={arrowInBox} /></span></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Prices</a></li>
                        <li><Link to="/signin"><span>Sign in</span></Link></li>
                        <Link to="/signup"><li><button>Sign up</button></li></Link>
                    </ul>
                </div>
            </nav>
            <h1>Sign in to Coinbase</h1>
            <div className="coinbase-login">
                <div className="details">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                </div>
                <div className="below-input">
                    <div>
                        <input type="checkbox" />
                        <p>Keep me signed in on this computer</p>
                    </div>
                    <Link to="/signin"><button>SIGN IN</button></Link>
                </div>
            </div>

            <div className="below-signin-wrapper">
                <div>
                    <a href="#">Forgot Password?</a>
                    <a href="#">Don't have an account?</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <a href="#">Have an issue with 2-factor authentication?</a>
            </div>
        </div>
    )
}

export default Signin
