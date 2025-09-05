npm i 
npm run start



 use rocked;

CREATE TABLE admin (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;





CREATE TABLE user (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;







CREATE TABLE exam (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `total_questions` INT,
  `total_questions_exam` INT DEFAULT 10,
  `pass_score` INT NOT NULL,
  `start_date` timestamp NOT NULL,
  `questions` VARCHAR(100),
  `status` ENUM ('published','draft') DEFAULT 'draft',
  `created_at` timestamp DEFAULT NOW(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;







CREATE TABLE question (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(50) NOT NULL,
  `is_multi` SMALLINT(1),
  `is_active` SMALLINT(1),
  `options` VARCHAR(500) NOT NULL,
  `answer` VARCHAR(100) NOT NULL,
  `created_at` timestamp DEFAULT NOW(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
