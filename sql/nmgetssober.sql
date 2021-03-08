DROP TABLE IF EXISTS activityFavorite;
DROP TABLE IF EXISTS treatmentFavorite;
DROP TABLE IF EXISTS activityFilter;
DROP TABLE IF EXISTS serviceProvided;
DROP TABLE IF EXISTS activityType;
DROP TABLE IF EXISTS facilityCategory;
DROP TABLE IF EXISTS activity;
DROP TABLE IF EXISTS treatmentCenter;
DROP TABLE IF EXISTS profile;

CREATE TABLE profile
(
    profileId                BINARY(16)   NOT NULL,
    profileAuthenticationKey CHAR(32),
    profileEmail             VARCHAR(128) NOT NULL,
    profilePassword          CHAR(97)     NOT NULL,
    profileUsername          VARCHAR(32)  NOT NULL,
    UNIQUE (profileEmail),
    UNIQUE (profileUsername),
    PRIMARY KEY (profileId)
);

CREATE TABLE treatmentCenter (
    treatmentCenterId BINARY(16) NOT NULL,
    treatmentCenterCity VARCHAR(32)NOT NULL,
    treatmentCenterLat FLOAT,
    treatmentCenterLong FLOAT,
    treatmentCenterName VARCHAR (255) NOT NULL,
    treatmentCenterPhone VARCHAR(32),
    treatmentCenterStreet1 VARCHAR(255) NOT NULL,
    treatmentCenterStreet2 VARCHAR(255),
    treatmentCenterWebsite VARCHAR(255),
    treatmentCenterZipCode VARCHAR(16)  NOT NULL,
    PRIMARY KEY (treatmentCenterId)
);

CREATE TABLE activity (
    activityId BINARY(16) NOT NULL,
    activityCity VARCHAR(255) NOT NULL,
    activityDescription BLOB NOT NULL,
    activityGroupName VARCHAR(255) NOT NULL,
    activityLat FLOAT,
    activityLong FLOAT,
    activityStreet1 VARCHAR(255) NOT NULL,
    activityStreet2 VARCHAR(255),
    activityTime VARCHAR(255),
    activityWebsite VARCHAR(255),
    activityZipCode VARCHAR(16) NOT NULL,
    PRIMARY KEY(activityId)
);

CREATE TABLE facilityCategory (
    facilityCategoryId BINARY(16) NOT NULL,
    facilityCategoryName VARCHAR(40) NOT NULL,
    facilityCategoryGroupName VARCHAR(40),
    #will manually come back and set group name using webstorm database integration
    PRIMARY KEY(facilityCategoryId)
);

CREATE TABLE activityType
(
    activityTypeId   BINARY(16)   NOT NULL,
    activityTypeName VARCHAR(255) NOT NULL,
    PRIMARY KEY (activityTypeId)
);

CREATE TABLE serviceProvided (
    serviceProvidedFacilityCategoryId BINARY(16) NOT NULL,
    serviceProvidedTreatmentCenterId BINARY(16) NOT NULL,
    PRIMARY KEY(serviceProvidedFacilityCategoryId, serviceProvidedTreatmentCenterId),
    INDEX(serviceProvidedFacilityCategoryId),
    INDEX(serviceProvidedTreatmentCenterId),
    FOREIGN KEY(serviceProvidedFacilityCategoryId) REFERENCES facilityCategory(facilityCategoryId),
    FOREIGN KEY(serviceProvidedTreatmentCenterId) REFERENCES treatmentCenter(treatmentCenterId)
);

CREATE TABLE activityFilter
(
    activityFilterActivityId     BINARY(16) NOT NULL,
    activityFilterActivityTypeId BINARY(16) NOT NULL,
    PRIMARY KEY (activityFilterActivityId, activityFilterActivityTypeId),
    INDEX(activityFilterActivityId) ,
    INDEX(activityFilterActivityTypeId),
    FOREIGN KEY(activityFilterActivityId) REFERENCES activity(activityId),
    FOREIGN KEY(activityFilterActivityTypeId) REFERENCES activityType(activityTypeId)
);

CREATE TABLE treatmentFavorite
(
    treatmentFavoriteTreatmentCenterId BINARY(16) NOT NULL,
    treatmentFavoriteProfileId         BINARY(16) NOT NULL,
    PRIMARY KEY (treatmentFavoriteTreatmentCenterId, treatmentFavoriteProfileId),
    INDEX (treatmentFavoriteTreatmentCenterId),
    INDEX (treatmentFavoriteProfileId),
    FOREIGN KEY (treatmentFavoriteTreatmentCenterId) REFERENCES treatmentCenter (treatmentCenterId),
    FOREIGN KEY (treatmentFavoriteProfileId) REFERENCES profile (profileId)
);

CREATE TABLE activityFavorite
(
    activityFavoriteActivityId BINARY(16) NOT NULL,
    activityFavoriteProfileId  BINARY(16) NOT NULL,
    PRIMARY KEY (activityFavoriteActivityId, activityFavoriteProfileId),
    INDEX(activityFavoriteActivityId),
    INDEX(activityFavoriteProfileId),
    FOREIGN KEY(activityFavoriteActivityId) REFERENCES activity(activityId),
    FOREIGN KEY(activityFavoriteProfileId) REFERENCES profile(profileId)
);

INSERT INTO activityType (activityTypeId, activityTypeName)
VALUES (UUID_TO_BIN('7d33b74b-ebc1-4db4-8088-1e279630cbd5'), 'Fitness');

INSERT INTO activityType (activityTypeId, activityTypeName)
VALUES (UUID_TO_BIN('e07f978c-bbf0-44e5-b38c-c562d597fc83'), 'Sobriety Related');

INSERT INTO activityType (activityTypeId, activityTypeName)
VALUES (UUID_TO_BIN('3eb2bd46-ef8f-44c2-b2b2-87e300cd6bc5'), 'Women Focused');

SELECT * FROM activityType;
