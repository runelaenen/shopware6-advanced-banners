<?php

declare(strict_types=1);

namespace RuneLaenen\AdvancedBanners\Custom\Banner\Aggregate\AdvancedBannerTranslation;

use RuneLaenen\AdvancedBanners\Custom\Banner\AdvancedBannerDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityTranslationDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\JsonField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;

class AdvancedBannerTranslationDefinition extends EntityTranslationDefinition
{
    public function getEntityName(): string
    {
        return 'rl_ab_banner_translation';
    }

    public function getCollectionClass(): string
    {
        return AdvancedBannerTranslationCollection::class;
    }

    public function getEntityClass(): string
    {
        return AdvancedBannerTranslationEntity::class;
    }

    protected function getParentDefinitionClass(): string
    {
        return AdvancedBannerDefinition::class;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new JsonField('data', 'data')),
        ]);
    }
}
