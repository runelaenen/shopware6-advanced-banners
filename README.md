# Advanced Banners (Digital Publishing) for Shopware 6

[![Latest Stable Version](https://img.shields.io/github/v/release/runelaenen/shopware6-advanced-banners?color=lightblue&label=stable&logo=github)](//packagist.org/packages/runelaenen/shopware6-advanced-banners)
[![Download plugin zip](https://img.shields.io/github/v/release/runelaenen/shopware6-advanced-banners.svg?label=.zip%20download&logo=github)](https://github.com/runelaenen/shopware6-advanced-banners/releases/latest)
[![Total Downloads](https://img.shields.io/packagist/dt/runelaenen/shopware6-advanced-banners?label=packagist%20downloads&logo=composer)](//packagist.org/packages/runelaenen/shopware6-advanced-banners)
[![GitHub Issues](https://img.shields.io/github/issues/runelaenen/shopware6-advanced-banners?logo=github)](https://github.com/runelaenen/shopware6-advanced-banners/issues)
[![GitHub Stars](https://img.shields.io/github/stars/runelaenen/shopware6-advanced-banners?logo=github)](https://github.com/runelaenen/shopware6-advanced-banners/stargazers)
[![License](https://poser.pugx.org/runelaenen/shopware6-advanced-banners/license)](//packagist.org/packages/runelaenen/shopware6-advanced-banners)

![Advanced Banners (digital publishing) for Shopware 6](https://user-images.githubusercontent.com/3930922/93712896-ea9be300-fb58-11ea-94a5-e14f64b15448.png)

Create layered, responsive banners & slideshows like you could do with _Shopware 5 Digital Publishing_.

## Features
 - Banner editor
 - Layered banners
 - Different layers
   - WYSIWYG (text)
   - Buttons
   - Solid (color)
   - Image
 - Easily extendible
 - 'Advanced Banner' CMS element
 - 'Advanced Banner Slider' CMS element

## How to install
### Composer install (recommended)
```
composer require runelaenen/shopware6-advanced-banners
bin/console plugin:refresh
bin/console plugin:install --activate RuneLaenenAdvancedBanners
```
Builing the javascript & css will still be needed.
```
bin/build.sh
```
#### Plugin update (composer)
```
composer update runelaenen/shopware6-advanced-banners
bin/console plugin:update RuneLaenenAdvancedBanners
```
Builing the javascript & css will still be needed.
```
bin/build.sh
```

### .zip install
1. Download the latest RuneLaenenAdvancedBanners.zip from the [latest release](https://github.com/runelaenen/shopware6-advanced-banners/releases/latest).
2. Upload the zip in the Shopware Administration
3. Install & Activate the plugin

#### Plugin update (zip)
1. Download the latest RuneLaenenAdvancedBanners.zip from the [latest release](https://github.com/runelaenen/shopware6-advanced-banners/releases/latest).
2. Upload the zip in the Shopware Administration
3. Update the plugin
