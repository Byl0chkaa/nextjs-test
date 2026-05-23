import './header.css'
import Link from 'next/link';
import {HeaderSearchBox} from "@/src/components/headerComponent/header/HeaderSearchBox";
import {UserInfo} from "@/src/components/headerComponent/userInfo/UserInfo";

export const Header = () => {
    return (
        <div className="header-content">
            <div className="logo">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M3 12L3 18.9671C3 21.2763 5.53435 22.736 7.59662 21.6145L10.7996 19.8727M3 8L3 5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L14.0026 18.131"
                            stroke="#b4eff3" strokeWidth="1.5" strokeLinecap="round"></path>
                    </g>
                </svg>
                <h1><Link href={'/'}>Nexify</Link></h1>
            </div>
            <div className={'nav-links'}>
                <nav>
                    <ul className="nav-list">
                        <li><Link href="/genres">Genre</Link></li>
                        <li><Link href="/">Country</Link></li>
                        <li><Link href="/">TV</Link></li>
                        <li><Link href="/">Anime</Link></li>
                    </ul>
                </nav>
            </div>
            <HeaderSearchBox/>
            <UserInfo/>
        </div>
    );
};
