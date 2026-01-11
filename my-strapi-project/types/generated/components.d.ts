import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    content: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subheading: Schema.Attribute.String;
  };
}

export interface FeatureitemFeatureitems extends Struct.ComponentSchema {
  collectionName: 'components_featureitem_featureitems';
  info: {
    displayName: 'Featureitems';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero': BlocksHero;
      'featureitem.featureitems': FeatureitemFeatureitems;
    }
  }
}
