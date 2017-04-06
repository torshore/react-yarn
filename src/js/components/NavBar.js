import React, {Component} from 'react';
import '../../../styles/App.css';
import { Dropdown, NavItem, Button, Icon } from 'react-materialize';



export default class NavBar extends Component {
  render() {
    return(
      <div>
     <Dropdown

      trigger={
        <Button className='btn right'>Yarn<Icon right>arrow_drop_down</Icon></Button>
        }>
       <NavItem href="/stories" className="grey-text">
         Play
       </NavItem>
       <NavItem href="/new" className="grey-text">
         Build
      </NavItem>
    </Dropdown>
    </div>
    )
  }
}




