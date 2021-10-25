<?php

declare(strict_types=1);

namespace RuneLaenen\AdvancedBanners\Custom\Banner;

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

/**
 * @method void                add(AdvancedBanner $entity)
 * @method void                set(string $key, AdvancedBanner $entity)
 * @method AdvancedBanner[]    getIterator()
 * @method AdvancedBanner[]    getElements()
 * @method AdvancedBanner|null get(string $key)
 * @method AdvancedBanner|null first()
 * @method AdvancedBanner|null last()
 */
class AdvancedBannerCollection extends EntityCollection
{
    protected function getExpectedClass(): string
    {
        return AdvancedBanner::class;
    }
}
