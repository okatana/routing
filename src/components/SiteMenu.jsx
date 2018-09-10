import React from 'react';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';

const SiteMenu =({items})=>{
    return (
        <Menu>
            {
                items.map((item, index)=>
                <a key={index} className="menu-item" href={item.link}>
                {item.title}

                </a>
                )}
        </Menu>
    )
}

SiteMenu.propTypes = {
    items: PropTypes.array,

}

SiteMenu.defaultProps = {
    items: [{
        link: '/',
        title: 'Главная'
    }],
}
export default SiteMenu
