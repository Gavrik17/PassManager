import React from "react";
import s from "./Row.module.css"
import { NavLink } from "react-router-dom";

import copy from "shared/assets/icons/copy.png";
import goto from "shared/assets/icons/goto.png";
import { Checkbox } from "shared/ui";

const Item = (props) => {

    return (
        <tr className={s.item}>
            <td className={s.select}><Checkbox /></td>
            <td className={s.info}>
                <div className={s.picture} style={{backgroundColor: `${props.account.color}`}}>
                    {props.account.name.slice(0, 2)}
                </div> 
                <div className={s.credential}>
                    <div className={s.name}>
                        {props.account.name}
                    </div>
                    <div className={s.comment}>
                        {props.account.description}
                    </div>
                    
                </div>
            </td>
            <td className={s.login}>
                <NavLink to='' className={s.ceil}>
                    <div>{props.account.login}</div>
                    <img src={copy} alt="" />
                </NavLink>
            </td>
            <td className={s.password}>
                <NavLink to='' className={s.ceil}>
                    <div>easypassword</div>
                    <img src={copy} alt="" />
                </NavLink>
            </td>
            <td className={s.last_used}>{props.account.lastused}</td>
            <td className={s.weblink}>
                <NavLink to={"https://" + props.account.name} className={s.link} target="_blank">
                    <div>Перейти на сайт</div>
                    <img src={goto} alt="" />
                </NavLink>
            </td>
            <td> 
                <div className={s.dot}></div>
            </td>
        </tr>
    )
}


export default Item