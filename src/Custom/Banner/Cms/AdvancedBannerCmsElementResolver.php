<?php

declare(strict_types=1);

namespace RuneLaenen\AdvancedBanners\Custom\Banner\Cms;

use RuneLaenen\AdvancedBanners\Custom\Banner\AdvancedBannerDefinition;
use Shopware\Core\Content\Cms\Aggregate\CmsSlot\CmsSlotEntity;
use Shopware\Core\Content\Cms\DataResolver\CriteriaCollection;
use Shopware\Core\Content\Cms\DataResolver\Element\AbstractCmsElementResolver;
use Shopware\Core\Content\Cms\DataResolver\Element\ElementDataCollection;
use Shopware\Core\Content\Cms\DataResolver\ResolverContext\ResolverContext;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;

class AdvancedBannerCmsElementResolver extends AbstractCmsElementResolver
{
    public function getType(): string
    {
        return 'rl-advanced-banner';
    }

    public function collect(CmsSlotEntity $slot, ResolverContext $resolverContext): ?CriteriaCollection
    {
        $config = $slot->getFieldConfig();
        $bannerConfig = $config->get('advancedBanner');

        if (!$bannerConfig || $bannerConfig->isMapped() || $bannerConfig->getValue() === null) {
            return null;
        }

        $criteria = new Criteria([$bannerConfig->getValue()]);

        $criteriaCollection = new CriteriaCollection();
        $criteriaCollection->add('rl_advanced_banner_' . $slot->getUniqueIdentifier(), AdvancedBannerDefinition::class, $criteria);

        return $criteriaCollection;
    }

    public function enrich(CmsSlotEntity $slot, ResolverContext $resolverContext, ElementDataCollection $result): void
    {
        $config = $slot->getFieldConfig();
        $bannerConfig = $config->get('advancedBanner');

        if (!$bannerConfig || $bannerConfig->getValue() === null) {
            return;
        }

        $banner = $result->get('rl_advanced_banner_' . $slot->getUniqueIdentifier())->first();
        $slot->setData($banner);
    }
}
