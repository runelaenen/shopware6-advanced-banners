<?php declare(strict_types=1);

namespace RuneLaenen\AdvancedBanners;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepositoryInterface;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsAnyFilter;
use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\ActivateContext;
use Shopware\Core\Framework\Plugin\Context\DeactivateContext;
use Shopware\Core\Framework\Plugin\Context\UninstallContext;

class RuneLaenenAdvancedBanners extends Plugin
{
    public function enrichPrivileges(): array
    {
        return [
            'cms.viewer' => [
                'rl_ab_banner:read',
            ],
        ];
    }

    public function uninstall(UninstallContext $context): void
    {
        parent::uninstall($context);

        if ($context->keepUserData()) {
            return;
        }

        // Drop tables
        /** @var Connection $connection */
        $connection = $this->container->get(Connection::class);
        $connection->executeStatement('SET FOREIGN_KEY_CHECKS=0;');
        $connection->executeStatement('DROP TABLE IF EXISTS `rl_ab_banner`');
        $connection->executeStatement('DROP TABLE IF EXISTS `rl_ab_banner_translation`');

        // Remove CMS blocks & slots
        /** @var EntityRepositoryInterface $cmsBlockRepository */
        $cmsBlockRepository = $this->container->get('cms_block.repository');
        /** @var EntityRepositoryInterface $cmsSlotRepository */
        $cmsSlotRepository = $this->container->get('cms_slot.repository');

        $criteria = new Criteria();
        $criteria->addFilter(new EqualsAnyFilter('type', ['rl-advanced-banner', 'rl-advanced-banner-slider']));

        $cmsSlotRepository->delete(
            array_values(
                $cmsSlotRepository->searchIds(
                    $criteria,
                    $context->getContext()
                )->getData()
            ),
            $context->getContext()
        );

        $cmsBlockRepository->delete(
            array_values(
                $cmsBlockRepository->searchIds(
                    $criteria,
                    $context->getContext()
                )->getData()
            ),
            $context->getContext()
        );

        $connection->executeQuery('SET FOREIGN_KEY_CHECKS=1;');
    }
}
