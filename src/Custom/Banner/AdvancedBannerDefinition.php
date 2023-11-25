<?php

declare(strict_types=1);

namespace RuneLaenen\AdvancedBanners\Custom\Banner;

use RuneLaenen\AdvancedBanners\Custom\Banner\Aggregate\AdvancedBannerTranslation\AdvancedBannerTranslationDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\IdField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\StringField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\TranslatedField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\TranslationsAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;

class AdvancedBannerDefinition extends EntityDefinition
{
    public const ENTITY_NAME = 'rl_ab_banner';

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    public function getCollectionClass(): string
    {
        return AdvancedBannerCollection::class;
    }

    public function getEntityClass(): string
    {
        return AdvancedBanner::class;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new IdField('id', 'id'))->addFlags(new PrimaryKey(), new Required()),
            new StringField('technical_name', 'technicalName'),
            new TranslatedField('data'),
            (new TranslationsAssociationField(AdvancedBannerTranslationDefinition::class, 'rl_ab_banner_id'))->addFlags(new Required()),
        ]);
    }
}
