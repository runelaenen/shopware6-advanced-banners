<?php declare(strict_types=1);

namespace RuneLaenen\AdvancedBanners\Custom\Banner;

use Shopware\Core\Framework\DataAbstractionLayer\Entity;
use Shopware\Core\Framework\DataAbstractionLayer\EntityIdTrait;

class AdvancedBanner extends Entity
{
    use EntityIdTrait;

    protected string $technicalName;
    protected array $data;

    public function getTechnicalName(): string
    {
        return $this->technicalName;
    }

    public function setTechnicalName(string $technicalName): void
    {
        $this->technicalName = $technicalName;
    }

    public function getData(): array
    {
        return $this->data;
    }

    public function setData(array $data): void
    {
        $this->data = $data;
    }
}
