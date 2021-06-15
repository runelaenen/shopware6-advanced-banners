<?php declare(strict_types=1);

namespace RuneLaenen\AdvancedBanners\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Defaults;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1614513651AddTranslations extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1614513651;
    }

    public function update(Connection $connection): void
    {
        $connection->executeStatement(<<<SQL
CREATE TABLE `rl_ab_banner_translation` (
    `data` JSON NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NULL,
    `rl_ab_banner_id` BINARY(16) NOT NULL,
    `language_id` BINARY(16) NOT NULL,
    PRIMARY KEY (`rl_ab_banner_id`,`language_id`),
    CONSTRAINT `json.rl_ab_banner_translation.data` CHECK (JSON_VALID(`data`)),
    KEY `fk.rl_ab_banner_translation.rl_ab_banner_id` (`rl_ab_banner_id`),
    KEY `fk.rl_ab_banner_translation.language_id` (`language_id`),
    CONSTRAINT `fk.rl_ab_banner_translation.rl_ab_banner_id` FOREIGN KEY (`rl_ab_banner_id`) REFERENCES `rl_ab_banner` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk.rl_ab_banner_translation.language_id` FOREIGN KEY (`language_id`) REFERENCES `language` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO rl_ab_banner_translation (data, created_at, updated_at, rl_ab_banner_id, language_id)
SELECT
    data,
    created_at,
    updated_at,
    id as rl_ab_banner_id,
    UNHEX('2fbb5fe2e29a4d70aa5854ce7ce3e20b') as language_id
FROM rl_ab_banner;

ALTER TABLE rl_ab_banner DROP COLUMN data;
SQL);
    }

    public function updateDestructive(Connection $connection): void
    {
        // implement update destructive
    }
}
