> # Digital Publishing for Shopware 6
> 
> We have completely rebuilt the plugin from the ground up, adding a plethora of new features, enhancements, and improvements. This new and improved version is now available in the Shopware Store, and we strongly recommend you to check it out.
> 
> Unfortunately, due to resource constraints and the extensive changes made to the new version, we will no longer be updating this open source project. It will remain available for those who may still find value in it, but we won't be actively maintaining it.
>
> **[Click here to find the new plugin in the Shopware Store](https://store.shopware.com/en/laene89843170115m/digital-publishing-advanced-banners.html)**
> 
> Some enhancements of the new extensions, available in the Shopware Store only:
> - Improved WYSIWYG editor
> - Responsive Results
> - Translatable
> - SEO optimized
> - Live preview in Admin
> 
> [![Shopware Store](https://store.shopware.com/media/image/56/2e/ea/file62d5bd7dc9a76_600x600.jpg)](https://store.shopware.com/en/laene89843170115m/digital-publishing-advanced-banners.html)



# Advanced Banners (Digital Publishing) for Shopware 6

# DEPRECATED

[![Latest Stable Version](https://img.shields.io/github/v/release/runelaenen/shopware6-advanced-banners?color=lightblue&label=stable&logo=github)](//packagist.org/packages/runelaenen/shopware6-advanced-banners)
[![Download plugin zip](https://img.shields.io/github/v/release/runelaenen/shopware6-advanced-banners.svg?label=.zip%20download&logo=github)](https://github.com/runelaenen/shopware6-advanced-banners/releases/latest)
[![Total Downloads](https://img.shields.io/packagist/dt/runelaenen/shopware6-advanced-banners?label=packagist%20downloads&logo=composer)](//packagist.org/packages/runelaenen/shopware6-advanced-banners)
[![GitHub Issues](https://img.shields.io/github/issues/runelaenen/shopware6-advanced-banners?logo=github)](https://github.com/runelaenen/shopware6-advanced-banners/issues)
[![GitHub Stars](https://img.shields.io/github/stars/runelaenen/shopware6-advanced-banners?logo=github)](https://github.com/runelaenen/shopware6-advanced-banners/stargazers)
[![License](https://poser.pugx.org/runelaenen/shopware6-advanced-banners/license)](//packagist.org/packages/runelaenen/shopware6-advanced-banners)

Create layered, responsive banners & slideshows like you could do with the _Shopware 5 Digital Publishing_ plugin.
The plugin is compatible with PHP version 7.4 and higher.

Are you a happy user of the Advanced Banners plugin? Please consider giving our project a ⭐️ star on Github, or [buying the maintainer a cup of ☕️ coffee](https://www.buymeacoffee.com/runelaenen).

## ✔️ Features
 - Banner editor
 - Layered banners
 - Different layers
   - WYSIWYG (text)
   - Buttons
   - Solid (color)
   - Image
 - Fully localized
   - English
   - German
   - Dutch
 - Translatable content
 - ACL
 - Easily extendible
 - CMS Elements
    - Advanced Banner
    - Advanced Banner Slider
    
## 🚀 How to install
### Composer install (recommended)
```
composer require runelaenen/shopware6-advanced-banners
bin/console plugin:refresh
bin/console plugin:install --activate RuneLaenenAdvancedBanners
```
#### 🔨 Building
The composer install does not come with compiled javascript. You will have to build/compile your administration and storefront javascript. 

In case you are using the production template, the command below should do the trick.
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


## 👷‍ Contribution
Please help with code, love, shares, feedback and bug reporting.

## ⚖️ Licence
This plugin is licensed under the MIT licence.

