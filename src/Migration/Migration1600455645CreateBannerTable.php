<?php

declare(strict_types=1);

namespace RuneLaenen\AdvancedBanners\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1600455645CreateBannerTable extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1600455645;
    }

    public function update(Connection $connection): void
    {
        $sql = <<<SQL
CREATE TABLE `rl_ab_banner` (
    `id` BINARY(16) NOT NULL,
    `technical_name` VARCHAR(255) NULL,
    `data` JSON NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `json.rl_ab_banner.data` CHECK (JSON_VALID(`data`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
SQL;

        $connection->executeStatement($sql);
    }

    public function updateDestructive(Connection $connection): void
    {
        // implement update destructive
    }
}
