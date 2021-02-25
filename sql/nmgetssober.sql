DROP TABLE IF EXISTS activityFavorite;
DROP TABLE IF EXISTS treatmentFavorite;
DROP TABLE IF EXISTS activityFilter;
DROP TABLE IF EXISTS serviceProvided;
DROP TABLE IF EXISTS activityType;
DROP TABLE IF EXISTS facilityCodeCategory;
DROP TABLE IF EXISTS activity;
DROP TABLE IF EXISTS treatmentCenter;
DROP TABLE IF EXISTS profile;

CREATE TABLE profile (
    profileId BINARY(16) NOT NULL,
    profileAuthenticationKey CHAR(32),
    profileEmail VARCHAR(128) NOT NULL,
    profilePassword CHAR(97) NOT NULL,
    profileUsername VARCHAR(32) NOT NULL,
    INDEX(profileId),
    UNIQUE(profileEmail),
    UNIQUE(profileUsername),
    PRIMARY KEY(profileId)
);

CREATE TABLE treatmentCenter (
    treatmentCenterId BINARY(16) NOT NULL,
    treatmentCenterCity VARCHAR(32)NOT NULL,
    treatmentCenterName VARCHAR (255) NOT NULL,
    treatmentCenterPhone VARCHAR(32),
    treatmentCenterStreet1 VARCHAR(255) NOT NULL,
    treatmentCenterStreet2 VARCHAR(255),
    treatmentCenterWebsite VARCHAR(255),
    treatmentCenterZipCode VARCHAR(16) NOT NULL,
    INDEX(treatmentCenterId),
    PRIMARY KEY(treatmentCenterId)
);

CREATE TABLE activity (
    activityId BINARY(16) NOT NULL,
    activityCity VARCHAR(255) NOT NULL,
    activityDescription BLOB NOT NULL,
    activityGroupName VARCHAR(255) NOT NULL,
    activityStreet1 VARCHAR(255) NOT NULL,
    activityStreet2 VARCHAR(255),
    activityTime VARCHAR(255),
    activityWebsite VARCHAR(255),
    activityZipCode VARCHAR(16) NOT NULL,
    INDEX(activityId),
    PRIMARY KEY(activityId)
);

CREATE TABLE facilityCodeCategory (
    facilityCodeCategoryId BINARY(16) NOT NULL,
    facilityCodeCategoryAcronym VARCHAR(6) NOT NULL,
    facilityCodeCategoryGroupName VARCHAR(255) NOT NULL,
    facilityCodeCategoryName VARCHAR(255) NOT NULL,
    PRIMARY KEY(facilityCodeCategoryId)
);

CREATE TABLE activityType (
    activityTypeId BINARY(16) NOT NULL,
    activityTypeName VARCHAR(255) NOT NULL,
    PRIMARY KEY(activityTypeId)
);

CREATE TABLE serviceProvided (
    serviceProvidedFacilityCodeCategoryId BINARY(16) NOT NULL,
    serviceProvidedTreatmentCenterId BINARY(16) NOT NULL,
    PRIMARY KEY(serviceProvidedFacilityCodeCategoryId, serviceProvidedTreatmentCenterId),
    FOREIGN KEY(serviceProvidedFacilityCodeCategoryId) REFERENCES facilityCodeCategory(facilityCodeCategoryId),
    FOREIGN KEY(serviceProvidedTreatmentCenterId) REFERENCES treatmentCenter(treatmentCenterId)
);

CREATE TABLE activityFilter (
    activityFilterActivityId BINARY(16) NOT NULL,
    activityFilterActivityTypeId BINARY(16) NOT NULL,
    PRIMARY KEY(activityFilterActivityId, activityFilterActivityTypeId),
    FOREIGN KEY(activityFilterActivityId) REFERENCES activity(activityId),
    FOREIGN KEY(activityFilterActivityTypeId) REFERENCES activityType(activityTypeId)
);

CREATE TABLE treatmentFavorite (
    treatmentFavoriteTreatmentCenterId BINARY(16) NOT NULL,
    treatmentFavoriteProfileId BINARY(16) NOT NULL,
    PRIMARY KEY(treatmentFavoriteTreatmentCenterId, treatmentFavoriteProfileId),
    FOREIGN KEY(treatmentFavoriteTreatmentCenterId) REFERENCES treatmentCenter(treatmentCenterId),
    FOREIGN KEY(treatmentFavoriteProfileId) REFERENCES profile(profileId)
);

CREATE TABLE activityFavorite (
    activityFavoriteActivityId BINARY(16) NOT NULL,
    activityFavoriteProfileId BINARY(16) NOT NULL,
    PRIMARY KEY(activityFavoriteActivityId, activityFavoriteProfileId),
    FOREIGN KEY(activityFavoriteActivityId) REFERENCES activity(activityId),
    FOREIGN KEY(activityFavoriteProfileId) REFERENCES profile(profileId)
);