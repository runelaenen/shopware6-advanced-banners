<?php declare(strict_types=1);

namespace RuneLaenen\AdvancedBanners\Custom\Banner\Aggregate\AdvancedBannerTranslation;

use RuneLaenen\AdvancedBanners\Custom\Banner\AdvancedBanner;
use Shopware\Core\Framework\DataAbstractionLayer\TranslationEntity;

class AdvancedBannerTranslationEntity extends TranslationEntity
{
    /**
     * @var string
     */
    protected $rlAbBannerId;

    /**
     * @var array
     */
    protected $data;
    protected ?AdvancedBanner $rlAbBanner;

    public function getRlAbBannerId(): string
    {
        return $this->rlAbBannerId;
    }

    public function setRlAbBannerId(string $rlAbBannerId): void
    {
        $this->rlAbBannerId = $rlAbBannerId;
    }

    public function getData(): array
    {
        return $this->data;
    }

    public function setData(array $data): void
    {
        $this->data = $data;
    }

    public function getRlAbBanner(): ?AdvancedBanner
    {
        return $this->rlAbBanner;
    }

    public function setRlAbBanner(?AdvancedBanner $rlAbBanner): void
    {
        $this->rlAbBanner = $rlAbBanner;
    }
}
