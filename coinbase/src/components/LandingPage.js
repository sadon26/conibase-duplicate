import React, { useState, useEffect } from 'react'
import './LandingPage.css'
import coinbase from '../images/coinbase.png'
import coinbaseBlue from '../images/coinbase-logo.png'
import coinBase from '../images/coinbase-circle.png'
import downArrow from '../images/down-arrow.svg'
import rightArrow from '../images/right-arrow.png'
import downArrowBlack from '../images/down-arrow-black.png'
import wallet from '../images/wallet.png'
import dollar from '../images/dollar.png'
import dash from '../images/dash.png'
import linkBank from '../images/link-bank.png'
import startBuying from '../images/start-buying.png'
import Protected from '../images/protected.png'
import createAcct from '../images/create-acct.png'
import vault from '../images/vault.png'
import secure from '../images/secure.png'
import industry from '../images/industry-best.png'
import mobile from '../images/mobile.png'
import earn from '../images/earn.png'
import commerce from '../images/commerce.png'
import recurring from '../images/recurring.png'
import tezos from '../images/tezos.png'
import stellar from '../images/stellar.svg'
import orchid from '../images/orchid.svg'
import eos from '../images/eos.png'
import custody from '../images/custody.png'
import ventures from '../images/ventures.png'
import manage from '../images/manage.png'
import litecoin from '../images/litecoin.png'
import bitcoinCash from '../images/bitcoin-cash.png'
import ethereum from '../images/ethereum.png'
import bitcoin from '../images/bitcoin.png'
import coinBaseBlack from '../images/coinbase-circle-black.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    const [state, setState] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const isScrolled = window.scrollY < 50
            isScrolled ? setState(false) : setState(true)
        })
    })

    return (
        <>
            <div className="backdrop">
                <nav className={state ? "nav-container scrolled" : "nav-container"}>
                    <div className="left-nav-side">
                        <div className="coinbase-logo">
                            <img style={{ width: "100%", height: "100%" }} src={state ? coinbaseBlue : coinbase} />
                        </div>
                        <ul>
                            <li><a href="#">Prices</a></li>
                            <li className="products">
                                <a href="#" >Products <span><img src={state ? downArrowBlack : downArrow} style={{ width: "8.7px", height: "4.01px" }} /></span></a>
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
                                <a className="company-link" href="#">Company <span><img src={state ? downArrowBlack : downArrow}
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
                        <button>Get started</button>
                    </div>
                </nav>

                <div className="dropdown-center-text">
                    <h1>Buy and sell cryptocurrency</h1>
                    <p>Coinbase is the easiest place to buy, sell, and manage your cryptocurrency portfolio.</p>
                </div>
                <div className="dropdown-input">
                    <input type="text" placeholder="Email address" />
                    <button>Get Started</button>
                </div>
            </div>

            <table className="crypto-price">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Chart</th>
                        <th>Trade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="number">1</td>
                        <td className="coin-img">
                            <div>
                                <img src={bitcoin} alt="bitcoin" />
                            </div>
                            <p>Bitcoin </p><span>BTC</span>
                        </td>
                        <td>NGN 3.648,823.78</td>
                        <td>-0.75%</td>
                        <td>
                            <div>
                                <img />
                            </div>
                        </td>
                        <td><button>Buy</button></td>
                    </tr>
                    <tr>
                        <td className="number">2</td>
                        <td className="coin-img">
                            <div>
                                <img src={ethereum} alt="ethereum" />
                            </div>
                            <p>Ethereum</p><span>ETH</span>
                        </td>
                        <td>NGN 89,567.86</td>
                        <td>-0.17%</td>
                        <td>
                            <div>
                                <img />
                            </div>
                        </td>
                        <td><button>Buy</button></td>
                    </tr>
                    <tr>
                        <td className="number">3</td>
                        <td className="coin-img">
                            <div>
                                <img src={bitcoinCash} alt="btc-cash" />
                            </div>
                            <p>Bitcoin Cash</p><span>BCH</span>
                        </td>
                        <td>NGN 92,816.56</td>
                        <td>+1.65%</td>
                        <td>
                            <div>
                                <img />
                            </div>
                        </td>
                        <td><button>Buy</button></td>
                    </tr>
                    <tr>
                        <td className="number">4</td>
                        <td className="coin-img">
                            <div>
                                <img src={litecoin} alt="litecoin" />
                            </div>
                            <p>Litecoin</p><span>LTC</span>
                        </td>
                        <td>NGN 17,248.54</td>
                        <td>+1.65%</td>
                        <td>
                            <div>
                                <img />
                            </div>
                        </td>
                        <td><button>Buy</button></td>
                    </tr>
                </tbody>
            </table>

            <div className="earn-with-crypto">
                <div className="left-side">
                    <h1>Earn up to $152 worth of crypto</h1>
                    <p>Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</p>
                    <button>Start earning</button>
                </div>
                <div className="right-side">
                    <div className="row">
                        <div className="left">
                            <div>
                                <img src={orchid} alt="orchid" />
                            </div>
                            <h1>Orchid</h1>
                            <p>OXT</p>
                        </div>
                        <p className="right-text">Earn $46 OXT</p>
                    </div>
                    <div className="row">
                        <div className="left">
                            <div>
                                <img src={tezos} alt="tezos" />
                            </div>
                            <h1>Tezos</h1>
                            <p>XTZ</p>
                        </div>
                        <p className="right-text">Earn $6 XTZ</p>
                    </div>
                    <div className="row">
                        <div className="left">
                            <div>
                                <img src={eos} alt="eos" />
                            </div>
                            <h1>EOS</h1>
                            <p>EOS</p>
                        </div>
                        <p className="right-text">Earn $50 EOS</p>
                    </div>
                    <div className="row">
                        <div className="left">
                            <div>
                                <img src={stellar} alt="stellar" />
                            </div>
                            <h1>Stellar Lumens</h1>
                            <p>XLM</p>
                        </div>
                        <p className="right-text">Earn $50 XLM</p>
                    </div>
                    <p className="view-more">View more <span><img src={rightArrow} alt="right-arrow" /></span></p>
                </div>
            </div>
            <div className="create-crypto">
                <h1>Create your cryptocurrency portfolio today</h1>
                <p>Coinbase has a variety of features that make it the best place to start trading</p>
            </div>
            <div className="create-crypto-wrapper">
                <div>
                    <div className="create-crypto-row">
                        <div className="icon-wrapper1">
                            <div>
                                <img src={manage} alt="manage" />
                            </div>
                        </div>
                        <div>
                            <h1>Manage your portfolio</h1>
                            <p>Buy and sell popular digital currencies, keep track of them in the one place.</p>
                        </div>
                    </div>
                    <div className="create-crypto-row">
                        <div className="icon-wrapper2">
                            <div>
                                <img src={recurring} alt="recurring" />
                            </div>
                        </div>
                        <div>
                            <h1>Recurring buys</h1>
                            <p>Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.</p>
                        </div>
                    </div>
                    <div className="create-crypto-row">
                        <div className="icon-wrapper3">
                            <div>
                                <img src={vault} alt="vault" />
                            </div>
                        </div>
                        <div>
                            <h1>Vault protection</h1>
                            <p>For added security, store your funds in a vault with time delayed withdrawals.</p>
                        </div>
                    </div>
                    <div className="create-crypto-row">
                        <div className="icon-wrapper4">
                            <div>
                                <img src={mobile} alt="mobile" />
                            </div>
                        </div>
                        <div>
                            <h1>Mobile apps</h1>
                            <p>Stay on top of the markets with the Coinbase app for Android or iOS.</p>
                        </div>
                    </div>
                </div>

                <div style={{ width: "670px", height: "500px" }}>
                    <img style={{ width: "100%", height: "100%" }}
                        src="https://assets.coinbase.com/assets/coinbase-app.3b0bfd4cb6b7a7614c1e18472187f6b9.webp" />
                </div>
            </div>
            <div className="most-trusted">
                <h1>The most trusted cryptocurrency platform</h1>
                <p>Here are a few reasons why you should choose Coinbase</p>
            </div>
            <div className="most-trusted-wrapper">
                <div className="one">
                    <div>
                        <img src={secure} alt="secure" />
                    </div>
                    <h1>Secure storage</h1>
                    <p>We store the vast majority of the digital assets in secure offline storage.</p>
                    <a href="#">Learn more <span><img src={rightArrow} alt="right-arrow" /></span></a>
                </div>
                <div className="two">
                    <div>
                        <img src={Protected} alt="protected" />
                    </div>
                    <h1>Protected by insurance</h1>
                    <p>Cryptocurrency stored on our servers is covered by our insurance policy.</p>
                    <a href="#">Learn more <span><img src={rightArrow} alt="right-arrow" /></span></a>
                </div>
                <div className="three">
                    <div>
                        <img src={industry} alt="industry" />
                    </div>
                    <h1>Industry best practices</h1>
                    <p>Coinbase supports a variety of the most popular digital currencies.</p>
                    <a href="#">Learn more <span><img src={rightArrow} alt="right-arrow" /></span></a>
                </div>
            </div>
            <div className="currency-exchange">
                <div className="one">
                    <h1>$150B+</h1>
                    <p>Cryptocurrency exchanged</p>
                </div>
                <div className="one">
                    <h1>102</h1>
                    <p>Countries supported</p>
                </div>
                <div className="one">
                    <h1>30M+</h1>
                    <p>Customers served</p>
                </div>
            </div>
            <div className="most-trusted">
                <h1>Get started in a few minutes</h1>
                <p>Coinbase supports a variety of the most popular digital currencies.</p>
            </div>

            <div className="get-started-wrapper">
                <div className="one">
                    <div>
                        <img src={createAcct} alt="create-account" />
                    </div>
                    <h1>Create an account</h1>
                </div>
                <div className="dash">
                    <img src={dash} alt="dash" />
                </div>
                <div className="two">
                    <div>
                        <img src={linkBank} alt="link-bank" />
                    </div>
                    <h1>Link your bank account</h1>
                </div>
                <div className="dash">
                    <img src={dash} alt="dash" />
                </div>
                <div className="three">
                    <div>
                        <img src={startBuying} alt="start-buying" />
                    </div>
                    <h1>Start buying & selling</h1>
                </div>
            </div>
            <div className="earn-upsell">
                <div className="earn">
                    <h1>Earn up to $152 worth of crypto</h1>
                    <p>Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</p>
                    <button>Start earning</button>
                </div>
                <div>
                    <div className="astro">
                        <img src="https://assets.coinbase.com/assets/earn-upsell-desktop.26c724f6fb92d66b8ed3715e08e5047f.webp" alt="earn-upsell" />
                    </div>
                </div>
            </div>
            <footer>
                <div className="logo">
                    <div>
                        <img src={coinbaseBlue} />
                    </div>
                    <p>&#169; 2020 Coinbase</p>
                </div>
                <div className="two">
                    <p>Products</p>
                    <a>Coinbase</a>
                    <a href="#">Comerce</a>
                    <a href="#">Custody</a>
                    <a href="#">Earn</a>
                    <a href="#">Pro</a>
                    <a href="#">USD Coin</a>
                    <a href="#">Wallet</a>
                    <a href="#">Ventures</a>
                </div>
                <div className="three">
                    <p>Learn</p>
                    <a>What is Bitcoin?</a>
                    <a href="#">Buy Bitcoin</a>
                    <a href="#">Buy Bitcoin Cash</a>
                    <a href="#">Buy Ethereum</a>
                    <a href="#">Buy Litecoin</a>
                    <a href="#">Buy XRP</a>
                    <a href="#">Supported countries</a>
                    <a href="#">Status</a>
                    <a href="#">Taxes</a>
                </div>
                <div className="four">
                    <p>Company</p>
                    <a>About</a>
                    <a href="#">Affiliates</a>
                    <a href="#">Careers</a>
                    <a href="#">Partners</a>
                    <a href="#">Press</a>
                    <a href="#">Buy XRP</a>
                    <a href="#">Legal & Privacy</a>
                    <a href="#">Support</a>
                </div>
                <div className="five">
                    <p>Social</p>
                    <a>Blog</a>
                    <a href="#">Twitter</a>
                    <a href="#">Facebook</a>
                </div>
            </footer>
        </>
    )
}

export default LandingPage
