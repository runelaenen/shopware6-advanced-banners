<?php declare(strict_types=1);

namespace RuneLaenen\AdvancedBanners\Custom\Banner;

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

/**
 * @method void              add(BannerEntity $entity)
 * @method void              set(string $key, BannerEntity $entity)
 * @method BannerEntity[]    getIterator()
 * @method BannerEntity[]    getElements()
 * @method BannerEntity|null get(string $key)
 * @method BannerEntity|null first()
 * @method BannerEntity|null last()
 */
class BannerEntityCollection extends EntityCollection
{
    protected function getExpectedClass(): string
    {
        return BannerEntity::class;
    }
}
