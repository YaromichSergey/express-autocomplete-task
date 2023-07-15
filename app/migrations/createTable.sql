CREATE TABLE IF NOT EXISTS `cities` (
                        `id` mediumint unsigned NOT NULL AUTO_INCREMENT,
                        `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
                        `state_id` mediumint unsigned NOT NULL,
                        `state_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
                        `country_id` mediumint unsigned NOT NULL,
                        `country_code` char(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
                        `latitude` decimal(10,8) NOT NULL,
                        `longitude` decimal(11,8) NOT NULL,
                        `createdAt` timestamp NOT NULL DEFAULT '2014-01-01 06:31:01',
                        `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                        `flag` mediumint NOT NULL DEFAULT 1,
                        `wikiDataId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Rapid API GeoDB Cities',
                        PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=153529 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=COMPACT;
