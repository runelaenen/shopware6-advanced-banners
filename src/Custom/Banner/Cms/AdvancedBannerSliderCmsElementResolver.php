<?php declare(strict_types=1);

namespace RuneLaenen\AdvancedBanners\Custom\Banner\Cms;

use RuneLaenen\AdvancedBanners\Custom\Banner\BannerEntityDefinition;
use Shopware\Core\Content\Cms\Aggregate\CmsSlot\CmsSlotEntity;
use Shopware\Core\Content\Cms\DataResolver\CriteriaCollection;
use Shopware\Core\Content\Cms\DataResolver\Element\AbstractCmsElementResolver;
use Shopware\Core\Content\Cms\DataResolver\Element\ElementDataCollection;
use Shopware\Core\Content\Cms\DataResolver\ResolverContext\EntityResolverContext;
use Shopware\Core\Content\Cms\DataResolver\ResolverContext\ResolverContext;
use Shopware\Core\Content\Cms\SalesChannel\Struct\ProductBoxStruct;
use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Content\Product\SalesChannel\SalesChannelProductEntity;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;

class AdvancedBannerSliderCmsElementResolver extends AbstractCmsElementResolver
{
    public function getType(): string
    {
        return 'rl-advanced-banner-slider';
    }

    public function collect(CmsSlotEntity $slot, ResolverContext $resolverContext): ?CriteriaCollection
    {
        $config = $slot->getFieldConfig();
        $bannerConfig = $config->get('advancedBanners');

        if (!$bannerConfig || $bannerConfig->isMapped() || $bannerConfig->getValue() === null) {
            return null;
        }

        $criteria = new Criteria($bannerConfig->getValue());

        $criteriaCollection = new CriteriaCollection();
        $criteriaCollection->add('rl_advanced_banner_' . $slot->getUniqueIdentifier(), BannerEntityDefinition::class, $criteria);

        return $criteriaCollection;
    }

    public function enrich(CmsSlotEntity $slot, ResolverContext $resolverContext, ElementDataCollection $result): void
    {
        $config = $slot->getFieldConfig();
        $bannerConfig = $config->get('advancedBanners');

        if (!$bannerConfig || $bannerConfig->getValue() === null) {
            return;
        }

        $banners = $result->get('rl_advanced_banner_' . $slot->getUniqueIdentifier());
        $slot->setData($banners);
    }
}
