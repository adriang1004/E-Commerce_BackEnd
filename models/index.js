// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  as: 'category',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  as: 'products'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    foreignKey: 'product_id'
  },
  as: 'tags',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    foreignKey: 'tag_id'
  },
  as: 'products',
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
