import React from 'react'

const MenuItem = ({item}) => {

    return <div className={"menu-link " + `menu-${item}`}>
      {item}
    </div>;

}

export default MenuItem
