import React from 'react';
import {
  Row,
  Column,
  Icon,
  Menu,
  MenuItem,
  MenuText,
  Alignments
} from 'react-foundation';

export const MenuDocs = () => (
  <section className="menu-docs">
    <Row>
      <Column large={12}>
        <h2>Menu</h2>
        <div>
          <h3>Basic Menu</h3>
          <Menu>
            <MenuItem><a>One</a></MenuItem>
            <MenuItem><a>Two</a></MenuItem>
            <MenuItem><a>Three</a></MenuItem>
            <MenuItem><a>Four</a></MenuItem>
          </Menu>
        </div>
        <div>
          <h3>Item Alignment</h3>
          <Menu alignment={Alignments.RIGHT}>
            <MenuItem><a>One</a></MenuItem>
            <MenuItem><a>Two</a></MenuItem>
            <MenuItem><a>Three</a></MenuItem>
            <MenuItem><a>Four</a></MenuItem>
          </Menu>
          <Menu alignment={Alignments.CENTER}>
            <MenuItem><a>One</a></MenuItem>
            <MenuItem><a>Two</a></MenuItem>
            <MenuItem><a>Three</a></MenuItem>
            <MenuItem><a>Four</a></MenuItem>
          </Menu>
          <Menu isExpanded>
            <MenuItem><a>One</a></MenuItem>
            <MenuItem><a>Two</a></MenuItem>
          </Menu>
          <Menu isExpanded>
            <MenuItem><a>One</a></MenuItem>
            <MenuItem><a>Two</a></MenuItem>
            <MenuItem><a>Three</a></MenuItem>
          </Menu>
          <Menu isExpanded>
            <MenuItem><a>One</a></MenuItem>
            <MenuItem><a>Two</a></MenuItem>
            <MenuItem><a>Three</a></MenuItem>
            <MenuItem><a>Four</a></MenuItem>
          </Menu>
        </div>
        <div>
          <h3>Vertical Menu</h3>
          <Menu isVertical>
            <MenuItem><a>One</a></MenuItem>
            <MenuItem><a>Two</a></MenuItem>
            <MenuItem><a>Three</a></MenuItem>
            <MenuItem><a>Four</a></MenuItem>
          </Menu>
        </div>
        <div>
          <h3>Simple Style</h3>
          <Menu isSimple>
            <MenuItem><a>One</a></MenuItem>
            <MenuItem><a>Two</a></MenuItem>
            <MenuItem><a>Three</a></MenuItem>
            <MenuItem><a>Four</a></MenuItem>
          </Menu>
        </div>
        <div>
          <h3>Nested Style</h3>
          <Menu isVertical>
            <MenuItem>
              <a>One</a>
              <Menu isVertical isNested>
                <MenuItem><a>One</a></MenuItem>
                <MenuItem><a>Two</a></MenuItem>
                <MenuItem><a>Three</a></MenuItem>
                <MenuItem><a>Four</a></MenuItem>
              </Menu>
            </MenuItem>
            <MenuItem><a>Two</a></MenuItem>
            <MenuItem><a>Three</a></MenuItem>
            <MenuItem><a>Four</a></MenuItem>
          </Menu>
        </div>
        <div>
          <h3>Active State</h3>
          <Menu>
            <MenuItem isActive><a>Home</a></MenuItem>
            <MenuItem><a>About</a></MenuItem>
            <MenuItem><a>Nachos</a></MenuItem>
          </Menu>
        </div>
        <div>
          <h3>Text</h3>
          <Menu>
            <MenuText>Site Title</MenuText>
            <MenuItem><a>One</a></MenuItem>
            <MenuItem><a>Two</a></MenuItem>
            <MenuItem><a>Three</a></MenuItem>
          </Menu>
        </div>
        <div>
          <h3>Icons</h3>
          <Menu>
            <MenuItem><a><Icon name="fi-list"/> <span>One</span></a></MenuItem>
            <MenuItem><a><Icon name="fi-list"/> <span>Two</span></a></MenuItem>
            <MenuItem><a><Icon name="fi-list"/> <span>Three</span></a></MenuItem>
            <MenuItem><a><Icon name="fi-list"/> <span>Four</span></a></MenuItem>
          </Menu>
          <Menu iconsOnTop>
            <MenuItem><a><Icon name="fi-list"/> <span>One</span></a></MenuItem>
            <MenuItem><a><Icon name="fi-list"/> <span>Two</span></a></MenuItem>
            <MenuItem><a><Icon name="fi-list"/> <span>Three</span></a></MenuItem>
            <MenuItem><a><Icon name="fi-list"/> <span>Four</span></a></MenuItem>
          </Menu>
        </div>
      </Column>
    </Row>
  </section>
);

export default MenuDocs;
