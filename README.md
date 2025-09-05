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


curl --location 'localhost:1504/v1/admin/exam' \
--header 'Content-Type: application/json' \
--data '{
    "name":"exam 1",
    "totalQuestions":10,
    "totalQuestionsExam":10,
    "minScore":50,
    "startDate":"10-09-2024"

}'


curl --location 'localhost:1504/v1/admin/exam'

curl --location --request PATCH 'localhost:1504/v1/admin/exam' \
--header 'Content-Type: application/json' \
--data '{
    "examId":1,
    "questions":[{
        "description":"q1",
        "isMulti":false,
        "options":["a","b","c","d"],
        "answer":["b"]
    }],
    "status":"draft"

}'
