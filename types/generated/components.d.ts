import type { Struct, Schema } from '@strapi/strapi';

export interface SubmenuSubMenu extends Struct.ComponentSchema {
  collectionName: 'components_submenu_sub_menus';
  info: {
    displayName: 'Sub Menu';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface SubmenuMedsosLinks extends Struct.ComponentSchema {
  collectionName: 'components_submenu_medsos_links';
  info: {
    displayName: 'medsos-links';
  };
  attributes: {
    key: Schema.Attribute.String;
    text: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface FooterCompFooterRow extends Struct.ComponentSchema {
  collectionName: 'components_footer_comp_footer_rows';
  info: {
    displayName: 'Footer Row';
  };
  attributes: {
    title: Schema.Attribute.String;
    menulink: Schema.Attribute.Component<'submenu.sub-menu', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'submenu.sub-menu': SubmenuSubMenu;
      'submenu.medsos-links': SubmenuMedsosLinks;
      'footer-comp.footer-row': FooterCompFooterRow;
    }
  }
}
