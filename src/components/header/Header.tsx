import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


export const LOGO = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf5uv7QTp8TwmP5eDDUk8p3gJAO-Hjswj5fA&s'

export type HeaderProps = {
    isAuth: boolean
    login: string | null
    logout:()=>void

}
const Header = (props: HeaderProps) => {
    return (
        <header className={s.Header}>
            <img src={LOGO} alt="какая-то картинка"/>
            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? <NavLink to={'/login'}>
                            <div>{props.login} -
                                <button
                                    onClick={props.logout}
                                >выход</button></div>
                        </NavLink>
                        : <NavLink to={'/login'}>Auth</NavLink>
                }

            </div>
        </header>
    );
};

export default Header;


