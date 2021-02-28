<?php declare(strict_types=1);

namespace RuneLaenen\AdvancedBanners\Custom\Banner\Aggregate\AdvancedBannerTranslation;

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

/**
 * @method void                         add(AdvancedBannerTranslationEntity $entity)
 * @method void                         set(string $key, AdvancedBannerTranslationEntity $entity)
 * @method AdvancedBannerTranslationEntity[]    getIterator()
 * @method AdvancedBannerTranslationEntity[]    getElements()
 * @method AdvancedBannerTranslationEntity|null get(string $key)
 * @method AdvancedBannerTranslationEntity|null first()
 * @method AdvancedBannerTranslationEntity|null last()
 */
class AdvancedBannerTranslationCollection extends EntityCollection
{
    public function filterByLanguageId(string $id): self
    {
        return $this->filter(function (AdvancedBannerTranslationEntity $customTranslationEntity) use ($id) {
            return $customTranslationEntity->getLanguageId() === $id;
        });
    }

    protected function getExpectedClass(): string
    {
        return AdvancedBannerTranslationEntity::class;
    }
}
