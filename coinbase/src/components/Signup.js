import React from 'react'
import coinbase from '../images/coinbase.png'
import coinBase from '../images/coinbase-circle.png'
import downArrow from '../images/down-arrow.svg'
import wallet from '../images/wallet.png'
import dollar from '../images/dollar.png'
import earn from '../images/earn.png'
import commerce from '../images/commerce.png'
import custody from '../images/custody.png'
import ventures from '../images/ventures.png'
import coinBaseBlack from '../images/coinbase-circle-black.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Signup.css'

const Signup = () => {
    return (
        <div className="signup-nav">
                <nav className={"nav-container"}>
                    <div className="left-nav-side">
                        <div className="coinbase-logo">
                            <Link to="/"><img style={{ width: "100%", height: "100%" }} src={ coinbase} /></Link>
                        </div>
                        <ul>
                            <li><a href="#">Prices</a></li>
                            <li className="products">
                                <a href="#" >Products <span><img src={downArrow} style={{ width: "8.7px", height: "4.01px" }} /></span></a>
                                <div className="products-dropdown">
                                    <div className="left-side">
                                        <p className="for-everyone">FOR EVERYONE</p>
                                        <div className="coins-everyone">
                                            <div className="coins">
                                                <img src={coinBase} alt="coinbase" />
                                            </div>
                                            <div>
                                                <h1>Coinbase</h1>
                                                <p>Buy, sell, and use cryptocurrency</p>
                                            </div>
                                        </div>
                                        <div className="coins-everyone">
                                            <div className="coins">
                                                <img src={wallet} alt="wallet" />
                                            </div>
                                            <div>
                                                <h1>Wallet</h1>
                                                <p>Store your own cryptocurrency</p>
                                            </div>
                                        </div>
                                        <div className="coins-everyone">
                                            <div className="coins">
                                                <img src={dollar} alt="dollar" />
                                            </div>
                                            <div>
                                                <h1>USD Coin</h1>
                                                <p>Crpyptocurrency with a stable price</p>
                                            </div>
                                        </div>
                                        <div className="coins-everyone">
                                            <div className="coins">
                                                <img src={earn} alt="earn" />
                                            </div>
                                            <div>
                                                <h1>Earn</h1>
                                                <p>Make money learning about crypto</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-side">
                                        <p className="advanced-traders">FOR ADVANCED TRADERS</p>
                                        <div className="coins">
                                            <div>
                                                <img src={coinBaseBlack} alt="coinbase-black" />
                                            </div>
                                            <div>
                                                <h1>Pro</h1>
                                                <p>Advanced cryptocurrency training</p>
                                            </div>
                                        </div>
                                        <p className="for-businesses">FOR BUSINESSES</p>
                                        <div className="coins">
                                            <div>
                                                <img src={commerce} alt="commerce" />
                                            </div>
                                            <div>
                                                <h1>Commerce</h1>
                                                <p>Accept cryptocurrency payments</p>
                                            </div>
                                        </div>
                                        <div className="coins">
                                            <div>
                                                <img src={custody} alt="custody" />
                                            </div>
                                            <div>
                                                <h1>Custody</h1>
                                                <p>Cryptocurrency custody for institutions</p>
                                            </div>
                                        </div>
                                        <div className="coins">
                                            <div>
                                                <img src={ventures} alt="ventures" />
                                            </div>
                                            <div>
                                                <h1>Ventures</h1>
                                                <p>Raise money for your crypto startup</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-side">
                                        <p>Our Products</p>
                                    </div>
                                </div>
                            </li>
                            <li className="company">
                                <a className="company-link" href="#">Company <span><img src={downArrow}
                                    alt="down-arrow" style={{ width: "8.7px", height: "4.01px" }} /></span></a>
                                <motion.div whileHover={{ scale: 1.04, originY: 0 }} className="company-dropdown">
                                    <ul>
                                        <li>About Us</li>
                                        <li>Blog</li>
                                        <li>Support</li>
                                        <li>Careers</li>
                                    </ul>
                                </motion.div>
                            </li>
                            <li><a href="#">Earn Crypto</a></li>
                        </ul>
                        <button type="button">Get $152+</button>
                    </div>
                    <div className="right-nav-side">
                        <Link to="/signin"><a>Sign in</a></Link>
                        <Link to="signup"><button>Get started</button></Link>
                    </div>
                </nav>

            <h1 className="create-account">Create your account</h1>

            <div className="signup-wrapper">
                <div className="row1">
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                </div>
                <div className="row2">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Choose password" />
                </div>
                <div className="row3">
                    <input style={{ width: "30px", height: "30px", marginRight: "7px" }} type="checkbox" />
                    <p>I certify that I am 18 years of age or older, and agree to the <span className="user-agreement">User Agreement</span> and <span className="privacy-policy">Privacy Policy.</span></p>
                </div>
                <button>Create account</button>
                <p className="sign-in-up-text"><Link to="/signin" style={{textDecoration: "none", color: "#1652f0"}}><span>Sign in</span></Link> to your Coinbase account or<br /> <Link to="/signup" style={{textDecoration: "none", color: "#1652f0"}}><span>Sign up</span></Link> as a business.</p>
            </div>
            <p className="already">Already have a Coinbase account? <Link to="/signin" style={{textDecoration: "none", color: "#fff"}}><motion.span whileHover={{ color: "blue" }}>Login</motion.span></Link></p>
        </div>
    )
}

export default Signup
